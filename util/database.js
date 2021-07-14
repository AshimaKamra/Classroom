// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node',
//     password: '@@Aashima99@@'
// });

// module.exports = pool.promise();

const Sequelize = require('sequelize');

const sequelize = new Sequelize('node', 'root', '@@Aashima99@@', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;