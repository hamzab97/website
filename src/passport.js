//libraries;
const http = require('http'); //import the package http and when you want to use it, type http.[methodname]
const express = require('express'); //import express
const fs = require('fs');
const bodyParser = require('body-parser');
const mysql = require('mysql');

var db = require('./database/db.js');

//initialize
var app = express();
const router = express.Router();//create express instance

app.use('/db', db);

//set routes
// app.use(bodyParser.urlencoded({extended: false}));

var passport = require('passport');
let localStrategy = require('passport-local').Strategy;

let userQuery = "SELECT * FROM users";

router.get('/login', function(req, res){
    res.render('login')
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

passport.use('local-login', new localStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) { // callback with email and password from our form

        connection.query("SELECT * FROM `users` WHERE `username` = '" + username + "'",function(err,rows){
            if (err)
                return done(err);
            if (!rows.length) {
                return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
            }

            // if the user is found but the password is wrong
            if (!( rows[0].password == password))
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

            // all is well, return successful user
            console.log(rows);
            return done(null, rows[0]);

        });
    }
));

module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        connection.query("SELECT * FROM users WHERE username = " + id, function (err, rows) {
            done(err, rows[0]);
        });
    });

};

router.post('/login', passport.authenticate('local', {successRedirect:'/blog', failureRedirect:'/users/login', failureFlash: true}), //authenticate method, redirect to routes on success or failure
    function(req, res){
        res.redirect('/blog');
    }
);

module.exports = router;