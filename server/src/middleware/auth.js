const httpStatus = require("http-status");
const ApiError = require("../error/ApiError");
const jwt = require("jsonwebtoken");
const { config } = require("../config");
const auth =
  (...requiredRoles) =>
  async (req, res, next) => {
    try {
      console.log(requiredRoles);
      //get authorization token
      const token = req.headers.authorization;
      if (!token) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "You are not authorized");
      }
      // verify token
      let verifiedUser = null;

      verifiedUser = jwt.verify(token, config.jwt.secret);

      req.user = verifiedUser;
      // Authorization
      if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
        throw new ApiError(httpStatus.FORBIDDEN, "Forbidden");
      }
      next();
    } catch (error) {
      next(error);
    }
  };

module.exports = auth;
