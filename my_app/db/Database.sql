CREATE SCHEMA catalogo;
USE catalogo;
-- Tabla de usuarios (login, register)
CREATE TABLE user (
 id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
 nombre VARCHAR(500),
 mail VARCHAR(500) UNIQUE,
 DNI INT UNSIGNED UNIQUE,
 fecha_nacimiento DATE NOT NULL,
 fotoURL VARCHAR(500)
 );
 
 ALTER TABLE user
ADD COLUMN createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
ADD COLUMN deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP;

ALTER TABLE user
ADD COLUMN contraseña VARCHAR(500);
 -- users hasta aca
 

-- Tabla de productos (botines)
CREATE TABLE productos (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_id INT UNSIGNED NOT NULL,
    imagen VARCHAR(500),
    nombre_producto VARCHAR(500) NOT NULL,
    descripcion TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(id) -- id del usuario que sube productos
);
ALTER TABLE productos 
MODIFY COLUMN descripcion VARCHAR(500); -- practico modificar columnas

-- ahora insertamos los registros de usuarios manuelamente:
INSERT INTO user (nombre, mail, DNI, fecha_nacimiento, fotoURL, createdAt, updatedAt, deletedAt, contraseña) VALUES
('Jude Bellingham', 'JudeMadrid@gmail.com', 47987222, '2005-09-26', '/images/users/bellingham.jpeg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, 'realVARdrid8279'),
('Lionel Messi', 'LeoMessi@gmail.com', 32165498, '1987-06-24', '/images/users/messi.jpeg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, 'GOAT_10'),
('Cristiano Ronaldo', 'Cristiano7@gmail.com', 27489563, '1985-02-05', '/images/users/cristiano.jpeg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, 'CR7Legacy'),
('Neymar Jr.', 'NeymarJr@gmail.com', 45123678, '1992-02-05', '/images/users/neymar.jpeg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, 'SkillsMagic10'),
('Kylian Mbappé', 'KMbappe@gmail.com', 36987412, '1998-12-20', '/images/users/mbappe.jpeg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, 'FastestMan7');

-- registros de products manualmente:
INSERT INTO productos (user_id, imagen, nombre_producto, descripcion, createdAt, updatedAt, deletedAt) VALUES
(1, '/images/products/Adidas_Messi.jpg', 'Adidas Messi', 'Botines inspirados en la velocidad y agilidad de Messi.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(2, '/images/products/Adidas_Predator.jpeg', 'Adidas Predator', 'Gran precisión y toque para mediocampistas.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(3, '/images/products/Adidas_PredatorMutator.jpg', 'Adidas Predator Mutator', 'Diseño mejorado con tecnología de control.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(4, '/images/products/Adidas_Speedportal.jpeg', 'Adidas Speedportal', 'Rapidez y estabilidad para jugadores explosivos.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(5, '/images/products/KakariRugby.jpg', 'Kakari Rugby', 'Botines resistentes para rugby, ideales para scrum.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(1, '/images/products/Nike_Mercurial_Vapor2.jpg', 'Nike Mercurial Vapor 2', 'Ligereza extrema para máxima velocidad.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(2, '/images/products/Nike_Mercurial_Zoom_Vapor2.jpeg', 'Nike Mercurial Zoom Vapor 2', 'Tecnología Zoom para respuesta rápida en el juego.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(3, '/images/products/Nike_Mercurial7.jpeg', 'Nike Mercurial 7', 'Modelo clásico con ajuste mejorado.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(4, '/images/products/Nike_Phantom.jpeg', 'Nike Phantom', 'Precisión y toque superior para pases y disparos.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
(5, '/images/products/Puma_UltraPro.jpeg', 'Puma Ultra Pro', 'Diseño aerodinámico para rendimiento en velocidad.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL);
