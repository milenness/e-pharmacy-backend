const Joi = require("joi");

const updateCartSchema = Joi.object({
  productId: Joi.string().hex().length(24).required().messages({
    "any.required": "Product ID is required",
    "string.length": "Product ID must be a valid MongoDB ObjectId",
  }),
  quantity: Joi.number().integer().min(1).required().messages({
    "any.required": "Quantity is required",
    "number.min": "Quantity must be at least 1",
  }),
});

const checkoutSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
  paymentMethod: Joi.string().valid("Cash On Delivery", "Bank").required(),
});

module.exports = {
  updateCartSchema,
  checkoutSchema,
};
