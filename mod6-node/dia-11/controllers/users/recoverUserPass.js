const getDB = require('../../bbdd/db');
const { generateRandomString, sendMail } = require('../../helpers.js');

const recoverUserPass = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { email } = req.body;

        if (!email) {
            const error = new Error('Faltan campos');
            error.httpStatus = 400;
            throw error;
        }

        // Comprobamos si existe el email en la base de datos:
        const [user] = await connection.query(
            `SELECT id FROM users WHERE email = ?;`,
            [email]
        );

        if (user.length < 1) {
            const error = new Error('No existe ningún usuario con ese email');
            error.httpStatus = 404;
            throw error;
        }

        // Generamos un código de recuperación
        const recoverCode = generateRandomString(20);

        // Creamos el body con el mensaje:
        const emailBody = `
            Se solicitó un cambio de contraseña para el usuario registrado con este email en la app Diario de Viajes.
            
            El código de recuperación es: ${recoverCode}
            `;

        // Enviamos el email:
        await sendMail({
            to: email,
            subject: 'Cambio de contraseña - Diario de Viajes',
            body: emailBody,
        });

        // Agregamos el código de recuperación al usuario con dicho mail:
        await connection.query(
            `UPDATE users SET recoverCode = ? WHERE email = ?;`,
            [recoverCode, email]
        );

        res.send({
            status: 'ok',
            message: 'Email enviado',
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = recoverUserPass;
