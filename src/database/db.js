//libraries
const http = require('http'); //import the package http and when you want to use it, type http.[methodname]
const express = require('express'); //import express
const fs = require('fs');
// const mysql = require('mysql');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;
var path = require('path');
//initialize

var router = express.Router();

router.get('/post', function(req, res){
    console.log("fetching blog posts");
    mongoClient.connect("mongodb://localhost:27017/blogPosts", function(err, db){
        if (err) throw err;
        let dbName = db.db('blogPosts');
        dbName.collection('stories').find({}).toArray(function(err, result){
            if (err) throw err;
            res.send(result);
            db.close();
        })
    })
});

router.post('/post', function(req, res){
    console.log("story: " + req.body.story);
    let story = req.body.story;
    var d = new Date();
    let time =  d.toDateString() + " " + d.toLocaleTimeString();
    let object = {name:"hamza", story:story, date:time};
    mongoClient.connect("mongodb://localhost:27017/blogPosts", function(err, db){
        if (err) throw err;
        let dbName = db.db('blogPosts');
        dbName.collection('stories').insertOne(object, function(err, res){
            if (err) throw err;
            console.log("inserted");
            db.close();
        })
    });
    res.redirect('back');
});

module.exports = router;
