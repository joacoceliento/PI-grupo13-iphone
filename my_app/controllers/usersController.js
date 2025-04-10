const database = require('../db/info');

let usersController = {
    perfil: function (req, res) {
        // elegimos al primer usuario como ejemplo de obtener de base de datos
        let usuario = database.usuario;
        res.render('profile', { usuario: usuario });
    },

    register: function (req, res) {
        res.render('register');
    },

    login: function (req, res) {
        res.render('login');
    }
};

module.exports = usersController;