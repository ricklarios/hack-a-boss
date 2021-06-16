require('dotenv').config();
const faker = require('faker');
const getDB = require('./db');

const { formatDate, getRandomValue } = require('../helpers');

let connection;

const main = async () => {
    try {
        connection = await getDB();

        // Eliminamos las tablas existentes.
        await connection.query('DROP TABLE IF EXISTS users;');
        await connection.query('DROP TABLE IF EXISTS entries;');
        await connection.query('DROP TABLE IF EXISTS entries_photos;');
        await connection.query('DROP TABLE IF EXISTS entries_votes;');
        console.log('Tablas eliminadas');

        // Creamos la tabla de usuarios:
        await connection.query(`
            CREATE TABLE users (
                id INT PRIMARY KEY AUTO_INCREMENT,
                email VARCHAR(100) UNIQUE NOT NULL,
                password VARCHAR(512) NOT NULL,
                name VARCHAR(100),
                avatar VARCHAR(50),
                active BOOLEAN DEFAULT false,
                deleted BOOLEAN DEFAULT false,
                role ENUM("admin", "normal") DEFAULT "normal" NOT NULL,
                registrationCode VARCHAR(100),
                recoverCode VARCHAR(100),
                createdAt DATETIME NOT NULL, 
                modifiedAt DATETIME
            );
        `);

        // Creamos la tabla de entradas:
        await connection.query(`
            CREATE TABLE entries(
                id INT PRIMARY KEY AUTO_INCREMENT,
                place VARCHAR(100) NOT NULL,
                description TEXT,
                idUser INT NOT NULL,
                createdAt DATETIME NOT NULL,
                modifiedAt DATETIME
            );`);

        // Creamos la tabla de fotos:
        await connection.query(`
            CREATE TABLE entries_photos(
                id INT PRIMARY KEY AUTO_INCREMENT,
                photo VARCHAR(50) NOT NULL,
                idEntry INT NOT NULL,
                createdAt DATETIME NOT NULL
            );`);

        // Creamos la tabla de votos:
        await connection.query(`
            CREATE TABLE entries_votes(
                id INT PRIMARY KEY AUTO_INCREMENT,
                vote TINYINT NOT NULL,
                idEntry INT NOT NULL,
                idUser INT NOT NULL,
                CONSTRAINT entries_votes_CK1 CHECK (vote IN (1,2,3,4,5)),
                createdAt DATETIME NOT NULL
                -- FOREIGN KEY (idUser) REFERENCES users(id),
                -- FOREIGN KEY (idEntry) REFERENCES entries(id)           
            );`);

        console.log('Tablas creadas');

        // Creamos el usuario 'admin':
        await connection.query(`
            INSERT INTO users(createdAt, email, password, name, active, role)
            VALUES (
            "${formatDate(new Date())}",
            "ricklarios@gmail.com", 
                SHA2("${process.env.ADMIN_PASSWORD}", 512), 
                "Rick Larios",
                true,
                "admin"
            );        
        `);

        console.log('Usuario administrador insertado');

        // Nº de usuarios que vamos a introducir (datos fake):
        const users = 10;

        //Insertamos los usuarios:
        for (let i = 0; i < users; i++) {
            // Fechas de creación:
            const now = formatDate(new Date());
            //Datos que crea Faker:
            const email = faker.internet.email(); // Faker me crea un email aleatorio
            const password = faker.internet.password();
            const name = faker.name.findName();

            // Guardamos el usuario en la base de datos:
            await connection.query(`
                INSERT INTO users(createdAt, email, password, name, active)
                VALUES ("${now}", "${email}", SHA2("${password}", 512), "${name}", true 
                );
                `);
        }
        console.log('Usuarios insertados');

        // Nº entradas q vamos a introducir:
        const entries = 100;

        // Insertamos las entradas:
        for (let i = 0; i < entries; i++) {
            // Fechas de creación:
            const now = formatDate(new Date());

            // Datos de faker:
            const place = faker.address.city();
            const description = faker.lorem.paragraph();
            const idUser = getRandomValue(2, users + 1);

            // Insertamos los campos.
            await connection.query(`
                INSERT INTO entries (createdAt, place, description, idUser)
                VALUES ("${now}", "${place}", "${description}", ${idUser})
            `);
        }
        console.log('Entradas insertadas');
    } catch (error) {
        console.error(error);
    } finally {
        // Si hay conexión la cierre (haya ido bien o mal) siempre!!
        if (connection) connection.release();
        process.exit(0);
    }
};

main();
