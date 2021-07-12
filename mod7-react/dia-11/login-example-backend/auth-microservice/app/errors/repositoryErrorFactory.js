import AppError from "./AppError";
import ConflictError from "./ConflictError";

const duplicateKeyMongooseError = 11000;

function repositoryErrorFactory(error, source) {
  const { code, extra, message } = error;

  const isDuplicateKeyError = code === duplicateKeyMongooseError;

  if (isDuplicateKeyError) {
    return new ConflictError({ extra, source, message });
  }

  return new AppError(error);
}

export default repositoryErrorFactory;
