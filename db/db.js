const mysql = require('mysql');
require('dotenv').config();

function connectDB() {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME
  });

  connection.connect((error) => {
    if (error) {
      throw error;
    }
    console.log('Mysql Database Connected...');
  });
}

module.exports = connectDB;