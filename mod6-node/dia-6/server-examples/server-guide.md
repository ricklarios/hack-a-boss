npm init y { instalamos el paquete de node_modules}
npm i nodemon { Instalamos nodemon } si queremos usarlo
En package.json introducimos:
"scrpits": {
"dev": "nodemon server-example.js"
}
Si vamos a trabajar con información privada instalamos dotenv

Creamos el servidor: ver "./server-guide.js"

Si necesitamos leer parámetros de la URL y nos llega en formato query instalamos querystring: npm i querystring
Importamos querystring en nuestro server.js
