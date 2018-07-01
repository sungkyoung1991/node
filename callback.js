// task1(a,b,function(err,res1){
//   task2(c,function(err,res2){
//     task3(d,function(err,res3){
//           // callback hell..
//     });
//   });
// });

function task1(callback){
  console.log('task1');
  setTimeout(fucntion(){
    console.log('task1 end..');
  }, 300);
}
