//http 서버 준비
//socket.io 서버 준비
//socket.io 클라이어트 요청
//socket.io 클라이언트 초기화 및 서버 접속


var Server = require('socket.io');
var io = new Server(httpServer);

-> var io = require('socket.io')(server);

//연결 이벤트 connetion

var http = require('http');
var server = http.createServer(function(req,res){
  res.send('socket.io Sample');
});
server.listen(3000);

var express = require('express');
var http = require('http');
var app = express();
var server = http.Server(app);
server.listen(8080);

-> var io = require('socket.io').(server);

//

<script src = "/socket.io/socket.io.js"></script>
<script src = "https://cdn.socket.io/socket.io-1.3.7.js"></script>
