const express = require('express');
const { login, register } = require('../controllers/authController');
const {
  validateRegisterInput,
  validateLoginInput,
} = require('../middlewares/validation');

const router = express.Router();

router.post('/register', validateRegisterInput, register);
router.post('/login', validateLoginInput, login);

module.exports = router;
