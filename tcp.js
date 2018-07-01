var server = net.createServer(function(socket){
  console.log('ConnectEvent',socket.remoteAddress);
});

server.on('listening'function(){
  console.log('Server is listeneing @ ' , server.address());
});

server.on('close' function(){
  console.log('Server Close');
});

//client

var socket = new net.Socket();
var option = {
  host = 'localhost',
  port = 3000
};

socket.connet(option,function(){

});

socket.write('he=llo node.js');

socket.on('data',function(chunk){
  //데이터 도착
});

socket.on('end',function(){
  //원격 호스트의 종료
})
