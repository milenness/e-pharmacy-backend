const Product = require("../models/Product");
const HttpError = require("../utils/HttpError");
const catchAsync = require("../utils/catchAsync");

const getProducts = catchAsync(async (req, res) => {
  const { query = "", category = "" } = req.query;

  const filter = {};

  if (query) {
    filter.name = { $regex: query, $options: "i" };
  }
  if (category) {
    filter.category = category;
  }

  const products = await Product.find(filter);
  res.status(200).json(products);
});

const getProductById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  if (!product) {
    throw HttpError(404, "Product not found");
  }

  res.status(200).json(product);
});

module.exports = {
  getProducts,
  getProductById,
};
