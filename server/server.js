var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/cookedin');

require('./config/middleware.js')(app, express);

app.listen(1337);

module.exports = app;


