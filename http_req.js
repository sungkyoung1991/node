var url = require('url');

var http = require('http');

// var server  = http.createServer(function(req,res){
//   res.end('hello.world');
// }).listen(3000);

var server = http.createServer(function(req,res){

  console.log('method : ' , req.method);
  console.log('url : ', req.url);
  console.log('headers : ' , req.headers['user-agent']);

  res.write('hihi~~');
  res.end();

}).listen(3000);
