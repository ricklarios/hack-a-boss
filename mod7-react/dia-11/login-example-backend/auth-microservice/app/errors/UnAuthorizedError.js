import StatusCodes from "http-status-codes";
import AppError from "./AppError";

class UnAuthorizedError extends AppError {
  constructor(error) {
    const {
      message = "Unauthorized Error",
      source = {},
      httpStatusCode = StatusCodes.UNAUTHORIZED,
      extra = {},
    } = error;
    super(message, source, httpStatusCode, extra);
  }
}

export default UnAuthorizedError;
