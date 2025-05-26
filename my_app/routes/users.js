var express = require("express");
var router = express.Router();
const usersController = require('../controllers/usersController');

// Ruta al perfil
router.get('/', usersController.perfil)

// Ruta para regitrarse 
router.get('/register', usersController.register)

router.post('/register', usersController.create)

// Ruta para logiarse
router.get('/login', usersController.login)
router.post('/login', usersController.createlogin)




module.exports = router