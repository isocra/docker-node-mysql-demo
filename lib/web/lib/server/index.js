/**
  * Module dependencies.
  */
var express = require('express');
var path = require('path');
var join = path.join;
var config = require('./config');
var jade = require('jade');
var Batch = require('batch');
var fs = require('fs');
var exec = require('child_process').exec;
var debug = require('debug')('app:web');
var morgan = require('morgan');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var con = mysql.createConnection(config.db);


// db

con.connect();

// app

var app = module.exports = express();

// settings

app.use(morgan('dev'));
app.engine('jade', jade.__express);
app.set('view engine', 'jade');
app.set('views', __dirname+'/views');

// middleware

app.use(bodyParser.urlencoded());
app.use(methodOverride());

// GET /

app.get('/', function(req, res, next){
  res.render('index');
});


// POST /

app.post('/', function (req, res, next) {
  
  con.query('SHOW tables in '+req.body.database, function(err, data) {
    if (err) return next(err);
    var tables = data.map(function(table){
      for (var k in table){
        return table[k];
      }
    });
    res.render('index', {
      tables: tables
    });
  });

});

// 404

app.use(function(req, res, next){
  var err = new Error('404');
  err.status = 404;
  next(err);
});

// error

app.use(function(err, req, res, next){
  debug(err.message);
  res.send(err.status || 500, err.message);
});
