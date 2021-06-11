require('dotenv').config();
const faker = require('faker');
const getDB = require('./db');

let connection;

const main = async () => {
    try {
        connection = await getDB();

        // Eliminamos las tablas existentes.
        await connection.query('DROP TABLE IF EXISTS users');

        // Creamos las tables:
        await connection.query(`
            CREATE TABLE users (
                id INT PRIMARY KEY AUTO_INCREMENT, 
                date DATETIME NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                password VARCHAR(512) NOT NULL,
                name VARCHAR(100),
                avatar VARCHAR(50),
                active BOOLEAN DEFAULT false,
                deleted BOOLEAN DEFAULT false,
                role ENUM("admin", "normal") DEFAULT "normal" NOT NULL,
                registrationCode VARCHAR(100),
                lastAuthUpdate DATETIME,
                recoverCode VARCHAR(100)
            )
        `);

        console.log('Tablas creadas');
    } catch (error) {
        console.error(error);
    } finally {
        // Si hay conexión la cierre (haya ido bien o mal) siempre!!
        if (connection) connection.release();
        process.exit(0);
    }
};

main();
