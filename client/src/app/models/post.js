const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const postSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date_created: {type: Date, required: true},
  author: {type: Number, required:true},
  tags:[{type:String}], 
  images: [{type: String}]
}, { collection : 'Post' });
 
const Post = mongoose.model('Post', postSchema);
module.exports = Post;