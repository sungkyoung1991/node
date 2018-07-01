var express=require('express');
var morgan=require('morgan');
var app= express();

app.use(morgan('dev'));

app.get('/hello' , function(req,res){
  res.send('get req, /');
});

app.get('/movies', function(req,res){
  res.send('get requ, / movies');
});

app.listen(3000);
