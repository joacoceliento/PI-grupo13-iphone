

// LISTA CON TODOS LOS PUNTOS DEL PI Y LAS COSAS QUE FALTAN TERMINAR
/* 

FALTA:

    - Acomodar el header para que esten todos iguales con los cambios del tamaño del logo
    - Pregunta de resultados busqueda
    - MySQL HACER TODO CON GUION BAJO, SACAR ALTER TABLES (CONTRASENIA)



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