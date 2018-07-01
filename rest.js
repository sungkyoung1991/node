var http = require('http');
var fs = require('fs');

var data =fs.readFileSync('./movieData.json');
var movieList = JSON.parse(data);

var server = http.createServer(function(req,res){
  var method = req.method.toLowerCase();
  switch (method) {
    case 'get':

    handleGetRequest(req,res);
    return;

    case 'post' :
    handlePostRequest(req,res);
    return;

    case 'put':
    handlePutRequest(req,res);
    return;

    case 'delete':
    handleDeleteRequest(req,res);
    return;

    default:
    res.statusCode = 404
    res.end('잘못된 요청입니다.');
    return;


  }
});

server.listen(3000);

function handleGetRequest(req,res){
  var url = req.url;
  if(url=='/movies'){
    var list=[];
    for(var i=0; i<movieList.length; i++){
      var movie = movieList[i];
      list.push({id:movie.id, title:movie.title});
    }

    var result = {
      count:list.length,
      data:list
    }

    res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
    res.end(JSON.stringify(result));
  }else{

    var id = url.split('/')[2];
    var movie = null;

    for(var i=0; i<movieList.length; i++){
      var item = movieList[i];
      if(id==item.id){
        movie = item;
        break;
      }
    }

    if(movie){
      res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
      res.end(JSON.stringify(movie));
    }else{
      res.writeHeader(404,{'Content-Type':'application/json;charset=utf-8'});
      var message = {
        code : 404,
        message : '영화정보가 없습니다.'
      }
    }

    res.end(JSON.stringify(message));



  }
}
