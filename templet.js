// ejs

// jade

app.set('views',[템플릿 폴더]);
app.set('view engine',[템플릿 엔진]);

res.render(view[,locals],[,callback])

locals : 템플릿의 지역 변수로 설정될 데이터

callback  : 렌더링 콜백

응답종료.
