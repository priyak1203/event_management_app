const { StatusCodes } = require('http-status-codes');
const { hashPassword, comparePassword } = require('../utils/passwordUtils');
const { UnauthenticatedError } = require('../errors/customError');
const { createJWT } = require('../utils/tokenUtils');
const User = require('../models/userModel');

// Register User
const register = async (req, res) => {
  // hash the password and save
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: 'user created' });
};

// Login User
const login = async (req, res) => {
  // check if the user exists
  const user = await User.findOne({ email: req.body.email });

  // check if the password is correct
  const isValidUser =
    user && (await comparePassword(req.body.password, user.password));

  if (!isValidUser) throw new UnauthenticatedError('invalid credentials');

  // setting up the token
  const token = createJWT({ userId: user._id, name: user.name });

  // filter user data to send
  const userInfo = user.toJSON();

  res
    .status(StatusCodes.OK)
    .json({ msg: 'user logged in', user: { ...userInfo, token } });
};

module.exports = {
  register,
  login,
};
