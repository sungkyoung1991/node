var MOngoClient = require('mongodb').MOngoClient

var url = 'mongodb://localhost:2701/DATABASE';

var db;

MOngoClient.connect(url,function(err,database){
  console.log("MongoDB 연결 성공");

  db = database;
})


db.collection(name,options,callback);

db.collection('movies').find(//efjiejf
);

var movies = db.collection('movies');

movies.insert(docs,options,callback);

////////////

movies.insert({title:'starwars',director:'jj',year:2015}).then(function(result){
  console.log();
},  function(err){
  console.log(err);
}
});

find(query) > Cursor
findOne(query,options,callback)

var cursor = collection.find(...);

cursor.forEach(function(doc){
  //doc 다루기

},function(err){
  //err
});

////////////////////////////////////////

MOngoClient.connect(url,function(err,db){

  // todo  : 커넥션 에러 처리

  // colloection 얻기

  var movies = db.collection('movie');

  movies.find({year:{$gt:2000}}.toArray(function(err,docs){
    for(var i =0; i<docs.length; i++{
      var doc = docs[i];
      console.log('title:',doc['title'], 'director:',doc['director']);
    })
  }))
})
