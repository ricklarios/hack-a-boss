const sharp = require('sharp');
const path = require('path');

const editImage = async () => {
    try {
        // Definimos las rutas:
        const imagePath = path.join(__dirname, './pics/pikachu.jpeg');
        // Otra forma de decírselo sería: path.join(__dirname, 'pics', 'pikachu.jpeg')
        const imageOutputPath = path.join(
            __dirname,
            './pics/edited/pikachu2.jpeg'
        );

        // Accedemos a la imagen:
        const image = sharp(imagePath);

        // Modificamos la imagen:
        image.tint('rgb(255, 0, 0)');

        // Guardamos la imagen:
        await image.toFile(imageOutputPath);

        console.log('La imagen ha sido modificada');
    } catch (error) {
        console.log(error);
    }
};

editImage();
