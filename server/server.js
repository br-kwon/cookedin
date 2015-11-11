var app = require('express');
var mongoose = require('mongoose');

app = express();

mongoose.connect('mongodb://localhost/cookedin');

require('./config/middleware.js')(app, express);

app.listen(1337);

module.exports = app;


