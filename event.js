// process.on('exit',function(){
//   console.log('이벤트가 발생함..')
// });
//
//
//
// process.emit('exit');
//
//



 var event = require('events');
var customEvent = new event.EventEmitter();

customEvent.on('kim',function(){
  console.log('메롱메롱~~~에헤헤헤헤헤헤헤');
});

 customEvent.emit('kim');
