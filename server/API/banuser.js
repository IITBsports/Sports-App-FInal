const mongoose = require('mongoose');
const fs = require('fs');
const banUser = require('../models/banUser');


function editBanUser(request, response) {
    // console.log(request.body.id)

    var id = request.params.id;
    var BanUser = request.body.BanUser;
    console.log(request.body);
    banUser.findByIdAndUpdate(id,
        {
            id: id,
            BanUser: BanUser,
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

module.exports = { editBanUser };
