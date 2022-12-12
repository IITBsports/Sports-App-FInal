const Event = require('../models/events');
const Post = require('../models/post');

function searchByKeyphrase(request, response){
    keyphrase = request.keyword;
    event_results = Event.find({$or: [
        {'title': {$regex: keyphrase}},
        {'description': {$regex: keyphrase}},
        {'venue': {$regex: keyphrase}},
        {'tags': {$regex: keyphrase}},
    ]});
    post_results = Post.find({$or:[
        {'title': {$regex: keyphrase}},
        {'description': {$regex: keyphrase}},
        {'tags': {$regex: keyphrase}}
    ]})
    return response.send({"event_results": event_results, "post_results": post_results}).status(200);
} 

function searchByTags(request, response){
    keyphrase = request.keyword;
    var filter = request.filter; 
    filter.tags = {$filter: keyphrase};
    event_results = Event.find(filter).sort({date: "desc"});
    post_results = Post.find(filter).sort({date: "desc"});
    return response.send({"event_results": event_results, "post_results": post_results}).status(200);
}
module.exports = {searchByKeyphrase, searchByTags};