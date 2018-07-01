var fs = require('fs');

var os  = fs.createWriteStream('./sk.txt');

os.on('finish',function(){
  console.log('끝남..');
});

// os.write('1234');
// os.write('5678');
// os.end('89');

var is = process.stdin;
is.pipe(os);
