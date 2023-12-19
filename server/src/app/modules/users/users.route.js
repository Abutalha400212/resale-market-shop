const express = require("express");
const { UsersController } = require("./users.controller");
const router = express.Router();
router.get("/get-users", UsersController.getUsers);
router.delete("/delete-user/:id", UsersController.deleteUser);
module.exports.UserRoutes = router;
