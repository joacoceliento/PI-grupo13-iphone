
// PUNTO 2 - Módulo de datos
// completar los espacios faltantes

let baseDeDatos = {
    usuario: {
      mail: "JudeMadrid@gmail.com",
      nombre: "Jude Bellingham",
      contraseña: "realVARdrid8279",
      fechaNacimiento: "26/09/2005",
      dni: 47987222,
      fotoPerfil: "/images/users/bellingham.jpeg"
    },

    productos: [
        {
            id: 1,
            imagenProducto: "/images/products/Adidas_Messi.jpg",
            nombreProducto: "Adidas Messi",
            descripcion: "Cafetera automática para cápsulas. Prepará cappuccinos, lattes y más con solo un botón.",
            comentarios: [
              {
                nombreUsuario: "Pedro",
                textoComentario: "Muy buen producto, llegó rápido.",
                imagenPerfil: "/images/users/fotoPerfil-Pedro.jpeg"
              },
              {
                nombreUsuario: "Messi",
                textoComentario: "¡Gran calidad y facil de usar!",
                imagenPerfil: "/images/users/fotoPerfil-Messi.jpeg"
              },
              {
                nombreUsuario: "Emilia",
                textoComentario: "Esperaba más del producto",
                imagenPerfil: "/images/users/fotoPerfil-Emilia.avif"
              },
              {
                nombreUsuario: "Federico",
                textoComentario: "Me trajeron un color distinto al que pedi, y encima se atrasaron con el pedido",
                imagenPerfil: "default-image.png"
              },
              {
                nombreUsuario: "Samuel",
                textoComentario: "Excelente servicio",
                imagenPerfil: "default-image.png"
              }
            ]},
        {
          id: 2,
          imagenProducto: "/images/products/Adidas_Predator.jpeg",
          nombreProducto: "Adidas Predator",
          descripcion: "Gran precisión y toque para mediocampistas.",
          comentarios:[
            {
              nombreUsuario: "Pedro",
              textoComentario: "Muy buen producto, llegó rápido.",
              imagenPerfil: "/images/users/fotoPerfil-Pedro.jpeg"
            },
            {
              nombreUsuario: "Messi",
              textoComentario: "¡Gran calidad y facil de usar!",
              imagenPerfil: "/images/users/fotoPerfil-Messi.jpeg"
            },
            {
              nombreUsuario: "Emilia",
              textoComentario: "Esperaba más del producto",
              imagenPerfil: "/images/users/fotoPerfil-Emilia.avif"
            },
            {
              nombreUsuario: "Federico",
              textoComentario: "Me trajeron un color distinto al que pedi, y encima se atrasaron con el pedido",
              imagenPerfil: "default-image.png"
            },
            {
              nombreUsuario: "Samuel",
              textoComentario: "Excelente servicio",
              imagenPerfil: "default-image.png"
            }
          ]}, 
          {
            id: 3,
      imagenProducto: "/images/products/Adidas_PredatorMutator.jpg",
      nombreProducto: "Adidas Predator Mutator",
      descripcion: "Diseño mejorado con tecnología de control.",
            comentarios:[
                {
                  nombreUsuario: "Pedro",
                  textoComentario: "Muy buen producto, llegó rápido.",
                  imagenPerfil: "/images/users/fotoPerfil-Pedro.jpeg"
                },
                {
                  nombreUsuario: "Messi",
                  textoComentario: "¡Gran calidad y facil de usar!",
                  imagenPerfil: "/images/users/fotoPerfil-Messi.jpeg"
                },
                {
                  nombreUsuario: "Emilia",
                  textoComentario: "Esperaba más del producto",
                  imagenPerfil: "/images/users/fotoPerfil-Emilia.avif"
                },
                {
                  nombreUsuario: "Federico",
                  textoComentario: "Me trajeron un color distinto al que pedi, y encima se atrasaron con el pedido",
                  imagenPerfil: "default-image.png"
                },
                {
                  nombreUsuario: "Samuel",
                  textoComentario: "Excelente servicio",
                  imagenPerfil: "default-image.png"
                }
              ]},
          {
            id: 4,
            imagenProducto: "/images/products/Adidas_Speedportal.jpeg",
            nombreProducto: "Adidas Speedportal",
            descripcion: "Rapidez y estabilidad para jugadores explosivos.",
            comentarios:[
                {
                  nombreUsuario: "Pedro",
                  textoComentario: "Muy buen producto, llegó rápido.",
                  imagenPerfil: "/images/users/fotoPerfil-Pedro.jpeg"
                },
                {
                  nombreUsuario: "Messi",
                  textoComentario: "¡Gran calidad y facil de usar!",
                  imagenPerfil: "/images/users/fotoPerfil-Messi.jpeg"
                },
                {
                  nombreUsuario: "Emilia",
                  textoComentario: "Esperaba más del producto",
                  imagenPerfil: "/images/users/fotoPerfil-Emilia.avif"
                },
                {
                  nombreUsuario: "Federico",
                  textoComentario: "Me trajeron un color distinto al que pedi, y encima se atrasaron con el pedido",
                  imagenPerfil: "default-image.png"
                },
                {
                  nombreUsuario: "Samuel",
                  textoComentario: "Excelente servicio",
                  imagenPerfil: "default-image.png"
                }
              ]},
              {
                id: 5,
                imagenProducto: "/images/products/KakariRugby.jpg",
                nombreProducto: "Kakari Rugby",
                descripcion: "Botines resistentes para rugby, ideales para scrum.",
                comentarios: [
                  { nombreUsuario: "Pedro", 
                    textoComentario: "Los mejores para el contacto en el juego.", 
                    imagenPerfil: "default-image.png" },
                  { nombreUsuario: "Emilia",
                    textoComentario: "Se ajustan bien al pie, buena protección.", 
                    imagenPerfil: "default-image.png" },
                  { nombreUsuario: "Federico",
                    textoComentario: "Excelente agarre en la cancha.", 
                    imagenPerfil: "default-image.png" }
                ]
              },
              {
                id: 6,
                imagenProducto: "/images/products/Nike_Mercurial_Vapor2.jpg",
                nombreProducto: "Nike Mercurial Vapor 2",
                descripcion: "Ligereza extrema para máxima velocidad.",
                comentarios: [
                  { nombreUsuario: "Samuel", 
                    textoComentario: "Son super ligeros, ideales para delanteros.", 
                    imagenPerfil: "default-image.png" },
                  { nombreUsuario: "Pedro", 
                    textoComentario: "Buen ajuste en el pie.", 
                    imagenPerfil: "default-image.png" },
                  { nombreUsuario: "Messi", 
                    textoComentario: "Me ayudaron a mejorar mi aceleración.", 
                    imagenPerfil: "default-image.png" }
                ]
              },
              {
                id: 7,
                imagenProducto: "/images/products/Nike_Mercurial_Zoom_Vapor.jpeg",
                nombreProducto: "Nike Mercurial Zoom Vapor 2",
                descripcion: "Tecnología Zoom para respuesta rápida en el juego.",
                comentarios: [
                  { nombreUsuario: "Federico", 
                    textoComentario: "Muy cómodos en el movimiento.", 
                    imagenPerfil: "default-image.png" },
                  { nombreUsuario: "Pedro", 
                    textoComentario: "Mejor respuesta en cambios de velocidad.", 
                    imagenPerfil: "default-image.png" },
                  { nombreUsuario: "Emilia", 
                    textoComentario: "Los colores son muy atractivos.", 
                    imagenPerfil: "default-image.png" }
                ]
              },
              {
                id: 8,
                imagenProducto: "/images/products/Nike_Mercurial7.jpeg",
                nombreProducto: "Nike Mercurial 7",
                descripcion: "Modelo clásico con ajuste mejorado.",
                comentarios: [
                  { nombreUsuario: "Messi", 
                    textoComentario: "Buena estabilidad en el pie.", 
                    imagenPerfil: "default-image.png" },
                  { nombreUsuario: "Samuel", 
                    textoComentario: "Excelentes para jugar rápido.", 
                    imagenPerfil: "default-image.png" },
                  { nombreUsuario: "Pedro", 
                    textoComentario: "Un modelo cómodo y versátil.", 
                    imagenPerfil: "default-image.png" }
                ]
              },
              {
                id: 9,
                imagenProducto: "/images/products/Nike_Phantom.jpeg",
                nombreProducto: "Nike Phantom",
                descripcion: "Precisión y toque superior para pases y disparos.",
                comentarios: [
                  { nombreUsuario: "Federico", 
                    textoComentario: "Excelente control al golpear el balón.", 
                    imagenPerfil: "default-image.png" },
                  { nombreUsuario: "Messi", 
                    textoComentario: "Me ayudó en los tiros de precisión.", 
                    imagenPerfil: "default-image.png" },
                  { nombreUsuario: "Pedro", 
                    textoComentario: "Los recomiendo para mediocampistas.", 
                    imagenPerfil: "default-image.png" }
                ]
              },
              {
                id: 10,
                imagenProducto: "/images/products/Puma_UltraPro.jpeg",
                nombreProducto: "Puma Ultra Pro",
                descripcion: "Diseño aerodinámico para rendimiento en velocidad.",
                comentarios: [
                  { nombreUsuario: "Emilia", 
                    textoComentario: "Buena sensación en el pie.", 
                    imagenPerfil: "default-image.png" },
                  { nombreUsuario: "Samuel", 
                    textoComentario: "Son ligeros, ideales para extremos rápidos.", 
                    imagenPerfil: "default-image.png" },
                  { nombreUsuario: "Federico", 
                    textoComentario: "Gran tracción en movimientos bruscos.", 
                    imagenPerfil: "default-image.png" }
                ]
              }

        // Agregá más productos (deben ser al menos 10 según la consigna)
      ]
  };


module.exports = baseDeDatos;



