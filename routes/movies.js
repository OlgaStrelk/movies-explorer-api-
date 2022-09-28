const router = require("express").Router();

const { profileValidator } = require("../middlewares/validator");

router.get("/", getMovies);

router.post("/", createMovie);

router.delete("/_id", deleteMovie);

module.exports = router;
