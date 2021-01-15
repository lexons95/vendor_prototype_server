const mysql = require('mysql2');
require('dotenv').config()
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'owc_db'
// });

const connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

connection.connect(function(err) {
    if (err) {
        console.log('connection err',err)
        throw err;
    }
    console.log("Database Connected!");
});

module.exports = connection;