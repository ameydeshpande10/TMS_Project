const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/user/sign-up", userController.SignUp);
router.post("/user/log-in", userController.LogIn);
router.get("/user/user-name", userController.GetUserName);
router.get("/user/delete_user", userController.delete_user);
router.get("/user/log-out", userController.LogOut);

router.get("/user/get-tickets", userController.GetTickets);
router.get("/user/details", userController.GetDetails);
router.get("/user/reset_password", userController.reset_password);
router.patch("/user/add-ticket", userController.UpdateTicket);

module.exports = router;
