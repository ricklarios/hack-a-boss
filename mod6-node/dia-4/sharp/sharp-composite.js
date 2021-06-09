const sharp = require('sharp');
const path = require('path');

// Vamos a suporponer dos imágenes:

const editImage = async () => {
    try {
        // Definimos las rutas:
        const imagePath = path.join(__dirname, './pics/pikachu.jpeg');
        const imageOutputPath = path.join(
            __dirname,
            './pics/edited/pikachu3.png'
        );
        const logoPath = path.join(__dirname, './pics/edited/pokeball2.png');

        const image = sharp(imagePath);
        image.composite([
            {
                input: logoPath,
                gravity: 'southeast',
            },
        ]);
        await image.toFile(imageOutputPath);

        console.log('La imagen ha sido modificada');
    } catch (error) {
        console.log(error);
    }
};

editImage();
