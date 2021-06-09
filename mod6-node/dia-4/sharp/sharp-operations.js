const sharp = require('sharp');
const path = require('path');

// Documentación oficial: https://sharp.pixelplumbing.com/api-composite

const editImage = async () => {
    try {
        // Definimos las rutas:
        const imagePath = path.join(__dirname, './pics/fondo.jpg');
        // Otra forma de decírselo sería: path.join(__dirname, 'pics', 'pikachu.jpeg')
        const imageOutputPath = path.join(
            __dirname,
            './pics/edited/fondo_nevo.png'
        );

        // Accedemos a la imagen:
        const image = sharp(imagePath);

        // Modificamos la imagen:
        image.resize(300, 300, {
            fit: 'outside',
        });
        /*  image.normalize(true);
        image.toFormat('png');
        image.rotate(180);
        image.flip(true); */
        image.normalize(true).toFormat('png').rotate(180).flip(true);

        await image.toFile(imageOutputPath);

        console.log('La imagen ha sido modificada');
    } catch (error) {
        console.log(error);
    }
};

editImage();
