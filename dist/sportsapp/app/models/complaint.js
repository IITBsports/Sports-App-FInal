const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const ComplaintSchema = new Schema({
      tags: [{ type: String }],
      title: { type: String, required: true },
      description: { type: String, required: true },
      venue: { type: String },
      date_created: { type: Date, required: true },
      sport: { type: String, },
      date: { type: String, required: true },
      images: { type: String },



      // interested_count: { type: Number }
}, { collection: 'Complaint' });

const Complaint = mongoose.model('Complaint', ComplaintSchema);
module.exports = Complaint;
