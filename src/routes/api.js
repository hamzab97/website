// //contain routes for blog posts
// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');
// const fs = require('fs');
// const http = require('http'); //import the package http and when you want to use it, type http.[methodname]
//
//
// const router = express.Router();
//
// function getConnection(){
//     return mysql.createConnection({
//         host: 'localhost',
//         user: 'hamza',
//         password: '0000',
//         database: 'blogPostsWebsite'
//     });
// }
//
// router.get('/post', function(req, res){
//     console.log("fetching users");
//
//     const connection = getConnection();
//
//     const query = "SELECT * FROM blogPosts"; //select * from tableName;
//     connection.query(query, function(err, rows, fields){
//         if (err){
//             console.log("Failed to query. Error " + err);
//             res.sendStatus(500); //error 500 is server  error
//         }
//         console.log("I think we fetched users successfully");
//         res.json(rows);
//     });
// });
//
// router.post('/post', function(req, res){
//     console.log("story: " + req.body.story);
//     let story = req.body.story;
//     var d = new Date();
//     let time =  d.toDateString() + " " + d.toLocaleTimeString();
//     console.log("time: " + time);
//     let queryString = "INSERT INTO blogPosts (user_name, story, time) VALUES ('hamza', ?, ?)";
//     getConnection().query(queryString, [story, time], function(err, results, fields){
//         if (err){
//             console.log("Query failed to insert new user " + err);
//             res.sendStatus(500);
//             return;
//         }
//         console.log("Insert successfully, story: " + results);
//     });
// });
//
// module.exports = router;