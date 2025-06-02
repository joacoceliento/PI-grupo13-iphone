var express = require("express");
var router = express.Router();
const usersController = require('../controllers/usersController');


// Ruta para regitrarse 
router.get('/register', usersController.register)
router.post('/register', usersController.create)

// Ruta para logiarse
router.get('/login', usersController.login)
router.post('/login', usersController.createlogin)

// Ruta al perfil
router.get('/', usersController.perfil)

// Ruta para ver el perfil de un usuario especifico
router.get('/id/:id', usersController.perfilID)

// Ruta logout
router.post('/logout', usersController.logout)

module.exports = router