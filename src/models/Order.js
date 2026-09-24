const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    photo: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    products: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Completed", "Confirmed", "Pending", "Cancelled"],
      required: true,
    },
    order_date: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

const Order = model("order", orderSchema, "orders");

module.exports = Order;
