# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Rutas de la app:

http://localhost/register: pinta el formulario de registro, además en este formulario habrá un link a http://localhost/login

http://localhost/login: pinta el formulario de login, además en este formulario habrá un link a http://localhost/register

http://localhost:3000/activate-user?activationCode=xxxxxx: hace una llamada al servicio de activación de usuario y redirige a http://localhost/login

cosas pendientes:

implementar code splitting por rutas

setear una ruta privada, /profile mostar el username, email y el activatedAt (si no estas logeado redirect a /login)

utilizar axios

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
