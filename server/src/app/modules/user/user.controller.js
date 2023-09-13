const { catchAsync } = require("../../../utils/catchAsync");
const { sendResponse } = require("../../../utils/sendResponse");
const { UserService } = require("./user.service");
const httpStatus = require("http-status");
const getUsers = catchAsync(async (req, res) => {
  const result = await UserService.getUsers();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Users retrived successfully",
    data: result,
  });
});

module.exports.UserController = {
  getUsers,
};
