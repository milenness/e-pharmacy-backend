const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    id: {
      type: String,
    },
    photo: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    suppliers: {
      type: String,
      required: true,
    },
    stock: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    discount: {
      type: String,
      default: "No Discount",
    },
    brand: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

const Product = model("product", productSchema, "products");

module.exports = Product;
