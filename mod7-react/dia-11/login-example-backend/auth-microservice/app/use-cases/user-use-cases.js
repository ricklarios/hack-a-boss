import {
  NotFoundError,
  ConflictError,
  UnAuthorizedError,
} from "../errors/errors";
import { signJWT, verifyJWT } from "../libs/libs";
import userRepository from "../repositories/user-repository";
import getRegistrationEmail from "../assets/email-templates/getRegistrationEmail";
import { generateActivationCode } from "../lib/uuid";
import { generateHash, validateHash } from "../lib/encrypt";
import { sendEmail } from "../lib/email";

const { FRONTEND_ORIGIN, FRONTEND_ORIGIN_LOCAL, ENVIRONMENT } = process.env;

const isLocalEnv = ENVIRONMENT === "LOCAL";

async function createUserUseCase(newUser) {
  const activationCode = generateActivationCode();
  const activationOrigin = isLocalEnv ? FRONTEND_ORIGIN_LOCAL : FRONTEND_ORIGIN;
  const activationLink = `${activationOrigin}/activate-user?activationCode=${activationCode}`;
  const registrationEmail = getRegistrationEmail(newUser, activationLink);
  const hashedPassword = await generateHash(newUser.password);

  const userCreated = await userRepository.createUser({
    ...newUser,
    password: hashedPassword,
    activationCode,
    active: false,
  });

  await sendEmail(registrationEmail);

  return cleanUserFields(userCreated);
}

async function activateUserUseCase(activationCode) {
  const user = await userRepository.findUserByActivationCode(activationCode);

  const isUserNotFound = !user;

  if (isUserNotFound) {
    throw new NotFoundError({ source: "user", message: "user not Found" });
  }

  const isUserAlreadyActivated = user.active;

  if (isUserAlreadyActivated) {
    throw new ConflictError({
      source: "user",
      message: "user already activated",
    });
  }

  user.activatedAt = new Date();
  user.active = true;
  const userActivated = await userRepository.updateUser(user);
  return cleanUserFields(userActivated);
}

async function loginUseCase(email, password) {
  const user = await userRepository.findUserByEmail(email);

  const isUserNotFound = !user;

  if (isUserNotFound) {
    throw new NotFoundError({ source: "user", message: "user not Found" });
  }

  const isUserActivated = user.active;
  const isUserBanned = user.banned;

  if (!isUserActivated) {
    // TODO: Resend verification email?
    throw new ConflictError({ source: "user", message: "user not activated" });
  }

  if (isUserBanned) {
    throw new ConflictError({ source: "user", message: "user banned" });
  }

  const isPasswordValid = await validateHash(password, user.password);

  if (!isPasswordValid) {
    throw new UnAuthorizedError({
      source: "password",
      message: "wrong credentials",
    });
  }

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  return {
    user: cleanUserFields(user),
    accessToken,
    refreshToken,
  };
}

async function getUserUseCase(jwtToken) {
  const { userId } = verifyJWT(jwtToken);

  const user = await userRepository.findUserByUserId(userId);

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  return {
    user: cleanUserFields(user),
    accessToken,
    refreshToken,
  };
}

export default {
  createUserUseCase,
  getUserUseCase,
  activateUserUseCase,
  loginUseCase,
};

function cleanUserFields(user) {
  const { email, username, active, activatedAt } = user;

  return {
    email,
    username,
    active,
    activatedAt,
  };
}

function generateAccessToken(user) {
  return signJWT({
    userId: user._id,
    username: user.username,
    email: user.email,
  });
}

function generateRefreshToken(user) {
  return signJWT({
    userId: user._id,
    refreshToken: true,
    username: user.username,
    email: user.email,
  });
}
