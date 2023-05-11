//Modulo para conectarse a la bd
const mongoose = require('mongoose');

async function connect(){
    await mongoose.connect('mongodb://127.0.0.1/users-flutter-node', {
        useNewUrlParser : true
    });
    console.log('Base de datos conectada');

}

module.exports = { connect };