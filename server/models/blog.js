const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const blogSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date_created: {type: Date, required: true},
  images: { type: String },
  tags: [{ type: String }],
}, { collection : 'blog' });
 
const blog = mongoose.model('blog', blogSchema);
module.exports = blog;