const { setPriority } = require('os');
const path = require('path');
const stories = require('../../bbdd/stories.json');
const storiesPath = path.join(__dirname, '../../bbdd/stories.json');
const { writeFile } = require('../../helpers');

const editStory = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        const { idStory } = req.params;

        // Si faltan las dos propiedades => error
        if (!title && !description) {
            const error = new Error('Faltan campos!');
            error.httpStatus = 400;
            throw error;
        }
        // Obtenemos el relato:
        const story = stories.find((story) => story.id === Number(idStory));

        // Comprobamos si el usuario NO es el dueño de la historia o NO es admin.
        const { id, role } = req.userAuth;
        if (idUser !== id && role !== 'admin') {
            const error = new Error('No tienes permisos');
            error.httpStatus = 401;
            throw Error;
        }

        // Si todo es correcto modificamos el objeto
        const storyPos = Number(idStory) - 1; // Obtenemos la posición dentro del array
        if (title) stories[storyPos].title = title;
        if (description) stories[storyPos].description = description;

        // Guardamos los cambios
        await writeFile(storiesPath, JSON.stringify(stories));

        res.send({
            status: 'Ok',
            message: 'Relato editado',
        });
    } catch (error) {
        next(error);
    }
};

module.exports = editStory;
