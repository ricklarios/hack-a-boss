const getDB = require('../../bbdd/db');
const newUserSchema = require('../../schemas/newUserSchema');

const {
    generateRandomString,
    sendMail,
    formatDate,
    validate,
} = require('../../helpers.js');

const newUser = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();
        // Validamos los datos:
        await validate(newUserSchema, req.body);

        const { email, password } = req.body;

        if (!email || !password) {
            const error = new Error('¡Faltan campos');
            error.httpStatus = 400;
            throw error;
        }

        // comprobamos si existe en la BD con ese mail:
        const [user] = await connection.query(
            `SELECT id FROM users WHERE email = ?`,
            [email]
        );

        if (user.length > 0) {
            const error = new Error('Ya existe un usuario con ese email');
            error.httpStatus = 409;
            throw error;
        }

        // Creamos un código de registro ( de un solo uso)
        const registrationCode = generateRandomString(40);

        // Mandamos un email con el link de confirmación de email
        const emailBody = `
            Te acabas de registrar en Diario de Viajes. 
            Pulsa en este link para verificar tu cuenta: ${process.env.PUBLIC_HOST}/users/validate/${registrationCode}
        `;

        await sendMail({
            to: email,
            subject: 'Activa tu usario de Diario de Viajes',
            body: emailBody,
        });

        // Guardamos el usuario en la BD
        await connection.query(
            `
        INSERT INTO users 
        (email, password, registrationCode, createdAt) 
        VALUES (?, SHA2(?, 512), ?, ?);`,
            [email, password, registrationCode, formatDate(new Date())]
        );

        res.send({
            status: 'ok',
            message: 'Usuario registrado, comprueba tu email para activarlo',
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = newUser;
