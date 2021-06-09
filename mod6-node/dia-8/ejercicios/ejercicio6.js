const express = require('express');
const path = require('path');

const app = express();

const staticPath = path.resolve(__dirname, 'static');

app.use(express.static(staticPath)); // solo responde a request tipo get!

/* app.get('/imagen.jpeg', (req, res) => {
    res.status(200);
    console.log('hola');
    res.send('hola');
});
 */
app.listen(3000, () => console.log('Is alive!'));
