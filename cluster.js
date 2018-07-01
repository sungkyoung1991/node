// 여러시스템을 하나로 묶어서 사용하는 기술
// 1개의 싱글쓰레드
//멀티 코어시스템의 장점을 살리기 위해 클러스터를 사용.
// 클러스터 사용시 포트 공유 - 서버 작성 편리
// 코어 (프로세서)의 개수 만큼 사용
// 1. 마스터
// - 메인프로세스
// - 워커 생성
// 2. 워커
// 보조프로세스
// 마스터가 생성

var cluster = require('cluster');

//클러스터 생성
//cluster.fork();

// 클러스터 구분
//cluster.isMaster;
//cluster.isWorker;

// if(cluster.isMaster){
//   cluster.fork();
// }else{
//   워커 코드
// }

// 이벤트
// fork : worker create
// online : worker생성 후 동작 이벤트
// listeneling : 워커에 작성한 서버의 listen 이벤트
// disconnect : 워커 연결 종료
// exit : 워커 프로세스 종료
//
// 워커의 이벤트
// fomessage : 메세지 이벤트
// disconnect : 워커 연결종료

if(cluster.isMaster){
  cluster.fork();
  cluster.on('online',function(worker){
    console.log('Worker #' + worker.id + 'is Onlile....');
  });

cluster.on('exit',function(workder,code,signal){
// 워커종료 이벤트
console.log('Worker#' + workder.id + 'exit');

});

}else{
  var worker = cluster.worker;
  //워커종료
  worker.kill();
}
