const { lstat } = require('fs');
const path = require('path');

console.log('Crear un ruta de forma segura:', path.join(__dirname, '../dia-2'));
console.log('Corrección de ruta:', path.normalize('..///dia-2'));
console.log('Extension del fichero:', path.extname('./path-module.js'));
