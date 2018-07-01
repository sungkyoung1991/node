res.render('index');

res.render('index',{name:'IU'});

res.render('user',{name:'IU'},function(err,html){
  //...
});
