const users = require('../../bbdd/users.json');

const jwt = require('jsonwebtoken');

const loginUser = (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            const error = new Error('Faltan campos');
            error.httpStatus = 400;
            throw error;
        }

        const user = users.find((user) => {
            return (
                user.email === email &&
                user.password === password &&
                !user.deleted
            );
        });

        if (!user) {
            const error = new Error('Email o contraseña incorrectos');
            error.httpStatus = 401; // Error de 'no estás autorizado'
            throw error;
        }

        // Asignamos un token con jsonwebtoken
        // 1. Creamos el bojeto con la info que queremos añadir al token:
        const tokenInfo = {
            id: user.id,
            role: user.role,
        };
        // 2. Creamos el token
        const token = jwt.sign(tokenInfo, process.env.SECRET, {
            expiresIn: '7d',
        });

        res.send({
            status: 'ok',
            data: {
                token,
            },
        });
    } catch (error) {
        next(error);
    }
};

module.exports = loginUser;
