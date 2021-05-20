'use strict';

const button = document.querySelector('form > button');
const users = [];

button.addEventListener('click', (e) => {
    // Prevenimos el comportamiento por defecto del botón:
    e.preventDefault();

    // Seleccionamos el formulario seleccionando el padre del
    // target actual, que será el botón:
    const form = e.target.parentElement;

    // Otra forma de seleccionar el formulario es utilizando su nombre;
    const form = document.forms.login;

    // Pusheamos el usuario en el array de usuarios:
    console.log(form.elements.username.value);
    console.log(form.elements.password.value);

    users.push({
        name: form.elements.username.value,
        password: form.elements.password.value,
    });

    //Reseteamos los inputs:
    form.elements.username.value = '';
    form.elements.password.value = '';
});
