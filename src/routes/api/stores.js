const express = require("express");
const ctrl = require("../../controllers/storeController");

const router = express.Router();

router.get("/", ctrl.getStores);
router.get("/nearest", ctrl.getNearestStores);

module.exports = router;
