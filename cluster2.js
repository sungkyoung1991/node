if(cluster.isMaster){
  cluster.fork();
}else{
  http.createServer(function(req,res){ // 코어만큼 워커 생성..
    //서버코드
  }).listen(8000);
}
