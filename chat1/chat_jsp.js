var express = require('express');
var http = require('http');
var app = express();

var server = http.createServer(app);
server.listen(3000);

app.get('/',function(req,res){
  alert('eefefefef');
  res.sendFile(__dirname + '/client_jsp.html');
});

var io = require('socket.io')(server);
io.on('connect',function(socket) {
  console.log('node server 클라이언트 접속');

  socket.on('disconnect',function(){
    console.log('클라이언트 접속 종료');
  });

  setInterval(function(){
    socket.emit('message','메시지');
  }, 3000);

});
