
async.parallel([
  function task1(callback){
    callback(null,'task1 result');
  },

  function task2(callback){
    callback(null,'task2 result');
  },

  function task3(callback){
    callback (null,'task3 result')
  }
],
function (err,res){
  console.log('모든 테스크 종료, 결과 : ' , result); // ['task1 result','task2 result','task3 result']
 }
);
