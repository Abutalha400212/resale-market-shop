const express = require("express");
const { CartController } = require("./cart.controller");
const auth = require("../../../middleware/auth");
const { ENUM_USER_ROLE } = require("../../enum");

const router = express.Router();
router.delete("/delete-cart/:id", CartController.deleteFromCart);
router.post("/set-cart", CartController.setInCart);
router.get("/get-cart", CartController.retriveFromCart);
module.exports.CartRoutes = router;
