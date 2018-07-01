conn.beginTransaction(function(err){
  conn.query(sql1,function(err,relsult){
    if(err){
      conn.rollbakc();
      return;
    }

    conn.query(sql2,function(err,result){
      if(err){
        conn.rollbakc();
        return;
      }
        //성공..
      conn.commit;
    })
  })
})
