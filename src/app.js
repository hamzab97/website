//libraries
const http = require('http'); //import the package http and when you want to use it, type http.[methodname]
const express = require('express'); //import express
const fs = require('fs');
const morgan = require('morgan');


//local dependencies
const db = require('./database/db.js');
const api = require ('./routes/api.js');     //uncomment this later

//initialize
const app = express();//create express instance
app.use(morgan('short'));

//set routes
app.use('/static', express.static('public')); //find directory public and whatever is in public is going to be accessible to the client under the endpoint static
app.use('/api', api);

app.get('/', function (req, res) {
    res.sendFile('index.html', {root:'src/views'});
});

app.get('/index.html', function (req, res) {
    res.sendFile('index.html', {root:'src/views'});
});

app.get('/blog', function(req, res){
    res.json(api);
    // res.sendFile('blog.html', {root:'src/views'}); //sending to the server
    //app.get is a method of express
});

app.get('/blog.html', function(req, res){
    res.sendFile('blog.html', {root:'src/views'}); //sending to the server
    //app.get is a method of express
});

app.get('/shopifyChallenge.html', function (req, res) {
    res.sendFile('shopifyChallenge.html', {root:'src/views'});
});

app.get('/shopifyChallenge', function(req, res){
    res.sendFile('shopifyChallenge.html', {root:'src/views'});
});

const server = http.Server(app); //create instance of http server using express instance

const port = 3000; //listen on port 3000
server.listen(port, function(){ //opening up http requests on your machine
    console.log('Server running on port: ' + port);
});

