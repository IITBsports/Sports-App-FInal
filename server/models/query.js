const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const querySchema = new Schema({
      subject: { type: String,required: true },
      sport: { type: String },
      detail: { type: String },
      author:{ type: String},
      status:{ type: Number},
      feedback:{type: String},
      // ban_user:{type:Array}
      // author:{ type: Number}
      // interested_count: { type: Number }
}, { collection: 'Query' });

const QueryData = mongoose.model('Query', querySchema);
module.exports = QueryData;

