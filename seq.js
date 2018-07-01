var Movie = Sequelize.define('movie'{
  title : {type:Sequelize.STRING},
  director:{type:Sequelize.STRING},
  year : { type:Sequelize.INTEGER}


});

Movie.sync().then(resolved,rejected);

Movie.create({
  title:'아바타',
  director:'제임스카메론',
  year:2010
}).then(resolved,rejected);

// 찾기
findAll([options]) > Promise.<Array.<Instance>>
findById([options]) > Promise.<Instance>
findOne[options] > Promise.<Instance>
findAndCount([findOptions]) > Promise.<Object>

count([options]) > Promise.<Integer>

Model.findAll({
  attribute:[attr1, attr2,attr3],
  where:{
    attr1:value1,
    attr2:value2
  }
});

Movie.findAll({
  attributes:['title','director']
});

Movie.findAll({
  where:{
    director:'제임스 카메론',
    year:{$gt:2000}
  }
});


Movie.findAll().then(function(results){
  for(var i=0; i<results,length; i++){
    var item = results[i];
    console.log('id:',item.id);
    console.log('title:',item.title)
  }
}).rejected);


update(values,option) > Promise.<Array.<affectedCount,AffectedRows>>

upsert(values,[options]) > Promise.<created> // insert or update

Movie.update({
  title : '타이틀''
},{
  where:{} // 필수
}).then(resolved,rejected);

destroy(options) > Promise.<Integer>

Movie.destroY({
  where:{}
}).then(resolved,rejected);
