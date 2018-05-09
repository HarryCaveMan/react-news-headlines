const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
// Initialize Express
var app = express();

//mongoose.connect("mongodb://harris:12345@ds147864.mlab.com:47864/heroku_xf7209r9");
// Configure middleware
mongoose.connect("mongodb://Harris:M4sterB4ws@ds061198.mlab.com:61198/heroku_j5pdttpr");

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.json());
// Use express.static to serve the public folder as a static directory
require('./controllers/routes')(app);

app.listen(PORT, () => console.log('listening on: '+PORT));