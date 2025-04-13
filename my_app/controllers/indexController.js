

// LISTA CON TODOS LOS PUNTOS DEL PI Y LAS COSAS QUE FALTAN TERMINAR
/* 

Punto 1 - Migración a Node y Express

    Terminado = 1, 2, 3, 4, 5, 6, 7, 10
    
    FALTA terminar = 8, 9, 11


Punto 2 - Módulo de datos

    a = Los datos del usuario deben mostrarse en todos los lugares donde aparezca el header logueado y en “mi perfil”. (FALTA TERMINAR)

    b = La información de los productos debe mostrarse en todos los 
        lugares de la maqueta en donde aparezca un listado de productos por ejemplo en home y en  “mi perfil”. (FALTA TERMINAR)

         Debe tener al menos 10 productos (TERMINAR EN EL DB)


Punto 3 - Personalización del sitio

    Tipografía específica, paleta de colores y nombre del sistio (FALTA TERMINAR, TODO CSS)


*/

let info = require('../db/info')

let indexController = {
    index: function (req, res) {
        let infoProducto = info.productos; // obteng de db
        
        res.render('index', {
            title: "Mercado Libre Argentina",
            productos: infoProducto // pasamos los productos a la vista
        });
    }
};


module.exports = indexController;