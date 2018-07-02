const express = require('express');
const express-session = require('express-session');

var app = express();
app.use(session(OPTION));

name : 세션 id의 키 이름(쿠키). 기본값은 connect.sid
resave : 변경이 없어도 저장.
secret : 세션 id 서명
saveUninitialized : 세션 초기화 전에도 저장
store : 세션 저장소
cookie : 쿠키 파서 옵션. 쿠키 파서 없이 사용 가능.


req.session

var sessionID = req.sessionID;
req.session.visit = '123'
var visit = req.session.visit;


//session store 세션을 데이터베이스에 저장.
connect-mongo
connect-redis

var sessionStoreOptions={
  url:'mongodb://localhost:27017/session'
};

app.use(session({
  store.new MongoStore(sessionStoreOptions)
}));
