const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const BanUserSchema = new Schema({
      BanUser: [{ type: String }],
      // interested_count: { type: Number }
}, { collection: 'banUser' });

const BanUser = mongoose.model('banUser', BanUserSchema);
module.exports = BanUser;

