/** @type {import("express").RequestHandler}  */
const mongoose = require('mongoose');
const AdminUser = require('./model/adminuser');


async function adminlogin(request, response){
    username = request.username;
    password = request.password;

    mongoose.connect(url, { useMongoClient: true }, async function(err){
        if(err) 
        ans = await AdminUser.find({username: username, password: password})
    })
}

async function adminResetPassword(request, response){

}

async function adminForgotPassword(request, response){

}



module.exports = {adminlogin, adminResetPassword, adminForgotPassword};
