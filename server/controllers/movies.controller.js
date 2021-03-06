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
  const movies = await Movie.find({}).limit(20)
    sendResponse(
      res,
      201,
      true,
      { movies },
      null,
      "Here are your moviessss",
    );
});

movieController.searchByTitle = catchAsync(async (req, res, next) => {

    const replace = req.query.title
    const re = new RegExp(replace, "i");
    const movies = await Movie.find({ title: { $regex: re } }).limit(20);
    sendResponse(res, 201, true, { movies }, null, "Here are your moviessss");
});

movieController.update = catchAsync(async (req, res, next) => {});

movieController.delete = catchAsync(async (req, res, next) => {});

module.exports = movieController;
