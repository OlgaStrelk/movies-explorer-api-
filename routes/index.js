const router = require('express').Router();
const { createUser, login } = require('../controllers/auths');
// const isAuthorized = require('../middlewares/isAuthorized');
// const { userValidator } = require('../middlewares/validator');
const NotFoundError = require('../utils/errors/NotFoundError');
const { NOT_FOUND_PAGE_ERR_MESSAGE } = require('../utils/consts');

router.post('/signup', createUser);

router.post('/signin', login);

// router.use(isAuthorized);

router.use('/movies', require('./movies'));

router.use('/users', require('./users'));

router.use((_, res, next) => {
  next(new NotFoundError(NOT_FOUND_PAGE_ERR_MESSAGE));
});

module.exports = router;
