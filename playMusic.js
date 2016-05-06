'use strict';

var express = require('express');
// var bodyParser = require('body-parser');
var app = express();
module.exports = app; // this line is only used to make testing easier.
var routes = require("./routes/");

// remember to plug in your router and any other middleware you may need here.
app.use("/", routes);
app.listen(3000);

//// conditional prevents a very esotetiric EADDRINUSE issue with mocha watch + supertest + npm test.
// if (!module.parent) {
//     app.listen(3000);
// }


//server.on('request', pipeline);
