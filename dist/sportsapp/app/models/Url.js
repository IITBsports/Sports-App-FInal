const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const UrlSchema = new Schema({
      title: { type: String, required: true },
      description: { type: String, required: true },

      // interested_count: { type: Number }
}, { collection: 'Url' });

const Url = mongoose.model('Url', UrlSchema);
module.exports = Url;

