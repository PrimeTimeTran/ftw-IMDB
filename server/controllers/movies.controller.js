const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../helpers/utils.helper");

const Movie = require("../models/Movie");

const movieController = {};

movieController.create = catchAsync(async (req, res, next) => {});

// GET http://localhost:5000/api/movies?sort_type=votes&order_by=asc
// GET http://localhost:5000/api/movies?sort_type=votes&order_by=desc

movieController.list = catchAsync(async (req, res, next) => {
  // req.query!
  // const movies = await Movie.find({order: votes})
});

movieController.update = catchAsync(async (req, res, next) => {});

movieController.delete = catchAsync(async (req, res, next) => {});

module.exports = movieController;
