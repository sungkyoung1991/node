//서버쪽 코드

// 클라이어튼 접속 이벤트 - 소켓 배열 저장.
var clientList = [];
var server = new.createServer(function(socket){
  var nickname = 'guest' + Math.floor(Math.random()*100);
  clientList.push({nickname:nickname,socket:socket}});
});


// 데이터 도착 이벤트 , 모든 소켓에 쓰기
socket.on('data',function(data){
  var message = data.toString('utf-8');
  clientList.forEach(function(client){
    var socket = client.socket;
    socket.write(message);
  })
})


if(message == '\\close'){
  //클라이언 접속 종료
  socket.end();
}

else if('message.indexOf('\\rename') != -1'){
  //닉네임 변경.
}
