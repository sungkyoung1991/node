var querystring=require('querystring');

var str= 'group=exid&name=하니';
var parsed = querystring.parse(str);
console.log(parsed);

console.log('group : ' , parsed.group);
console.log('name : ' , parsed.name);
