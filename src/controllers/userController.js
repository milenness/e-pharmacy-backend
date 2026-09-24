const catchAsync = require("../utils/catchAsync");

const getUserInfo = catchAsync(async (req, res) => {
  const { name, email } = req.user;

  res.status(200).json({
    name,
    email,
  });
});

module.exports = {
  getUserInfo,
};
