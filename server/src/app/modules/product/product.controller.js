const httpStatus = require("http-status");
const { catchAsync } = require("../../../utils/catchAsync");
const { ProductService } = require("./product.service");
const { sendResponse } = require("../../../utils/sendResponse");
const pick = require("../../../utils/pick");
const { filterFields, paginationFields } = require("./product.constant");
const addProduct = catchAsync(async (req, res) => {
  const result = await ProductService.addProduct(req);
  console.log(req.file);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Product added successfully",
    data: result,
  });
});
const getProducts = catchAsync(async (req, res) => {
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
const getproductById = catchAsync(async (req, res) => {
  const result = await ProductService.getProductById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Product retrived successfully",
    data: result,
  });
});
const updateproductById = catchAsync(async (req, res) => {
  const result = await ProductService.updateProductById(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Product retrived successfully",
    data: result,
  });
});
const deleteproductById = catchAsync(async (req, res) => {
  const result = await ProductService.deleteProductById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Product retrived successfully",
    data: result,
  });
});
const getProductsWithoutCondition = catchAsync(async (req, res) => {
  const result = await ProductService.getProductsWithoutCondition();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Products retrived successfully",
    data: result,
  });
});

module.exports.ProductController = {
  addProduct,
  getProducts,
  getproductById,
  deleteproductById,
  updateproductById,
  getProductsWithoutCondition,
};
