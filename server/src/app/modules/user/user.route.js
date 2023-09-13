const express = require("express");
const { UserController } = require("./user.controller");
const auth = require("../../../middleware/auth");
const { ENUM_USER_ROLE } = require("../../enum");
const router = express.Router();
router.get("/", auth(ENUM_USER_ROLE.ADMIN), UserController.getUsers);
// router.route("/:email").post(usersRoute.getAccountRoleWithEmail);
// router
//   .route("/:id")
//   .delete(usersRoute.deleteUser)
//   .patch(usersRoute.updateStatus);
module.exports.UserRoutes = router;
