const mongoose = require("mongoose"); //require mongoose

//create scheme
const blog_schema = new mongoose.Schema({
    name: String,
    post: String,
    date: String
});

const blogPost = mongoose.model("blogPost", blog_schema);
//export the model
module.exports = blogPost;