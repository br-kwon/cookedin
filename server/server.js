var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds053164.mongolab.com:53164/heroku_5mjzm2rh');

require('./config/middleware.js')(app, express);

var port = process.env.PORT || 1337;
app.listen(port, function() {
  console.log("Listening to " + port);
});

module.exports = app;


