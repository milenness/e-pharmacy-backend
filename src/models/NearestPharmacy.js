const { Schema, model } = require("mongoose");

const nearestPharmacySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["OPEN", "CLOSE"],
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

const NearestPharmacy = model(
  "nearestPharmacy",
  nearestPharmacySchema,
  "nearest_pharmacies",
);

module.exports = NearestPharmacy;
