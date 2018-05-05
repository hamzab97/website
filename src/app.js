//libraries
const http = require('http'); //import the package http and when you want to use it, type http.[methodname]
const express = require('express'); //import express
const fs = require('fs');
const mysql = require('mysql');
const bodyParser = require('body-parser');

//local dependencies
// const db = require('./database/db.js');
// const api = require('./routes/api.js');

//initialize
const app = express();//create express instance

//set routes
app.use('/static', express.static('public')); //find directory public and whatever is in public is going to be accessible to the client under the endpoint static
app.use(express.static('src/views'));
app.use(bodyParser.urlencoded({extended: false}));
// app.use(api);
// app.use(db);

app.get('/', function (req, res) {
    res.sendFile('index.html', {root:'src/views'});
});

app.get('/blog', function(req, res){
    res.sendFile('blog.html', {root:'src/views'}); //sending to the server
    //app.get is a method of express
});

app.get('/shopifyChallenge', function(req, res){
    res.send("Page under construction");
    // res.sendFile('shopifyChallenge.html', {root:'src/views'});
});

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'hamza',
    password: '0000',
    database: 'blogPostsWebsite'
});

function getConnection(){
    return pool;
}

app.get('/post', function(req, res){
    console.log("fetching users");

    const connection = getConnection();

    const query = "SELECT * FROM blogPosts"; //select * from tableName;
    connection.query(query, function(err, rows, fields){
        if (err){
            console.log("Failed to query. Error " + err);
            res.sendStatus(500); //error 500 is server  error
        }
        console.log("I think we fetched users successfully");
        res.json(rows);
    });
});

app.post('/post', function(req, res){
    console.log("story: " + req.body.story);
    let story = req.body.story;
    var d = new Date();
    let time =  d.toDateString() + " " + d.toLocaleTimeString();
    console.log("time: " + time);
    let queryString = "INSERT INTO blogPosts (user_name, story, time) VALUES ('hamza', ?, ?)";
    getConnection().query(queryString, [story, time], function(err, results, fields){
        if (err){
            console.log("Query failed to insert new user " + err);
            res.sendStatus(500);
            return;
        }
        console.log("Insert successfully, story: " + results);
    });
});

const server = http.Server(app); //create instance of http server using express instance

const port = 3000; //listen on port 3000
server.listen(port, function(){ //opening up http requests on your machine
    console.log('Server running on port: ' + port);
});

