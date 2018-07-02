const cookie-parser = require('cookie-parser');
const express = require('express');
const app = exrpess();
app.use(cookieParser());

res.cookie('last','2018.07.02');
res.cookie('visit','2');

const visit = req.cookies.visit;
const last = req.cookies.last;


쿠키 변조방지 singed

app.use(cookieParser('SCERET_KEY'));
res.cookie('signed','originalValue',{signed:true})
req.signedCookies.signed;

// 예제

app.use(function(req,res){
  //방문횟수를 저장하기 위한 visit쿠키
  var visit = parseInt(req.cookies.visit);
  if(!visit){visit=0;}
  visit = visit +1;
  res.cookie('visit',visit);

  //최종 방문 날짜를 기록하는 last쿠키
  var now = new Date();
  //yyyy.mm.dd
  var last = now.getFullYear() + '.' + (now.getMonth() + 1) + '.' + now.getDate();
  res.cookie('last',last);

  var info = {visit:visit , last:last};
  res.json(info);
});
