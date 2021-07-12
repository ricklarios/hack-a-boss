import bcrypt from "bcrypt";

const { SALT_ROUNDS } = process.env;

export async function generateHash(input) {
  return bcrypt.hash(input, Number(SALT_ROUNDS));
}

export async function validateHash(input, hash) {
  return bcrypt.compare(input, hash);
}
