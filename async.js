// async.series(
//   [
//     //task1,
//     //task2,
//     //task3
//   ]
//
//   function(err,result{
//     //완료콜백
//   })
// );
//

async.series([
  function task1(callback){
    callback(null,'res1');
  },

  function task2(callback){
    callback(null,'res2');
  },

  function task3(callback){
  }
],
function (err,res){
  //result : ['res1','res2','res3']
 }
);
