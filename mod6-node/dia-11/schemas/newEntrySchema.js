const Joi = require('joi');

const newEntrySchema = Joi.object().keys({
    place: Joi.string()
        .required()
        .min(2)
        .max(50)
        .error((errors) => {
            switch (errors[0].code) {
                case 'any.required':
                    return new Error('Se require un lugar');
                default:
                    return new Error(
                        'El lugar debe tener entre 2 y 50 caracteres'
                    );
            }
        }),
    description: Joi.string()
        .required()
        .min(10)
        .max(500)
        .error((errors) => {
            switch (errors[0].code) {
                case 'any.required':
                    return new Error('Se require una descripción');
                default:
                    return new Error(
                        'El lugar debe tener entre 10 y 500 caracteres'
                    );
            }
        }),
});

module.exports = newEntrySchema;
