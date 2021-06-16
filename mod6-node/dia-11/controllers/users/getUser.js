// GET - [/users/:idUser] - Retorna información de un usuario concreto.

const getDB = require('../../bbdd/db');

const getUser = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { idUser } = req.params;
        const { idCurrentUser } = req.body;

        const [user] = await connection.query(
            `SELECT id, name, email, avatar, role, createdAt FROM users WHERE id = ?`,
            [idUser]
        );

        // Objeto con información básica
        const userInfo = {
            name: user[0].name,
            avatar: user[0].avatar,
        };

        // Si el que solicita los datos es el dueño o si el rol es 'admin' agreagamos info extra:
        if (
            user[0].id === req.userAuth.idUser ||
            req.userAuth.role === 'admin'
        ) {
            userInfo.email = user[0].email;
            userInfo.role = user[0].role;
            userInfo.createdAt = user[0].createdAt;
        }

        res.send({
            status: 'ok',
            data: userInfo,
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = getUser;
