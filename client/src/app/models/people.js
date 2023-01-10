const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const peopleSchema = new Schema({
//   id: { type: String },
//   tags: [{ type: String }],
  name: { type: String, required: true },
  about: { type: String },
  position: { type: String },
  sport: { type: String },
//   reg_url: { type: String },
  insta_url: { type: String },
  fb_url: { type: String },
  phone_no: { type: Number },
  gmail: { type: String },
//   date: { type: String, required: true },
  image: { type: String },
  // interested_count: { type: Number }
}, { collection: 'People' });

const People = mongoose.model('People', peopleSchema);
module.exports = People;
