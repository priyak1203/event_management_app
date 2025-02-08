const express = require('express');
const { createEvent, getAllEvents } = require('../controllers/eventController');
const { authenticateUser } = require('../middlewares/authentication');
const { validateEventInput } = require('../middlewares/validation');

const router = express.Router();

router
  .route('/')
  .post(authenticateUser, validateEventInput, createEvent)
  .get(authenticateUser, getAllEvents);

module.exports = router;
