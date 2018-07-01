var http = require('http');

// var server  = http.createServer(function(req,res){
//   res.end('hello.world');
// }).listen(3000);

var server = http.createServer();

 server.on('request' ,  function(req,res){
   res.write('hello world');
   res.end();
 });

 server.listen(3000);
