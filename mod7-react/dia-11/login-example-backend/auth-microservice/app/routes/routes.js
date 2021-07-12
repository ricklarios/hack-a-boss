import userRouter from "./user-router";

const BASE_PATHNAME = "/api/auth";

function registerRoutes(server) {
  server.register(userRouter, { prefix: BASE_PATHNAME });
}

export default registerRoutes;
