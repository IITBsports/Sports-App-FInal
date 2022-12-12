const mongoose = require('mongoose');
const Post = require('../models/post');
const User = require('../models/user');
const fileUpload = require('express-fileupload');

function addPost(request, response){
    var title = request.body.title;
    var desc = request.body.description;
    var date_created = new Date();
    var author_id = request.body.author_id;
    var tags = request.body.tags;
    var images = request.body.images;

    // var author = User.findById(author_id);

    var new_event = new Post({
        title: title,
        description: desc,
        date_created: date_created,
        author: author_id,
        tags: tags,
        images: images
    });
    new_event.save((err, doc)=>{
        if(err){ response.status(500).send(err);}
        else{
            response.status(200).json(doc);
        }
    });
}

function editPost(request, response){

    var id = request.body.id;
    var title = request.body.title;
    var desc = request.body.description;
    var tags = request.body.tags;
    var images = request.body.images;

    Post.findByIdAndUpdate(
        {id: id},
        {
            title: title,
            description: desc,
            tags: tags,
            images: images
        },
        (err, doc)=>{
            if(err){
                response.status(500).send(err).end();
                
            }
            return response.status(200).send(doc).end();
        }
    );
}

function deletePost(request, response){

    var id = request.body.id;
    Post.findByIdAndRemove(
        {id: id},
        (err, doc)=>{
            if(err){
                response.status(500).send(err).end();
                
            }
            return response.status(200).send(doc).end();
        }
    );
}

function getManyPosts(request, response){
    var number = request.body.number || request.query.number;
    console.log(number);
    var posts = Post.find().exec((err, doc)=>{
        if(err){
            response.status(500).send(err).end();
        }
        else{
            response.send(doc).status(200).end();
            console.log(doc);
        }
    });


}

function getPostDetailed(request, response){
    var post_id = request.body.id;
    var post = Post.findById(
        {id: id},
        (err, doc)=>{
            if(err){
                response.status(500).send(err).end();
                
            }
            response.status(200).send(post).end();
        }
    );
}

module.exports = {addPost, editPost, deletePost, getManyPosts, getPostDetailed};
