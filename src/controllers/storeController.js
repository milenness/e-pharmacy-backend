const Store = require("../models/Store");
const NearestPharmacy = require("../models/NearestPharmacy");
const catchAsync = require("../utils/catchAsync");

const getStores = catchAsync(async (req, res) => {
  const stores = await Store.find();
  res.status(200).json(stores);
});

const getNearestStores = catchAsync(async (req, res) => {
  const nearest = await NearestPharmacy.find();
  res.status(200).json(nearest);
});

module.exports = {
  getStores,
  getNearestStores,
};
