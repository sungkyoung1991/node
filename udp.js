var dgram = require('dgram');

//메세지 받기
var socket = dgram.createSocket('udp4')
socket.bind(3000);

//메시지 전송
var message = new Buffer('hello');
socket.sned(message,0,message.length,PORT, ADDRESS, CALLBACK);


//멀티 캐스트(multicast)
//그룹에 포함된 여러 호스트에 메세지 보내기
그룹에가입 > socket.addMembership
