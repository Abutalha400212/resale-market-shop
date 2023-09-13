const express = require("express");
const auth = require("../../../middleware/auth");
const { ProductController } = require("./product.controller");
const { ENUM_USER_ROLE } = require("../../enum");
const router = express.Router();
router.post("/", auth(ENUM_USER_ROLE.SELLER), ProductController.addProduct);
router
  .get("/", ProductController.getProducts)
  .get("/:id", ProductController.getAProduct);

// router
//   .route("/:id")
//   .delete(productsController.deleteUser)
//   .put(productsController.updateToAdvertise);
module.exports.ProductRoutes = router;
