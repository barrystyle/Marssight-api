var winston = require('winston');
var config = require('../config/config');

var logger = winston.createLogger({
  transports: [
    new (winston.transports.Console)({level: config.loggerLevel}),
  ],
  exitOnError: false, // do not exit on handled exceptions
});

module.exports.logger = logger;
