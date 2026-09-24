const express = require("express");
const ctrl = require("../../controllers/cartController");
const authenticate = require("../../middlewares/authenticate");
const validateBody = require("../../middlewares/validateBody");
const {
  updateCartSchema,
  checkoutSchema,
} = require("../../schemas/cartSchemas");

const router = express.Router();

router.use(authenticate);

router.get("/", ctrl.getCart);
router.put("/update", validateBody(updateCartSchema), ctrl.updateCart);
router.post("/checkout", validateBody(checkoutSchema), ctrl.checkout);

module.exports = router;
