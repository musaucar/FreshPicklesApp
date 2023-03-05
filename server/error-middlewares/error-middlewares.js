const errorHandling = (error, req, res, next) => {
  if ((error.name = "CastError")) {
    return res.status(404).send({
      success: false,
      message: "Not Found",
      status: 404,
    });
  } else {
    return res.status(500).send({
      success: false,
      name: error.name,
      message: error.message,
      status: 500,
    });
  }
};

module.exports = errorHandling;
