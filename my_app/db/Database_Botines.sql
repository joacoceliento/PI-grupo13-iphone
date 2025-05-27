CREATE SCHEMA catalogo_tp2;
USE catalogo_tp2;
-- Tabla de usuarios (login, register)
CREATE TABLE user (
 id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
 nombre VARCHAR(500),
 mail VARCHAR(500) UNIQUE,
 dni INT UNSIGNED UNIQUE,
 fecha_nacimiento DATE NOT NULL,
 foto_url VARCHAR(500),
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 deleted_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
 contrasenia VARCHAR(500)
 );
 -- users hasta aca
 

-- Tabla de productos (botines)
CREATE TABLE productos (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_id INT UNSIGNED NOT NULL,
    imagen VARCHAR(500),
    nombre_producto VARCHAR(500) NOT NULL,
    descripcion VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(id) -- id del usuario que sube productos
);

-- Tabla de comentarios
CREATE TABLE comentarios (
	id INT UNSIGNED PRIMARY KEY auto_increment,
	producto_id INT UNSIGNED NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    descripcion VARCHAR(1000),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(id), -- id del usuario que sube productos
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);

-- ahora insertamos los registros de usuarios manuelamente:
INSERT INTO user (nombre, mail, dni, fecha_nacimiento, foto_url, created_at, updated_at, deleted_at, contrasenia) VALUES
('Lionel Messi', 'LeoMessi@gmail.com', 32165498, '1987-06-24', '/images/users/fotoPerfil-Messi.jpeg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, 'GOAT_10'),
('Emilia Mernes', 'emiliamernes@gmail.com', 27489563, '1985-02-05', '/images/users/fotoPerfil-Emilia.avif', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, 'Emilia123'),
('Federico Ramírez', 'federamirex1992@gmail.com', 45123678, '1992-02-05', '/images/users/fotoPerfil_Federico.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, 'Federiquito5'),
('Samuel Torres', 'torressamuel@gmail.com', 36987412, '1998-12-20', '/images/users/fotoPerfil_Samuel.webp', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, '2312Torres'),
('Jude Bellingham', 'JudeMadrid@gmail.com', 47987222, '2005-09-26', '/images/users/bellingham.jpeg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, 'realVARdrid8279');

-- registros de products manualmente:
INSERT INTO productos (user_id, imagen, nombre_producto, descripcion, created_at, updated_at, deleted_at) VALUES
(1, '/images/products/Adidas-Messi3.webp', 'Adidas Messi F50', 'Diseñados para jugadores que dominan el juego. Parte superior con tecnología Zone Skin para un mejor toque, suela FG para tracción en césped natural y ajuste cómodo sin cordones.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(2, '/images/products/Adidas_Predator.jpeg', 'Adidas Predator', 'Botines ultralivianos pensados para la velocidad. Su diseño aerodinámico y ajuste ceñido brindan tracción explosiva y rendimiento óptimo en partidos intensos.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(3, '/images/products/Adidas_PredatorMutator.jpg', 'Adidas Predator Mutator', 'Perfectos para jugadores creativos. Su sistema FUZIONFIT+ se adapta al pie brindando comodidad y soporte, permitiendo libertad de movimiento y cambios de ritmo.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(4, '/images/products/Adidas_Speedportal.jpeg', 'Adidas Speedportal', 'Hechos para quienes marcan la diferencia en velocidad. Su parte superior sin cordones y estructura ligera favorecen aceleraciones rápidas y mayor control.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(5, '/images/products/KakariRugby.jpg', 'Kakari Rugby', 'Inspirados en el fútbol clásico pero con tecnología moderna. Cuero premium, ligereza y un ajuste impecable para una sensación auténtica en el campo.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(1, '/images/products/Nike_Mercurial_Vapor3.webp', 'Nike Mercurial Vapor 2', 'Ofrecen un ajuste cómodo desde el primer uso. Su parte superior flexible y suela con buen agarre los hacen ideales para jugadores rápidos y versátiles.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(2, '/images/products/Nike_Mercurial_Zoom_Vapor.jpeg', 'Nike Mercurial Zoom Vapor 2', 'Diseñados para atacantes que priorizan velocidad y precisión. Livianos, resistentes y con un diseño moderno que brinda soporte y estabilidad.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(3, '/images/products/Nike_Mercurial7.jpeg', 'Nike Mercurial 7', 'Durabilidad y comodidad en cada pisada. Su diseño elegante y materiales resistentes los hacen ideales para defensores que buscan control y firmeza.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(4, '/images/products/Nike_Phantom.jpeg', 'Nike Phantom', 'Combinan elegancia y rendimiento. Cuero suave, ajuste cómodo y excelente sensibilidad para quienes valoran el toque y el estilo clásico.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(5, '/images/products/Puma_UltraPro.jpeg', 'Puma Ultra Pro', 'Ideales para jugadores que valoran el control y la comodidad. Su parte superior de cuero suave ofrece un excelente toque de balón, mientras que la suela proporciona estabilidad en giros y cambios de ritmo. Perfectos para mediocampistas que manejan el ritmo del juego.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL);

INSERT INTO comentarios (producto_id, user_id, descripcion, created_at, updated_at, deleted_at) VALUES
(1, 2,  'Muy buen producto, llegó rápido.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(1, 1,  'La calidad del botin es espectacular, muy recomendado', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(1, 3,  'Muy cómodos, apto para entrenar todos los dias', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(2, 3,  'No los conocía pero me sorprendieron. Muy buena relación calidad-precio.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(2, 4,  'Botines cómodos y resistentes. Ideales para posiciones defensivas.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(2, 1,  'Se sienten súper livianos. Perfectos para sprints y cambios de ritmo.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(3, 1,  'Buen agarre y excelente ajuste al pie. Muy recomendables para jugadores creativos.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(3, 2,  'Me mandaron un talle distinto al que pedi y encima se atrasaron con el pedido.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(3, 3,  'Se adaptan muy bien al pie. No me hacen ampollas como otros.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(4, 1,  'Estilo clásico con tecnología moderna. Control total en cada jugada.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(4, 2,  'La calidad del botin es espectacular, muy recomendado', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(4, 3,  'Muy cómodos, apto para entrenar todos los dias', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(5, 3,  'Excelente servicio', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(5, 4,  'Buen agarre y excelente ajuste al pie. Muy recomendables para jugadores creativos.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(5, 2,  'Se adaptan muy bien al pie. No me hacen ampollas como otros.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(6, 1,  'Estilo clásico con tecnología moderna. Control total en cada jugada.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(6, 2,  'La calidad del botin es espectacular, muy recomendado', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(6, 3,  'No los conocía pero me sorprendieron. Muy buena relación calidad-precio.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(7, 3,  'Muy buen producto, llegó rápido.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(7, 4,  'Me mandaron un talle distinto al que pedi y encima se atrasaron con el pedido', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(7, 1,  'Muy cómodos, apto para entrenar todos los dias', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(8, 1,  'Botines cómodos y resistentes. Ideales para posiciones defensivas.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(8, 2,  'La calidad del botin es espectacular, muy recomendado', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(8, 3,  'Muy buen producto, llegó rápido.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(9, 3,  'Buen agarre y excelente ajuste al pie. Muy recomendables para jugadores creativos', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(9, 4,  'Muy buen producto, llegó rápido.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(9, 2,  'Muy cómodos, apto para entrenar todos los dias', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(10, 1,  'Se sienten súper livianos. Perfectos para sprints y cambios de ritmo.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(10, 2,  'No los conocía pero me sorprendieron. Muy buena relación calidad-precio.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(10, 3,  'Excelente servicio', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL);