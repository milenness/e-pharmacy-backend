const { Schema, model } = require("mongoose");

const cartItemSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  { _id: false },
);

const cartSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    items: [cartItemSchema],
  },
  { versionKey: false, timestamps: true },
);

const Cart = model("cart", cartSchema);

module.exports = Cart;
