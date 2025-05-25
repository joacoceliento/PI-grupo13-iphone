const info = require('../db/info');
const db = require('../database/models');


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
    },

    create: function (req, res) {
        
        let usuario = {
            nombre: req.body.nombre,
            email: req.body.email,
            contrasenia: req.body.contrasenia,
            dni: req.body.dni,
            fecha: req.body.fecha,
        }

        db.User.create({ 
            nombre: usuario.nombre ,
            mail: usuario.email ,
            contrasenia: usuario.contrasenia,
            dni: usuario.dni ,
            fecha_nacimiento: usuario.fecha ,
        })
        
        res.send(usuario)

        // res.redirect("/")  --> ESTO NOS SIRVE PARA REDIRIGIRLO A OTRA PAGINA
    }
};

module.exports = usersController;