const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    testimonial: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

const Review = model("review", reviewSchema, "reviews");

module.exports = Review;
