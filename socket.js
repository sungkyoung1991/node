var net  = require('net');

net.Server : 소켓서버
net.Socket : 소켓

var server = net.createServer([options],[connectionListener])

server.listen(port[,host][,backlog][,callback]) : 클라이언트 접속 대기

server.close([callback]) :추가 접속을 받지 않는다.

server.getConnetions(callback) : 연결갯수

server.address() : 서버주

서버 이벤트 : net.server

listening : 포트 바인딩, 접속 가능한 상태 이벤트

connetion : 클라이언트 접속 이벤트

close : 서버 닫기(연결된 소켓이 없을 때만 발생)

error : 에러
