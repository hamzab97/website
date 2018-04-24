const mongoose = require('mongoose');

//set up DB connection
const mongoURL = 'mongodb://localhost/blogPosts';//mongo url connection

mongoose.connect(mongoURL);
mongoose.Promise = global.Promise;

let db = mongoose.connection;

//check connection
db.once('open', function(){
    console.log("connected to mongoDB");
});



//db error handling
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;