const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const PointsSchema = new Schema({
      title: { type: String, required: true },
      sport:{ type: String, required: true },
      first_place: [{ type: String, required: true }],
      second_place: [{ type: String }],
      third_place: [{ type: String }],
      fourth_place: [{ type: String }],

      // interested_count: { type: Number }
}, { collection: 'Points' });

const Points = mongoose.model('Points', PointsSchema);
module.exports = Points;

