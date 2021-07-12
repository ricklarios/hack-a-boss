import { v4 as uuid } from "uuid";

export function generateActivationCode() {
  return uuid();
}
