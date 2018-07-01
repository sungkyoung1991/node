var mysql = require('mysql');

mar dbConfig={
  host : 'localhost',
  user : 'root',
  password : '1234'
  database : 'Moviest'
};

var connection = mysql.createConnection(dbConfig);
