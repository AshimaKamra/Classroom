const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node',
    password: '@@Aashima99@@'
});

module.exports = pool.promise();