//Código app de express
const express = require('express');
const morgan = require('morgan'); //morgan para mostrar las peticiones en consola.
const cors = require('cors');
const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use(require('./routes/users'));


module.exports = app;