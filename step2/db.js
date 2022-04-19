const mysql = require('mysql2/promise')
 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'movie_db'
})
 
module.exports = connection