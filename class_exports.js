function BusDef(){
  this.take = function(){}
}

function MetroDef(){
  this.ride = function(){}
}


module.exports.BusDef = BusDef;
exports.Metro = MetroDef;


////////////

function Exercise(){
  this.pushup = function(){}
}

Exercise.prototype.run = function(){

}

module.exports = Exercise; // module 생략 불가.


 
