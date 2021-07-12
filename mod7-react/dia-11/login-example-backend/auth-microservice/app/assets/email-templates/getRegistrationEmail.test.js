import getRegistrationEmail from "./getRegistrationEmail";

describe("Registration Email Template", () => {
  it("should return Email Template rendered with username and activate account link", () => {
    const user = { username: "John Doe", email: "example@mail.com" };
    const activationLink = "http://activation-link";

    const registrationEmail = getRegistrationEmail(user, activationLink);

    expect(registrationEmail).toEqual(EMAIL_TEMPLATE_MOCK);
  });
});

const EMAIL_TEMPLATE_MOCK = {
  to: "John Doe <example@mail.com>",
  subject: "Activate Account John Doe ✔",
  text:
    "Hi, please John Doe activate your account using this link: http://activation-link",
  html:
    '<b>Hi, please John Doe activate your account using this link: </b> <a href="http://activation-link">Activate Account</a>',
};
