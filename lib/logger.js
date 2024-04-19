var winston = require('winston');
var config = require('../config/config');

const logger = winston.createLogger({
  level: config.loggerLevel,  // Set default level from your configuration
  transports: [
    new winston.transports.Console({
      level: 'error'  // This will be overridden by config.loggerLevel if set
    })
  ]
});


module.exports.logger = logger;
