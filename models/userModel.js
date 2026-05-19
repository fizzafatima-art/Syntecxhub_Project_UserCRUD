const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name dalna zaroori hai'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email dalna zaroori hai'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Kripya sahi email dalein']
    },
    age: {
        type: Number,
        required: [true, 'Age dalna zaroori hai'],
        min: [18, 'Age kam se kam 18 honi chahiye']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);