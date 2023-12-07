const httpStatus = require("http-status");
const { catchAsync } = require("../../../utils/catchAsync");
const { sendResponse } = require("../../../utils/sendResponse");
const { PaymentService } = require("./payment.service");
const AddPayment = catchAsync(async (req, res) => {
    const result = await PaymentService.AddPayment(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      message: "Payment successfully",
      data: result,
    });
  });

  module.exports.PaymentController = {
    AddPayment
  };