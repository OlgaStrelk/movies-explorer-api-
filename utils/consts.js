//ERROR MESSAGES
//auth
const CONFLICT_ERR_MESSAGE = "Данный email уже занят";
//user
const USER_ID_ERR_MESSAGE = "Пользователь с таким id не найден";
const USER_DATA_ERR_MESSAGE = "Переданы некорректные данные пользователя";
//movie
const MOVIE_DATA_ERR_MESSAGE = "Переданы некорректные данные фильма";
const MOVIE_ID_ERR_MESSAGE = "Фильм с указанным _id не найден";
const DELETE_MOVIE_ERR_MESSAGE = "Отсутствуют права для удаления данного фильма"
//page
const NOT_FOUND_PAGE_ERR_MESSAGE = "Страница не найдена";

module.exports = {
  CONFLICT_ERR_MESSAGE,
  USER_ID_ERR_MESSAGE,
  USER_DATA_ERR_MESSAGE,
  NOT_FOUND_PAGE_ERR_MESSAGE,
  MOVIE_DATA_ERR_MESSAGE,
  MOVIE_ID_ERR_MESSAGE,
  DELETE_MOVIE_ERR_MESSAGE
};
