var express =  require('express');
var app = express();

app.set('views', __dirname+'/views');
app.set('view engine','ejs');

var data = [
  {title:'cat1', image:'cat1,jpg'},
  {title:'cat2', image:'cat2.jpg'},
  {title:'cat3', image:'cat3.jpg'}


];

app.use(express.static('./'));
app.get('/', function(req,res){

  res.render('cat',{title:'Cats', cats:data})

});

app.listen(3000);
