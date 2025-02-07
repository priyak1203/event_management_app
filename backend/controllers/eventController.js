// Create Event
const createEvent = async (req, res) => {
  res.json({ msg: 'Create Event' });
};

// Get All Events
const getAllEvents = async (req, res) => {
  res.json({ msg: 'All Events' });
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
