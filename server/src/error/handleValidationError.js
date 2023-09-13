const httpStatus = require("http-status");

module.exports.handleValidationError = (error) => {
  const errors = Object.values(error.errors).map((el) => {
    return {
      path: el?.path,
      message: el?.message,
    };
  });

  return {
    statusCode: httpStatus.BAD_REQUEST,
    message: "Validation Error",
    errorMessage: errors,
  };
};
