//each(arr,iterator[,callback])

async.each(array, function(item, callback) {

  //배열 내 항목 item 을 사용하는 비동기 동작.

  callback(null);

}, function(err){

  //async.each 완료..
});
