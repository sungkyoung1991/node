var express = require('express');
var http = require('http');
var app = express();

var server = http.createServer(app);
server.listen(3000);

// app.get('/',function(req,res){
//    res.sendFile(__dirname + '/client_jsp.html');
// });

var io = require('socket.io')(server);


var count =1;
io.on('connect',function(socket) {
  console.log('클라이언트 접속 : ' + socket.id);
  var name = 'user' + count++;

  io.to(socket.id).emit('change name', name);



  socket.on('disconnect',function(req,res){
    console.log('클라이언트 접속 종료');

    io.emit('disconnect',req);

  });

  socket.on('chat message', function(msg){
    console.log(name + ':'  + msg);

  });

  // setInterval(function(){
  //   socket.emit('message','메시지');
  // }, 3000);
});

io.on('connection', function(socket){
socket.on('chat message', function(msg,name){
  io.emit('chat message', msg,name);
});
});
