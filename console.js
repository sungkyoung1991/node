var fs = require('fs');

var output = fs.createWriteStream('stdout.log');
var errorOutput =fs.createWriteStream('error.log');


var Console = require('console').Console;
var logger = new Console(output,errorOutput);

logger.info('info message... kims');
logger.log('log message... kims2');

logger.error("에러남");
logger.warn('경고임');




// var obj ={
//   name : '김성경',
//   age : '28'
// };
//
// console.log('obj : ' , obj);
