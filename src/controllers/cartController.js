const Cart = require("../models/Cart");
const HttpError = require("../utils/HttpError");
const catchAsync = require("../utils/catchAsync");

const getCart = catchAsync(async (req, res) => {
  const userId = req.user._id;

  let cart = await Cart.findOne({ user: userId }).populate("items.product");

  if (!cart) {
    cart = await Cart.create({ user: userId, items: [] });
  }

  res.status(200).json(cart);
});

const updateCart = catchAsync(async (req, res) => {
  const userId = req.user._id;
  const { productId, quantity } = req.body;

  let cart = await Cart.findOne({ user: userId });

  if (!cart) {
    cart = await Cart.create({
      user: userId,
      items: [{ product: productId, quantity }],
    });
  } else {
    const itemIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId,
    );

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity = quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }
    await cart.save();
  }

  const updatedCart = await Cart.findById(cart._id).populate("items.product");
  res.status(200).json(updatedCart);
});

const checkout = catchAsync(async (req, res) => {
  const userId = req.user._id;
  const { name, email, phone, address, paymentMethod } = req.body;

  const cart = await Cart.findOne({ user: userId }).populate("items.product");

  if (!cart || cart.items.length === 0) {
    throw HttpError(400, "Cart is empty");
  }

  let totalAmount = 0;
  cart.items.forEach((item) => {
    const price = parseFloat(item.product.price);
    totalAmount += price * item.quantity;
  });

  // Очищуємо кошик після успішного оформлення
  await Cart.findOneAndDelete({ user: userId });

  res.status(200).json({
    message: "Order successfully placed",
    orderInfo: {
      name,
      email,
      phone,
      address,
      paymentMethod,
      totalAmount: totalAmount.toFixed(2),
    },
  });
});

module.exports = {
  getCart,
  updateCart,
  checkout,
};
