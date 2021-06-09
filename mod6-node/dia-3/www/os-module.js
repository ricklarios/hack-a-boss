const os = require('os');

console.log('Memoria Total', os.totalmem());
console.log('Memoria Libre', os.freemem());
console.log('Host Name', os.hostname());
console.log('Ruta Usuario', os.homedir());
console.log('Ruta Temporales', os.tmpdir());
