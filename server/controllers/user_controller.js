const userService = require("../services/user_service");
const {validationResult} = require('express-validator')

const createUser = async (req, res, next) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).send({
      success: false,
      message: 'Bad Request',
      status: 400,
      errors: errors
    })
  }
  const { name, surname, email, password } = req.body;
  try {
    const result = await userService.createUser(name, surname, email, password);
    return res.send({
      success: true,
      message: "user created",
      status: 201,
      result: result,
    });
  } catch (error) {
    next(error);
  }
};


const readUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await userService.readUser(id);
    return res.send({
      success: true,
      message: "user founded.",
      status: 200,
      result: result,
    });
  } catch (error) {
    next(error);
  }
};


const updateUser = async (req, res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.send({
      success: false,
      message: 'Bad Request',
      status: 400,
      errors: errors
    })
  }
  const { id } = req.params;
  const { password, name, surname } = req.body;
  try {
    const result = await userService.updateUser(name, surname, id);
    return res.send({
      success: true,
      message: "user updated.",
      status: 200,
      result: result,
    });
  } catch (error) {
    next(error);
  }
};


const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await userService.createUser(id);
    return res.send({
      success: true,
      message: "user deleted.",
      status: 200,
      result: result,
    });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  createUser,
  readUser,
  updateUser,
  deleteUser,
};
