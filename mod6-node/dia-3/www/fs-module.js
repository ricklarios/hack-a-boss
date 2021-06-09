const fs = require('fs');

// Para CREAR nuevos archivos:

//         nombre_archivo  contenido    callback
/* fs.writeFile('./dog/file.txt', 'Hello World-2!', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('El fichero ha sido creado');
    }
}); */

// Podemos crear el callbak fuera:
/* const myCallback = (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('El fichero ha sido creado');
    }
};
fs.writeFile('./dog/file.txt', 'Hello World-2!', myCallback); */

// fs.writeFileSync('file2.txt', 'Hello again');

try {
    fs.writeFileSync('file2.txt', 'Hello again');
    console.log('El fichero se ha creado');
} catch (error) {
    console.error(error.message);
}
