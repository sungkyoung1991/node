var fs  = require('fs');

var is = process.stdin;
var os = fs.createWriteStream('./output.txt');

os.on('pipe',function(src){
  console.log('pipe event');
});

//exit 이벤트 발생시 파이프 연결 해제

is.on('data',function(data){
  if(data.trim()=='exit'){
    is.unpipe(os);
  }
});

is.pipe(os);
