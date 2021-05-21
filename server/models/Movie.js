const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = Schema(
  {
    title: { type: String, required: true, unique: false, default: "" },
  },
  {
    timestamps: true,
  },
);

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
