const mongoose = require('mongoose');
const QueryData = require('../models/query');
const User = require('../models/user');
const fs = require('fs');


function editQuery(request, response) {
    // console.log(request.body.id)

    var id = request.params.id;
    var subject = request.body.subject;
    var sport = request.body.sport;
    var detail = request.body.detail;
    var author = request.body.author;
    var status = request.body.status;
    var feedback = request.body.feedback;
    console.log(request.body);
    QueryData.findByIdAndUpdate(id,
        {
            id: id,
            subject: subject,
            sport: sport,
            detail: detail,
            author: author,
            status: status,
            feedback: feedback,
        },
        (err, doc) => {
            if (err) {
                response.status(500).send(err);

            }
            console.log("Updated")
            return response.json(doc);
        }
    );
}

module.exports = { editQuery };
