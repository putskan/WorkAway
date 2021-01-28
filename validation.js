const Joi = require('@hapi/joi');

const registerValidation = (input) => {
    // validate registration input. return the error msg, empty string if no validation error.
    const schema = Joi.object().keys({
        company: Joi.string().min(2).required(),
        username: Joi.string().min(6).required(),
        password: Joi.string().min(6).required(),
        email: Joi.string().required().email(),
        firstName: Joi.string().min(2).required(),
        lastName: Joi.string().min(2).required(),
        city: Joi.string().min(2).required(),
        country: Joi.string().min(2).required(),
        postalCode: Joi.string().min(2).required(),
        aboutMe: Joi.string().min(2).required()
    });

    const {error} = schema.validate(input);
    if (error) {
        return error.details[0].message;
    }
    return '';
}


const loginValidation = (input) => {
    // validate login input. return the error msg, empty string if no validation error.    
    const schema = Joi.object().keys({
        username: Joi.string().min(6).required(),
        password: Joi.string().min(6).required()
    });
    const {error} = schema.validate(input);
    if (error) {
        return error.details[0].message;
    }
    return '';
}


const setUserInfoValidation = (input) => {
    // validate setUserInfo request input. return the error msg, empty string if no validation error.
    const schema = Joi.object().keys({
        username: Joi.string().min(6).required(),
        email: Joi.string().required().email(),
        firstName: Joi.string().min(2).required(),
        lastName: Joi.string().min(2).required(),
        city: Joi.string().min(2).required(),
        country: Joi.string().min(2).required(),
        postalCode: Joi.string().min(2).required(),
        aboutMe: Joi.string().min(2).required()
    });

    const {error} = schema.validate(input);
    if (error) {
        return error.details[0].message;
    }
    return '';
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.setUserInfoValidation = setUserInfoValidation;
