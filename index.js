/**
 * Created by lmssrinivas on 3/16/17.
 */


var config = require('./config/config');

var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');
var scribeLog = require('scribe-js')();
var port = process.env.PORT || 8000;
var app = express();


// Logging
app.use(scribeLog.express.logger());
app.use('/logs', scribeLog.webPanel());

// Database- mongodb
mongoose.connect(config.mlabDB);
app.set('secretKey',config.secret); //Set secret key

var favicon = require('serve-favicon');

app.use(favicon(__dirname + '/dist/images/favicon.ico'));



//app.use(express.static('dist'));

app.set('views',path.join(__dirname,'dist'));
app.set('views engine','html');
app.engine('html',ejs.renderFile);

// Parsing request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

// Client side code
app.use(express.static(path.join(__dirname,'dist')));

app.listen(port,function (req,res) {
    console.log('Server is running on port : '+ port);
});


let routes = require('./server/routes/routes');
app.use('/',routes);

app.use('/*',function(req,res,next){
    res.render('index.html');
    next();
});
