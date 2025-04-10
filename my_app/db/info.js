
// PUNTO 2 - Módulo de datos
// completar los espacios faltantes

let baseDeDatos = {
    usuarios: [
      {
        mail: "pedro3000@gmail.com",
        usuario: "Pedro Bobzin",
        contraseña: "28432917",
        fechaNacimiento: "26/09/2005",
        dni: 47987222,
        fotoPerfil: "default-image.png"
      },
      {
        mail: "maria.l@gmail.com",
        usuario: "María López",
        contraseña: "maria123",
        fechaNacimiento: "10/12/2002",
        dni: 43811234,
        fotoPerfil: "default-image.png"
      },
      {
        mail: "jose.elcapo@gmail.com",
        usuario: "José Martínez",
        contraseña: "jose456",
        fechaNacimiento: "05/03/2000",
        dni: 42123123,
        fotoPerfil: "default-image.png"
      },
      {
        mail: "luci1999@gmail.com",
        usuario: "Luciana Rey",
        contraseña: "luciana789",
        fechaNacimiento: "28/07/1999",
        dni: 41234567,
        fotoPerfil: "default-image.png"
      },
      {
        mail: "maxi_dev@gmail.com",
        usuario: "Maximiliano Torres",
        contraseña: "maxiDev2024",
        fechaNacimiento: "02/04/1998",
        dni: 40222333,
        fotoPerfil: "default-image.png"
      }
    ],
  
    productos: [
        {
          id: 1,
          imagenProducto: "img-macbook-pro-2019.jpg",
          nombreProducto: "MacBook Pro 13'' 2019",
          descripcion: "Potente notebook con Touch Bar y pantalla Retina. Ideal para trabajo creativo y rendimiento exigente."
        },
        {
          id: 2,
          imagenProducto: "img-samsung-galaxy-s10.jpg",
          nombreProducto: "Samsung Galaxy S10",
          descripcion: "Smartphone de alta gama con pantalla AMOLED, triple cámara y diseño elegante. Excelente experiencia Android."
        },
        {
          id: 3,
          imagenProducto: "img-tv-samsung-smart.jpg",
          nombreProducto: "Smart TV Samsung 55'' UHD",
          descripcion: "Televisor 4K Ultra HD con colores vibrantes, sonido envolvente y acceso a plataformas de streaming."
        },
        {
          id: 4,
          imagenProducto: "img-cafetera-moulinex.jpg",
          nombreProducto: "Cafetera Moulinex Dolce Gusto",
          descripcion: "Cafetera automática para cápsulas. Prepará cappuccinos, lattes y más con solo un botón."
        }
      ],
  
    comentarios: [
      {
        nombreUsuario: "Pedro",
        textoComentario: "Muy buen producto, llegó rápido.",
        imagenPerfil: "default-image.png"
      }
    ]
  };


module.exports = baseDeDatos;