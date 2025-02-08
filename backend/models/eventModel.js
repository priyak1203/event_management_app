const mongoose = require('mongoose');
const { EVENT_CATEGORIES } = require('../utils/constants');

const EventSchema = new mongoose.Schema(
  {
    title: String,
    description: {
      type: String,
      default: 'Event Description',
    },
    category: {
      type: String,
      enum: Object.values(EVENT_CATEGORIES),
      default: EVENT_CATEGORIES.OTHERS,
    },
    venue: String,
    eventDate: String,
    eventTime: String,
    owner: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('event', EventSchema);
