var express = require('express')
var router = express.Router()
const loginCcontroller = require('../controllers/loginController')

router.get('/', loginCcontroller.login)

module.exports = router