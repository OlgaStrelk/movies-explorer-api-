const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const UnauthorizedError = require('../utils/errors/UnauthorizedError');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator(email) {
          return validator.isEmail(email);
        },
        message: 'Не является email',
      },
    },

    password: {
      type: String,
      required: true,
      // validate: {
      //   validator(password) {
      //     return validator.isStrongPassword(password);
      //   },
      //   message: 'Пароль недостаточно надёжный',
      // },
      select: false,
    },

    name: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true,
    },


  },
  { versionKey: false, new: true, runValidators: true },
);

// userSchema.statics.findUserByCredentials = function (email, password) {
//   return this.findOne({ email })
//     .select('+password')
//     .then((user) => {
//       if (!user) {
//         return Promise.reject(
//           new UnauthorizedError('Неправильные почта или пароль'),
//         );
//       }

//       return bcrypt.compare(password, user.password).then((matched) => {
//         if (!matched) {
//           return Promise.reject(
//             new UnauthorizedError('Неправильные почта или пароль'),
//           );
//         }
//         return user;
//       });
//     });
// };

module.exports = mongoose.model('user', userSchema);