const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const eventSchema = new Schema({
  id: { type: String },
  tags: [{ type: String }],
  title: { type: String, required: true },
  description: { type: String, required: true },
  venue: { type: String },
  date_created: { type: Date, required: true },
  sport: { type: String },
  reg_url: { type: String },
  insta_url: { type: String },
  fb_url: { type: String },
  date: { type: String, required: true },
  images: { type: String },
  isPostEvent: { type: String },
  postEventDescription: { type: String },
  eventWinner_1: { type: String },
  eventWinner_2: { type: String },
  eventWinner_3: { type: String },

  // interested_count: { type: Number }
}, { collection: 'Event' });

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
