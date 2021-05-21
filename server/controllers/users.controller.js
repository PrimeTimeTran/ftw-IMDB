const userController = {};

const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../helpers/utils.helper");

const User = require('../models/User')

userController.create = catchAsync(async (req, res, next) => {
  const user = await new User({ ...req.body })
  await user.save()
  const accessToken = await user.generateToken();

  sendResponse(res, 201, true, {user, accessToken}, null, "Created user successfully~!!")
});

userController.list = catchAsync(async (req, res, next) => {

});

userController.update = catchAsync(async (req, res, next) => {

});

userController.delete = catchAsync(async (req, res, next) => {
  
});

module.exports = userController;
