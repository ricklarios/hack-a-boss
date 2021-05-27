require('dotenv').config();

//MODULOS CON LOS QUE VAMOS A TRABAJAR
// PARA POBLAR LA BASE DE DATOS
const faker = require('faker/locale/es');
const { getConnection } = require('./db');
const { random } = require('lodash');
const { formatDateToDB } = require('./helpers');

let connection;

async function main() {
    try {
        // Conseguir conexión a la base de datos
        connection = await getConnection();

        // Borrar las tablas si existen (diary, diary_votes)
        console.log('Borrando tablas');
        await connection.query('DROP TABLE IF EXISTS equipos_partidos CASCADE');
        await connection.query('DROP TABLE IF EXISTS incidencias CASCADE');
        await connection.query('DROP TABLE IF EXISTS participantes CASCADE');
        await connection.query('DROP TABLE IF EXISTS partidos CASCADE');
        await connection.query('DROP TABLE IF EXISTS equipos CASCADE');

        // Crear las tablas de jugadores
        console.log('Creando tablas');
        await connection.query(`
    SET FOREIGN_KEY_CHECKS = 0;`);

        await connection.query(`
    CREATE TABLE jugadores(
      id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
      nombre VARCHAR(20),
      apellidos VARCHAR(50),
      fecha_nacimiento DATE,
      direccion VARCHAR(50),
      genero ENUM('masculino', 'femenino'),
      telefono VARCHAR(15),
      id_equipo INT UNSIGNED,
      FOREIGN KEY (id_equipo) REFERENCES equipos(id)
      );
    `);

        console.log('Poblando jugadores');
        const jugadores = 500;
        for (let index = 0; index < jugadores; index++) {
            const name = faker.name.firstName();
            const surname = faker.name.lastName();
            const birthday = faker.date.past();
            const birthdayDB = formatDateToDB(birthday);
            const direction = faker.address.streetAddress();
            const phone = faker.phone.phoneNumber();
            const idEquipo = random(1, 20);

            await connection.query(
                `INSERT INTO jugadores(
            nombre,
            apellidos,
            fecha_nacimiento,
            direccion,
            telefono,
            id_equipo
            )
            VALUES(
            "${name}",
            "${surname}",
            "${birthdayDB}",
            "${direction}",
            "${phone}",
            "${idEquipo}"
             )
            `
            );
        }
        console.log('Creando tabla equipos');

        await connection.query(`
    CREATE TABLE equipos(
      id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
      nombre VARCHAR(50),
      patrocinador VARCHAR(250),
      categoria ENUM('masculino', 'femenino'),
      1º_equipacion VARCHAR(10),
      2º_equipacion VARCHAR(10)
      );
    `);

        console.log('Poblando tabla equipos');

        // poblamos tabla de equipos
        const equipos = 20;
        const categories = ['masculino', 'femenino'];
        for (let index = 0; index < equipos; index++) {
            const patrocinador = faker.company.companyName();
            const categoryIndex = Math.floor(Math.random() * categories.length);
            const category = categories[categoryIndex];
            const city = faker.address.city();
            const color1 = faker.commerce.color();
            const color2 = faker.commerce.color();
            await connection.query(
                `INSERT INTO equipos(
          nombre,
          patrocinador,
          categoria,
          1º_equipacion,
          2º_equipacion
          )
          VALUES(
            "${city}",
            "${patrocinador}",
            "${category}",
            "${color1}",
            "${color2}"
            )`
            );
        }

        //creamos tabla de partidos
        console.log('Creando tabla partidos');
        await connection.query(`
    CREATE TABLE partidos(
      id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
      campo VARCHAR(50),
      arbitro VARCHAR(20)
      )
    `);

        // poblamos tabla de partido
        const partidos = 760;
        console.log('Poblando tabla partidos');
        for (let index = 0; index < partidos; index++) {
            const campo = faker.address.city();
            const arbitro = faker.name.firstName();
            await connection.query(
                `INSERT INTO partidos(
          campo,
          arbitro
          )
          VALUES(
            "${campo}",
            "${arbitro}"
            )`
            );
        }

        //creamos tabla de fotos de los incidencias
        console.log('Creando tabla de incidencias');
        await connection.query(`
    CREATE TABLE incidencias(
      id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
      incidencia TINYTEXT,
      id_partido INT UNSIGNED,
      FOREIGN KEY (id_partido) REFERENCES partidos(id)
      );
      `);

        // poblamos tabla de incidencias
        const incidencias = 100;
        for (let index = 1; index <= incidencias; index++) {
            const incidencia = faker.company.catchPhraseDescriptor();
            await connection.query(
                `INSERT INTO incidencias(
          incidencia,
          id_partido
          )
          VALUES(
            "${incidencia}",
            "${index}"
            )`
            );
        }

        //creamos tabla de partidos
        console.log('Creando tabla de equipos_partidos');
        await connection.query(`
    CREATE TABLE equipos_partidos(
      id_equipo INT UNSIGNED,
      FOREIGN KEY (id_equipo) REFERENCES equipos(id),
      id_partido INT UNSIGNED,
      FOREIGN KEY (id_partido) REFERENCES partidos(id),
      goles INT,
      condicion ENUM ('local', 'visitante'),
      PRIMARY KEY(id_equipo, id_partido)
      );
    `);

        // poblamos tabla de partidos
        console.log('Poblada tabla equipos_partidos');
        let partido = 0;
        for (let index = 1; index <= 20; index++) {
            for (let j = 1; j <= 20; j++) {
                if (index !== j) {
                    partido++;
                    const golesLocal = random(0, 5);
                    const golesVisitante = random(0, 5);
                    //const condicionArray = ['local', 'visitante'];
                    //const categoryIndex = Math.floor(Math.random() * condicionArray.length);
                    //const condicion = condicionArray[categoryIndex];
                    await connection.query(
                        `INSERT INTO equipos_partidos (
            id_equipo,
            id_partido,
            goles,
            condicion)
            VALUES (
              "${index}",
              "${partido}",
              "${golesLocal}",
              "local"
              );
              `
                    );
                    await connection.query(
                        `INSERT INTO equipos_partidos (
                  id_equipo,
                  id_partido,
                  goles,
                  condicion)
                  VALUES (
                    "${j}",
                    "${partido}",
                    "${golesVisitante}",
                    "visitante"
                    );
                    `
                    );
                }
            }
            await connection.query(`
        SET FOREIGN_KEY_CHECKS = 0;
      `);
        }
    } catch (error) {
        console.error(error);
    } finally {
        console.log('Todo hecho, liberando conexión');
        if (connection) connection.release();
        process.exit();
    }
}
main();
