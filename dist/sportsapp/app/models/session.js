const mongoose = require('mongoose');
const schema = mongoose.Schema;

const SessionSchema = new schema({
    session_id: {type: String},
    ldap: {type: String},
    time: {type: Date},
    access_token: {type: String},
    refresh_token: {type: String},
}, {collection: 'session'});

const Session = mongoose.model('session', SessionSchema);
module.exports= Session;
