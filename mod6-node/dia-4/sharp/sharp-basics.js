const sharp = require('sharp');

// Indicamos la ruta con texto(no recomendado)

const image = sharp('./pics/pikachu.jpeg');

// Modificamos la imagen
image.grayscale();
image.blur(2);
image.resize(400);

// Guardamos la imagen.
image
    .toFile('./pics/edited/pikachu.jpg')
    .then(() => console.log('Imagen modificada'))
    .catch((error) => console.log(error));
