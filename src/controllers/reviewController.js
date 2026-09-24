const Review = require("../models/Review");
const catchAsync = require("../utils/catchAsync");

const getReviews = catchAsync(async (req, res) => {
  const reviews = await Review.find();
  res.status(200).json(reviews);
});

module.exports = {
  getReviews,
};
