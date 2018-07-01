pool.getConnection(function(err,conn){
  conn.query('select...',function(err,rows){
    conn.release();
  })
});
