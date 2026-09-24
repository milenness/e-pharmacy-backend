const express = require("express");
const ctrl = require("../../controllers/authController");
const validateBody = require("../../middlewares/validateBody");
const { registerSchema, loginSchema } = require("../../schemas/authSchemas");

const router = express.Router();

router.post("/register", validateBody(registerSchema), ctrl.register);
router.post("/login", validateBody(loginSchema), ctrl.login);

module.exports = router;
