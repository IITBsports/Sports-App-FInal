const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const qrregisterSchema = new Schema({
  name: { type: String, required: true },
  venue: { type: String, required: true },
  ldap: {type:String},
  timestamp: {type: String, required: true},
  duration: {type: String, default: "_"},
}, { collection : 'QrRegister' });
 
const QRRegister = mongoose.model('QrRegister', qrregisterSchema);
module.exports = QRRegister;