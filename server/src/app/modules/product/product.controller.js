const httpStatus = require("http-status");
const { catchAsync } = require("../../../utils/catchAsync");
const { ProductService } = require("./product.service");
const { sendResponse } = require("../../../utils/sendResponse");
const pick = require("../../../utils/pick");
const { filterFields, paginationFields } = require("./product.constant");
const addProduct = catchAsync(async (req, res) => {
  const payload = req.body;
  payload.email = req.user.email;
  console.log(payload);
  const result = await ProductService.addProduct(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Product added successfully",
    data: result,
  });
});
const getProducts = catchAsync(async (req, res) => {
  console.log("query", req.query);
  const filters = pick(req.query, filterFields);
  const pagination = pick(req.query, paginationFields);
  const result = await ProductService.getProducts(filters, pagination);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Products retrived successfully",
    meta: result.meta,
    data: result.data,
  });
});
const getAProduct = catchAsync(async (req, res) => {
  const result = await ProductService.getAProduct(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Product retrived successfully",
    data: result,
  });
});

module.exports.ProductController = {
  addProduct,
  getProducts,
  getAProduct,
};
