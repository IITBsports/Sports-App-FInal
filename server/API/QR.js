const mongoose = require('mongoose');
const QRLog = require('../models/qr-register');

function addQRLog(request, response){

    var ldap = request.body.ldap;

    var lastrecord = QRLog.find(ldap).sort({timestamp: "desc"}).limit(1);

    if(lastrecord[0]!=undefined && lastrecord[0].duration=="_"){
        intime = Number(lastrecord[0].timestamp)
        outtime = Math.floor(Date.now());
        duration = String(outtime-intime);
        id = lastrecord[0]._id;
        resp = QRLog.findByIdAndUpdate(id, {duration: duration}, (err, doc)=>{
            if(err){
                return response.status(500).send(err);
            }
            return response.status(200).send(doc);
        })
    }
    else{
        newrec = new QRRegister({
            name: request.body.name,
            ldap: request.body.ldap,
            venue: request.body.venue,
            timestamp: Date.now(),
            date: (new Date(Date.now())).toUTCString(),
            duration: "_",
        })
        newrec.save(function(err){
            if(err){
                response.status(500).json({status: "fail", "error": err})
                throw err;
            }
            
            return response.status(200).json({status:"success"})
            
        });
    }


}

function getQRLogByID(request, response){
    var id = request.id;
    QRLog.find({_id: id}).sort({timestamp: 'desc'}, (err, doc)=>{
        if(err){
            return response.status(500).send(err);
        }
        return response.json(doc);
    })
}

function getQRLogByDate(request, response){

}


module.exports = {addQRLog, getQRLogByDate, getQRLogByID};