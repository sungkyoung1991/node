// new Promise(function(){
//   //비동기 동작...
// });

//pending  : 동작완료전
//fulfilled : 비동기 동작 성공
//rejected : 동작 실패..

new Promise(function(fulfil,rejected){
  // 비동기 동작

  if(err){
    rejected(err);
  }else{
    fulfil(res);
  }

});
