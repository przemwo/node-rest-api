// Dependencies
var express = require('express');
var path = require('path');

var mongoose = require('mongoose');
var configDB = require('./config/database.js');

var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

var cors = require('cors');

var port = process.env.PORT || 3003;

// MongoDB
mongoose.connect(configDB.url);

require('./config/passport')(passport);

// Express
var app = express();
// app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({
  secret: 'somestring',
  saveUninitialized: true,
  resave: true,
  cookie: {maxAge: 5000}
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
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

app.use('/books', require('./routes/books'));

require('./routes/routes.js')(app, passport);

app.use(express.static('./client'));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/index.html'));
});


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
