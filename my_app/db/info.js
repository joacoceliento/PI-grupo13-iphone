
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
            imagenProducto: "/images/products/Adidas Messi.jpg",
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
          imagenProducto: "/images/products/img-macbook-pro-2019.jpg",
          nombreProducto: "MacBook Pro 13'' 2019",
          descripcion: "Potente notebook con Touch Bar y pantalla Retina.",
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
            imagenProducto: "/images/products/img-samsung-galaxy-s10.jpg",
            nombreProducto: "Samsung Galaxy S10",
            descripcion: "Smartphone de alta gama con pantalla AMOLED, triple cámara y diseño elegante. Excelente experiencia Android.",
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
            imagenProducto: "/images/products/img-tv-samsung-smart.jpg",
            nombreProducto: "Smart TV Samsung 55'' UHD",
            descripcion: "Televisor 4K Ultra HD con colores vibrantes, sonido envolvente y acceso a plataformas de streaming.",
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
        // Agregá más productos (deben ser al menos 10 según la consigna)
      ]
  };


module.exports = baseDeDatos;



