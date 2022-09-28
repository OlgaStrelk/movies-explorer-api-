const User = require("../models/user");
const NotFoundError = require("../utils/errors/NotFoundError");
const { USER_ID_ERR_MESSAGE } = require("../utils/consts");

module.exports.getProfile = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        next(new NotFoundError(USER_ID_ERR_MESSAGE));
      } else {
        res.send({
          data: user,
        });
      }
    })
    .catch(next);
};
