import StatusCodes from "http-status-codes";

class AppError {
  constructor(
    message,
    source = {},
    httpStatusCode = StatusCodes.INTERNAL_SERVER_ERROR,
    extra = {}
  ) {
    this.message = message;
    this.source = source;
    this.httpStatusCode = httpStatusCode;
    this.extra = extra;
  }
}

export default AppError;
