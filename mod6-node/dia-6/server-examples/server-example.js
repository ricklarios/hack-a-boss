const http = require('http');

// Creamos un servidor HTTP.
const server = http.createServer();
// Definimos el puerto:
const PORT = 3000;
// Creamos una función que se ejecutará cuando al servidor le llegue una petición
server.on('request', async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<h1>Hello World</h1>');
});
// Ponemos el servidor a 'escuchar' peticiones:
server.listen(PORT, () => {
    console.log(`El servidor está funcionando en http://localhost:${PORT}`);
});
