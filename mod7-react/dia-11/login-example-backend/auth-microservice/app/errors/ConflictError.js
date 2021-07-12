import StatusCodes from "http-status-codes";
import AppError from "./AppError";

class ConflictError extends AppError {
  constructor(error) {
    const {
      message = "Conflict Error",
      source = {},
      httpStatusCode = StatusCodes.CONFLICT,
      extra = {},
    } = error;
    super(message, source, httpStatusCode, extra);
  }
}

export default ConflictError;
