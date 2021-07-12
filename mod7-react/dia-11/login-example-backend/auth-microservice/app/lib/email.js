import configureSendmail from "sendmail";

const _sendEmail = configureSendmail();

const { SUPER_ADMIN_EMAIL } = process.env;

export async function sendEmail(email) {
  const from = `"🚀" <${SUPER_ADMIN_EMAIL}>`;
  return _sendEmail({
    from,
    ...email
  });
}