//libraries
const http = require('http'); //import the package http and when you want to use it, type http.[methodname]
const express = require('express'); //import express
const fs = require('fs');
const mysql = require('mysql');
const bodyParser = require('body-parser');

//local dependencies
var db = require('./database/db.js');
// const api = require('./routes/api.js');
var passport = require('./passport');

//initialize
const app = express();//create express instance

//set routes
app.use('/static', express.static('public')); //find directory public and whatever is in public is going to be accessible to the client under the endpoint static
app.use(express.static('src/views'));
app.use(bodyParser.urlencoded({extended: false}));
// app.use(api);
app.use('/db', db);
app.use('/passport', passport);

app.get('/', function (req, res) {
    res.sendFile('index.html', {root:'src/views'});
});

app.get('/blog', function(req, res){
    res.sendFile('blog.html', {root:'src/views'}); //sending to the server
    //app.get is a method of express
    // res.sendfile('pageUnderConstruction.html', {root:'src/views'});
});

app.get('/shopifyChallenge', function(req, res){
    res.sendfile('pageUnderConstruction.html', {root:'src/views'});
    // res.sendFile('shopifyChallenge.html', {root:'src/views'});
});

app.get('/blog.html', function(req, res){
    // res.sendFile('blog.html', {root:'src/views'}); //sending to the server
    //app.get is a method of express
    res.sendfile('pageUnderConstruction.html', {root:'src/views'});
});

app.get('/shopifyChallenge.html', function(req, res){
    res.sendfile('pageUnderConstruction.html', {root:'src/views'});
    // res.sendFile('shopifyChallenge.html', {root:'src/views'});
});

const server = http.Server(app); //create instance of http server using express instance

const port = 3000//process.env.port; //listen on port 3000
server.listen(port, function(){ //opening up http requests on your machine
    console.log('Server running on port: ' + port);
});