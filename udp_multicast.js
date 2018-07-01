// 보내기
var socket= dgram.createSocket('udp4');

socket.send(msg,0,msg.length, 3000,'224.0.0.114',function(err){
  if(err){
    console.log('udp message sned error : ' , err);
    return;
  }
  console.log('udp message send success');
});

//받기
var socket = dgram.createSocket('udp4');
socket.bind(3000);

socket.on('listening',function(){
  socket.addMembership('224.0.114');
});

//메세지 이벤트
socket.on('message',function(msg,rinfo){
  console.log(rinfo.address,' >> ' , msg)
});
