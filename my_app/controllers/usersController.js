const info = require('../db/info');
const db = require('../database/models');
const bcrypt = require('bcryptjs');

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

    createlogin: function (req, res) {

        let email = req.body.email;
        let contrasenia = req.body.contrasenia;

        // Validamos que los campos no estén vacíos
        if (email == undefined || email == "" || contrasenia == undefined || contrasenia == "") {
            return res.send("Debes ingresar email y contraseña.");
        }

        // Buscar usuario por email
        db.User.findOne({ where: { mail: email } })
            .then(function(usuario) {
                if (usuario  == undefined || usuario == "" ) {
                    return res.send("El email no está registrado.");
                }

                let check = bcrypt.compareSync(contrasenia, usuario.contrasenia)

                // Comparar contraseña encriptada
                if ( check == false) {
                    return res.send( "La contraseña es incorrecta.");
                }

                // Si todo está bien, redirigir al perfil 
                res.redirect('/users');
            })
            .catch(function(error) {
                console.log('Error en login:', error);
                res.send('Ocurrió un error al intentar iniciar sesión.');
            });
    },

    create: function (req, res) {
        // creamos un nuevo usuario y lo guardamos en la base de datos

        let usuario = {
            nombre: req.body.nombre,
            email: req.body.email,
            contrasenia: req.body.contrasenia,
            dni: req.body.dni,
            fecha: req.body.fecha,
        }
        // validamos que los campos tengan datos
        if (usuario.email == undefined || usuario.email == "") {
            return res.send("El email no puede estar vacío.");
        }
        //
        db.User.findOne({ where: { mail: usuario.email } })
            // buscamos si ya existe ek mail 
            .then(function(usuarioExistente) {
                if (usuarioExistente) {
                    return res.send("El email ya está registrado.");
                }

                if (usuario.contrasenia == undefined || usuario.contrasenia == "" || usuario.contrasenia.length < 3) {
                    return res.send("La contraseña debe tener al menos 3 caracteres.");
                }
                
                usuario.contrasenia = bcrypt.hashSync(usuario.contrasenia, 10); 
                // guardamos el usuario en la databse
                return db.User.create({ 
                    nombre: usuario.nombre,
                    mail: usuario.email,
                    contrasenia: usuario.contrasenia,
                    dni: usuario.dni,
                    fecha_nacimiento: usuario.fecha,
                });
            })
            .then(function(nuevoUsuario) {
                if (nuevoUsuario) {
                    res.redirect('/users/login');
                }
            })
            .catch(function(error) {
                console.log('Error al crear usuario:', error);
                res.send('Ocurrió un error al registrar el usuario.');
            });
    }
};

module.exports = usersController;