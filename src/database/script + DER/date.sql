-- Insertar usuariios principales
INSERT INTO users (email, password, token, checked, idRole, createdAt, updatedAt) 
VALUES
('juanp@gmail.com', '$2a$10$4xh1aepQn4sAvOrkuQPzvulb3t9BOkOlnNTIzMl9pK0/Rh1Vrsbuu', NULL, NULL, 2, NOW(), NOW()),
('mariag@gmail.com', '$2a$10$4xh1aepQn4sAvOrkuQPzvulb3t9BOkOlnNTIzMl9pK0/Rh1Vrsbuu', NULL, NULL, 2, NOW(), NOW()),
('emiliac@gmail.com', '$2a$10$4xh1aepQn4sAvOrkuQPzvulb3t9BOkOlnNTIzMl9pK0/Rh1Vrsbuu', NULL, NULL, 2, NOW(), NOW()),
('melissac@gmail.com', '$2a$10$4xh1aepQn4sAvOrkuQPzvulb3t9BOkOlnNTIzMl9pK0/Rh1Vrsbuu', NULL, NULL, 2, NOW(), NOW()),
('agustinn@gmail.com', '$2a$10$4xh1aepQn4sAvOrkuQPzvulb3t9BOkOlnNTIzMl9pK0/Rh1Vrsbuu', NULL, NULL, 2, NOW(), NOW()),
('mercadoliebre@gmail.com', '$2a$10$4xh1aepQn4sAvOrkuQPzvulb3t9BOkOlnNTIzMl9pK0/Rh1Vrsbuu', NULL, NULL, 1, NOW(), NOW()),
('kitchening@gmail.com', '$2a$10$4xh1aepQn4sAvOrkuQPzvulb3t9BOkOlnNTIzMl9pK0/Rh1Vrsbuu', NULL, NULL, 1, NOW(), NOW()),
('craftsy@gmail.com', '$2a$10$4xh1aepQn4sAvOrkuQPzvulb3t9BOkOlnNTIzMl9pK0/Rh1Vrsbuu', NULL, NULL, 1, NOW(), NOW()),
('formar@gmail.com', '$2a$10$4xh1aepQn4sAvOrkuQPzvulb3t9BOkOlnNTIzMl9pK0/Rh1Vrsbuu', NULL, NULL, 1, NOW(), NOW()),
('uggs@gmail.com', '$2a$10$4xh1aepQn4sAvOrkuQPzvulb3t9BOkOlnNTIzMl9pK0/Rh1Vrsbuu', NULL, NULL, 1, NOW(), NOW());

-- Inserto Freelancers 

INSERT INTO freelancers (firstName, lastName, country, phoneCode, phone, hourValue, idUser, idSpecialty, idKnowledge, about) 
VALUES 
('Juan', 'Perez', 'Argentina', 54, 123456789, 60, 4, 1, 1, 'Hola, soy Juan Pérez, un apasionado desarrollador web con una sólida experiencia en la creación de sitios web dinámicos y funcionales. Mi enfoque se centra en la implementación de tecnologías modernas como HTML5, CSS3 y JavaScript para ofrecer experiencias web intuitivas y atractivas.'),
('Maria', 'Gomez', 'España', 34, 987654321, 40, 5, 2, 3,'¡Hola! Soy María Gómez, una diseñadora gráfica creativa y apasionada. Mi especialidad radica en la creación de diseños impactantes y visualmente atractivos utilizando herramientas como Adobe Photoshop e Illustrator. Me encanta transformar ideas en imágenes cautivadoras y expresivas.'),
('Emilia', 'Cole', 'Argentina', 54, 123456789, 30, 6, 10, 5, '¡Hola! Me llamo Emilia Cole y soy una desarrolladora web entusiasta con un gran amor por el diseño y la programación. Mi experiencia abarca diversas tecnologías web como HTML, CSS, JavaScript y frameworks como React y Vue.js. Me apasiona crear experiencias web únicas y accesibles para todos.'),
('Melissa', 'Coop', 'Argentina', 54, 123456789, 25, 7, 2, 2, 'Saludos, soy Melissa Coop, una desarrolladora web enfocada en la creación de interfaces limpias y funcionales. Mi objetivo es desarrollar sitios web que no solo sean estéticamente atractivos, sino también fáciles de usar y accesibles para todos los usuarios.'),
('Agustin', 'Nuñez', 'España', 34, 987654321, 80, 8, 8, 4, '¡Hola a todos! Soy Agustín Nuñez, un diseñador gráfico con un enfoque centrado en la creatividad y la innovación. Con una sólida experiencia en el uso de herramientas como Adobe Photoshop e Illustrator, mi pasión radica en la creación de diseños que cuentan historias y despiertan emociones.');

-- Insertar empresas
INSERT INTO companies (companyName, location, mainImage, website, idUser, description) 
VALUES 
('Mercado Liebre', 'Argentina', 'mercadoLiebre.jpg', 'http://www.mercadoliebre.com', 9, 'Ofrecemos soluciones tecnológicas innovadoras y personalizadas para potenciar el crecimiento de tu empresa en el mercado digital.'),
('Kitchening', 'Argentina', 'kitchening.jpg', 'http://www.kitchening.com', 10, 'Somos apasionados del diseño y el marketing digital. Creamos experiencias únicas y atractivas para emprendedores que desean destacarse en la era digital.'),
('Craftsy', 'Argentina', 'craftsy.png', 'http://www.craftsy.com', 11, 'Nos dedicamos a desarrollar soluciones tecnológicas que inspiran e impulsan el éxito de tu empresa. Nuestro enfoque personalizado y creativo nos distingue en el mercado.'),
('Formar', 'Argentina', 'formar', 'http://www.formar.com', 12, 'En Formar, combinamos la innovación y la creatividad para desarrollar soluciones tecnológicas de vanguardia que impulsan el crecimiento de tu negocio.'),
('Ugg', 'Argentina', 'ugg', 'http://www.ugg.com', 13, 'Con Ugg, tu marca alcanzará nuevas alturas en el mundo digital. Nuestro enfoque estratégico y creativo en diseño y marketing digital te ayudará a destacarte y atraer a tu audiencia ideal.');

-- Insertar proyectos

INSERT INTO projects (title, idStatus, idCompany, createdAt, updatedAt, description) 
VALUES 
('Desarrollo de Sitio Web Corporativo', 1, 2, NOW(), NOW(), 'Creación de un sitio web corporativo para una empresa de tecnología, enfocado en ofrecer una experiencia de usuario intuitiva y atractiva. El proyecto incluirá el diseño y desarrollo de múltiples páginas, integración de contenido multimedia y optimización para dispositivos móviles.'),
('Diseño de Identidad Visual y Branding', 1, 2, NOW(), NOW(), 'Desarrollo de una nueva identidad visual y branding para una startup de moda, incluyendo el diseño de logotipo, paleta de colores y tipografía. El proyecto también abarcará la creación de materiales de marketing impresos y digitales, asegurando una coherencia visual en todas las plataformas.'),
('Redacción de Contenido Web', 1, 3, NOW(), NOW(), 'Redacción de contenido web persuasivo y atractivo para mejorar la presencia online de una empresa de tecnología. El contenido se enfocará en comunicar de manera efectiva los productos y servicios de la empresa, utilizando estrategias de SEO y marketing de contenidos para aumentar la visibilidad y la relevancia en los motores de búsqueda.'),
('Estrategia de Marketing Digital', 1, 4, NOW(), NOW(), 'Desarrollo de una estrategia integral de marketing digital para aumentar la visibilidad y el alcance de una startup de moda en línea. La estrategia incluirá la creación y gestión de campañas publicitarias en redes sociales, optimización de motores de búsqueda (SEO), marketing de contenido y análisis de datos para maximizar el retorno de la inversión (ROI).'),
('Desarrollo de Aplicación Móvil Innovadora', 1, 5, NOW(), NOW(), 'Creación de una aplicación móvil innovadora y funcional para ofrecer soluciones tecnológicas avanzadas a los usuarios. El proyecto involucrará el diseño de interfaz de usuario (UI) y experiencia de usuario (UX), desarrollo de funciones personalizadas y compatibilidad con múltiples plataformas móviles, garantizando un rendimiento óptimo y una experiencia de usuario satisfactoria.'),
('Gestión de Proyectos Empresariales', 1, 6, NOW(), NOW(), 'Administración eficiente de proyectos empresariales, incluyendo planificación, ejecución y control de actividades para lograr objetivos definidos.'),
('Traducción Profesional de Contenidos', 1, 2, NOW(), NOW(), 'Ofrecemos servicios profesionales de traducción de contenido para garantizar la precisión y la coherencia lingüística en diferentes idiomas. Nuestro equipo de traductores expertos trabaja con una amplia variedad de documentos y materiales, incluyendo textos académicos, técnicos, legales y comerciales.'),
('Consultoría Estratégica de Negocios', 1, 2, NOW(), NOW(), 'Proporcionamos asesoramiento estratégico personalizado para optimizar el rendimiento y la rentabilidad de las empresas en entornos competitivos. Nuestro equipo de consultores expertos analiza los desafíos específicos de cada cliente y desarrolla estrategias efectivas para alcanzar sus objetivos empresariales a largo plazo.'),
('Diseño Arquitectónico y Urbanístico', 1, 5, NOW(), NOW(), 'Nos especializamos en el diseño innovador y funcional de espacios arquitectónicos y urbanísticos, enfocados en la creación de entornos sostenibles y estéticamente agradables. Nuestro equipo de arquitectos y urbanistas trabaja en estrecha colaboración con nuestros clientes para transformar ideas y conceptos en proyectos concretos y viables.'),
('Creación Literaria y Redacción Creativa', 1, 6, NOW(), NOW(), 'Nos dedicamos a la producción de contenido literario creativo y original, incluyendo narrativa, poesía y escritura creativa para diversas plataformas y audiencias. Nuestros escritores talentosos tienen experiencia en la creación de contenido único y cautivador que capta la imaginación y emociona a los lectores de todas las edades.'),
('Desarrollo de Plataforma E-Commerce', 1, 5, NOW(), NOW(), 'Nos especializamos en la implementación de plataformas de comercio electrónico robustas y seguras para facilitar las ventas online de una amplia gama de productos gourmet. Nuestro equipo de desarrolladores expertos diseña y personaliza cada plataforma para satisfacer las necesidades específicas de nuestros clientes y garantizar una experiencia de compra fluida y segura para los usuarios.'),
('Campaña Publicitaria Multicanal', 1, 4, NOW(), NOW(), 'Ofrecemos la planificación y ejecución de una campaña publicitaria multicanal para promocionar una nueva línea de productos alimenticios orgánicos. Nuestro equipo de expertos en marketing diseña estrategias innovadoras que aprovechan una variedad de canales de comunicación, incluyendo medios digitales, redes sociales, televisión y medios impresos, para llegar a la audiencia objetivo y generar un impacto positivo en las ventas y la percepción de marca.'),
('Diseño de Experiencia de Usuario (UX)', 1, 5, NOW(), NOW(), 'Nos especializamos en la creación de una experiencia de usuario excepcional (UX) a través del diseño y la navegabilidad de una aplicación móvil de servicios financieros. Nuestro enfoque centrado en el usuario garantiza que cada aspecto de la aplicación esté diseñado para satisfacer las necesidades y expectativas de los usuarios, maximizando la usabilidad, la accesibilidad y la satisfacción del cliente.'),
('Optimización SEO y Posicionamiento Web', 1, 4, NOW(), NOW(), 'Nos dedicamos a la implementación de estrategias avanzadas de SEO y optimización web para mejorar el posicionamiento y la visibilidad online de una empresa de consultoría empresarial. Nuestro equipo de especialistas en SEO realiza análisis exhaustivos de palabras clave, optimización de contenido y estructura de sitios web, y técnicas de construcción de enlaces para mejorar el ranking en los motores de búsqueda y atraer tráfico orgánico de alta calidad.'),
('Desarrollo de Aplicación de Realidad Virtual', 1, 4, NOW(), NOW(), 'Nos especializamos en el desarrollo y diseño de una aplicación de realidad virtual inmersiva para ofrecer experiencias interactivas y envolventes en el campo del turismo y la cultura. Nuestro equipo de desarrolladores utiliza tecnologías de vanguardia para crear mundos virtuales detallados y realistas que transportan a los usuarios a lugares y eventos únicos, proporcionando una experiencia única y memorable.');

-- Inserto favoritos
INSERT INTO favorites (idFreelancer, idProject) 
VALUES 
(2, 3), (2, 4), (2, 5),
(3, 10), (3, 1), (3, 2),
(4, 1), (4, 2), (4, 3), (4, 12), (4, 13),
(5, 4), (5, 5), (5, 6), (5, 14), (5, 15),
(6, 7), (6, 8), (6, 9), (6, 1), (6, 12);

-- Inserto en skills de proyectos
INSERT INTO ProjectSkills (idProject, idSkill) 
VALUES 
(1, 53), (1, 54), (1, 55),
(2, 54), (2, 55), (2, 56),
(3, 55), (3, 56), (3, 57),
(4, 56), (4, 57), (4, 58),
(5, 57), (5, 58), (5, 59),
(6, 53), (6, 54), (6, 55),
(7, 54), (7, 55), (7, 56),
(8, 55), (8, 56), (8, 57),
(9, 56), (9, 57), (9, 58),
(10, 57), (10, 58), (10, 59),
(11, 53), (11, 54), (11, 55),
(12, 54), (12, 55), (12, 56),
(13, 55), (13, 56), (13, 57),
(14, 56), (14, 57), (14, 58),
(15, 57), (15, 58), (15, 59);

-- Inserto en individulas
INSERT INTO individuals (idSpecialty, idKnowledge, about, price, idProject, chosen) 
VALUES 
(2, 1, 'Especializado en desarrollo web utilizando tecnologías modernas como React y Node.js.', 50, 1, null),
(4, 1, 'Experto en diseño gráfico con experiencia en Adobe Illustrator y Adobe Photoshop.', 60, 2, null),
(6, 2, 'Redactor creativo con habilidades para generar contenido persuasivo y atractivo.', 40, 3, null),
(8, 2, 'Especialista en marketing digital con experiencia en estrategias SEO y SEM.', 70, 4, null),
(10, 2, 'Desarrollador de aplicaciones móviles con habilidades en iOS y Android.', 55, 5, null),
(20, 3, 'Experto en gestión de proyectos con certificación PMP.', 65, 6, null),
(56, 5, 'Traductor profesional con dominio de varios idiomas extranjeros.', 45, 7, null),
(66, 5, 'Consultor empresarial con experiencia en estrategias de crecimiento.', 75, 8, null),
(77, 5, 'Arquitecto con habilidades en diseño arquitectónico sostenible.', 55, 9, null),
(73, 2, 'Escritor creativo con experiencia en diversos géneros literarios.', 60, 10, null),
(12, 2, 'Especializado en desarrollo web utilizando tecnologías modernas como React y Node.js.', 50, 11, null),
(14, 2, 'Experto en diseño gráfico con experiencia en Adobe Illustrator y Adobe Photoshop.', 60, 12, null),
(26, 4, 'Redactor creativo con habilidades para generar contenido persuasivo y atractivo.', 40, 13, null),
(28, 4, 'Especialista en marketing digital con experiencia en estrategias SEO y SEM.', 70, 14, null),
(18, 3, 'Desarrollador de aplicaciones móviles con habilidades en iOS y Android.', 55, 15, null),
(38, 5, 'Diseñador de aplicaciones móviles con experiencia en interfaces intuitivas y atractivas.', 55, 13, null),
(81, 4, 'Experto en estrategias de marketing digital y gestión de redes sociales.', 55, 15, null),
(47, 5, 'Gestor de proyectos de software con experiencia en metodologías ágiles.', 55, 10, null),
(9, 2, 'Diseñador de experiencia de usuario (UX) enfocado en la usabilidad y la accesibilidad.', 55, 5, null);

-- Inserto en individualskills
INSERT INTO individualskills (idIndividual, idSkill)
VALUES 
(1, 1), (1, 2), (1, 3),
(2, 4), (2, 5), (2, 6),
(3, 7), (3, 8), (3, 9),
(4, 10), (4, 11), (4, 12),
(5, 13), (5, 14), (5, 15),
(6, 16), (6, 17), (6, 18),
(7, 19), (7, 20), (7, 21),
(8, 22), (8, 23), (8, 24),
(9, 25), (9, 26), (9, 27),
(10, 28), (10, 29), (10, 30), 
(11, 31), (11, 32), (11, 33),
(12, 34), (12, 35), (12, 36),
(13, 37), (13, 38), (13, 39),
(14, 40), (14, 41), (14, 42), 
(15, 50), (15, 51), (15, 52),
(16, 28), (16, 29), (16, 30), 
(17, 31), (17, 32), (17, 33),
(18, 34), (18, 35), (18, 36);
-- (19, 37), (19, 38), (19, 39),
-- (20, 40), (20, 41), (20, 42);

-- Inserto en freelancerskill
INSERT INTO freelancerskills (idFreelancer, idSkill)
VALUES 
(2, 10), (3, 11), (2, 12),
(3, 13), (3, 14), (3, 15),
(4, 1), (4, 2), (4, 3),
(5, 4), (5, 5), (5, 6),
(6, 7), (6, 8), (6, 9);

-- Inserto en applications
INSERT INTO applications (idFreelancer, idIndividual, selected)
VALUES 
(2, 1, null), (2, 2, null), (2, 3, null), (2, 4, null), (2, 5, null), (2, 14, null),
(3, 6, null), (3, 7, null), (3, 8, null), (3, 9, null), (3, 10, null), (3, 15, null),
(4, 1, null), (4, 2, null), (4, 3, null), (4, 4, null), (4, 5, null), (4, 14, null),
(5, 6, null), (5, 7, null), (5, 8, null), (5, 9, null), (5, 10, null), (5, 15, null),
(6, 11, null), (6, 12, null), (6, 13, null), (6, 14, null), (6, 15, null), (6, 13, null);