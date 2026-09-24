const express = require("express");
const authCtrl = require("../../controllers/authController");
const userCtrl = require("../../controllers/userController");
const authenticate = require("../../middlewares/authenticate");

const router = express.Router();

router.get("/logout", authenticate, authCtrl.logout);
router.get("/user-info", authenticate, userCtrl.getUserInfo);

module.exports = router;
