const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const matchSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  venue: {type:String},
  date: {type: Date, required: true},
  tags:[{type:String}], 
  teamA: {type: String},
  teamB: {type: String},
  team1score: {type: String, default: "0"},
  team2score: {type: String, default: "0"},
  team1details: {type: Object},
  team2details: {type: Object},
  islive: {type: Boolean, required: true, default: false}
}, { collection : 'Match' });
 
const Match = mongoose.model('Match', matchSchema);
module.exports = Match;