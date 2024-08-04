import { ErrorRequestHandler } from "express";
import handleValidationError from "../errors/handleValidationError";
import { TErrorSouces } from "../interface/Error";
import handleCastError from "../errors/handleCastError";
import AppError from "../errors/appError";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  //set default values
  let statusCode = 500;
  let message = "something went wrong";
  let errorSources: TErrorSouces = [
    {
      path: "",
      message: "something went wrong",
    },
  ];

  if ((err.name = "ValidationError")) {
    const simplifiedErr = handleValidationError(err);
    statusCode = simplifiedErr.statusCode;
    message = simplifiedErr.message;
    errorSources = simplifiedErr.errorSources;
  } else if (err?.name === "CastError") {
    const simplifiedErr = handleCastError(err);
    statusCode = simplifiedErr.statusCode;
    message = simplifiedErr.message;
    errorSources = simplifiedErr.errorSources;
  } else if (err instanceof AppError) {
    statusCode = err?.statusCode;
    message = err.message;
    errorSources = [
      {
        path: "",
        message: err?.message,
      },
    ];
  }

  // finally return
  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
  });
};

export default globalErrorHandler;
