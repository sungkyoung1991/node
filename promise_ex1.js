function task1(fullfill1,reject2){
  console.log('task1 start...');

  setTimeout(function(){
    console.log('task1 end...');
    // fullfill('task1 result');

    reject2('Error....');
  },300);
}

function fullfilled(res){
  console.log('fullfilled : ' , result);
}

function rejected(e){
  console.log('rejected : ', e);
}

new Promise(task1).then(fullfilled,rejected);
