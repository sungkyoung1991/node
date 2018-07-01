var net = require('net');

var server = net.createServer(function(socket){

  console.log('클라이언트 접속');
  socket.write('welcome to socket server \n');

  //클라이언트의 데이저 전송 이벤트

  socket.on('data',function(data){
    var textMsg = data.toString();
    console.log('Clientsend : ', textMsg);
  });

  //접속 종료 이벤트

  socket.on('end',function(){
    //클라이언트와 접속 종료
    console.log('접속종료');
  });
});

server.on('listening',function() {
  console.log('server is listeng');
});

server.on('close',function(){
  console.log('server closed')
});

server.listen(3000);
