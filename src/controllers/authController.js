const User = require("../models/User");
const HttpError = require("../utils/HttpError");
const catchAsync = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");

const register = catchAsync(async (req, res) => {
  const { email } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    throw HttpError(409, "Email in use");
  }

  const newUser = await User.create(req.body);

  res.status(201).json({
    message: "User successfully registered",
    user: {
      name: newUser.name,
      email: newUser.email,
    },
  });
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !(await user.comparePassword(password))) {
    throw HttpError(401, "Email or password is wrong");
  }

  const payload = { id: user._id };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "24h" });

  await User.findByIdAndUpdate(user._id, { token });

  res.status(200).json({
    token,
    user: {
      name: user.name,
      email: user.email,
    },
  });
});

const logout = catchAsync(async (req, res) => {
  const { _id } = req.user;

  await User.findByIdAndUpdate(_id, { token: null });

  res.status(204).json();
});

module.exports = {
  register,
  login,
  logout,
};
