var express = require("express");
var router = express.Router();
const profileController = require('../controllers/profileController');

// Ruta de perfil
router.get('/', profileController.profile)

// Ruta para regitrarse 
router.get('/register', profileController.register)

// Ruta para logiarse
router.get('/login', profileController.login)


module.exports = router