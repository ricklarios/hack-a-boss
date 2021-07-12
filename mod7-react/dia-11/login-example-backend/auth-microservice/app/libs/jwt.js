import jsonwebtoken from "jsonwebtoken";
import UnAuthorizedError from "../errors/UnAuthorizedError";

const { JWT_SECRET, TOKEN_EXPIRATION } = process.env;

export function signJWT(payload) {
  return jsonwebtoken.sign(payload, JWT_SECRET, {
    expiresIn: Number(TOKEN_EXPIRATION),
  });
}

export function verifyJWT(token) {
  try {
    return jsonwebtoken.verify(token, JWT_SECRET);
  } catch (error) {
    throw new UnAuthorizedError({
      source: "invalid session",
    });
  }
}
