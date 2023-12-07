const express = require("express");
const { PaymentController } = require("./payment.controller");
const router = express.Router();
router.post("/create-payment-intent", PaymentController.AddPayment);

// router
//   .route("/:id")
//   .delete(productsController.deleteUser)
//   .put(productsController.updateToAdvertise);
module.exports.PaymentRoutes = router;
