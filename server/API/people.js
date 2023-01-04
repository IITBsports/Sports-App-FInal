const mongoose = require('mongoose');
const People = require('../models/people');
const User = require('../models/user');
const fs = require('fs');

function addPeople(request, response) {
    console.log("EnteredaddPeople")

    var name = request.body.name;
    var about = request.body.about;
    var position = request.body.position;
    var sport = request.body.sport;
    var insta_url = request.body.insta_url;
    var fb_url = request.body.fb_url;
    var phone_no = request.body.phone_no;
    var gmail = request.body.gmail;
    var image = request.body.image;
    console.log(request.body);

    // var image_name = request.body.image.slice(
    //     image.indexOf(':') + 1,
    //     image.indexOf('/'),
    // );
    var base64result = request.body.image.split(',')[1];
    // console.log(base64result);
    var src = "./../client/src/assets/people/" + name + "_people.jpeg";
     console.log(src)
    fs.writeFile(src, base64result, 'base64', function (err) {
        if (err) {
            return response.status(500).send(err);
        }
        var new_event = new People({
            name: name,
            about: about,
            position: position,
            sport: sport,
            insta_url: insta_url,
            fb_url: fb_url,
            phone_no: phone_no,
            gmail:gmail,
            // image: title,
            image: name + "_people.jpeg",

        });
        new_event.save();
        // console.log("Hi")
        return 0;

    })

}

function editEvent(request, response) {
    console.log(request.body.id)
    var id = request.body.id;

    var title = request.body.title;
    var desc = request.body.desc;
    var venue = request.body.venue;
    var date_created = new Date();
    var author_id = request.body.author_id;
    var sport = request.body.sport;
    var date = request.body.date;
    var tags = request.body.tags;
    var image = request.body.image;
    var reg_url = request.body.url;
    var insta_url = request.body.insta_url;
    var fb_url = request.body.fb_url;
    var isPostEvent = request.body.isPostEvent;
    var postEventDescription = request.body.postEventDescription;
    var eventWinner_1 = request.body.eventWinner_1;
    var eventWinner_2= request.body.eventWinner_2;
    var eventWinner_3= request.body.eventWinner_3;    
    var author = User.findById(author_id);
    console.log(request.body);

    var image_name = request.body.image.slice(
        image.indexOf(':') + 1,
        image.indexOf('/'),
    );
    var base64result = request.body.image.split(',')[1];
    console.log(image_name);

    var src = "./../client/src/assets/" + title + ".jpeg";
    console.log(src)
    //     data = {
    //         id:id,
    //         title: title,
    //         description: desc,
    //         venue: venue,
    //         date_created: date_created,
    //         author: author_id,
    //         date: date,
    //         tags: tags,
    //         sport: sport,
    //         images: title + ".jpeg",
    //         reg_url: reg_url,
    //         insta_url: insta_url,
    //         fb_url: fb_url,
    //         isPostEvent: isPostEvent,
    //         postEventDescription: postEventDescription,
    //         eventWinner: eventWinner
    //     }
    //     Event.findByIdAndUpdate(req.params.id, {
    //         $set: req.body
    //   }, (error, data) => {
    //         if (error) {
    //               return next(error);
    //               console.log(error)
    //         } else {
    //               res.json(data)
    //               console.log('Book updated successfully!')
    //         }
    Event.findByIdAndUpdate(id,
        {
            id: id,
            title: title,
            description: desc,
            venue: venue,
            date_created: date_created,
            author: author_id,
            date: date,
            tags: tags,
            sport: sport,
            images: title + ".jpeg",
            reg_url: reg_url,
            insta_url: insta_url,
            fb_url: fb_url,
            isPostEvent: isPostEvent,
            postEventDescription: postEventDescription,
            eventWinner_1: eventWinner_1,
            eventWinner_2: eventWinner_2,
            eventWinner_3: eventWinner_3,
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

function deleteEvent(request, response) {

    var id = request.body.id;
    Event.findByIdAndRemove(
        { id: id },
        (err, doc) => {
            if (err) {
                response.status(500).send(err);

            }
            return response.json(doc);
        }
    );
}

function getManyEvents(request, response) {
    var filter = request.filter;
    var number = request.number;
    var events = Event.find(filter).sort({ date_created: 1 }).limit(number).exec((err, doc) => {
        if (err) {
            return response.status(500).send(err);
        }
    });
    var nondetailed = [];
    for (singleevent in events) {
        nondetailed.push({
            "image": singleevent.image,
            "title": singleevent.title,
            "somedesc": String.slice(0, 40, singleevent.description) + "...",
        })
    }
    return response.send(nondetailed).status(200);

}

function getEventDetailed(request, response) {
    var event_id = request.body.id;
    var event = Event.findById(
        { id: id },
        (err, doc) => {
            if (err) {
                response.status(500).send(err);
            }
        }
    );
    return response.status(200).send(event);
}

function incrementInterests(event_id, num) {
    Event.findByIdAndUpdate({ _id: event_id }, { $inc: { "interested_count": num } }, (err, doc) => {
        if (err) return { err: err };
        return { doc: doc };
    })
}

module.exports = { addPeople, editEvent, deleteEvent, getManyEvents, getEventDetailed, incrementInterests };
