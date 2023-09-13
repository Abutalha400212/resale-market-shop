const express = require("express");
const { AuthController } = require("./auth.controller");
const router = express.Router();
router.get("/get-user", AuthController.getUser);
router.post("/signup", AuthController.createUser);
router.post("/login", AuthController.login);

module.exports.AuthRoutes = router;