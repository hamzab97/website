const http = require('http'); //import the package http and when you want to use it, type http.[methodname]
const express = require('express'); //import express
const fs = require('fs');
const db = require('../database/db.js');
const bodyParser = require('body-parser');

const router = express.Router();

//Bring in models
let Post = require('../models/blogPost.js');

router.get('/whoami', function(req, res){           //for authentication of a user object
    res.send({
        name: "anon",
        post: "hoi",
        date: "may 5"
    });
});

router.get('/user', function(req, res){
    res.send({
        name: "anon",
        post: "hoi",
        date: "may 5"
    });
});

//get request
router.get('/posts', function(req, res){ //return all the posts in the database
    Post.find({}, function(err, posts){ //posts is an array of Post in the database
        res.send(posts); //call back function, send posts
    });
});

//post request - query to the db
router.post('/post', function(req, res){
    let newPost = new Post({
        "name": req.body.name,
        "post": req.body.post,
        "date": req.body.date
    });//story created
    //now save the story to db
    newPost.save(function(err, post){
        if (err) console.log(err);
    });
    res.send({});
});

module.exports = router;