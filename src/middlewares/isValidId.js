const { isValidObjectId } = require("mongoose");
const HttpError = require("../utils/HttpError");

const isValidId = (req, res, next) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    next(HttpError(400, `${id} is not a valid MongoDB ID format`));
  }

  next();
};

module.exports = isValidId;
