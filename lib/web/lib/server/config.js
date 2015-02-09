/**
  * Module dependencies.
  */
var url = require('url');
var config = {
};

config.dev = process.env.NODE_ENV !== 'production';

config.port = 80;

var conurl = url.parse(process.env.DB_PORT);
config.db = {
  host     : conurl.hostname,
  port     : conurl.port,
  user     : process.env.DB_ENV_MYSQL_USER,
  password : process.env.DB_ENV_MYSQL_PASS,
};

module.exports = config;