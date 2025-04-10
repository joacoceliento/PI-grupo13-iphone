// Cosas para preguntar 

/* 
    1 - "El “nombre de usuario” deberá obtenerlo del módulo de datos."
            A que se refiere con esto en el punto 8? de que forma debo extraer el nombre del ususario
            LO MISMO PARA EL PUNTO 9 (ya esta hecho)

    2 -  "No es necesario para esta entrega que se vean los datos del producto 
        sobre el cual clieckeaste para llegar al detalle"
            A q se refire esto en el punto 10?

    3 - "Preguntar punto 10 y 11" YA HICE EL 11 TAMBIEN

*/


let indexController = {
    index : function (req, res) {
        res.render('index', { title: 'Mercado Libre Argentina' }); 
      }
};


module.exports = indexController;