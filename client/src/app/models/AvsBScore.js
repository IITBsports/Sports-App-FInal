const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AvsBScoreSchema = new Schema({
      sport: { type: String },
      type: { type: String },
      typeofScore: { type: String },
      Eventtype: { type: String },
      match_title: { type: String },
      match_type: { type: String },
      match_review: { type: String },
      Team_A: [{ type: String }],
      Team_AScore: { type: Number },
      Team_AName: { type: String },
      Team_B: [{ type: String }],
      Team_BScore: { type: Number },
      Team_BName: { type: String },


}, { collection: 'AvsBScore' });



const AvsBScore = mongoose.model('AvsBScore', AvsBScoreSchema);
module.exports = AvsBScore;
