import StatusCodes from "http-status-codes";
import AppError from "./AppError";

class NotFoundError extends AppError {
  constructor(error) {
    const {
      message = "Not Found Error",
      source = {},
      httpStatusCode = StatusCodes.NOT_FOUND,
      extra = {},
    } = error;
    super(message, source, httpStatusCode, extra);
  }
}

export default NotFoundError;
