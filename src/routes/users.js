//Archivo para las rutas

const {Router} = require('express');
const router = Router();

const { faker } = require('@faker-js/faker');

const User = require('../models/User');

router.get('/api/users', async (req, res) => {
    const users = await User.find();
    res.json({users});
})

router.get('/api/users/create', async (req, res) => {

    for (let i = 0; i <= 4 ; i++){

        await User.create({
            primerNombre: faker.name.firstName(),
            apellido: faker.name.lastName(),
            avatar: faker.image.avatar()
        })
    }

    res.json('Lista de usuarios');
})

module.exports = router;