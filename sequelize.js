new Sequelize(uri[,option={}])
new Sequelize(database,[username=null],[password=null],[options={}])



options
1. dialect : 데이터베이스 종류
2. host,port : 데이터베이스 서버 주소, 포트
3. pool :  커넥션 풀 설정.


var Sequelize= new Sequelize('db name ' , 'user', 'password', {
  dialect : 'mysql',
  host : 'ip',
  port:3306,

  pool:{
    max:10,
    min:0,
    idle:100000
  },
});

//

Sequelize.define('name',{attributes},{options}) // 모델 정의

sync() -> Promise.<this> << 모델에서 정의한 'name'
drop([options]) -> Promise

Promise.then(resolved,rejected);
