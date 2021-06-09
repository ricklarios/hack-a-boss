// Vamos a crear un servidor:
// require('dotenv').config({ path: '/custom/path/to/.env' })
require('dotenv').config();
const http = require('http');
const { resolve } = require('path');
const querystring = require('querystring');
const { news, home, newMessage } = require('./controllers');
const path = require('path');
const staticPath = path.join(__dirname, 'static');
const fs = require('fs').promises;
const mime = require('mime-types');

const { HOST, PORT } = process.env;

const baseURL = `http://${HOST}:${PORT}`; // = "localhost:4000"

const server = http.createServer();
// Función que analiza el body y lo traduce (antiguamente)
const bodyParser = (request) => {
    return new Promise((resolve) => {
        let body = [];
        request.on('data', (buffer) => {
            body.push(buffer);
        });
        request.on('end', () => {
            body = Buffer.concat(body).toString();
            resolve(querystring.parse(body)); // => si lo que nos llega es en formato querystring
            // resolve(JSON.parse(body)); // => si lo que nos llega lo hace en formato JSON
        });
    });
};

// Función que se ejecuta cada vez que el servidor recibe una nueva petición.
// Es habitual encontrarse async (req, res)
server.on('request', async (request, response) => {
    // console.log(request.url);
    // Creamos un objeto URL
    const urlInfo = new URL(request.url, baseURL);
    // Obetenemos el path de la URL
    const urlPath = urlInfo.pathname;
    // Obtenemos los query strings y los guardamos en la request
    request.querystring = urlInfo.searchParams;
    // Traducimos el body y lo guardamos en la request
    request.body = await bodyParser(request);

    // Obtenemos el método que se ha usado para la petición.
    const method = request.method;

    // Definimos el endpoint a '/noticias'
    if (urlPath === '/' && method === 'GET') {
        home(request, response);
    } else if (urlPath === '/noticias' && method === 'GET') {
        news(request, response);
    } else if (urlPath === '/guestbook' && method === 'GET') {
        newMessage(request, response);
        // Si la ruta no es ninguna de las anteriores le decimos al servidor que
        // examine las carpetas en busca de algún archivo que coincida con la ruta definida:
    } else {
        try {
            const resourcePath = path.join(staticPath, urlPath);
            const data = await fs.readFile(resourcePath);
            const mimeType = mime.lookup(resourcePath);
            response.statusCode = 200;
            response.setHeader('Content-type', mimeType);
            response.end('data');
        } catch (error) {
            response.statusCode = 404;
            response.setHeader('Content-type', 'text/html');
            response.end(`
                <p>Not found</p>
                <p><a href="/">Volver a la portada</p>
            `);
        }
    }
    // console.log(body);
    // console.log(urlInfo);
    // console.log(querystring);
    response.end();
});

server.listen(PORT, () => {
    console.log(`Servidor funcionando en ${baseURL}`);
});
