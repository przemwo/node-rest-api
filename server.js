// Dependencies
var express = require('express');

var mongoose = require('mongoose');
var configDB = require('./config/database.js');

var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var cors = require('cors');

var port = process.env.PORT || 3003;

// MongoDB
mongoose.connect(configDB.url);

// Express
var app = express();
app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({
  secret: 'somestring',
  saveUninitialized: true,
  resave: true
}));
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

require('./routes/routes.js')(app);



// app.use('/', function(req, res, next) {
//   var cookie = req.cookies.someName;
//   if(cookie === undefined) {
//     res.cookie('someName', 123, { maxAge: 5000, httpOnly: true});
//     console.log('Cookie has been set');
//   } else {
//     console.log('Cookie someName value: ' + cookie);
//   }
//   console.log('==============');
//   console.log(req.session);
//   res.send('Hello!');
// });

// Start server
app.listen(port);
console.log('api is running on port ' + port);
