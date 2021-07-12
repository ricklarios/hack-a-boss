import fastify from "fastify";
import cors from "fastify-cors";
import { connectToDatabases } from "./databases";
import registerRoutes from "../routes/routes";

const {
  FRONTEND_ORIGIN,
  FRONTEND_ORIGIN_LOCAL,
  AUTH_SERVER_PORT,
} = process.env;

const serverOptions = {
  logger: true,
};

async function initializeServer() {
  const server = fastify(serverOptions);

  await connectToDatabases();

  server.register(cors, {
    origin: [FRONTEND_ORIGIN, FRONTEND_ORIGIN_LOCAL],
  });

  registerRoutes(server);

  return server;
}

async function startServer() {
  const server = await initializeServer();
  server.listen(AUTH_SERVER_PORT, "0.0.0.0");
}

export default startServer;
