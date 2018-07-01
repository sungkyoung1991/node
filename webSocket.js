
 // 연결 이벤트 connetion

 var http = require('http');
 var server = http.createServr(function(req,res){
   res.end('socket.io Sample');
 });

 server.listen(3000);

 var io = require('socket.io')(server);

 var express = require('express');

 var app = express();
 var server = http.Server(app);
 server.listen(8080);

var io = require('socket.io')(server);

// socket.io 클라이언트
 - http 서버에게 socket.io 초기화 html 요청
 - html 로딩 - 스크립트 로딩
 - socket.io 클라이언트 초기화
 - socket.io 서버 연결

 // 서버의 socket.io 클라이언트 html 응답
 app.get('/',function(req,res){
   res.sendFile(__kirname = '/client.html');
 });


 socket.io 클라이언트
 <script src = "/socket.io/socket.io.js"></script>
 <script src = "https://cdn.socket.io/socket.io-1.3.7.js"></script>

 클라이언트 소켓 클래스
 IO(url:String,opts:Object):Socket

 var socket = io();

 socket.io 클라이언트 이벤트
connect
error
disconnect
reconnect,reconnetiong,reconnect_error : 재접속

서버와 연결 끊어지면 자동 재접속 시도...



//데이터 교환
메시지 주고받기 - 이벤트기반
-메시지 이벤트 정의

이벤트 발생 : socket.emit();
socket.emit('EVENT',data);

-메시지 수신
 이벤트 리스너 등록 : socket.on()
 socket.on('EVENT',function(data){});
