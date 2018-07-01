var http=require('http');
http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'});
  res.end('<h1> Hi, Im SK! </h1>');
}).listen(3000);

// terminal > node module_http.js > 127.0.0.1:3000
