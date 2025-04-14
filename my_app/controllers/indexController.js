

// LISTA CON TODOS LOS PUNTOS DEL PI Y LAS COSAS QUE FALTAN TERMINAR
/* 

FALTA:

    - Acomodar el header para que esten todos iguales con los cambios del tamaño del logo
    - Cambiar la tipografía del productos en el index, cuando te pones por encima de un botín
    - encontrar algún fondo bueno para el body
    - El cerrar sesión en el header logueado, A DONDE NOS TIENE QUE LLEVAR, QUE URL?
    - REVISAR QUE MÁS FALTA


*/

let info = require('../db/info')

let indexController = {
    index: function (req, res) {
        let infoProducto = info.productos; // obteng de db
        
        res.render('index', { 
            productos: infoProducto // pasamos los productos a la vista
        });
    }
};


module.exports = indexController;