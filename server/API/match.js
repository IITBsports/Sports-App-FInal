const express = require('express');
const Match = require('../models/match');
const User = require('../models/user');


async function newMatch(request, response){
    var teamA = request.body.teamA;
    var teamB = request.body.teamB;
    var title = request.body.title;
    var venue = request.body.venue;
    var tags = request.body.tags;
    var desc = request.body.description;
    var date = request.body.date;

    match = new Match({
        teamA: teamA,
        teamB: teamB,
        title: title,
        venue: venue,
        tags: tags,
        description: desc,
        date: date,
        team1details: {},
        team2details: {},
        team1score: 0,
        team2score: 0,
        islive: false
    },
    (err, doc)=>{
        if(err){
            response.status(500).send(err).end();
        }
    }
    );

    match.save((err, doc)=>{
        if(err){
            response.status(500).send(err).end();
        }
        response.status(200).send(doc);
    });
}

async function updateScore(request, response){
    match_id = request.body.match_id;
    team1details = request.body.team1details;
    team2details = request.body.team2details;
    team1score = request.body.team1score;
    team2score = request.body.team2score;
    match = await Match.findByIdAndUpdate(
        {id: match_id},
        {
            team1details: team1details,
            team2details: team2details,
            team1score: team1score,
            team2score: team2score
        },
        {is_live: true},
        (err, doc)=>{
            if(err){
                response.send(err).status(500).end();
            }
        }
    )
    response.send(match).status(200).end();

}

async function startMatch(request, response){
    match_id = request.body.match_id;

    match = await Match.findByIdAndUpdate(
        {id: match_id},
        {is_live: true},
        (err, doc)=>{
            if(err){
                response.send(err).status(500).end();
            }
        }
    )
    response.send(match).status(200).end();

}



async function endMatch(request, response){
    match_id = request.body.match_id;

    match = await Match.findByIdAndUpdate(
        {id: match_id},
        {is_live: false},
        (err, doc)=>{
            if(err){
                response.send(err).status(500).end();
            }
        }
    )
    response.send(match).status(200).end();

}

async function getMatchBrief(request, response){
    number = request.body.number;
    only_active = request.body.only_active;
    current_date = new Date();
    if(only_active){
        matches = await Match.find({
            $or: [{is_live: true}, {date: {$gt: current_date}}]
        })
        .sort(
            {date: "desc"}
        )
        .limit(10)
        .exec(
            (err, doc)=>{
                if(err){
                    response.send(err).status(500).end();
                }
            }
        );
        response.send(matches).status(200).end();
    }

    else{
    matches = await Match.find()
        .sort(
            {date: "desc"}
        )
        .limit(10)
        .exec(
            (err, doc)=>{
                if(err){
                    response.send(err).status(500).end();
                }
            }
        );
    }
    ans = [];
    for(singlematch in matches){
        object = singlematch;
        object.team1details = {}
        object.team2details = {}
        push(ans, object)
    }
    response.status(200).send(ans).end();

}

async function getMatchDetailed(request, response){
    match_id = request.body.match_id;

    match_details = Match.find(
        {id: id},
        (err, doc)=>{
            if(err){
                response.status(500).send(err).end();
            }
        }
    );
    response.send(match_details).status(200).end();

}

async function editDescription(request, response){
    match_id = request.body.match_id;
    desc = request.body.description;
    match = await Match.findByIdAndUpdate(
        {id: match_id},
        {description: description},
        (err, doc)=>{
            if(err){
                response.send(err).status(500).end();
            }
        }
    )
    response.send(match).status(200).end();
}

module.exports = {newMatch, updateScore, editDescription, startMatch, endMatch, getMatchBrief, getMatchDetailed};
