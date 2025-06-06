const db = require('../database/models');
const bcrypt = require('bcryptjs');

let usersController = {

    register: function (req, res) {
        if (req.session.user) {
            // Si el usuario ya está logueado, redirigir al perfil
            return res.redirect('/users');
        }
        // Si no está logueadomostrar la página de registro
        res.render('register');
    },

    login: function (req, res) {
        if (req.session.user) {
            // Si el usuario ya está logueado, redirigir al perfil
            return res.redirect('/users');
            
        }
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
                req.session.user = usuario;
                console.log("req.body.remember", req.body.remember);
                
                    if (req.body.remember) {
                        // Si el usuario eligió recordar su sesión guardamos en una cookie
                        res.cookie('user', usuario, { maxAge: 1000 * 60 * 10 }); //10 minutos
                    } 

                // Si todo está bien, redirigir al perfil 
                res.redirect('/users');
            })
            
            .catch(function(error) {
                console.log('Error en login:', error);
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
            });
    }, 
    perfil: function (req, res) {
    
        if (req.session.user == undefined || req.session.user == "") {
        return res.redirect('/users/login'); // o muestra un mensaje de error
    }
        // obtenemos el id del usuario logueado
        let idUsuario = req.session.user.id;
        // buscamos el usuario en la base de datos
        db.User.findByPk(idUsuario, {
            include: [
            {
                association: "product",
                include: [{ association: "comentario" }]
            }
        ]
        })
        .then(function(usuario) {
            if (usuario == undefined || usuario == "") {
                return res.send('Usuario no encontrado.');
            }
            res.render('profile', { 
                usuario: usuario,
                productos: usuario.product, 
                comentarios: usuario.comentario 
            }); 
        })
        .catch(function(error) {
            res.send('Ocurrió un error al cargar el perfil.', error);
        });
    },
    
 
    perfilID: function (req, res) {
        // obtenemos el id del usuario de la url
        let idUsuario = req.params.id;
        //let idUsuarioLogueado = req.session.usuarioLogueado.id;

        db.User.findByPk(idUsuario, {
            include: [
            {
                association: "product",
                include: [{ association: "comentario" }]
            }
        ]
        })
        .then(function(usuario) {
            if (usuario == undefined || usuario == "") {
                return res.send('Usuario no encontrado.');
            }
            res.render('userProfile', {
                usuario: usuario,
                productos: usuario.product, 
                comentarios: usuario.comentario 
            }); 
        })
        .catch(function(error) {
            res.send('Ocurrió un error al cargar el perfil.');
        });
    },

    logout: function (req, res) { 
        res.clearCookie('user'); // borramos cookie si existe
        // cerramos sesión
        req.session.destroy( function (){
            res.redirect('/users/login'); // redirigimos al login
        });
    }
};

module.exports = usersController;