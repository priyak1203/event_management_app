const { StatusCodes } = require('http-status-codes');
const Event = require('../models/eventModel');

// Create Event
const createEvent = async (req, res) => {
  const { title, venue } = req.body;
  const { userId, name } = req.user;

  const event = await Event.create({
    title,
    venue,
    owner: name,
    createdBy: userId,
  });

  res.status(StatusCodes.CREATED).json({ msg: 'event created' });
};

// Get All Events
const getAllEvents = async (req, res) => {
  const events = await Event.find();
  res.status(StatusCodes.OK).json({ events, count: events.length });
};

// Get Events from a particular User
const getUserEvents = async (req, res) => {
  res.json({ msg: 'User Events' });
};

// Get Single Event
const getSingleEvent = async (req, res) => {
  res.json({ msg: 'Single Event' });
};

// Update Event
const updateEvent = async (req, res) => {
  res.json({ msg: 'Update Event' });
};

// Delete Event
const deleteEvent = async (req, res) => {
  res.json({ msg: 'Delete Event' });
};

module.exports = {
  createEvent,
  getAllEvents,
  getUserEvents,
  getSingleEvent,
  updateEvent,
  deleteEvent,
};
