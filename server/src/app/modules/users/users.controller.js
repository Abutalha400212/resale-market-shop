const httpStatus = require("http-status");
const { catchAsync } = require("../../../utils/catchAsync");
const { sendResponse } = require("../../../utils/sendResponse");
const { UsersService } = require("./users.service");

const getUsers = catchAsync(async (req, res) => {
  const result = await UsersService.getUsers();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Users Retrived successfully",
    data: result,
  });
});
const deleteUser = catchAsync(async (req, res) => {
  const result = await UsersService.deleteUser(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "User deleted successfully",
    data: result,
  });
});

module.exports.UsersController = {
  getUsers,
  deleteUser,
};
