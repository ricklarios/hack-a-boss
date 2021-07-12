import StatusCodes from "http-status-codes";
import AppError from "./AppError";

function getPointerFromValidationError({ details }) {
  const firstError = details[0];

  return {
    pointer: firstError.context.key,
  };
}

class ValidationError extends AppError {
  constructor(error) {
    const {
      message = "Validation Error",
      details = {},
      httpStatusCode = StatusCodes.BAD_REQUEST,
      source = getPointerFromValidationError(error),
    } = error;

    super(message, source, httpStatusCode, details);
  }
}

export default ValidationError;
