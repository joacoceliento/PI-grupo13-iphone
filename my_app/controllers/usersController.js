const info = require('../db/info');

let usersController = {
    perfil: function (req, res) {
        // elegimos al primer usuario como ejemplo de obtener de base de datos
        let usuario = info.usuario;
        let infoProducto = info.productos;

        res.render('profile', { usuario: usuario,
                                productos: infoProducto });
    },

    register: function (req, res) {
        res.render('register');
    },

    login: function (req, res) {
        res.render('login');
    }
};

module.exports = usersController;