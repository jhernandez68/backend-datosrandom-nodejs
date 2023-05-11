const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    primerNombre: String,
    apellido: String,
    avatar : String
});

module.exports = model('User', userSchema);