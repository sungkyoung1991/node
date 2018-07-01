네임스페이스로 socket.io 연결 구분

같은 네임스페이스에서만 메시지 주고받음
기본네임스페이스 : /
커스텀 네임스페이스 : /name-space
//server
var io = require('socket.io')(server);

//client
var socket = io();

커스텀 네임 스페이스
-서버
var nsp = io.of('/custom-namespace');
-클라이언트
var nsp = io('/custom-namespace');

//서버
var system = io.of('/system');
system.on('connection',function(socket){
  console.log('system namespace'););
});
system.emit('message','notice!');

//클라이언트
var socket = io();

var sysNsp = io('http:/myserer.com/system');
sysNsp.on('connect',function(){
  console.log('System Namespace connect');
});
sysNsp.on('message',function(data){
  alert('System message : ' + data);
});


///////////////////////////////////룸

네임스페이스 내 채널
같은룸에서만 데이터 교환
룸에 입장 (join), 여러룸에 입장가능
룸에서 떠나기(leave)

var room;
socket.on('joinRoom',function(data){
  socket.leave(room);

  room = data.room;
  socket.join(room);
});

socket.on('chatInput',function(data){
  io.to(room).emit('chatMessage',chat);
});


///클라이언트
socket.emit('joinRoom',{room:room});

//채팅 메시지 수신
socket.on('chatMessage',function(data){
  var msg = data.['msg'];
  var nick = data['nick'];
  var str = nick + ':' + msg;
  //채팅메시지
  $('#message').append($'<li>').text(str);
});
});
