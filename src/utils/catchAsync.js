const catchAsync = (ctrl) => {
  return (req, res, next) => {
    ctrl(req, res, next).catch(next);
  };
};

module.exports = catchAsync;
