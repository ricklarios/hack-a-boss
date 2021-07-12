import ValidationError from "../errors/ValidationError";

async function validateInputData(data, inputDataSchema) {
  try {
    return await inputDataSchema.validateAsync(data);
  } catch (error) {
    throw new ValidationError(error);
  }
}

export default validateInputData;
