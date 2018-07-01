function task(){
  retrun new Promise(function(fullfill,reject){

    if(success)

    fullfill('Sucess');

    else {
      reject('Error');
    }
  });
}

task(arg).then(fullfiled,rejected);
