require('dotenv').config();

const mysql = require('mysql2/promise');

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;

let pool; // Vamos a intentar conectarnos a la base de datos

const getDB = async () => {
    // Si no hay conexión la definimos:
    if (!pool) {
        pool = mysql.createPool({
            connectionLimit: 10,
            host: MYSQL_HOST,
            user: MYSQL_USER,
            password: MYSQL_PASSWORD,
            database: MYSQL_DATABASE,
            timezone: 'Z',
        });
    }
    // Finalmente...
    return await pool.getConnection();
};

module.exports = getDB;
