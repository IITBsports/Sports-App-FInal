const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const ptsSchema = new Schema({
      Hostel: [{ type: String }],
      points: { type: String },
      // interested_count: { type: Number }
}, { collection: 'Pts' });

const Pts = mongoose.model('Pts', ptsSchema);
module.exports = Pts;

