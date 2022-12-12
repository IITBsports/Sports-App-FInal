const User = require('../models/user');
const EVENTAPI = require("./events");

function addFollowedTags(request, response){
    user_id = request.body.user_id;
    tags_list = request.body.tags;

    User.findByIdAndUpdate({_id: user_id}, {$push: {followed_tags: {$each: tags_list}}}, (err, doc)=>{
        if(err){
            return response.status(500).send(err);
        }
        return response.status(200).json(doc);
    });
}

function addFollowedEvents(request, response){
    user_id = request.body.user_id;
    event_id = request.body.event_id;

    User.findByIdAndUpdate({_id: user_id}, {$push: {followed_events: event_id}}, (err, doc)=>{
        if(err){
            return response.status(500).send(err);
        }
        res = EVENTAPI.incrementInterests(event_id, 1);
        if(res.err) return response.status(500).send(err);
        return response.status(200).send("success");
    });

}

function removeFollowedTags(request, response){
    user_id = request.body.user_id;
    tags_list = request.body.tags;

    User.findByIdAndUpdate({_id: user_id}, {$pull: {followed_tags: {$each: tags_list}}}, (err, doc)=>{
        if(err){
            return response.status(500).send(err);
        }
        return response.status(200).json(doc);
    });
}

function removeFollowedEvents(request, response){
    user_id = request.body.user_id;
    event_id = request.body.event_id;

    User.findByIdAndUpdate({_id: user_id}, {$pull: {followed_events: event_id}}, (err, doc)=>{
        if(err){
            return response.status(500).send(err);
        }
        res = EVENTAPI.incrementInterests(event_id, -1);
        if(res.err) return response.status(500).send(err);
        return response.status(200).send("success");
    });

}