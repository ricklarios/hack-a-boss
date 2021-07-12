import mongoose from "mongoose";
import logger from "../libs/logger";

const { AUTH_MONGO_CONNECTION_STRING } = process.env;

const options = { useNewUrlParser: true, useFindAndModify: false };

export async function connectToDatabases() {
  return mongoose.connect(AUTH_MONGO_CONNECTION_STRING, options);
}

export async function disconnectToDatabases() {
  return mongoose.disconnect();
}

mongoose.connection.on("disconnected", () =>
  logger.info("Disconnected to Auth MongoDB")
);

mongoose.connection.on("reconnect", () =>
  logger.info("Reconnecting to Auth MongoDB...")
);

mongoose.connection.on("connected", () =>
  logger.info("Connected to Auth MongoDB")
);
