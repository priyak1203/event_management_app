const { body, param, validationResult } = require('express-validator');
const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} = require('../errors/customError');

const User = require('../models/userModel');
const { EVENT_CATEGORIES } = require('../utils/constants');

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        if (errorMessages[0].startsWith('no job')) {
          throw new NotFoundError(errorMessages);
        }
        if (errorMessages[0].startsWith('not authorized')) {
          throw new UnauthorizedError(errorMessages);
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

// validate register user input
const validateRegisterInput = withValidationErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format')
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError('email already exists');
      }
    }),
  body('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({ min: 8 })
    .withMessage('password must be atleast 8 characters long'),
]);

// validate login user input
const validateLoginInput = withValidationErrors([
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format'),
  body('password').notEmpty().withMessage('password is required'),
]);

// validate event input
const validateEventInput = withValidationErrors([
  body('title')
    .notEmpty()
    .withMessage('title is required')
    .isLength({ min: 4 })
    .withMessage('title should be minimum 4 characters')
    .isLength({ max: 20 })
    .withMessage('title should not be more than 20 characters'),
  body('category')
    .isIn(Object.values(EVENT_CATEGORIES))
    .withMessage('invalid event category'),
  body('venue').notEmpty().withMessage('venue is required'),
]);

module.exports = {
  validateLoginInput,
  validateRegisterInput,
  validateEventInput,
};
