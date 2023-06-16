const express = require("express");
const { fileUploader } = require("../middlewares/multer");
const router = express.Router();
const userController = require("../controllers").userController;

router.post("/", userController.register);
router.get("/login", userController.login);
router.get("/forgetPass", userController.forgetPass); // login by email & generate nanoid
router.get("/token", userController.getByToken, userController.getUserByToken);
router.patch(
	"/token/changePass",
	userController.getByToken,
	userController.changePass
);

module.exports = router;
