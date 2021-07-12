import Joi from "joi";
import { getJWTFromAuthHeader, validateInputData } from "../utils/utils";
import {
  MIN_USERNAME_LENGTH,
  MAX_USERNAME_LENGTH,
} from "../constants/constants";
import httpStatusCodes from "http-status-codes";
import userUseCases from "../use-cases/user-use-cases";

const userValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string()
    .min(MIN_USERNAME_LENGTH)
    .max(MAX_USERNAME_LENGTH)
    .alphanum()
    .required(),
  password: Joi.string().min(5).max(15).required(),
});

async function createUserController(req, res) {
  try {
    await validateInputData(req.body, userValidationSchema);

    const { email, username, password } = req.body;

    const userCreated = await userUseCases.createUserUseCase({
      email,
      username,
      password,
    });

    res.code(httpStatusCodes.CREATED).send(userCreated);
  } catch (error) {
    res.code(error.httpStatusCode).send(error);
  }
}

const activationCodeSchema = Joi.string().required();

async function activateUserController(req, res) {
  try {
    const { activationCode } = req.body;

    await validateInputData(activationCode, activationCodeSchema);

    const userActivated = await userUseCases.activateUserUseCase(
      activationCode
    );

    res.code(httpStatusCodes.OK).send(userActivated);
  } catch (error) {
    res.code(error.httpStatusCode).send(error);
  }
}

const loginValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

async function loginController(req, res) {
  try {
    const { email, password } = req.body;

    await validateInputData(req.body, loginValidationSchema);

    const { user, accessToken, refreshToken } = await userUseCases.loginUseCase(
      email,
      password
    );

    res.code(httpStatusCodes.OK).send({
      user,
      session: {
        accessToken,
        refreshToken,
      },
    });
  } catch (error) {
    res.code(error.httpStatusCode).send(error);
  }
}

async function getUserController(req, res) {
  try {
    const jwtToken = getJWTFromAuthHeader(req.headers.authorization);

    const {
      user,
      accessToken,
      refreshToken,
    } = await userUseCases.getUserUseCase(jwtToken);

    res.code(httpStatusCodes.OK).send({
      user,
      session: {
        accessToken,
        refreshToken,
      },
    });
  } catch (error) {
    res.code(error.httpStatusCode).send(error);
  }
}

export default {
  createUserController,
  activateUserController,
  loginController,
  getUserController,
};
