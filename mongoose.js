var mongoose = require('mongoose');

var url = 'mongodb://localhost:2701:moviest';

mongoose.connect(url);

var db = mongoose.connection;
db.on('error',function(err){});
db.once('open'function(){});

var MovieScheme = mongoose.Schema({
  title:String,
  diroector:String,
  year : Nmuber

});

var Movie = mongoose.model('Movie',MovieScheme);

var avata = new Moive({title:'interstella',director:'cristoper Nollan', year:2014});

Model#save([options],[options.safe],[options.validateBeforeSave],[fn])

avata.save(function(err,product){})
avata.save().then(resolved,rejected);

Movie.create({title:'다크나이트',....}).then(resolved,rejected);

Model.find(conditons,[Promise])
