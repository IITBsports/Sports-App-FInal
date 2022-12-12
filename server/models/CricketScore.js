const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CricketScoreSchema = new Schema({
      sport: { type: String },
      type: { type: String },
      typeofScore: { type: String },
      Eventtype: { type: String },
      match_title: { type: String },
      match_type: { type: String },
      match_review: { type: String },
      Team_a: [{ type: String }],
      Team_aRuns: { type: Number },
      Team_awickets: { type: Number },
      Team_b: [{ type: String }],
      Team_bRuns: { type: Number },
      Team_bwickets: { type: Number },



}, { collection: 'CricketScore' });



const CricketScore = mongoose.model('CricketScore', CricketScoreSchema);
module.exports = CricketScore;
