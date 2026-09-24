const express = require("express");
const ctrl = require("../../controllers/productController");
const isValidId = require("../../middlewares/isValidId");

const router = express.Router();

router.get("/", ctrl.getProducts);
router.get("/:id", isValidId, ctrl.getProductById);

module.exports = router;
