import { repositoryErrorFactory } from "../errors/errors";
import userModel from "../models/user-model";

async function findUserByUsername(username) {
  return userModel
    .findOne({
      username,
    })
    .lean()
    .exec();
}

async function findUserByUserId(_id) {
  return userModel
    .findOne({
      _id,
    })
    .lean()
    .exec();
}

async function findUserByEmail(email) {
  return userModel
    .findOne({
      email,
    })
    .lean()
    .exec();
}

async function createUser(user) {
  try {
    const userCreated = await userModel.create(user);
    return userCreated;
  } catch (error) {
    throw repositoryErrorFactory(error, "user");
  }
}

async function findUserByActivationCode(activationCode) {
  try {
    const user = await userModel.findOne({ activationCode });
    return user;
  } catch (error) {
    throw repositoryErrorFactory(error, "user");
  }
}

async function updateUser(user) {
  try {
    const userUpdated = await user.save();
    return userUpdated;
  } catch (error) {
    throw repositoryErrorFactory(error, "user");
  }
}

export default {
  findUserByUserId,
  findUserByUsername,
  findUserByEmail,
  findUserByActivationCode,
  createUser,
  updateUser,
};
