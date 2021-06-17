const Joi = require('joi');

const newUserSchema = Joi.object().keys({
    email: Joi.string()
        .required()
        .email()
        .error((errors) => {
            switch (errors[0].code) {
                case 'any.required':
                    return new Error('Se require un email');
                case 'string.email':
                    return new Error('El email no es válido');
                default:
                    return new Error('');
            }
        }),
    password: Joi.string()
        .required()
        // .alphanum() => Solo admite números y letras
        .min(10)
        .max(100)
        .error((errors) => {
            switch (errors[0].code) {
                case 'any.required':
                    return new Error('Se require una constraseña');
                default:
                    return new Error(
                        'La contraseña debe tener entre 10 y 100 caracteres'
                    );
            }
        }),
});

module.exports = newUserSchema;
