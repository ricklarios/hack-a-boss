import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { ALL_USERS_MOCK } from "./mocks/users-mock";
import userModel from "../app/models/user-model";

const mongoTestDB = new MongoMemoryServer();

export async function connectToTestDatabase() {
  const mongoUri = await mongoTestDB.getUri();
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };
  await mongoose.connect(mongoUri, options);
}

export async function disconnectToTestDatabase() {
  await mongoose.disconnect();
  await mongoTestDB.stop();
}

export async function mockTestDatabase() {
  await Promise.all([...ALL_USERS_MOCK.map((user) => userModel.create(user))]);
}

export async function restoreTestDatabase() {
  await Promise.all([userModel.deleteMany({})]);
}
