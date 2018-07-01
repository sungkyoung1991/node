function task1(callback){
  console.log('task1 start...');
  setTimeout(function(){
    console.log('task1 end..');
    callback('error',null);
  },300);
}

function task2(callback){
  console.log('task2 start...');
  setTimeout(function(){
    console.log('task2 end... nodemon check.... ');
    callback(null,'task2 result...');
  }, 200);
}

var async = require('async');
async.series([task1,task2], function(err, res){

  if(err){
    console.error('에러!!..', err);
    return;
  }

  console.log('비동기 동작 모두 종료... ' , res)
});
