const express = require("express");
const auth = require("../../../middleware/auth");
const { ProductController } = require("./product.controller");
const { ENUM_USER_ROLE } = require("../../enum");
const { ImageUploadHelper } = require("../../helpers/ImageUploadHelpers");
const router = express.Router();
router.post(
  "/create-product",
  ImageUploadHelper.upload.single("file"),
  ProductController.addProduct
);
router.patch("/update-product", ProductController.updateproductById);
router.delete("/delete-product/:id", ProductController.deleteproductById);
router
  .get("/", ProductController.getProducts)
  .get("/get_products", ProductController.getProductsWithoutCondition)
  .get("/:id", ProductController.getproductById);

module.exports.ProductRoutes = router;
