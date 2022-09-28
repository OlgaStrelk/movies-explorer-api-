const Movie = require("../models/Movie");
const BadRequestError = require("../utils/errors/BadRequestError");
const NotFoundError = require("../utils/errors/NotFoundError");
const ForbiddenError = require("../utils/errors/ForbiddenError");
const {
  MOVIE_DATA_ERR_MESSAGE,
  MOVIE_ID_ERR_MESSAGE,
  DELETE_MOVIE_ERR_MESSAGE,
} = require("../utils/consts");

module.exports.createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  } = req.body;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  })
    .then((movie) => res.send({ data: movie }))
    .catch((err) => {
      if (err.name === "ValidationError") {
        next(new BadRequestError(MOVIE_DATA_ERR_MESSAGE));
      } else {
        next(err);
      }
    });
};

module.exports.deleteMovieById = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then((movie) => {
      if (!movie) {
        next(new NotFoundError(MOVIE_ID_ERR_MESSAGE));
      } else if (req.user._id !== movie.owner.toString()) {
        next(new ForbiddenError(DELETE_MOVIE_ERR_MESSAGE));
      } else {
        Movie.findByIdAndRemove(req.params.movieId).then((removedMovie) => {
          res.send({ data: removedMovie });
        });
      }
    })
    .catch((err) => {
      if (err.name === "CastError") {
        next(new BadRequestError(MOVIE_DATA_ERR_MESSAGE));
      } else {
        next(err);
      }
    });
};

module.exports.getMovies = (_, res, next) => {
  Movie.find({})
    .then((movie) => res.send({ data: movie }))
    .catch(next);
};
