var util=require('util');

function Parent(){

}

Parent.prototype.sayHello = function(){
  console.log("안녕 난 부모야");
}

var obj = new Parent();

obj.sayHello();

function Child(){

}

 util.inherits(Child,Parent);
//
var obj2 = new Child();
obj2.sayHello();
