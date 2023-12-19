const express = require("express");
const { AuthRoutes } = require("../modules/auth/auth.route");
const { ProductRoutes } = require("../modules/product/product.route");
const { PaymentRoutes } = require("../modules/payment/payment.route");
const { CartRoutes } = require("../modules/cart/cart.routes");
const { OrderRoutes } = require("../modules/order/order.routes");
const { UserRoutes } = require("../modules/users/users.route");
const router = express.Router();
const routes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/products",
    route: ProductRoutes,
  },
  {
    path: "/payments",
    route: PaymentRoutes,
  },
  {
    path: "/cart",
    route: CartRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/orders",
    route: OrderRoutes,
  },
];

routes.forEach((route) => router.use(route.path, route.route));
module.exports.ModuleRoutes = router;
