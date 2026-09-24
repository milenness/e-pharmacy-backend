const Joi = require("joi");

const registerSchema = Joi.object({
  name: Joi.string().min(2).max(50).required().messages({
    "any.required": "Name is required",
    "string.min": "Name must be at least 2 characters long",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "Email is required",
    "string.email": "Email must be a valid email address",
  }),
  phone: Joi.string().required().messages({
    "any.required": "Phone number is required",
  }),
  password: Joi.string().min(6).required().messages({
    "any.required": "Password is required",
    "string.min": "Password must be at least 6 characters long",
  }),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "any.required": "Email is required",
    "string.email": "Email must be a valid email address",
  }),
  password: Joi.string().min(6).required().messages({
    "any.required": "Password is required",
  }),
});

module.exports = {
  registerSchema,
  loginSchema,
};
