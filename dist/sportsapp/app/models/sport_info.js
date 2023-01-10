const mongoose = require('mongoose');
const schema = mongoose.Schema;

const SportSchema = new schema({
    name: {type: String},
    intro: {type: String},
    events: [{type: mongoose.Schema.Types.ObjectId,ref:'Event'}],
    rules:{type: String}, //this is why we should integrate latex in our app. otherwize rules are always a bunch of paragraphs. no lists, no headings, nothing.
    people:[{type: mongoose.Schema.Types.ObjectId,ref:'User'}],
    facilities:[{type:String}],
    manager:[{type: mongoose.Schema.Types.ObjectId,ref:'User'}],
    booking_info:[{time: Date, info:String}]
    //the one who controls the page of this sport, mostly secy.

}, {collection: 'Sport'});

const Sport = mongoose.model('Sport', SportSchema);
module.exports= Sport;