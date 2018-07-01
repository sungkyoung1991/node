var pathUtil = require('path');
var parsed = pathUtil.parse('/usr/tmp/local/image.png');

console.log(parsed);

//result
//
// { root: '/',
//   dir: '/usr/tmp/local',
//   base: 'image.png',
//   ext: '.png',
//   name: 'image' }
//
