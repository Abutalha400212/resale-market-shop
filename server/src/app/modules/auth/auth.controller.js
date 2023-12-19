const httpStatus = require("http-status");
const { catchAsync } = require("../../../utils/catchAsync");
const { sendResponse } = require("../../../utils/sendResponse");
const { AuthService } = require("./auth.service");
const createUser = catchAsync(async (req, res, next) => {
  const result = await AuthService.createUser(req);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "User created successfully",
    data: result,
  });
});
const getUser = catchAsync(async (req, res, next) => {
  const token = req.headers.authorization;
  const result = await AuthService.getUser(token);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "User Retrived successfully",
    data: result,
  });
});
const upateUser = catchAsync(async (req, res, next) => {
  const result = await AuthService.updateUser(req);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "User Updated successfully",
    data: result,
  });
});
const login = catchAsync(async (req, res) => {
  const result = await AuthService.login(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "user login successfully",
    data: result,
  });
});
const changePassword = catchAsync(async (req, res) => {
  const result = await AuthService.changePassword(req.body);
  if (result.modifiedCount > 0) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      message: "user login successfully",
      data: result,
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.BAD_GATEWAY,
    message: "Password Reset Unsuccessfull",
  });
});

module.exports.AuthController = {
  createUser,
  login,
  getUser,
  changePassword,
  upateUser,
};
