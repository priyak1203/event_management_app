const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    category: String,
    venue: String,
    eventDate: String,
    eventTime: String,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('event', EventSchema);
