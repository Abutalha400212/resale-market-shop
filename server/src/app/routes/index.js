const express = require("express");
const { AuthRoutes } = require("../modules/auth/auth.route");
const { ProductRoutes } = require("../modules/product/product.route");
const { UserRoutes } = require("../modules/user/user.route");
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
    path: "/users",
    route: UserRoutes,
  },
];

routes.forEach((route) => router.use(route.path, route.route));
module.exports.ModuleRoutes = router;
