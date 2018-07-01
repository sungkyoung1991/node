var winston=require('winston');

log(level,MESSAGE);
log(MESSAGE);

winston.info('Info Message');
winston.warn('Warning Message');
winston.error('Error Message');

winston.log('info','Info Message');
winston.log('warn', 'Warn Message');

winston.add(winston.transprots.File,{filename:'service.log'});

var logger = new winston.Logger({
  transprots:[
    new winston.transprots.Console();
    new winston.transprots.File({
      name : 'error-logger',
      filename:'service-error.log',
      level:'error'
    })
  ]
});

logger.error('Error Message');
logger.info('Info Message');
logger.warn('Warn Message');


// ---------------------- dail rotate file


var winston = require('winston');

winston.add(require('winston-daily-rotate-file'),{datePattern:'yyyMMdd',filename:'service.log'});

logger.error('Error Message');
logger.info('Info Message');
logger.warn('Warn Message');
