export default function getRegistrationEmail(newUser, activationLink) {
  return {
    to: `${newUser.username} <${newUser.email}>`,
    subject: `Activate Account ${newUser.username} ✔`,
    text: `Hi, please ${newUser.username} activate your account using this link: ${activationLink}`,
    html: `<b>Hi, please ${newUser.username} activate your account using this link: </b> <a href="${activationLink}">Activate Account</a>`,
  };
}
