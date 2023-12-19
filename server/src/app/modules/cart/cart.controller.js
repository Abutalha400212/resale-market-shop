const { catchAsync } = require("../../../utils/catchAsync");
const pick = require("../../../utils/pick");
const { sendResponse } = require("../../../utils/sendResponse");
const { cartFilters } = require("./cart.constant");
const { CartService } = require("./cart.service");
const httpStatus = require("http-status");
const setInCart = catchAsync(async (req, res) => {
  const result = await CartService.setInCart(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Set In Cart Successfully",
    data: result,
  });
});
const retriveFromCart = catchAsync(async (req, res) => {
  const filters = pick(req.query, cartFilters);
  const result = await CartService.retriveFromCart(filters);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Cart retrived successfully",
    data: result,
  });
});
const deleteFromCart = catchAsync(async (req, res) => {
  const result = await CartService.deleteFromCart(req.params.id);
  if (result?.data?.deletedCount > 0) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      message: "Cart deleted successfully",
      data: result,
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.BAD_GATEWAY,
    message: "Cart deleted UnSuccessfully",
  });
});

module.exports.CartController = {
  setInCart,
  retriveFromCart,
  deleteFromCart,
};
