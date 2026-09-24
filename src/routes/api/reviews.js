const express = require("express");
const ctrl = require("../../controllers/reviewController");

const router = express.Router();

router.get("/", ctrl.getReviews);

module.exports = router;
