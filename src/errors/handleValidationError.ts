import mongoose from "mongoose";
import { TErrorSouces, TGenericErrorResponse } from "../interface/Error";

const handleValidationError = (
  err: mongoose.Error.ValidationError
): TGenericErrorResponse => {
  const errorMessages: TErrorSouces = Object.values(err.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val.path,
        message: val.message,
      };
    }
  );
  const statusCode = 400;
  return {
    statusCode,
    message: "Validaton Error",
    errorSources: errorMessages,
  };
};

export default handleValidationError;
