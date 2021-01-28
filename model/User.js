const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    company: {
        type: 'String',
        required: true,
        max: 255
    },
    
    username: {
        type: 'String',
        required: true,
        max: 255
    },
    
    password: {
        type: 'String',
        required: true,
        max: 2048
    },
    
    email: {
        type: 'String',
        required: true,
        max: 255
    },
    
    firstName: {
        type: 'String',
        required: true,
        max: 255
    },
    
    lastName: {
        type: 'String',
        required: true,
        max: 255
    },
    
    city: {
        type: 'String',
        required: true,
        max: 255
    },
    
    country: {
        type: 'String',
        required: true,
        max: 255
    },
    
    postalCode: {
        type: 'String',
        required: true,
        max: 255
    },

    aboutMe: {
        type: 'String',
        required: true,
        max: 255
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);
