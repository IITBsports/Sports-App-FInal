const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    roll_number: { type: String},
    type: { type: String },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone: [{ type: String }],
    email: { type: String },
    insti_address: { type: Object },
    program: { type: Object },
    sex: { type: String },
    work_report: { type: String },
    certificates: [{ type: String }],
    followed_tags: [{ type: String }],
    followed_events: [{ type: String }],
    is_admin: { type: Boolean},

}, { collection: 'User' });

const User = mongoose.model('User', userSchema);
module.exports = User;