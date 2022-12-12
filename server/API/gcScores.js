const mongoose = require('mongoose');
const RunningEventScore = require("../models/RunningEventScore");
const AvsBScore = require("../models/AvsBScore");
const CricketScore = require("../models/CricketScore");

function addRunningEventScore(request, response) {

}
function updateRunningEventScore(request, response) {

    console.log(request.params.id + " AA gaya na")
    var id = request.params.id;

    var sport = request.body.sport;
    var type = request.body.type;
    var typeofScore = request.body.typeofScore;
    var Eventtype = request.body.Eventtype;
    var match_title = request.body.match_title;
    var author_id = request.body.author_id;
    var match_type = request.body.match_type;
    var match_review = request.body.match_review;
    var Team_1 = request.body.Team_1;
    var Team_1Score = request.body.Team_1Score;
    var Team_1Name = request.body.Team_1Name;
    var Team_2 = request.body.Team_2;
    var Team_2Score = request.body.Team_2Score;
    var Team_2Name = request.body.Team_2Name;
    var Team_3 = request.body.Team_3;
    var Team_3Score = request.body.Team_3Score;
    var Team_3Name = request.body.Team_3Name;
    var Team_4 = request.body.Team_4;
    var Team_4Score = request.body.Team_4Score;
    var Team_4Name= request.body.Team_4Name;
    // var author = User.findById(author_id);
    
    console.log(request.body);
    RunningEventScore.findByIdAndUpdate(id,
        {
            id: id,
            sport: sport,
            type: type,
            typeofScore: typeofScore,
            Eventtype: Eventtype,
            match_title: match_title,
            match_type: match_type,
            match_review: match_review,
            Team_1: Team_1,
            Team_1Score: Team_1Score,
            Team_1Name: Team_1Name,
            Team_2: Team_2,
            Team_2Score: Team_2Score,
            Team_2Name: Team_2Name,
            Team_3: Team_3,
            Team_3Score: Team_3Score,
            Team_3Name: Team_3Name,
            Team_4: Team_4,
            Team_4Score: Team_4Score,
            Team_4Name: Team_4Name,
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
function deleteRunningEventScore(request, response) {
    var id = request.params.id;
    RunningEventScore.findByIdAndRemove(
        { id: id },
        (err, doc) => {
            if (err) {
                response.status(500).send(err);

            }
            return response.json(doc);
        }
    );

}

function addAvsBScore(request, response) {

}

function updateAvsBScore(request, response) {

    console.log(request.params.id + " AA gaya na")
    var id = request.params.id;

    var sport = request.body.sport;
    var type = request.body.type;
    var typeofScore = request.body.typeofScore;
    var Eventtype = request.body.Eventtype;
    var match_title = request.body.match_title;
    var author_id = request.body.author_id;
    var match_type = request.body.match_type;
    var match_review = request.body.match_review;
    var Team_A= request.body.Team_A;
    var Team_AScore= request.body.Team_AScore;
    var Team_AName= request.body.Team_AName;
    var Team_B= request.body.Team_B;
    var Team_BScore= request.body.Team_BScore;
    var Team_BName = request.body.Team_BName;
    
    console.log(request.body);
    AvsBScore.findByIdAndUpdate(id,
        {
            id: id,
            sport: sport,
            type: type,
            typeofScore: typeofScore,
            Eventtype: Eventtype,
            match_title: match_title,
            match_type: match_type,
            match_review: match_review,
            Team_A: Team_A,
            Team_AScore: Team_AScore,
            Team_AName: Team_AName,
            Team_B: Team_B,
            Team_BScore: Team_BScore,
            Team_BName: Team_BName,
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
function deleteAvsBScore(request, response) {
    var id = request.params.id;
    AvsBScore.findByIdAndRemove(
        { id: id },
        (err, doc) => {
            if (err) {
                response.status(500).send(err);

            }
            return response.json(doc);
        }
    );

}
function addCricketScores(request, response) {

}
function updateCricketScores(request, response) {

    console.log(request.params.id + " AA gaya na")
    var id = request.params.id;
    var sport = request.body.sport;
    var type = request.body.type;
    var typeofScore = request.body.typeofScore;
    var Eventtype = request.body.Eventtype;
    var match_title = request.body.match_title;
    var author_id = request.body.author_id;
    var match_type = request.body.match_type;
    var match_review = request.body.match_review;
    var Team_a= request.body.Team_a;
    var Team_aRuns= request.body.Team_aRuns;
    var Team_awickets= request.body.Team_awickets;
    var Team_b= request.body.Team_b;
    var Team_bRuns= request.body.Team_bRuns;
    var Team_bwickets = request.body.Team_bwickets;
    
    console.log(request.body);
    CricketScore.findByIdAndUpdate(id,
        {
            id: id,
            sport: sport,
            type: type,
            typeofScore: typeofScore,
            Eventtype: Eventtype,
            match_title: match_title,
            match_type: match_type,
            match_review: match_review,
            Team_a: Team_a,
            Team_aRuns: Team_aRuns,
            Team_awickets: Team_awickets,
            Team_b: Team_b,
            Team_bRuns: Team_bRuns,
            Team_bwickets: Team_bwickets,
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
function deleteCricketScores(request, response) {
    var id = request.params.id;
    CricketScore.findByIdAndRemove(
        { id: id },
        (err, doc) => {
            if (err) {
                response.status(500).send(err);

            }
            return response.json(doc);
        }
    );

}


module.exports = { updateRunningEventScore, updateAvsBScore,updateCricketScores , deleteRunningEventScore, deleteAvsBScore, deleteCricketScores};