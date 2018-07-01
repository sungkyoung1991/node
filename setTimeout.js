//setTimeout(callback,delay,arg...)
//clearTimeout()

function sayHello(){
  console.log('kim sk hahah');
}

setTimeout(sayHello,5*1000);


var t = setTimeout(sayHello,3*1000);

console.log(t);

clearTimeout(t);

console.log(t);
