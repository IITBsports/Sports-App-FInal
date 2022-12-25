const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RunningEventScoreSchema = new Schema({
      // id: { type: String },
      sport: { type: String },
      type: { type: String },
      typeofScore: { type: String },
      Eventtype: { type: String },
      match_title: { type: String },
      match_type: { type: String },
      match_review: { type: String },
      Team_1: [{ type: String }],
      Team_1Score: { type: Number },
      Team_1Name: { type: String },
      Team_2: [{ type: String }],
      Team_2Score: { type: Number },
      Team_2Name: { type: String },
      Team_3: [{ type: String }],
      Team_3Score: { type: Number },
      Team_3Name: { type: String },
      Team_4: [{ type: String }],
      Team_4Score: { type: Number },
      Team_4Name: { type: String },
}, { collection: 'RunningEventScore' });

const RunningEventScore = mongoose.model('RunningEventScore', RunningEventScoreSchema);
module.exports = RunningEventScore;
