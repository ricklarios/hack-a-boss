import userController from "../controllers/user-controller";

const USER_PATHNAME = "/users";
const ACTIVATE_USER_PATHNAME = `${USER_PATHNAME}/activate`;
const LOGIN_PATHNAME = `${USER_PATHNAME}/sessions`;
const GET_USER_PATHNAME = `${USER_PATHNAME}/current`;

function userRouter(server, opts, done) {
  server.post(USER_PATHNAME, userController.createUserController);
  server.get(GET_USER_PATHNAME, userController.getUserController);
  server.post(ACTIVATE_USER_PATHNAME, userController.activateUserController);
  server.post(LOGIN_PATHNAME, userController.loginController);

  done();
}

export default userRouter;
