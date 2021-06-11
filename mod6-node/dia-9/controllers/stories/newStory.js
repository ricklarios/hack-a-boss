const stories = require('../../bbdd/stories.json');
const fs = require('fs').promises;
const path = require('path');
const { writeFile } = require('../../helpers');

const storiesPath = path.join(__dirname, '../../bbdd/stories.json');

const newStory = async (req, res, next) => {
    // añadimos next para lanzar un error
    try {
        // Obtenemos la info del body
        const { idUser, title, description } = req.body;

        // Si alguna propiedad no existe lanzamos un error:
        if (!idUser || !title || !description) {
            const error = new Error('Faltan campos');
            error.httpStatus = 400; // Creamos una nueva propiedad de 'error'
            throw error;
        }
        // Comprobamos si el usuario NO es el dueño de la historia o NO es admin.
        const { id, role } = req.userAuth;
        if (idUser !== id && role !== 'admin') {
            const error = new Error('No tienes permisos');
            error.httpStatus = 401;
            throw Error;
        }

        stories.push({
            id: stories.length + 1,
            ...req.body,
            deleted: false,
        });

        await writeFile(storiesPath, JSON.stringify(stories));

        res.send({
            status: 'Ok',
            message: 'Relato creado',
        });
    } catch (error) {
        next(error);
    }
};

module.exports = newStory;
