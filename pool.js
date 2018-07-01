var pool =mysql.createPool({
  host : 'localhost',
  user : 'user',
  password : '1234',
  connectionLimit:50
});


 pool.getConnection(function(err,connection){
   if(!err){
     //connected!
   }
 });

 // 풀에 커넥션 반환
  conn.release();

  //닫기
  pool.end();

  var mysql=require('mysql');

  var dbPool = mysql.createPool(dbConfig);

  module.exports = dbPool;

  // 사용

  var pool = require('./dbconnection');
  pool.getConnection(function(err,conn){

  });

  connection.query(sql,callback);

  function(error,result,fields);

   var sql = 'insert into movies....';

   connetion.query(sql,function(err,results){
     if(err){
       console.error('insert error',error);
     }
     else{
       consol.elog('results:',results);
     }
   });

   var sql = 'insert into movies (title,director,year) values(?,?,?);';

   connection.query(sql,['인터스텔라','크리스토퍼놀란',2015'], funcion(err,results){
     //
   });
