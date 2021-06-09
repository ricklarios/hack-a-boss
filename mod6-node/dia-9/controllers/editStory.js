const fs = require('fs').promises;
const path = require('path');
const stories = require('../bbdd/stories.json');
const storiesPath = path.join(__dirname, '../bbdd/stories.json');

const editStory = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const { idStory } = req.params;

    // Obtenemos el relato (si existe)
    const story = stories.find((story) => story.id === Number(idStory));

    // Si el relato no existe => error
    if (!story) {
      const error = new Error('El relato no existe');
      error.httpStatus = 400;
      throw error;
    }

    // Si faltan las dos propiedades => error
    if (!title & !description) {
      const error = new Error('Faltan campos!');
      error.httpStatus = 400;
      throw error;
    }

    // Si todo es correcto modificamos el objeto
    const storyPos = Number(idStory) - 1; // Obtenemos la posición dentro del array
    if (title) stories[storyPos].title = title;
    if (description) stories[storyPos].description = description;

    // Guardamos los cambios
    await fs.writeFile(storiesPath, JSON.stringify(stories));

    res.send({
      status: 'Ok',
      message: 'Relato editado',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = editStory;
