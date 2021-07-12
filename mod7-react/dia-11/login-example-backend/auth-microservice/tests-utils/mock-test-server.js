import fastify from "fastify";
import registerRoutes from "../app/routes/routes";

const serverOptions = {
  logger: false,
};

export const integrationTestServer = fastify(serverOptions);

export function initializeIntegrationTestServer() {
  registerRoutes(integrationTestServer);

  return integrationTestServer;
}

export function closeIntegrationTestServer() {
  return integrationTestServer.close();
}
