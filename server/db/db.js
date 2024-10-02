const mysql = require('mysql2');
require('dotenv').config();

// Create a MySQL connection pool
const db = mysql.createConnection({
    host: 'localhost', // Your database host (e.g., localhost)
    user: process.env.DB_USER, // Your database user
    password: process.env.DB_PASS, // Your database password
    database: 'hms', // Your database name
  });

db.connect((err) => {
  if (err) throw err;
  console.log('Database Connected...');
});

module.exports = db;
