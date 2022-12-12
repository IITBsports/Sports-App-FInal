const User = require("../models/user");

function check_user(user_id, cert_name){
    return User.findOne({_id: user_id},(err, doc)=>{
        if(err) return err;
        if(!doc) return {error: "user not found"};
        certs = doc.certificates;
        if(certs.includes(cert_name)){
            return "positive";
        }
        return "negative";
    })
}

function getCertificate(request, response){
    user_id = request.user_id;
    cert_name = request.cert_name;
    // let check = check_user(user_id, cert_name);
    check = "positive";
    if(check === "positive"){
        return response.sendFile("../assets/certificates/"+cert_name+".jpg", {root: __dirname});
    }
    else return response.status(500).send({err: "err"});
}

module.exports = { getCertificate, check_user};