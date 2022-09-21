const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/user/sign-up", userController.SignUp);
router.post("/user/login", userController.login);
router.get("/user/find_user", userController.find_user);
router.get("/user/delete_user", userController.delete_user);

router.get("/user/get_tickets", userController.get_tickets);
router.get("/user/get_details", userController.get_details);
router.get("/user/reset_password", userController.reset_password);

module.exports = router;
