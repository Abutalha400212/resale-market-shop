class ApiError extends Error {
  statusCode;
  constructor(statuscode, message, stack) {
    super(message);
    this.statusCode = statuscode;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

module.exports = ApiError;
