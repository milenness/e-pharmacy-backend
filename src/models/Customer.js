const { Schema, model } = require("mongoose");

const customerSchema = new Schema(
  {
    photo: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    spent: {
      type: String,
      default: "0",
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    register_date: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true },
);

const Customer = model("customer", customerSchema, "customers");

module.exports = Customer;
