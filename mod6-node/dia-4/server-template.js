require('dotenv').config();
const http = require('http');
const { HOST, PORT } = process.env;

const baseURL = `http://${HOST}:${PORT}`; // "localhost:3000"

const server = http.createServer();
server.listen(PORT, () => {
    console.log(`Servidor funcionando en ${baseURL}`);
});
