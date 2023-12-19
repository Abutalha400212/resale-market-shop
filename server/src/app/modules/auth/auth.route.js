const express = require("express");
const { AuthController } = require("./auth.controller");
const { ImageUploadHelper } = require("../../helpers/ImageUploadHelpers");
const router = express.Router();
router.get("/get-user", AuthController.getUser);
router.patch(
  "/update-profile",
  ImageUploadHelper.upload.single("file"),
  AuthController.upateUser
);
router.post(
  "/signup",
  ImageUploadHelper.upload.single("file"),
  AuthController.createUser
);
router.post("/login", AuthController.login);
router.post("/change-password", AuthController.changePassword);

module.exports.AuthRoutes = router;
