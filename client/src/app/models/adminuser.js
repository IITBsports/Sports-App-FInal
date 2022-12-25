const mongoose = require('mongoose');
const schema = mongoose.Schema;

const AdminUserSchema = new schema({
    position: {type: String},
    username: {type: String},
    password: {type: String}
}, {collection: 'adminuser'});

const AdminUser = mongoose.model('adminUser', AdminUserSchema);
module.exports= AdminUser;
