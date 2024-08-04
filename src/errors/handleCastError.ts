import mongoose from "mongoose";
import { TErrorSouces, TGenericErrorResponse } from "../interface/Error";

const handleCastError = (
  err: mongoose.Error.CastError
): TGenericErrorResponse => {
  const errorMessages: TErrorSouces = [
    {
      path: err.path,
      message: err.message,
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: "Invalid ID",
    errorSources: errorMessages,
  };
};

export default handleCastError;
