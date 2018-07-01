var net = require('net');

var ip = '127.0.0.1';
var port = 3000;

var socket = new net.Socket();

socket.connect({port: port ,host: ip },function(){

console.log('서버와 연결 성공');

socket.write('hello socket server \n');
socket.end();

  socket.on('data',function (data){
    var str = data. toString();

    console.log('서버가 보냄 : ', str );


  });

  socket.on('end',function(){

    console.log('서버 연결 종료');

  });
});  
