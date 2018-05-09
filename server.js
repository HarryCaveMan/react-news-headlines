const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require('./controllers/routes');
const PORT = process.env.PORT || 8080;
// Initialize Express
var app = express();

//mongoose.connect("mongodb://harris:12345@ds147864.mlab.com:47864/heroku_xf7209r9");
// Configure middleware
mongoose.connect("mongodb://Harris:M4sterB4ws@ds061198.mlab.com:61198/heroku_j5pdttpr");

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
// Use express.static to serve the public folder as a static directory
app.use(routes);

app.listen(PORT, () => console.log('listening on: '+PORT));