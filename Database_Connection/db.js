const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12773410',
    password: '6GX3rYWQK5',
    database: 'sql12773410',
});

module.exports = pool;
