// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

// MongoDB
mongoose.connect('mongodb://localhost/rest_test');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// app.use(function(req, res, next) {
//     var oneof = false;
//     if (req.headers.origin) { //req.headers.origin.match(/whateverDomainYouWantToWhitelist/g) ) {
//         res.header('Access-Control-Allow-Origin', req.headers.origin);
//         oneof = true;
//     }
//     if (req.headers['access-control-request-method']) {
//         res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
//         oneof = true;
//     }
//     if (req.headers['access-control-request-headers']) {
//         res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
//         oneof = true;
//     }
//     if (oneof) {
//         res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365);
//     }
//
//     // intercept OPTIONS method
//     if (oneof && req.method == 'OPTIONS') {
//         res.sendStatus(200);
//     } else {
//         next();
//     }
// });

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(3003);
console.log('api is running on port 3003');
