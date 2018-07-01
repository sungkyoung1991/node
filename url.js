var url = require ('url');

var urlStr = 'http://www.google.com/kimsk/q?qur=1&fir=kim&last=sk';

var parse = url.parse(urlStr,true);

// var query = parse.query;

console.log(parse.query.qur);
