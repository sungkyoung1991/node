var http = require('http');

var server  = http.createServer(function(req,res){


  res.statusCode = 200;
  res.statusMessage = 'OK';

  res.setHeader('content-type','text/plain');

  res.write('<html><body><h1>hello world</h1></body></html>');
  res.end();
}).listen(3000);
