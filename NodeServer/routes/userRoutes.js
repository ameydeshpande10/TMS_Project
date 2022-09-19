const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/user/sign_up", userController.sign_up);
router.post("/user/login", userController.login);
router.get("/user/find_user", userController.find_user);
router.get("/user/delete_user", userController.delete_user);

router.get("/user/get_tickets", userController.get_tickets);

module.exports = router;
