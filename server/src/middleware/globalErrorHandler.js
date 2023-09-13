const { config } = require("../config");
const ApiError = require("../error/ApiError");
const { handleValidationError } = require("../error/handleValidationError");

const globalErrorHandler = (error, req, res, next) => {
  let statusCode = 400;
  let message = "Something went wrong";
  let errorMessage = [];

  if (error instanceof Error && error.name === "ValidationError") {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessage = simplifiedError.errorMessage;
  } else if (error instanceof ApiError) {
    message = error.message || message;
    errorMessage = error.message
      ? [
          {
            path: "",
            message: error.message,
          },
        ]
      : [];
  } else if (error instanceof Error) {
    message = error.message || message;
    errorMessage = error.message
      ? [
          {
            path: "",
            message: error.message,
          },
        ]
      : [];
  }

  res.status(statusCode).json({
    statusCode,
    message,
    errorMessage,
    stack: config.env !== "production" ? error.stack : undefined,
  });
};

module.exports = { globalErrorHandler };
