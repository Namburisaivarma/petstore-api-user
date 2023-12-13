const mysql = require('mysql');
var connection = mysql.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'users',
});

connection.connect((err) => {
  if (!err) {
    console.log('Database Connected');
  } else {
    console.log(err);
  }
});

module.exports = connection;
