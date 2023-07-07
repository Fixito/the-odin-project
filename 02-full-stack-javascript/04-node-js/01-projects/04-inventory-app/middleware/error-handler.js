const errorHandler = (err, _req, res, _next) => {
  let customError = {
    statusCode: err.statusCode || 500,
    msg: err.message || 'Something went wrong, try again later...'
  };

  res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandler;
