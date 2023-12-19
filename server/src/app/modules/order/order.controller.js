const httpStatus = require("http-status");
const { catchAsync } = require("../../../utils/catchAsync");
const { sendResponse } = require("../../../utils/sendResponse");
const { OrderService } = require("./order.service");
const { OrderFilterFields } = require("./order.constant");
const pick = require("../../../utils/pick");
const createOrder = catchAsync(async (req, res) => {
  const result = await OrderService.createOrder(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Place Order ",
    data: result,
  });
});
const getOrder = catchAsync(async (req, res) => {
  const filters = pick(req.query, OrderFilterFields);
  console.log(filters);
  const result = await OrderService.getOrder(filters);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Get Orders ",
    data: result,
  });
});
const deleteOrderById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await OrderService.deleteOrderById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Get Orders ",
    data: result,
  });
});
const paymentSuccess = catchAsync(async (req, res) => {
  const { tran_id } = req.query;
  const result = await OrderService.paymentSuccess(tran_id);
  if (result?.data?.modifiedCount === 0) {
    sendResponse(res, {
      statusCode: httpStatus.BAD_GATEWAY,
      message: "No Order available to pay",
    });
  }
  res.redirect(
    `https://smart-market-demo.netlify.app/payment_gateway/success?tran_id=${tran_id}`
  );
});
const paymentFail = catchAsync(async (req, res) => {
  const { tran_id } = req.query;
  const result = await OrderService.paymentFail(tran_id);
  if (result?.data?.deletedCount === 0) {
    sendResponse(res, {
      statusCode: httpStatus.BAD_GATEWAY,
      message: "No Order available to delete",
    });
  }
  res.redirect(
    `https://smart-market-demo.netlify.app/payment_gateway/fail?tran_id=${tran_id}`
  );
});
const paymentCancel = catchAsync(async (req, res) => {
  res.redirect(`https://smart-market-demo.netlify.app/dashboard/cart`);
});

module.exports.OrderController = {
  createOrder,
  paymentSuccess,
  getOrder,
  deleteOrderById,
  paymentFail,
  paymentCancel,
};
