
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
            imagenProducto: "/images/products/Adidas-Messi3.webp",
            nombreProducto: "Adidas Messi F50",
            descripcion: "Diseñados para jugadores que dominan el juego. Parte superior con tecnología Zone Skin para un mejor toque, suela FG para tracción en césped natural y ajuste cómodo sin cordones.",
            comentarios: [
              {
                nombreUsuario: "Pedro",
                textoComentario: "Muy buen producto, llegó rápido.",
                imagenPerfil: "/images/users/fotoPerfil-Pedro.jpeg"
              },
              {
                nombreUsuario: "Messi",
                textoComentario: "La calidad del botin es espectacular, muy recomendado",
                imagenPerfil: "/images/users/fotoPerfil-Messi.jpeg"
              },
              {
                nombreUsuario: "Emilia",
                textoComentario: "Buen agarre y excelente ajuste al pie. Muy recomendables para jugadores creativos.",
                imagenPerfil: "/images/users/fotoPerfil-Emilia.avif"
              },
              {
                nombreUsuario: "Federico",
                textoComentario: "Me mandaron un talle distinto al que pedi y encima se atrasaron con el pedido",
                imagenPerfil: "/images/users/fotoPerfil_Federico.jpg"
              },
              {
                nombreUsuario: "Samuel",
                textoComentario: "Se adaptan muy bien al pie. No me hacen ampollas como otros.",
                imagenPerfil: "/images/users/fotoPerfil_Samuel.webp"
              }
            ]},
        {
          id: 2,
          imagenProducto: "/images/products/Adidas_Predator.jpeg",
          nombreProducto: "Adidas Predator",
          descripcion: "Botines ultralivianos pensados para la velocidad. Su diseño aerodinámico y ajuste ceñido brindan tracción explosiva y rendimiento óptimo en partidos intensos.",
          comentarios:[
            {
              nombreUsuario: "Pedro",
              textoComentario: "No los conocía pero me sorprendieron. Muy buena relación calidad-precio.",
              imagenPerfil: "/images/users/fotoPerfil-Pedro.jpeg"
            },
            {
              nombreUsuario: "Messi",
              textoComentario: "Botines cómodos y resistentes. Ideales para posiciones defensivas.",
              imagenPerfil: "/images/users/fotoPerfil-Messi.jpeg"
            },
            {
              nombreUsuario: "Emilia",
              textoComentario: "Estilo clásico con tecnología moderna. Control total en cada jugada.",
              imagenPerfil: "/images/users/fotoPerfil-Emilia.avif"
            },
            {
              nombreUsuario: "Federico",
              textoComentario: "Se sienten súper livianos. Perfectos para sprints y cambios de ritmo.",
              imagenPerfil: "/images/users/fotoPerfil_Federico.jpg"
            },
            {
              nombreUsuario: "Samuel",
              textoComentario: "Excelente servicio",
              imagenPerfil: "/images/users/fotoPerfil_Samuel.webp"
            }
          ]
          }, 
          {
            id: 3,
      imagenProducto: "/images/products/Adidas_PredatorMutator.jpg",
      nombreProducto: "Adidas Predator Mutator",
      descripcion: "Perfectos para jugadores creativos. Su sistema FUZIONFIT+ se adapta al pie brindando comodidad y soporte, permitiendo libertad de movimiento y cambios de ritmo.",
      comentarios: [
        {
          nombreUsuario: "Pedro",
          textoComentario: "Muy buen producto, llegó rápido.",
          imagenPerfil: "/images/users/fotoPerfil-Pedro.jpeg"
        },
        {
          nombreUsuario: "Messi",
          textoComentario: "La calidad del botin es espectacular, muy recomendado",
          imagenPerfil: "/images/users/fotoPerfil-Messi.jpeg"
        },
        {
          nombreUsuario: "Emilia",
          textoComentario: "Buen agarre y excelente ajuste al pie. Muy recomendables para jugadores creativos.",
          imagenPerfil: "/images/users/fotoPerfil-Emilia.avif"
        },
        {
          nombreUsuario: "Federico",
          textoComentario: "Me mandaron un talle distinto al que pedi y encima se atrasaron con el pedido",
          imagenPerfil: "/images/users/fotoPerfil_Federico.jpg"
        },
        {
          nombreUsuario: "Samuel",
          textoComentario: "Se adaptan muy bien al pie. No me hacen ampollas como otros.",
          imagenPerfil: "/images/users/fotoPerfil_Samuel.webp"
        }
      ]},
          {
            id: 4,
            imagenProducto: "/images/products/Adidas_Speedportal.jpeg",
            nombreProducto: "Adidas Speedportal",
            descripcion: "Hechos para quienes marcan la diferencia en velocidad. Su parte superior sin cordones y estructura ligera favorecen aceleraciones rápidas y mayor control.",
            comentarios:[
              {
                nombreUsuario: "Pedro",
                textoComentario: "No los conocía pero me sorprendieron. Muy buena relación calidad-precio.",
                imagenPerfil: "/images/users/fotoPerfil-Pedro.jpeg"
              },
              {
                nombreUsuario: "Messi",
                textoComentario: "Botines cómodos y resistentes. Ideales para posiciones defensivas.",
                imagenPerfil: "/images/users/fotoPerfil-Messi.jpeg"
              },
              {
                nombreUsuario: "Emilia",
                textoComentario: "Estilo clásico con tecnología moderna. Control total en cada jugada.",
                imagenPerfil: "/images/users/fotoPerfil-Emilia.avif"
              },
              {
                nombreUsuario: "Federico",
                textoComentario: "Se sienten súper livianos. Perfectos para sprints y cambios de ritmo.",
                imagenPerfil: "/images/users/fotoPerfil_Federico.jpg"
              },
              {
                nombreUsuario: "Samuel",
                textoComentario: "Excelente servicio",
                imagenPerfil: "/images/users/fotoPerfil_Samuel.webp"
              }
            ]
            }, 
              {
                id: 5,
                imagenProducto: "/images/products/KakariRugby.jpg",
                nombreProducto: "Kakari Rugby",
                descripcion: "Inspirados en el fútbol clásico pero con tecnología moderna. Cuero premium, ligereza y un ajuste impecable para una sensación auténtica en el campo.",
                comentarios: [
                  {
                    nombreUsuario: "Pedro",
                    textoComentario: "Muy buen producto, llegó rápido.",
                    imagenPerfil: "/images/users/fotoPerfil-Pedro.jpeg"
                  },
                  {
                    nombreUsuario: "Messi",
                    textoComentario: "La calidad del botin es espectacular, muy recomendado",
                    imagenPerfil: "/images/users/fotoPerfil-Messi.jpeg"
                  },
                  {
                    nombreUsuario: "Emilia",
                    textoComentario: "Buen agarre y excelente ajuste al pie. Muy recomendables para jugadores creativos.",
                    imagenPerfil: "/images/users/fotoPerfil-Emilia.avif"
                  },
                  {
                    nombreUsuario: "Federico",
                    textoComentario: "Me mandaron un talle distinto al que pedi y encima se atrasaron con el pedido",
                    imagenPerfil: "/images/users/fotoPerfil_Federico.jpg"
                  },
                  {
                    nombreUsuario: "Samuel",
                    textoComentario: "Se adaptan muy bien al pie. No me hacen ampollas como otros.",
                    imagenPerfil: "/images/users/fotoPerfil_Samuel.webp"
                  }
                ]},
              {
                id: 6,
                imagenProducto: "/images/products/Nike_Mercurial_Vapor3.webp",
                nombreProducto: "Nike Mercurial Vapor 2",
                descripcion: "Ofrecen un ajuste cómodo desde el primer uso. Su parte superior flexible y suela con buen agarre los hacen ideales para jugadores rápidos y versátiles.",
                comentarios:[
                  {
                    nombreUsuario: "Pedro",
                    textoComentario: "No los conocía pero me sorprendieron. Muy buena relación calidad-precio.",
                    imagenPerfil: "/images/users/fotoPerfil-Pedro.jpeg"
                  },
                  {
                    nombreUsuario: "Messi",
                    textoComentario: "Botines cómodos y resistentes. Ideales para posiciones defensivas.",
                    imagenPerfil: "/images/users/fotoPerfil-Messi.jpeg"
                  },
                  {
                    nombreUsuario: "Emilia",
                    textoComentario: "Estilo clásico con tecnología moderna. Control total en cada jugada.",
                    imagenPerfil: "/images/users/fotoPerfil-Emilia.avif"
                  },
                  {
                    nombreUsuario: "Federico",
                    textoComentario: "Se sienten súper livianos. Perfectos para sprints y cambios de ritmo.",
                    imagenPerfil: "/images/users/fotoPerfil_Federico.jpg"
                  },
                  {
                    nombreUsuario: "Samuel",
                    textoComentario: "Excelente servicio",
                    imagenPerfil: "/images/users/fotoPerfil_Samuel.webp"
                  }
                ]
                }, 
              {
                id: 7,
                imagenProducto: "/images/products/Nike_Mercurial_Zoom_Vapor.jpeg",
                nombreProducto: "Nike Mercurial Zoom Vapor 2",
                descripcion: "Diseñados para atacantes que priorizan velocidad y precisión. Livianos, resistentes y con un diseño moderno que brinda soporte y estabilidad.",
                comentarios: [
                  {
                    nombreUsuario: "Pedro",
                    textoComentario: "Muy buen producto, llegó rápido.",
                    imagenPerfil: "/images/users/fotoPerfil-Pedro.jpeg"
                  },
                  {
                    nombreUsuario: "Messi",
                    textoComentario: "La calidad del botin es espectacular, muy recomendado",
                    imagenPerfil: "/images/users/fotoPerfil-Messi.jpeg"
                  },
                  {
                    nombreUsuario: "Emilia",
                    textoComentario: "Buen agarre y excelente ajuste al pie. Muy recomendables para jugadores creativos.",
                    imagenPerfil: "/images/users/fotoPerfil-Emilia.avif"
                  },
                  {
                    nombreUsuario: "Federico",
                    textoComentario: "Me mandaron un talle distinto al que pedi y encima se atrasaron con el pedido",
                    imagenPerfil: "/images/users/fotoPerfil_Federico.jpg"
                  },
                  {
                    nombreUsuario: "Samuel",
                    textoComentario: "Se adaptan muy bien al pie. No me hacen ampollas como otros.",
                    imagenPerfil: "/images/users/fotoPerfil_Samuel.webp"
                  }
                ]},
              {
                id: 8,
                imagenProducto: "/images/products/Nike_Mercurial7.jpeg",
                nombreProducto: "Nike Mercurial 7",
                descripcion: "Durabilidad y comodidad en cada pisada. Su diseño elegante y materiales resistentes los hacen ideales para defensores que buscan control y firmeza.",
                comentarios:[
                  {
                    nombreUsuario: "Pedro",
                    textoComentario: "No los conocía pero me sorprendieron. Muy buena relación calidad-precio.",
                    imagenPerfil: "/images/users/fotoPerfil-Pedro.jpeg"
                  },
                  {
                    nombreUsuario: "Messi",
                    textoComentario: "Botines cómodos y resistentes. Ideales para posiciones defensivas.",
                    imagenPerfil: "/images/users/fotoPerfil-Messi.jpeg"
                  },
                  {
                    nombreUsuario: "Emilia",
                    textoComentario: "Estilo clásico con tecnología moderna. Control total en cada jugada.",
                    imagenPerfil: "/images/users/fotoPerfil-Emilia.avif"
                  },
                  {
                    nombreUsuario: "Federico",
                    textoComentario: "Se sienten súper livianos. Perfectos para sprints y cambios de ritmo.",
                    imagenPerfil: "/images/users/fotoPerfil_Federico.jpg"
                  },
                  {
                    nombreUsuario: "Samuel",
                    textoComentario: "Excelente servicio",
                    imagenPerfil: "/images/users/fotoPerfil_Samuel.webp"
                  }
                ]
                }, 
              {
                id: 9,
                imagenProducto: "/images/products/Nike_Phantom.jpeg",
                nombreProducto: "Nike Phantom",
                descripcion: "Combinan elegancia y rendimiento. Cuero suave, ajuste cómodo y excelente sensibilidad para quienes valoran el toque y el estilo clásico.",
                comentarios: [
                  {
                    nombreUsuario: "Pedro",
                    textoComentario: "Muy buen producto, llegó rápido.",
                    imagenPerfil: "/images/users/fotoPerfil-Pedro.jpeg"
                  },
                  {
                    nombreUsuario: "Messi",
                    textoComentario: "La calidad del botin es espectacular, muy recomendado",
                    imagenPerfil: "/images/users/fotoPerfil-Messi.jpeg"
                  },
                  {
                    nombreUsuario: "Emilia",
                    textoComentario: "Buen agarre y excelente ajuste al pie. Muy recomendables para jugadores creativos.",
                    imagenPerfil: "/images/users/fotoPerfil-Emilia.avif"
                  },
                  {
                    nombreUsuario: "Federico",
                    textoComentario: "Me mandaron un talle distinto al que pedi y encima se atrasaron con el pedido",
                    imagenPerfil: "/images/users/fotoPerfil_Federico.jpg"
                  },
                  {
                    nombreUsuario: "Samuel",
                    textoComentario: "Se adaptan muy bien al pie. No me hacen ampollas como otros.",
                    imagenPerfil: "/images/users/fotoPerfil_Samuel.webp"
                  }
                ]},
              {
                id: 10,
                imagenProducto: "/images/products/Puma_UltraPro.jpeg",
                nombreProducto: "Puma Ultra Pro",
                descripcion: "Ideales para jugadores que valoran el control y la comodidad. Su parte superior de cuero suave ofrece un excelente toque de balón, mientras que la suela proporciona estabilidad en giros y cambios de ritmo. Perfectos para mediocampistas que manejan el ritmo del juego.",
                comentarios:[
                  {
                    nombreUsuario: "Pedro",
                    textoComentario: "No los conocía pero me sorprendieron. Muy buena relación calidad-precio.",
                    imagenPerfil: "/images/users/fotoPerfil-Pedro.jpeg"
                  },
                  {
                    nombreUsuario: "Messi",
                    textoComentario: "Botines cómodos y resistentes. Ideales para posiciones defensivas.",
                    imagenPerfil: "/images/users/fotoPerfil-Messi.jpeg"
                  },
                  {
                    nombreUsuario: "Emilia",
                    textoComentario: "Estilo clásico con tecnología moderna. Control total en cada jugada.",
                    imagenPerfil: "/images/users/fotoPerfil-Emilia.avif"
                  },
                  {
                    nombreUsuario: "Federico",
                    textoComentario: "Se sienten súper livianos. Perfectos para sprints y cambios de ritmo.",
                    imagenPerfil: "/images/users/fotoPerfil_Federico.jpg"
                  },
                  {
                    nombreUsuario: "Samuel",
                    textoComentario: "Excelente servicio",
                    imagenPerfil: "/images/users/fotoPerfil_Samuel.webp"
                  }
                ]
                }, 

        // Agregá más productos (deben ser al menos 10 según la consigna)
      ]
  };


module.exports = baseDeDatos;



