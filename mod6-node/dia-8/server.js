const express = require('express');
const path = require('path');

const fileUpload = require('express-fileupload');

const app = express();

/* app.use((req, res, next) => {
    res.send({
        name: 'Sonia',
    });
}); */

// PATH_PARAMS: parámetros de ruta
/* app.get('/users/:id/:color', (req, res) => {
    // Añadimos path-params a la request precedido por '/:'
    res.send(req.params);
}); */

// QUERY-PARAMS: parámetros de la petición (formularios)
// GET /search?tema=noticias&since=2010
/* app.get('/search', (req, res) => {
    res.send(req.query); // { tema: 'noticias', since: '2010' }
}); */
/* app.use(express.json()); // Para acceder al body de una petición
app.use(express.urlencoded({ extended: true }));

app.post('/users', (req, res) => {
    res.send(req.body);
}); */

// Para leer archivos:
app.use(express.json()); // Formatea un body de tipo "raw"

/* app.use(fileUpload()); // Formatea un body de tipo "form-data"
app.post('/imagenes', (req, res) => {
    res.send(req.files);
}); */

app.post('/imagenes', (req, res) => {
    res.send(req.files);
});

// Para descargar archivos en nuestro servidor local
// Tenemos que tener una carpeta dedicada a ese fin: suele llamarse '/static'
const staticPath = path.resolve(__dirname, 'static');

app.use(express.static(staticPath)); // Responde directamente a una peticón GET devolviendo
// el archivo con mismo nombre que  ruta introducida

/* app.get('/', (req, res) => {
    // la petición hay que hacerla a http://localhost:3000/web.html
    res.send('web.html'); // Si la ruta es '/' por defecto busca un archivo llamado 'index.html'
}); */

app.listen(3000, () => {
    console.log('Server listening at http://localhost:3000');
});
