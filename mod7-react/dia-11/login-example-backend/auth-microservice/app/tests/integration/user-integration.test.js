import * as emailLib from "../../lib/email";
import { integrationTestServer } from "../../../tests-utils/mock-test-server";
import userModel from "../../models/user-model";

describe("User integration tests", () => {
  describe("Register User Integration tests", () => {
    it("should register a new user account by calling register user endpoint", async () => {
      const newUser = {
        email: "new-user@example.com",
        password: "secret",
        username: "newUser",
      };

      const sendEmailSpy = jest.fn();

      // eslint-disable-next-line
      emailLib.sendEmail = sendEmailSpy;

      expect(sendEmailSpy).not.toHaveBeenCalled();

      const response = await integrationTestServer.inject({
        method: "POST",
        url: "/api/auth/users",
        body: {
          ...newUser,
        },
      });

      expect(sendEmailSpy).toHaveBeenCalled();

      const bodyResponse = JSON.parse(response.body);

      expect(response.statusCode).toEqual(201);
      expect(bodyResponse.active).toEqual(false);
      expect(bodyResponse).not.toHaveProperty("password");
      expect(bodyResponse.email).toEqual(newUser.email);
      expect(bodyResponse.username).toEqual(newUser.username);

      const newUserCreated = await userModel.findOne({
        username: newUser.username,
      });

      expect(newUserCreated.active).toEqual(false);
      expect(newUserCreated).toHaveProperty("activatedAt");

      emailLib.sendEmail.mockRestore();
    });
    it("Should return a 400 error if payload is invalid", async () => {
      const invalidPayload = {
        invalidPayload: "invalid-payload",
      };

      const sendEmailSpy = jest.fn();

      // eslint-disable-next-line
      emailLib.sendEmail = sendEmailSpy;

      expect(sendEmailSpy).not.toHaveBeenCalled();

      const response = await integrationTestServer.inject({
        method: "POST",
        url: "/api/auth/users",
        body: {
          ...invalidPayload,
        },
      });

      expect(sendEmailSpy).not.toHaveBeenCalled();

      expect(response.statusCode).toEqual(400);

      emailLib.sendEmail.mockRestore();
    });
    it("Should return a 409 conflict error if username is already in use", async () => {
      const duplicatedUser = {
        email: "new-duplicated-user@example.com",
        password: "secret",
        username: "activeUser", // duplicated username value in mocked database
      };

      const sendEmailSpy = jest.fn();

      // eslint-disable-next-line
      emailLib.sendEmail = sendEmailSpy;

      expect(sendEmailSpy).not.toHaveBeenCalled();

      const response = await integrationTestServer.inject({
        method: "POST",
        url: "/api/auth/users",
        body: {
          ...duplicatedUser,
        },
      });

      const body = JSON.parse(response.body);

      expect(response.statusCode).toEqual(409);

      expect(body.message).toMatch(/(activeUser)/i);
      expect(body.message).toMatch(/(duplicate key error)/i);

      expect(body.source).toEqual("user");

      expect(sendEmailSpy).not.toHaveBeenCalled();

      const newDuplicatedUser = await userModel.findOne({
        email: "new-duplicated-user@example.com",
      });

      expect(newDuplicatedUser).toBeNull();

      emailLib.sendEmail.mockRestore();
    });

    it("Should return a 409 conflict error if email is already in use", async () => {
      const duplicatedUser = {
        email: "activeUser@example.com", // duplicated email value in mocked database
        password: "secret",
        username: "duplicatedUser",
      };

      const sendEmailSpy = jest.fn();

      // eslint-disable-next-line
      emailLib.sendEmail = sendEmailSpy;

      expect(sendEmailSpy).not.toHaveBeenCalled();

      const response = await integrationTestServer.inject({
        method: "POST",
        url: "/api/auth/users",
        body: {
          ...duplicatedUser,
        },
      });

      const body = JSON.parse(response.body);

      expect(response.statusCode).toEqual(409);

      expect(body.message).toMatch(/(activeUser@example.com)/i);
      expect(body.message).toMatch(/(duplicate key error)/i);

      expect(body.source).toEqual("user");

      expect(sendEmailSpy).not.toHaveBeenCalled();

      const newDuplicatedUser = await userModel.findOne({
        email: "new-duplicated-user@example.com",
      });

      expect(newDuplicatedUser).toBeNull();

      emailLib.sendEmail.mockRestore();
    });
  });

  describe("Activate User Integration tests", () => {
    it("should activate unconfirmed user account by calling activate user endpoint", async () => {
      const activationCode = "unconfirmed-user-activation-code";

      const unConfirmedUser = await userModel.findOne({ activationCode });

      expect(unConfirmedUser.active).toEqual(false);

      const response = await integrationTestServer.inject({
        method: "POST",
        url: "/api/auth/users/activate",
        body: {
          activationCode,
        },
      });

      const body = JSON.parse(response.body);

      expect(response.statusCode).toEqual(200);
      expect(body.active).toEqual(true);
      expect(body).not.toHaveProperty("password");

      const unConfirmedUserActivated = await userModel.findOne({
        activationCode,
      });

      expect(unConfirmedUserActivated).toEqual(
        expect.objectContaining({
          activatedAt: expect.any(Number),
          active: true,
          banned: false,
        })
      );
    });

    it("should return a 404 error if user does not exists", async () => {
      const unExistingActivationCode = "un-existing-activation-code";

      const response = await integrationTestServer.inject({
        method: "POST",
        url: "/api/auth/users/activate",
        body: {
          activationCode: unExistingActivationCode,
        },
      });

      const body = JSON.parse(response.body);

      expect(body.message).toEqual("user not Found");

      expect(response.statusCode).toEqual(404);
    });

    it("should return a 409 conflict error if user is already activated", async () => {
      const activationCode = "active-user-activation-code";

      const response = await integrationTestServer.inject({
        method: "POST",
        url: "/api/auth/users/activate",
        body: {
          activationCode,
        },
      });

      const body = JSON.parse(response.body);

      expect(body.message).toEqual("user already activated");

      expect(response.statusCode).toEqual(409);
    });
  });

  describe("Login User Integration tests", () => {
    it("should return session tokens with correct credentials", async () => {
      const email = "activeUser@example.com";
      const password = "secret";

      const response = await integrationTestServer.inject({
        method: "POST",
        url: "/api/auth/users/sessions",
        body: {
          email,
          password,
        },
      });

      expect(response.statusCode).toEqual(200);

      const body = JSON.parse(response.body);

      expect(body.user.email).toEqual(email);
      expect(body.user).not.toHaveProperty("password");

      expect(body.session).toHaveProperty("accessToken");
      expect(body.session).toHaveProperty("refreshToken");
    });

    it("should return not found error if user does not exists", async () => {
      const email = "non-existing-user@example.com";
      const password = "secret";

      const response = await integrationTestServer.inject({
        method: "POST",
        url: "/api/auth/users/sessions",
        body: {
          email,
          password,
        },
      });

      expect(response.statusCode).toEqual(404);

      const body = JSON.parse(response.body);

      expect(body.message).toEqual("user not Found");
      expect(body.source).toEqual("user");

      expect(body).not.toHaveProperty("session");
    });

    it("should return conflict error if user is not activated", async () => {
      const email = "unconfirmedUser@example.com";
      const password = "secret";

      const response = await integrationTestServer.inject({
        method: "POST",
        url: "/api/auth/users/sessions",
        body: {
          email,
          password,
        },
      });

      expect(response.statusCode).toEqual(409);

      const body = JSON.parse(response.body);

      expect(body.message).toEqual("user not activated");
      expect(body.source).toEqual("user");

      expect(body).not.toHaveProperty("session");
    });

    it("should return conflict error if user is banned", async () => {
      const email = "bannedUser@example.com";
      const password = "secret";

      const response = await integrationTestServer.inject({
        method: "POST",
        url: "/api/auth/users/sessions",
        body: {
          email,
          password,
        },
      });

      expect(response.statusCode).toEqual(409);

      const body = JSON.parse(response.body);

      expect(body.message).toEqual("user banned");
      expect(body.source).toEqual("user");

      expect(body).not.toHaveProperty("session");
    });

    it("should return unauthorized error if user password is not valid", async () => {
      const email = "activeUser@example.com";
      const wrongPassword = "wrong password";

      const response = await integrationTestServer.inject({
        method: "POST",
        url: "/api/auth/users/sessions",
        body: {
          email,
          password: wrongPassword,
        },
      });

      expect(response.statusCode).toEqual(401);

      const body = JSON.parse(response.body);

      expect(body.message).toEqual("wrong credentials");
      expect(body.source).toEqual("password");

      expect(body).not.toHaveProperty("session");
    });
  });
});
