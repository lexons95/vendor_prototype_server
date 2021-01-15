const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'owc_db'
// });

const connection = mysql.createConnection({
    host: "prototype-demo-owc.cysslfqkzazy.ap-southeast-1.rds.amazonaws.com",
    user: 'root',
    password: '12345678',
    database: 'owc_db'
});

connection.connect(function(err) {
    if (err) {
        console.log('connection err',err)
        throw err;
    }
    console.log("Database Connected!");
});

module.exports = connection;