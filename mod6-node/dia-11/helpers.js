const { format } = require('date-fns');
const sharp = require('sharp');
const uuid = require('uuid');
const { ensureDir, unlink } = require('fs-extra');
const path = require('path');
const crypto = require('crypto');
const sgMail = require('@sendgrid/mail');

const { UPLOADS_DIRECTORY } = process.env;
const uploadsDir = path.join(__dirname, UPLOADS_DIRECTORY);

/* 
   ##################################################
   ## Formatear un objeto fecha a DATETIME de SQL. ##
   ##################################################
*/
function formatDate(date) {
    return format(date, 'yyy-MM-dd HH:mm:ss');
}

/* 
   ##################################
   ## Obtener un número aleatorio. ##
   ##################################
*/

function getRandomValue(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

/* 
   #######################################################
   ## Guardar una foto en el directorio static/uploads. ##
   ####################################################### 
*/

async function savePhoto(image) {
    // Comprobamos que el directorio de subida de las imágenes existe.
    await ensureDir(uploadsDir);
    // Leer la imagen con sharp.
    const sharpImage = sharp(image.data);
    // Controlamos el tamaño máximo permitido.
    const imageInfo = await sharpImage.metadata(); // Metadata nos da información de la imagén, incluido el tamaño
    // Definimos el ancho máximo:
    const IMAGE_MAX_WIDTH = 1000;
    if (imageInfo.width > IMAGE_MAX_WIDTH) {
        // Si supera el ancho máximo la redimensionamos
        sharpImage.resize(IMAGE_MAX_WIDTH);
    }
    // Generamos un nombre único para la imagen con uuid
    const savedImageName = `${uuid.v4()}.jpg`;
    // Unimos el directorio de imagenes con el nombre de la imagen
    const imagePath = path.join(uploadsDir, savedImageName);
    // guardamos la imagen en el directorio de imágenes.
    await sharpImage.toFile(imagePath);
    // Retornamos el nombre del fichero
    return savedImageName;
}

/* 
   ################################
   ## Eliminar foto del servidor ##
   ################################
*/

async function deletePhoto(photoName) {
    const photoPath = path.join(uploadsDir, photoName);
    await unlink(photoPath); // Borramos la foto del servidor(directorio)
}

/* 
   ###################
   ## Random String ##
   ###################

   Generamos una cadena de caracteres aleatoria.
*/

function generateRandomString(length) {
    return crypto.randomBytes(length).toString('hex');
}

/* 
   ###################
   ## Enviar Email  ##
   ###################
*/

// 1. Asignamos el ApiKey a Sendgrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// 2. Eviamos el email
async function sendMail({ to, subject, body }) {
    try {
        const msg = {
            to,
            from: process.env.SENDGRID_FROM,
            subject,
            text: body,
            html: `
                <div>
                    <h1>${subject}</h1>
                    <p>${body}</p>
                        </div>`,
        };

        await sgMail.send(msg);
    } catch (error) {
        throw new Error('Error enviando email');
    }
}

module.exports = {
    formatDate,
    getRandomValue,
    savePhoto,
    deletePhoto,
    generateRandomString,
    sendMail,
};
