var express    = require('express');
var http       = require('http');
var bodyParser = require('body-parser');
var morgan     = require('morgan');
var mongoose   = require('mongoose');
var cors       = require('cors');
var expressValidator = require('express-validator');
const path     = require('path');


var app        = express();
var server     = http.createServer(app);

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
// middlewares
//app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//validator
app.use(expressValidator());
// cors
app.use(cors());
// database
require('./db');
// add routes
require('./routes')(app);
// contact
var contactController = require('./contact/services/create');
app.post('/api/contact', contactController.contactPost);
// fire up express

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));
// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
