const getDB = require('../../bbdd/db');
const { savePhoto, deletePhoto, formatDate } = require('../../helpers');

const editUser = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { idUser } = req.params;
        const { name, email } = req.body;

        // Comprobamos si no somos el dueño:
        if (req.userAuth.idUser !== Number(idUser)) {
            const error = new Error('No tienes permisos para editar');
            error.httpStatus = 403;
            throw error;
        }

        // Si no llega ningún dato:
        if (!name && !email && !(req.files && req.files.avatar)) {
            const error = new Error('Faltan campos');
            error.httpStatus = 400;
            throw error;
        }

        // Obtenemos el email del usuario actual.
        const [user] = await connection.query(
            `SELECT email FROM users WHERE id = ?`,
            [idUser]
        );

        // Fecha actual:
        const now = new Date();

        /* 
            ############
            ## Avatar ##        
            ############
        */

        // Comprobamos si el usuario quiere insertar un avatar:
        if (req.files && req.files.avatar) {
            // Comprobamos si el usuario tiene un avatar previo:
            if (user[0].avatar) {
                await deletePhoto(user[0].avatar);
            }
            // Guardamos la foto en el disco y obtenemos el nombre
            const avatarName = await savePhoto(req.files.avatar);
            // Insertamos el avatar:
            await connection.query(
                `UPDATE users SET avatar = ?, modifiedAt = ? WHERE id = ?`,
                [avatarName, formatDate(now), idUser]
            );
        }
        /* 
            ###########
            ## Email ##        
            ###########
        */
        // En caso de que haya email, comprobamos si es distinto al existente:
        if (email && email !== user[0].email) {
            // comprobamos que no hay un usuario con el mismo email:
            const [existingEmail] = await connection.query(
                `SELECT id FROM users WHERE email = ?`,
                [email]
            );
            if (existingEmail.length > 0) {
                const error = new Error('Ya existe un usuario con ese email');
                error.httpStatus = 409;
                throw error;
            }

            // Si no insertamos los datos en la BD:
            await connection.query(
                `UPDATE users SET email = ?, modifiedAt = ? WHERE id = ?`,
                [email, formatDate(now), idUser]
            );
        }

        /* 
            ############
            ## Nombre ##        
            ############
        */
        if (name && user[0].email !== name) {
            // comprobamos que no hay un usuario con el mismo email:
            await connection.query(
                `UPDATE users SET name = ?, modifiedAt = ? WHERE id = ?`,
                [name, formatDate(now), idUser]
            );
        }

        res.send({
            status: 'ok',
            message: 'Datos de usuario actualizados',
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = editUser;
