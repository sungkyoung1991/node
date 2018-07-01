var http=require('http');
var fs = require('fs');

//static (.jpg , mp3.....)


fs.access(path,fs.F_OK, function(exist){
  fs.readFile(path,function(err,data){
    res.end(data);
  });
});
