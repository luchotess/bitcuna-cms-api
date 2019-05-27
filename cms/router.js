'use strict';
const express = require('express');
const router = express.Router();

router.get('/v2', (req, res) => {
    res.json({
        global: {
            facebookUrl: {
                es: 'https://www.facebook.com/TrendyHostApartments/',
                en: 'https://www.facebook.com/TrendyHostApartments/',
            },
            googlePlusUrl: {
                es: 'https://www.google.com.pe/search?ei=ZIRvWruPEMPAwASqz5iQDA&amp;q=trendy+host+barranco&amp;oq=trendy+host&amp;gs_l=psy-ab.3.1.0l4j0i22i30k1l4j0i22i10i30k1j0i22i30k1.2110.4356.0.5763.13.12.1.0.0.0.162.1110.6j5.11.0..2..0...1c.1.64.psy-ab..1.12.1115...0i131k1j0i67k1j0i131i67k1.0.iYywciacEsE',
                en: 'https://www.google.com.pe/search?ei=ZIRvWruPEMPAwASqz5iQDA&amp;q=trendy+host+barranco&amp;oq=trendy+host&amp;gs_l=psy-ab.3.1.0l4j0i22i30k1l4j0i22i10i30k1j0i22i30k1.2110.4356.0.5763.13.12.1.0.0.0.162.1110.6j5.11.0..2..0...1c.1.64.psy-ab..1.12.1115...0i131k1j0i67k1j0i131i67k1.0.iYywciacEsE',
            },
            linkedinUrl: {
                es: 'https://www.linkedin.com/company/27242929/',
                en: 'https://www.linkedin.com/company/27242929/',
            },
            instagramUrl: {
                es: 'https://www.instagram.com/trendyhostapartments/',
                en: 'https://www.instagram.com/trendyhostapartments/',
            },
            bookUrl: {
                global: {
                    es: 'https://search.travelclick.com/try?languageid=1#/',
                    en: 'https://search.travelclick.com/try?languageid=1#/',
                }
            },
            navigation: {
                home: {
                    es: 'Inicio',
                    en: 'Home',
                },
                experiences: {
                    es: 'Experiencias',
                    en: 'Experiences',
                },
                properties: {
                    es: 'Propiedades',
                    en: 'Properties',
                },
                barranco: {
                    es: 'Barranco',
                    en: 'Barranco',
                },
                miraflores: {
                    es: 'Miraflores',
                    en: 'Miraflores',
                },
                testimonials: {
                    es: 'Testimoniales',
                    en: 'Testimonials',
                },
                faq: {
                    es: 'FAQ',
                    en: 'FAQ',
                },
                book: {
                    es: 'Reservar ahora',
                    en: 'Book Now!',
                }
            }
        },
        header: {
            logo: {
                es: 'logo.png',
                en: 'logo.png',
            }
        },
        footer: {
            logo: {
                es: 'logo-footer.png',
                en: 'logo-footer.png',
            },
            aboutTitle: {'en': 'ABOUT TRENDY HOST', 'es': 'ACERCA DE TRENDY HOST'},
            aboutParagraph: {
                'en': 'We are the first company in Peru specialized in the administration and commercial management of temporary rental apartments.',
                'es': 'Somos la primera empresa en Perú especializada en la administración y gestión comercial de departamentos de alquiler temporal.'
            },
            contact: {'en': 'CONTACT', 'es': 'CONTACTO'},
            address: {
                'en': 'Avenida República de Colombia 791, oficina 702, San Isidro, Lima Perú',
                'es': 'Avenida República de Colombia 791, oficina 702, San Isidro, Lima Perú'
            },
            phone: {'en': '(+51) 984 165 973', 'es': '(+51) 984 165 973'},
            email: {'en': 'reservas@trendyhost.com.pe', 'es': 'reservas@trendyhost.com.pe'},
            website: {'en': 'http://www.trendyhost.pe', 'es': 'http://www.trendyhost.pe'},
            testimonials: {'es': 'TESTIMONIALES', 'en': 'TESTIMONIALS'},
            findUs: {'es': 'ENCUENTRANOS EN:', 'en': 'FIND US IN:'},
            copyright: {
                'es': 'Copyright 2019 | Trendy Host. Todos los derechos reservados.',
                'en': 'Copyright 2019 | Trendy Host. All Rights Reserved.'
            },
            floatingBanner: {
                title: {'en': 'Make a Reservation', 'es': 'Haz una reserva'},
                paragraph: {
                    'en': 'It’s really easy! We’ll be with you every step of the way.',
                    'es': '¡Es bien fácil! Te ayudaremos en cada paso.'
                },
                book: {'en': 'Book Now!', 'es': '¡Reserva Ahora!'}
            }

        },
        home: {
            title: {
                es: 'TrendyHost Apartments',
                en: 'TrendyHost Apartments'
            },
            description: {
                es: 'Fue creada en 2017, con el respaldo del grupo Edifica, empresa peruana con más de 12 años de trayectoria. Iniciamos con el proyecto Osma en Barranco, y actualmente tenemos Canvas en pleno corazón de Miraflores y Stelar en el límite de Miraflores con Barranco. Nuestra iniciativa es bastante ambiciosa, contamos con más de 5 proyectos en camino, tanto en Lima como provincia.',
                en: 'Created in 2017, with the backing of Edifica group, a Peruvian company with more than 12 years of experience. We started with the Osma project in Barranco, and we currently have Canvas in the heart of Miraflores and Stelar on the border of Miraflores and Barranco. Our initiative is quite ambitious, we have more than 5 projects on the way, both in Lima and province.'
            },
            slider: [
                {
                    image: {
                        es: 'sli1.jpg',
                        en: 'sli1.jpg',
                    }
                },
                {
                    image: {
                        es: 'sli2.jpg',
                        en: 'sli2.jpg',
                    }
                },
                {
                    image: {
                        es: 'sli3.jpg',
                        en: 'sli3.jpg',
                    }
                },
                {
                    image: {
                        es: 'sli4.jpg',
                        en: 'sli4.jpg',
                    }
                },
                {
                    image: {
                        es: 'sli5.jpg',
                        en: 'sli5.jpg',
                    }
                },
                {
                    image: {
                        es: 'sli6.jpg',
                        en: 'sli6.jpg',
                    }
                }
            ],
            features: [
                {
                    title: {'en': 'Warm Essence', 'es': 'Cálida Esencia'},
                    description: {
                        'en': 'Our guests can feel and experience the city as locals do, contacting them with the bohemian essence of the Barranco district and our beautiful Miraflores streets, offering traditional and safe environments.',
                        'es': 'Nuestros huéspedes pueden sentir y vivir la ciudad tal cual lo hacen los locales, contactándolos con la bohemia esencia del distrito de Barranco y nuestras hermosas calles Miraflorinas, ofreciendo ambientes tradicionales y seguros.'
                    },
                    image: {'es': 'stairs.jpg', 'en': 'stairs.jpg'}
                },
                {
                    title: {'en': 'Incomparable service', 'es': 'Servicio Incomparable'},
                    description: {
                        'en': 'We offer an unbeatable quality-price ratio compared to the hotel offer and with other types of accommodation, while still offering the necessary services for tourists, businessmen or families that come both for a couple of days and for long stays.',
                        'es': 'Ofrecemos una relación calidad-precio inmejorable en comparación con la oferta hotelera y con otros tipos de alojamientos, sin dejar de ofrecer los servicios necesarios para turistas, empresarios o familias que vienen tanto por un par de días como para largas estadías.'
                    },
                    image: {'es': 'living.jpg', 'en': 'living.jpg'}
                },
                {
                    title: {'en': 'Pleasant stay', 'es': 'Grata estadía'},
                    description: {
                        'en': 'The apartments are fully equipped to the last detail with modern furnishings that gives them a Pleasant “Sense of Place” to our guests. We also offer additional services as required, optimizing your resources to the maximum.',
                        'es': 'Los departamentos están totalmente equipados hasta el último detalle con mobiliarios modernos que les da un grato “Sense of Place” a nuestros huéspedes. Asimismo, ofrecemos servicios adicionales según requerimiento, optimizando así sus recursos al máximo.'
                    },
                    image: {'es': 'department.jpg', 'en': 'department.jpg'}
                },
            ]
        },
        experiences: {
            title: {'es': 'Experiencias', 'en': 'Experiences'},
            description: {'es': '- Más información sobre Lima, Perú -', 'en': '- Learn more about Lima, Peru -'},
            banner: {'es': 'panoramica.jpg', 'en': 'panoramica.jpg'},
            gallery: {
                title: {'es': 'Ciudades y áreas destacadas', 'en': 'Featured Cities & Areas'},
                description: {
                    'es': 'Explore las diferentes atracciones y lugares que disfrutará cerca de nuestras propiedades.',
                    'en': 'Explore the different attractions and locations you will enjoy near our properties.'
                },
            },
            experiences: [
                {
                    title: {'es': 'Barranco de noche', 'en': 'Barranco at night'},
                    location: {'es': 'Barranco', 'en': 'Barranco'},
                    banner: {'es': 'green-coast2.jpg', 'en': 'green-coast2.jpg'},
                    description: {
                        'es': 'Desde 1860, Barranco ha sido considerado como un balneario sumamente atractivo para los veraneantes Limeños de clase media-alta y extranjeros en general, quienes se afincaron construyendo grandes ranchos y casonas, emulando estilos europeos, los cuales mantiene hasta la actualidad. <br><br> Actualmente es conocido no solo por sus atractivos turísticos sino también por ser un distrito bohemio, donde muchos artistas y literatos hicieron de este distrito su lugar de residencia y en donde la música criolla también ha estado presente. ',
                        'en': 'Since 1860, Barranco has been considered a very attractive spa for middle-and upper-class Lima vacationers and foreigners in general, who settled down building large ranches and mansions, emulating European styles, which keeps To the present day. <br><br> Nowadays it is known not only for its tourist attractions but also for being a Bohemian district, where many artists and literati made this district its place of residence and where the Creole music has also been present.'
                    },
                    image: {'es': 'green-coast2.jpg', 'en': 'green-coast2.jpg'},
                    thumbnail: {'es': 'barranco-miraflores.jpg', 'en': 'barranco-miraflores.jpg'},
                    key: {'es': 'barranco-noche', 'en': 'barranconight'},
                    lat: {'es': '-12.1496124', 'en': '-12.1496124'},
                    lng: {'es': '-77.02207', 'en': '-77.02207'},
                    zoom: {'es': '14', 'en': '14'}
                }, {
                    title: {'es': 'Faro La Marina', 'en': 'La Marina Lighthouse'},
                    location: {'es': 'Miraflores', 'en': 'Miraflores'},
                    banner: {'es': 'green-coast2.jpg', 'en': 'green-coast2.jpg'},
                    description: {
                        'es': 'El faro está ubicado en el Malecón Cisneros en el distrito de Miraflores, la caminata por los malecones es muy refrescante, jardines muy bien cuidados, monumentos coloridos y una hermosa vista a la playa, es un lugar muy seguro y tranquilo para caminar, encuentras muchos turistas y gente haciendo deporte. <br><br> Este faro tiene una altura aproximada de 22 metros, su estructura es de fierro fundido y fue inaugurado el año de 1973 por la Dirección de Hidrografía y Navegación de la Marina de Guerra del Perú. <br><br> Tiene un alcance lumínico de 26 millas náuticas y le da al parque una belleza única.<br><br> Es un lugar de mucha tradición para todos los miraflorinos.',
                        'en': 'The lighthouse is located on the Malecon Cisneros in the district of Miraflores, the hike through the piers is very refreshing, beautifully manicured gardens, colorful monuments and a beautiful view to the beach, is a very safe and quiet place to walk, you find many Tourists and people doing sports. <br><br> This lighthouse has an approximate height of 22 meters, its structure is of molten iron and was inaugurated the year of 1973 by the direction of hydrography and navigation of the Navy of Peru. <br><br> It has a luminous range of 26 nautical miles and gives the park a unique beauty.<br><br> It is a place of much tradition for all “Miraflorinos”.'
                    },
                    image: {'es': 'green-coast2.jpg', 'en': 'green-coast2.jpg'},
                    thumbnail: {'es': 'light-house.jpg', 'en': 'light-house.jpg'},
                    key: {'es': 'faro-miraflores', 'en': 'lighthouse'},
                    lat: {'es': '-12.1496124', 'en': '-12.1496124'},
                    lng: {'es': '-77.02207', 'en': '-77.02207'},
                    zoom: {'es': '14', 'en': '14'}
                }, {
                    title: {'es': 'Larcomar', 'en': 'Larcomar'},
                    location: {'es': 'Miraflores', 'en': 'Miraflores'},
                    banner: {'es': 'green-coast2.jpg', 'en': 'green-coast2.jpg'},
                    description: {
                        'es': 'Larcomar es un centro comercial ubicado en pleno centro turístico de Miraflores. <br><br> Fue inaugurado el 27 de noviembre de 1998 y es visitado con frecuencia por turistas internacionales, así como por los lugareños de Miraflores y otras partes de Lima. <br><br> El principal atractivo de Larcomar es su ubicación, ya que se encuentra sobre el acantilado de Miraflores con una vista espectacular hacia el Océano Pacífico. <br><br> En Larcomar encontrarás tiendas de ropa y calzado, restaurantes, bares y entretenimiento de día como de noche.<br><br> Larcomar está ubicado frente al hotel JW Marriott de Miraflores.',
                        'en': 'Larcomar is a shopping center located in the tourist center of Miraflores. <br><br> It was inaugurated on November 27, 1998 and is frequently visited by international tourists, as well as by locals from Miraflores and other parts of Lima. <br><br> The main attraction of Larcomar is its location, as it is located on the cliff of Miraflores with a spectacular view towards the Pacific Ocean.<br><br> In Larcomar you will find clothing and footwear stores, restaurants, bars and entertainment day and night. <br><br>Larcomar is located in front of the JW Marriott Hotel in Miraflores.'
                    },
                    image: {'es': 'green-coast2.jpg', 'en': 'green-coast2.jpg'},
                    thumbnail: {'es': 'larcomar.jpg', 'en': 'larcomar.jpg'},
                    key: {'es': 'larcomar', 'en': 'larcomar'},
                    lat: {'es': '-12.1320131', 'en': '-12.1320131'},
                    lng: {'es': '-77.0302195', 'en': '-77.0302195'},
                    zoom: {'es': '16', 'en': '16'}
                }, {
                    title: {'es': 'El Puente de los Suspiros', 'en': 'The Bridge of Sighs'},
                    location: {'es': 'Barranco', 'en': 'Barranco'},
                    banner: {'es': 'green-coast2.jpg', 'en': 'green-coast2.jpg'},
                    description: {
                        'es': 'En pleno corazón de Barranco se encuentra el Puente de los Suspiros, un tradicional puente de madera envuelto en un aire de romanticismo. <br><br>La historia cuenta que a quien atraviese el puente aguantando la respiración, ¡se le cumplirá el deseo que pida! Este puente fue construido en 1876, y actualmente se ubica en un sitio pintoresco en donde se pasa un rato agradable. <br><br>A un lado del puente está un pequeño pasillo que te lleva hasta un mirador con una hermosa vista hacia el mar y gran parte de la Costa Verde de Lima. <br><br>De ese mismo lado se encuentra la famosa Iglesia La Ermita, una antigua capilla de adobe que fue incendiada y destruida durante la guerra del pacífico y luego reconstruida, igual que el puente de los suspiros. <br><br>Por abajo del puente está la famosa bajada de los baños por la cual los antiguos pescadores de la zona bajaban diariamente al mar para cumplir con su faena. <br><br>Vale la pena quedarse en cada lugar y apreciar los detalles.',
                        'en': 'In the heart of Barranco lies the Bridge of sighs, a traditional wooden bridge wrapped in an air of romanticism. <br><br>The story tells that whoever crosses the bridge holding his breath, will be fulfilled the desire he asks! This bridge was built in 1876, and is currently located in a picturesque place where you spend a pleasant time. <br><br>On one side of the bridge is a small hallway that takes you to a viewpoint with a beautiful view to the sea and much of the Green coast of Lima. <br><br>On that same side is the famous church La Ermita, an old Adobe chapel that was burned and destroyed during the War of the Pacific and then rebuilt, just like the Bridge of Sighs.<br><br> Below the bridge is the famous descent of the baths by which the former fishermen of the area down daily to the sea to fulfill their work. <br><br>It is worth staying in each place and appreciating the details.'
                    },
                    image: {'es': 'green-coast2.jpg', 'en': 'green-coast2.jpg'},
                    thumbnail: {'es': 'puente.jpg', 'en': 'puente.jpg'},
                    key: {'es': 'bridge-of-sighs', 'en': 'puentesuspiros'},
                    lat: {'es': '-12.1496124', 'en': '-12.1496124'},
                    lng: {'es': '-77.02207', 'en': '-77.02207'},
                    zoom: {'es': '14', 'en': '14'}
                }, {
                    title: {'es': 'La Costa Verde', 'en': 'The Green Coast'},
                    location: {'es': 'Miraflores', 'en': 'Miraflores'},
                    banner: {'es': 'green-coast2.jpg', 'en': 'green-coast2.jpg'},
                    description: {
                        'es': 'La Costa Verde es una vía que recorre parte de la costa de Lima, atravesando 5 distritos de la ciudad, y ubicándose justo al frente de la orilla del Océano Pacífico. <br><br>Se caracteriza por contar con un elevado acantilado cubierto de vegetación y un lindo malecón desde donde es posible realizar paseos a pie o en bicicleta, observar el mar e inclusive ir a la playa. <br><br>Aquí también encontrarás actividades al aire libre (sobre todo en verano) como Capoeira, Yoga, paseos en parapente sobre el mar, y podrás salir a trotar con una hermosa vista.',
                        'en': 'The Costa Verde is a route that runs along the coast of Lima, passing through 5 districts of the city, and ranking just off the edge of the Pacific Ocean. <br><br>It is characterized by having a high cliff covered with vegetation and a nice boardwalk from where it is possible to take walks or bike, observe the sea and even go to the beach. <br><br>Here you will also find outdoor activities (especially in summer) such as Capoeira, Yoga, paragliding on the sea, and you can go jogging with a beautiful view.'
                    },
                    image: {'es': 'green-coast2.jpg', 'en': 'green-coast2.jpg'},
                    thumbnail: {'es': 'green-coast.jpg', 'en': 'green-coast.jpg'},
                    key: {'es': 'costa-verde', 'en': 'green-coast'},
                    lat: {'es': '-12.1305792', 'en': '-12.1305792'},
                    lng: {'es': '-77.0375799', 'en': '-77.0375799'},
                    zoom: {'es': '14', 'en': '14'}
                }, {
                    title: {'es': 'Museo MAC', 'en': 'MAC Museum'},
                    location: {'es': 'Barranco', 'en': 'Barranco'},
                    banner: {'es': 'green-coast2.jpg', 'en': 'green-coast2.jpg'},
                    description: {
                        'es': 'El MAC presenta una Colección de arte moderno y contemporáneo, nacional e internacional, que data de 1950 en adelante. <br><br>Fundado en el 2013, es el único museo de la ciudad de Lima especializado en la difusión del arte de este período, cuyas modernas instalaciones han sido concebidas y acondicionadas para este fin. <br><br>Posee un edificio de corte modernista diseñado por el arquitecto peruano Frederic Cooper Llosa, con tres módulos principales que corresponden a las tres salas donde están dispuestas la colección y las exposiciones temporales, y grandes ventanales que dan al espejo de agua y acentúan el concepto de isla. Una extensa área verde de acceso libre para el público complementa los espacios del museo. Dirección: Av. Miguel Grau 1511, Barranco.',
                        'en': 'The MAC presents a collection of modern and contemporary art, national and international, dating from 1950 onwards. <br><br>Founded in 2013, it is the only museum in the city of Lima specializing in the diffusion of the art of this period, whose modern facilities have been conceived and conditioned for this purpose. <br><br>It has a modernist-style building designed by the Peruvian architect Frederic Cooper Llosa, with three main modules that correspond to the three rooms where the collection and the temporary exhibitions are arranged, and large windows that give the mirror of Water and accentuate the island concept. An extensive green area of free access for the public complements the museum\'s spaces. Address: Av. Miguel Grau 1511, Barranco.'
                    },
                    image: {'es': 'green-coast2.jpg', 'en': 'green-coast2.jpg'},
                    thumbnail: {'es': 'mac-museum.jpg', 'en': 'mac-museum.jpg'},
                    key: {'es': 'mac', 'en': 'mac'},
                    lat: {'es': '-12.1496124', 'en': '-12.1496124'},
                    lng: {'es': '-77.02207', 'en': '-77.02207'},
                    zoom: {'es': '14', 'en': '14'}
                }, {
                    title: {'es': 'Microteatro', 'en': 'Microteatro'},
                    location: {'es': 'Barranco', 'en': 'Barranco'},
                    banner: {'es': 'green-coast2.jpg', 'en': 'green-coast2.jpg'},
                    image: {'es': 'green-coast2.jpg', 'en': 'green-coast2.jpg'},
                    description: {
                        'es': 'Microteatro Lima es una alternativa para disfrutar de la bohemia de Barranco, presentando en simultáneo 15 obras de teatro de 15 minutos de duración, para 15 espectadores en cada función y en espacios de 15 metros cuadrados en una acogedora casona en Barranco, todas bajo un eje temático. <br><br>Las propuestas varían cada temporada y en una misma noche podrías apreciar hasta cinco obras, pues en la boletería te arman un itinerario especial que hasta te dará tiempo para disfrutar de una bebida o piqueo en el bar y de la exhibición de arte que hay en la casona. <br><br>Horarios martes y miércoles: 20:35 21:00 21:25 21:50 22:15 22:40 Horarios domingos: 19:05 19:30 19:55 20:20 20:45 21:10 Las entradas están a la venta en en la misma boletería de Microteatro de martes a viernes desde las 7pm, sábados y domingos desde las 3pm.',
                        'en': 'Microteatro Lima is an alternative to enjoy the bohemia of Barranco, presenting in simultaneous 15 plays of 15 minutes duration, for 15 spectators in each function and in spaces of 15 square meters in a cozy house in Barranco, all under a Thematic axis.<br><br> The proposals vary every season and in one night you could appreciate up to five works, because in the box office you have a special itinerary that will give you time to enjoy a drink or pique in the bar and the art exhibit in La Casona. <br><br>Schedules Tuesdays and Wednesdays: 20:35 21:00 21:25 21:50 22:15 22:40 Sundays: 19:05 19:30 19:55 20:20 20:45 21:10 Tickets are on sale at the same microtheatre ticket office from Tuesday to Friday from 7pm, Saturdays and Sundays from 3pm.'
                    },
                    thumbnail: {'es': 'microteatro.jpg', 'en': 'microteatro.jpg'},
                    key: {'es': 'microteatro', 'en': 'microteatro'},
                    lat: {'es': '-12.1494972', 'en': '-12.1494972'},
                    lng: {'es': '-77.0237658', 'en': '-77.0237658'},
                    zoom: {'es': '14', 'en': '14'}
                }, {
                    title: {'es': 'Huaca Pucllana', 'en': 'Huaca Pucllana'},
                    location: {'es': 'Miraflores', 'en': 'Miraflores'},
                    banner: {'es': 'green-coast2.jpg', 'en': 'green-coast2.jpg'},
                    description: {
                        'es': 'Huaca Pucllana es un sitio arqueológico perteneciente a la cultura Lima, del periodo de los desarrollos regionales (200 - 700 d. C.), ubicado en el distrito de Miraflores. <br><br>Está construido casi en su totalidad con adobes y rellenos de cantos rodados y arena. Su principal atractivo es una pirámide de 25 metros de altura y un conjunto de patios, plazas y recintos al noreste de ésta. <br><br>Cuenta con una sala de exposiciones, circuito de visitas y además, adyacente a la zona arqueológica, se ubica uno de los mejores restaurantes de comida típica peruana, el cual tiene una vista espectacular de la pirámide, particularmente de noche. Dirección: General Borgoño cdra. 8, Huaca Pucllana – Miraflores',
                        'en': 'Huaca Pucllana is an archaeological site belonging to the Lima culture, of the period of the regional developments (200-700 D. C.), located in the district of Miraflores. <br><br>It is built almost entirely with adobes and filled with boulders and sand. Its main attraction is a pyramid of 25 meters high and a set of patios, squares and enclosures northeast of this.<br><br> It has an exhibition hall, circuit of visits and besides, adjacent to the archaeological zone, one of the best restaurants of typical Peruvian food is located, which has a spectacular view of the pyramid, particularly at night. Address: General Borgoño BARDC. 8, Huaca Pucllana – Miraflores'
                    },
                    image: {'es': 'green-coast2.jpg', 'en': 'green-coast2.jpg'},
                    thumbnail: {'es': 'huaca.jpg', 'en': 'huaca.jpg'},
                    key: {'es': 'huacapucllana', 'en': 'huacapucllana'},
                    lat: {'es': '-12.1494972', 'en': '-12.1494972'},
                    lng: {'es': '-77.0237658', 'en': '-77.0237658'},
                    zoom: {'es': '14', 'en': '14'}
                }, {
                    title: {'es': 'Parque Central Kennedy', 'en': 'Kennedy Central Park'},
                    location: {'es': 'Miraflores', 'en': 'Miraflores'},
                    banner: {'es': 'green-coast2.jpg', 'en': 'green-coast2.jpg'},
                    description: {
                        'es': 'El Parque Kennedy es uno de los parques de Lima más conocidos y visitados por su ubicación tan céntrica en el distrito de Miraflores, el distrito más turístico de la ciudad.<br><br> Cuenta con un área de 22 mil metros cuadrados. Este parque tiene una particularidad que lo hace famoso y es la gran cantidad de gatos que hay en él. <br><br>De todos los tamaños y de todos los colores, los gatos se pasean por los jardines y caminarías del parque buscando comida, pero también algunas caricias de los visitantes. Todos los días artistas locales hacen presencia en el parque para ofrecer sus cuadros y artesanías a los visitantes y transeúntes. <br><br>También dentro del parque encontrarás el anfiteatro Chabuca Grande donde se realizan espectáculos artísticos y folclóricos los fines de semana.',
                        'en': 'The Kennedy Park is one of the most popular Lima parks and visited by its central location in the district of Miraflores, the most tourist district in the city. <br><br>It has an area of 22000 square meters. This park has a peculiarity that makes it famous and is the large number of cats in it. <br><br>Of all sizes and colors, cats stroll through the gardens and walk the park looking for food, but also some petting of the visitors. Every day local artists make their presence in the park to offer their paintings and handicrafts to visitors and passers-by.<br><br> Also inside the park you will find the Chabuca Grande Amphitheater where artistic and folkloric shows are held on weekends.'
                    },
                    image: {'es': 'green-coast2.jpg', 'en': 'green-coast2.jpg'},
                    thumbnail: {'es': 'central-park.jpg', 'en': 'central-park.jpg'},
                    key: {'es': 'parque-kennedy', 'en': 'centralpark'},
                    lat: {'es': '-12.1496124', 'en': '-12.1496124'},
                    lng: {'es': '-77.02207', 'en': '-77.02207'},
                    zoom: {'es': '14', 'en': '14'}
                }, {
                    title: {'es': 'Museo Mate – Mario Testino', 'en': 'Mate – Mario Testino Museum'},
                    location: {'es': 'Barranco', 'en': 'Barranco'},
                    banner: {'es': 'green-coast2.jpg', 'en': 'green-coast2.jpg'},
                    description: {
                        'es': 'El Museo Mario Testino (“MATE”) es una institución sin fines de lucro fundada en 2010 por el famoso fotógrafo de modas Mario Testino. <br><br>MATE nació con la idea de contribuir al Per a través del desarrollo y promoción de su herencia y cultura. El MATE se encuentra ubicado en una mansión colonial originalmente construida en 1898, conformando actualmente el museo que mantiene la exhibición permanente de la obra de Testino, así como un espacio de exhibiciones temporales que muestran arte contemporáneo Peruano e internacional. <br><br>Dirección: Avenida Pedro de Osma 409, Barranco.',
                        'en': 'The Mario Testino Museum ("MATE") is a non-profit institution founded in 2010 by the famous fashion photographer Mario Testino.<br><br> MATE was born with the idea of contributing to the Per through the development and promotion of its heritage and culture. The MATE is located in a colonial mansion originally built in 1898, currently conforming the museum that maintains the permanent exhibition of the work of Testino, as well as a space of temporary exhibitions that show Peruvian contemporary art and International. <br><br>Address: Avenida Pedro de Osma 409, Barranco.'
                    },
                    image: {'es': 'green-coast2.jpg', 'en': 'green-coast2.jpg'},
                    thumbnail: {'es': 'mate.jpg', 'en': 'mate.jpg'},
                    key: {'es': 'testinomuseo', 'en': 'testinomuseo'},
                    lat: {'es': '-12.1496124', 'en': '-12.1496124'},
                    lng: {'es': '-77.02207', 'en': '-77.02207'},
                    zoom: {'es': '14', 'en': '14'}
                }, {
                    title: {'es': 'Picas', 'en': 'Picas'},
                    location: {'es': 'Barranco', 'en': 'Barranco'},
                    banner: {'es': 'green-coast2.jpg', 'en': 'green-coast2.jpg'},
                    description: {
                        'es': 'Encontrarás un nuevo punto de encuentro por las noches, al conocerlo podrás sentir la armonía de lo antiguo y lo moderno. Cada parte de él está conformado por accesorios que lo hacen un estilo lugar, evocando glamur y buen estilo. <br><br>Picas te espera con el espíritu creativo del nuevo Barranco, refleja su estilo particular con una personalidad propia, diferente al resto de Lima. <br><br>Picas es el lugar donde se mezclan personas y personajes de todos los estilos y lugares, pero cada uno con esa onda tan especial.<br><br> La gastronomía que podrás disfrutar en Picas es con el auténtico sabor peruano; desde deliciosas tapas hasta una extensa variedad de vinos nacionales e internacionales de la más alta calidad, además ofrece dedicación en cada uno de sus tragos que despiertan placer y satisfacción al degustarlos. <br><br>Dirección: Bajada los Baños 340, Barranco.',
                        'en': 'You will find a new meeting point at night, knowing you can feel the Harmony of the old and the modern. Each part of it is made up of accessories that make it a place style, evoking glamour and good style. <br><br>Picas awaits you with the creative spirit of the new ravine, reflects its particular style with its own personality, different from the rest of Lima. <br><br>Picas is the place where people and characters are mixed in all styles and places, but each one with that special wave. <br><br>The gastronomy you can enjoy in picas is with the authentic Peruvian flavor; From delicious tapas to a wide variety of national and international wines of the highest quality, it also offers dedication in each one of its drinks that arouse pleasure and satisfaction when tasting them. <br><br>Address: Bajada los Baños 340, Barranco.'
                    },
                    image: {'es': 'green-coast2.jpg', 'en': 'green-coast2.jpg'},
                    thumbnail: {'es': 'picas.jpg', 'en': 'picas.jpg'},
                    key: {'es': 'picas', 'en': 'picas'},
                    lat: {'es': '-12.1496124', 'en': '-12.1496124'},
                    lng: {'es': '-77.02207', 'en': '-77.02207'},
                    zoom: {'es': '14', 'en': '14'}
                }, {
                    title: {'es': 'Tio Mario', 'en': 'Tio Mario'},
                    location: {'es': 'Barranco', 'en': 'Barranco'},
                    banner: {'es': 'green-coast2.jpg', 'en': 'green-coast2.jpg'},
                    description: {
                        'es': 'Desde un hermoso rincón del Valle Sagrado de los Incas llamado Arin, en la provincia de Calca, llegaron a Lima una pareja de jóvenes emprendedores que años después iniciarían una admirable y conmovedora historia de esfuerzo, sacrificio y perseverancia. <br><br>Desde 1987 “El Tío Mario” deleita a sus comensales con delicias echas en base al compromiso de atender con dedicación a su clientela, compromiso que se inicia desde la recordada y querida carretilla que por años fue el refugio de los sueños y esperanzas de esta pareja. <br><br>”El Tío Mario” está comprometido con un alto estándar de calidad para satisfacer las necesidades de sus clientes. <br><br>Ubicado junto al Puente de los Suspiros en Barranco, es un lugar especial para disfrutar en familia con un bello paisaje y por supuesto una gran variedad de platos a la parrilla, típicos de la cocina peruana y anticuchos de siempre. <br><br>Dirección: Jr. Zepita 214 Barranco al lado del Puente de los Suspiros.',
                        'en': 'From a beautiful corner of the Sacred Valley of the Incas called Arin, in the province of Calca, came to Lima a couple of young entrepreneurs who years later began an admirable and moving history of effort, sacrifice and perseverance. <br><br>Since 1987 "Uncle Mario" delights its diners with delights based on the commitment to attend with dedication to its clientele, a commitment that begins from the remembered and dear wheelbarrow that for years was the refuge of dreams and hopes of this couple. <br><br>"Uncle Mario" is committed to a high standard of quality to meet the needs of its customers.<br><br> Located next to the bridge of Sighs in Barranco, it is a special place to enjoy with family with a beautiful landscape and of course a great variety of grilled dishes, typical of Peruvian cuisine and anticuchos of always. <br><br>Address: Jr. Zepita 214 Barranco beside the Bridge of Sighs.'
                    },
                    image: {'es': 'green-coast2.jpg', 'en': 'green-coast2.jpg'},
                    thumbnail: {'es': 'tio-mario.jpg', 'en': 'tio-mario.jpg'},
                    key: {'es': 'tiomario', 'en': 'tiomario'},
                    lat: {'es': '-12.1496124', 'en': '-12.1496124'},
                    lng: {'es': '-77.02207', 'en': '-77.02207'},
                    zoom: {'es': '14', 'en': '14'}
                }
            ]
        },
        locations: [
            {
                title: {'es': 'Barranco', 'en': 'Barranco'},
                key: {'es': 'barranco', 'en': 'barranco'},
                description: {'es': 'Better than home', 'en': 'Better than home'},
                bgImage: {'es': 'barranco.jpg', 'en': 'barranco.jpg'},
                map: {
                    lat: -12.143145,
                    lng: -77.02192,
                    zoom: 15
                }
            },
            {
                title: {'es': 'Miraflores', 'en': 'Miraflores'},
                key: {'es': 'miraflores', 'en': 'miraflores'},
                description: {'es': 'Better than home', 'en': 'Better than home'},
                bgImage: {'es': 'miraflores.jpg', 'en': 'miraflores.jpg'},
                map: {
                    lat: -12.119679,
                    lng: -77.031567,
                    zoom: 14
                }
            }
        ],
        properties: [
            {
                logo: {'es': 'stelar.png', 'en': 'stelar.png'},
                map: {
                    lat: -12.137439,
                    lng: -77.0223731,
                    zoom: 18
                },
                slider: [
                    {
                        image: '1.jpg',
                    },
                    {
                        image: '2.jpg',
                    },
                    {
                        image: '3.jpg',
                    },
                    {
                        image: '4.jpg',
                    }
                ],
                bgImage: {'es': 'stelar-banner.jpg', 'en': 'stelar-banner.jpg'},
                description: {
                    'es': 'Si se trata de un apartamento por una noche, un castillo por una semana o una villa por un mes, Rentals conecta a las personas a experiencias de viaje únicas, a cualquier precio. Y con un servicio al cliente de clase mundial y una creciente comunidad de usuarios, los alquileres son la forma más fácil para que las personas moneticen su espacio extra y lo muestren ante una audiencia de millones de personas.',
                    'en': 'Whether an apartment for a night, a castle for a week, or a villa for a month, Rentals connects people to unique travel experiences, at any price point. And with world-class customer service and a growing community of users, Rentals is the easiest way for people to monetize their extra space and showcase it to an audience of millions.'
                },
                bookLink: {
                    'es': 'https://reservations.travelclick.com/107890?languageid=1#/guestsandrooms',
                    'en': 'https://reservations.travelclick.com/107890?languageid=1#/guestsandrooms'
                },
                features: [
                    {
                        title: {'es': 'Cultura', 'en': 'Culture'},
                        icon: 'star.png',
                        color: 'bl',
                        description: {
                            'es': 'UTEC | Universidad Cayetano Heredia | Galería Lucía de la Puente | Dédalo | MAC',
                            'en': 'UTEC | Universidad Cayetano Heredia | Galería Lucía de la Puente | Dédalo | MAC'
                        }
                    },
                    {
                        title: {'es': 'Entretenimiento', 'en': 'Entertainment'},
                        icon: 'star.png',
                        color: 'bl',
                        description: {
                            'es': 'Estadio J. Gálvez Chipoco | Club de Tenis Barranco | Hotel B | Miraflores Park Hotel',
                            'en': 'Estadio J. Gálvez Chipoco | Club de Tenis Barranco | Hotel B | Miraflores Park Hotel'
                        }
                    },
                    {
                        title: {'es': 'Gastronomía', 'en': 'Gastronomy'},
                        icon: 'cutlery.png',
                        color: 'or',
                        description: {
                            'es': 'Rincón Gaucho | Danica | Ántica Trattoria | Cala Restro - Bar | Restaurante Costa Verde | La Cabrera | Canta Rana',
                            'en': 'Rincón Gaucho | Danica | Ántica Trattoria | Cala Restro - Bar | Restaurante Costa Verde | La Cabrera | Canta Rana'
                        }
                    },
                    {
                        title: {'es': 'Supermercados', 'en': 'Supermarkets'},
                        icon: 'car.png',
                        color: 'lig',
                        description: {
                            'es': 'Centro Comercial Larcomar | Supermercado Metro',
                            'en': 'Centro Comercial Larcomar | Supermercado Metro'
                        },
                    }
                ],
                key: {'es': 'stelar', 'en': 'stelar'},
                title: {'es': 'Trendy Host Stelar, Barranco', 'en': 'Trendy Host Stelar, Barranco'},
                address: {
                    'es': 'Av. Almirante Grau 1430, Barranco',
                    'en': 'Av. Almirante Grau 1430, Barranco'
                },
                shortDescription: {
                    'es': 'Todo lo que un ejecutivo desea en un solo lugar',
                    'en': 'Everything an executive wants In one single place'
                }
            },
            {
                logo: {'es': 'canvas.png', 'en': 'canvas.png'},
                map: {
                    lat: -12.1189233,
                    lng: -77.0336866,
                    zoom: 18
                },
                bgImage: {'es': 'canvas-slider.jpg', 'en': 'canvas-slider.jpg'},
                slider: [
                    {
                        image: '1.jpg',
                    },
                    {
                        image: '2.jpg',
                    },
                    {
                        image: '3.jpg',
                    },
                    {
                        image: '4.jpg',
                    }
                ],
                shortDescription: {
                    'es': 'Todo lo que un ejecutivo desea en un solo lugar',
                    'en': 'Everything an executive wants In one single place'
                },
                bookLink: {
                    'es': 'https://reservations.travelclick.com/107888?languageid=1#/guestsandrooms',
                    'en': 'https://reservations.travelclick.com/107888?languageid=1#/guestsandrooms'
                },
                features: [
                    {
                        title: {'es': 'Cultura y entretenimiento', 'en': 'Culture and Entertainment'},
                        icon: 'star.png',
                        color: 'bl',
                        description: {
                            'es': 'Choco Museo | Teatro Británico | Sala Luis Miró Quesada | Larcomar | Malecón | Parque Keneddy | Óvalo Gutiérrez | Museo Textil PreColombino | Museo Ricardo Palma | Galería Sara Burneo',
                            'en': 'Choco Museo | Teatro Británico | Sala Luis Miró Quesada | Larcomar | Malecón | Parque Keneddy | Óvalo Gutiérrez | Museo Textil PreColombino | Museo Ricardo Palma | Galería Sara Burneo'
                        }
                    },
                    {
                        title: {'es': 'Gastronomía', 'en': 'Gastronomy'},
                        icon: 'cutlery.png',
                        color: 'or',
                        description: {
                            'es': 'Starbucks | Dolce Capriccio | IK Restaurante | Mis Costillitas | Don Belisario | Haiti | Panchita | Edo Shushi Bar | La Cabrera | Sukha | Brujas de Cachiche | Maido | Punto Azul | El Enano | Café de Lima | Lucio Caffè | Costanera 700 | Señorio de Sulco | Central Restaurante',
                            'en': 'Starbucks | Dolce Capriccio | IK Restaurante | Mis Costillitas | Don Belisario | Haiti | Panchita | Edo Shushi Bar | La Cabrera | Sukha | Brujas de Cachiche | Maido | Punto Azul | El Enano | Café de Lima | Lucio Caffè | Costanera 700 | Señorio de Sulco | Central Restaurante'
                        }
                    },
                    {
                        title: {'es': 'Supermercados', 'en': 'Supermarkets'},
                        icon: 'car.png',
                        color: 'bl',
                        description: {'es': 'Wong | Vivanda | Metro', 'en': 'Wong | Vivanda | Metro'}
                    },
                    {
                        title: {'es': 'Bancos', 'en': 'Banks'},
                        icon: 'dollar.png',
                        color: 'gr',
                        description: {
                            'es': 'Banco de Crédito | Interbank | BBVA Continental | Banco de la nación | Scotiabank',
                            'en': 'Banco de Crédito | Interbank | BBVA Continental | Banco de la nación | Scotiabank'
                        }
                    }
                ],
                title: {'es': 'Trendy Host Canvas, Miraflores', 'en': 'Trendy Host Canvas, Miraflores'},
                description: {
                    'es': 'Si se trata de un apartamento por una noche, un castillo por una semana o una villa por un mes, Rentals conecta a las personas a experiencias de viaje únicas, a cualquier precio. Y con un servicio al cliente de clase mundial y una creciente comunidad de usuarios, los alquileres son la forma más fácil para que las personas moneticen su espacio extra y lo muestren ante una audiencia de millones de personas.     ',
                    'en': 'Whether an apartment for a night, a castle for a week, or a villa for a month, Rentals connects people to unique travel experiences, at any price point. And with world-class customer service and a growing community of users, Rentals is the easiest way for people to monetize their extra space and showcase it to an audience of millions.'
                },
                address: {'es': 'Av. Pardo 510, Miraflores', 'en': 'Av. Pardo 510, Miraflores'},
                key: {'es': 'canvas', 'en': 'canvas'}
            },
            {
                logo: {'es': 'osma.png', 'en': 'osma.png'},
                map: {
                    lat: -12.152043,
                    lng: -77.0220376,
                    zoom: 18
                },
                bgImage: {'es': 'osma307.jpg', 'en': 'osma307.jpg'},
                slider: [
                    {
                        image: '1.jpg',
                    },
                    {
                        image: '2.jpg',
                    },
                    {
                        image: '3.jpg',
                    },
                    {
                        image: '4.jpg',
                    }
                ],
                shortDescription: {
                    'es': 'Todo lo que un ejecutivo desea en un solo lugar',
                    'en': 'Everything an executive wants In one single place'
                },
                bookLink: {
                    'es': 'https://reservations.travelclick.com/107886?languageid=1#/guestsandrooms',
                    'en': 'https://reservations.travelclick.com/107886?languageid=1#/guestsandrooms'
                },
                features: [
                    {
                        title: {'es': 'Cultura y entretenimiento', 'en': 'Culture and Entertainment'},
                        icon: 'star.png',
                        color: 'bl',
                        description: {
                            'es': 'Iglesia La Ermita | Casa Túpac | Museo Pedro de Osma | Museo de la Electricidad | Museo Mario Testino (MATE) | Microteatro | Puente de los suspiros | Plaza de Barranco | Playas de Barranco y ChorrillosClub Náutico',
                            'en': 'Iglesia La Ermita | Casa Túpac | Museo Pedro de Osma | Museo de la Electricidad | Museo Mario Testino (MATE) | Microteatro | Puente de los suspiros | Plaza de Barranco | Playas de Barranco y ChorrillosClub Náutico'
                        }
                    },
                    {
                        title: {'es': 'Gastronomía', 'en': 'Gastronomy'},
                        icon: 'cutlery.png',
                        color: 'or',
                        description: {
                            'es': 'Canta Rana | Garito Bistro | Peña La Candelaria | La Fara Restobar Restaurante Costa Sur | Cevichería Costa Azul | Flor de la Canela Créme de la Créme | Rústica | Cala | Central Restaurante',
                            'en': 'Canta Rana | Garito Bistro | Peña La Candelaria | La Fara Restobar Restaurante Costa Sur | Cevichería Costa Azul | Flor de la Canela Créme de la Créme | Rústica | Cala | Central Restaurante'
                        }
                    },
                    {
                        title: {'es': 'Bancos', 'en': 'Banks'},
                        icon: 'dollar.png',
                        color: 'gr',
                        description: {
                            'es': 'Banco de Crédito | Interbank | BBVA Continental | Banco de la nación',
                            'en': 'Banco de Crédito | Interbank | BBVA Continental | Banco de la nación'
                        }
                    },
                    {
                        title: {'es': 'Clínicas y Hospitales', 'en': 'Clinics and Hospitals'},
                        icon: 'cross.png',
                        color: 'pink',
                        description: {
                            'es': 'Maisón de Santé | Policlínico PNP | Clínica Geriátrica | Hospital de la Solidaridad',
                            'en': 'Maisón de Santé | Policlínico PNP | Clínica Geriátrica | Hospital de la Solidaridad'
                        }
                    }
                ],
                title: {'es': 'Trendy Host Osma, Miraflores', 'en': 'Trendy Host Osma, Miraflores'},
                description: {
                    'es': 'Si se trata de un apartamento por una noche, un castillo por una semana o una villa por un mes, Rentals conecta a las personas a experiencias de viaje únicas, a cualquier precio. Y con un servicio al cliente de clase mundial y una creciente comunidad de usuarios, los alquileres son la forma más fácil para que las personas moneticen su espacio extra y lo muestren ante una audiencia de millones de personas.     ',
                    'en': 'Whether an apartment for a night, a castle for a week, or a villa for a month, Rentals connects people to unique travel experiences, at any price point. And with world-class customer service and a growing community of users, Rentals is the easiest way for people to monetize their extra space and showcase it to an audience of millions.'
                },
                address: {
                    'es': 'Av. Pedro de Osma 307, Barranco',
                    'en': 'Av. Pedro de Osma 307, Barranco '
                },
                key: {'es': 'osma', 'en': 'osma'}
            },
            {
                logo: {'es': 'mid490.png', 'en': 'mid490.png'},
                map: {
                    lat: -12.1161277,
                    lng: -77.0454776,
                    zoom: 18
                },
                bgImage: {'es': 'mid-banner.jpg', 'en': 'mid-banner.jpg'},
                slider: [
                    {
                        image: '1.jpg',
                    },
                    {
                        image: '2.jpg',
                    },
                    {
                        image: '3.jpg',
                    },
                    {
                        image: '4.jpg',
                    }
                ],
                shortDescription: {
                    'es': 'Todo lo que un ejecutivo desea en un solo lugar',
                    'en': 'Everything an executive wants In one single place'
                },
                bookLink: {
                    'es': 'https://search.travelclick.com/try?languageid=1#/',
                    'en': 'https://search.travelclick.com/try?languageid=1#/'
                },
                features: [
                    {
                        title: {'es': 'Gastronomía', 'en': 'Gastronomy'},
                        icon: 'cutlery.png',
                        color: 'or',
                        description: {
                            'es': 'Costanera 700 | La Panka | Embarcadero 41 Fusión | La Red | Anticuchos Grimanesa | La Mar Cevichería | La Verdad de la Milanesa | El Pan de la Chola',
                            'en': 'Costanera 700 | La Panka | Embarcadero 41 Fusión | La Red | Anticuchos Grimanesa | La Mar Cevichería | La Verdad de la Milanesa | El Pan de la Chola'
                        }
                    },
                    {
                        title: {'es': 'Parques', 'en': 'Parks'},
                        icon: 'star.png',
                        color: 'bl',
                        description: {
                            'es': 'Parque María Reiche | Skate park | Parque Miguel Grau | Parque de los Niños | Parque Elías Correa | Parque Eduardo Villena Rey | Parque Blume',
                            'en': 'Parque María Reiche | Skate park | Parque Miguel Grau | Parque de los Niños | Parque Elías Correa | Parque Eduardo Villena Rey | Parque Blume'
                        }
                    },
                    {
                        title: {'es': 'Bancos', 'en': 'Banks'},
                        icon: 'dollar.png',
                        color: 'gr',
                        description: {
                            'es': 'Interbank | Scotiabank | BBVA Continental',
                            'en': 'Interbank | Scotiabank | BBVA Continental'
                        }
                    },
                    {
                        title: {'es': 'Estaciones de Servicio', 'en': 'Fuel Stations'},
                        icon: 'car.png',
                        color: 'lig',
                        description: {'es': 'Primax', 'en': 'Primax'},
                    }
                ],
                title: {'es': 'Trendy Host MID, Miraflores', 'en': 'Trendy Host MID, Miraflores'},
                description: {
                    'es': 'Si se trata de un apartamento por una noche, un castillo por una semana o una villa por un mes, Rentals conecta a las personas a experiencias de viaje únicas, a cualquier precio. Y con un servicio al cliente de clase mundial y una creciente comunidad de usuarios, los alquileres son la forma más fácil para que las personas moneticen su espacio extra y lo muestren ante una audiencia de millones de personas.',
                    'en': 'Whether an apartment for a night, a castle for a week, or a villa for a month, Rentals connects people to unique travel experiences, at any price point. And with world-class customer service and a growing community of users, Rentals is the easiest way for people to monetize their extra space and showcase it to an audience of millions.'
                },
                address: {
                    'es': 'Av. El Ejército 490 - Miraflores',
                    'en': 'Av. El Ejército 490 - Miraflores '
                },
                key: {'es': 'mid', 'en': 'mid'}
            }
        ],
        faqs: [
            {
                question: {
                    'es': '¿A qué hora es el Check in y el Check out?',
                    'en': 'What time is Check in and Check out?'
                },
                answer: {
                    'es': 'La entrada es a las 15:00hrs. La salida es a las 11:00am.',
                    'en': 'The entrance is at 3:00 p.m. The departure is at 11:00 a.m.'
                }
            }, {
                question: {
                    'es': '¿Quién será la persona que me recibirá en el edificio?',
                    'en': 'Who will be the person who will receive me in the building?'
                },
                answer: {
                    'es': 'CANVAS: Su anfitrión será el Sr. Salvador Peñaloza, quién lo recibirá y llevará a su departamento. Lo encontrará de lunes a sábados de 08:00am a 18:00hrs. en el edificio. Si tuviese alguna consulta o emergencia dentro del departamento, agradecemos se comunique vía mensaje 24/7 por whatsapp al +51 972 256 715 OSMA: Su anfitrión será el Sr. Jesús Jimenez, quién lo recibirá y llevará a su departamento. Lo encontrará de lunes a sábados de 08:00am a 18:00hrs. en el edificio. Si tuviese alguna consulta o emergencia dentro del departamento, agradecemos se comunique vía mensaje 24/7 por whatsapp al +51 946 221 946',
                    'en': 'CANVAS: Your host will be Mr. Salvador Peñaloza, who will receive you and take you to his apartment. You will find him from Monday to Saturday from 8:00 a.m. to 6:00 p.m. in the building. If you have any questions or emergencies within the department, we are grateful to communicate by message 24/7 by whatsapp to +51 972 256 715. OSMA: Your host will be Mr. Jesús Jimenez, who will receive you and take you to his department. You will find him from Monday to Saturday from 8:00 a.m. to 6:00 p.m. in the building. If you have any questions or emergencies within the department, we are grateful to communicate by message 24/7 by whatsapp to +51 946 221 946.'
                }
            }, {
                question: {'es': '¿En qué momento pagaré?', 'en': 'At what time will I pay?'},
                answer: {
                    'es': 'Todo pago se realizará en la entrada del edificio con su host, este puede ser con visa, mastercard o efectivo.',
                    'en': 'All payments will be made at the entrance of the building with your host, this can be with visa, mastercard or cash.'
                }
            }, {
                question: {'es': '¿Puedo realizar un early Check in?', 'en': 'Can I do an early Check in?'},
                answer: {
                    'es': 'La entrada es las 15:00hrs. Si se da el caso que se llegue antes al edificio, ofrecemos lo siguiente: Si contamos con el departamento listo, le brindaremos el departamento antes, pero este está sujeto a disponibilidad del mismo día. Puede dejar las maletas con nosotros y a las 15:00hrs. el departamento estará listo',
                    'en': 'he entrance is at 3:00 p.m. In case you arrive earlier to the building we offer the following: If we have the apartment ready, we will provide the apartment before, but this is subject to same day availability. You can leave your bags with us and at 3:00 p.m. the department will be ready.'
                }
            }, {
                question: {'es': '¿Puedo realizar un late Check out?', 'en': 'Can I do a late Check out?'},
                answer: {
                    'es': 'Si llega después de las 18:00hrs al edificio. Le pido indique su nombre en recepción y le brindarán la llave de su departamento. Al día siguiente su anfitrión lo contactará en su departamento.',
                    'en': 'If you arrive after 6:00 p.m. to the building. I ask you to indicate your name at the reception and they will give you the key to your apartment. The next day your host will contact you in your apartment.'
                }
            }, {
                question: {
                    'es': '¿A qué cuenta bancaria puedo pagar mi reserva?',
                    'en': 'To which bank account can I pay for my reservation?'
                },
                answer: {
                    'es': 'RENTA GARANTIZADA SAC – RUC 20602076611 BCP $ – USD 193-2423776-1-94 / CCI 00219300242377619415 BCP SOLES 193-2369953-0-17 / CCI00219300236995301718 **Al tipo de cambio 3.3. Le pedimos envíe el pago a reservas@trendyhost.com.pe para confirmarlo',
                    'en': 'RENTA GARANTIZADA SAC – RUC 20602076611 BCP $ – USD 193-2423776-1-94 / CCI 00219300242377619415 BCP SOLES 193-2369953-0-17 / CCI00219300236995301718 ** At exchange rate 3.3. We ask you to send the payment to reservas@trendyhost.com.pe to confirm it.'
                }
            }, {
                question: {
                    'es': '¿Cuáles son las normas del departamento?',
                    'en': 'What are the rules of the department?'
                },
                answer: {
                    'es': 'Todas las personas deben de identificarse y estar registradas. No se permitirá el ingreso a personas que no estén previamente registradas. No está permitido el consumo de bebidas alcohólicas. Queda terminantemente prohibido fumar en el departamento y en las áreas comunes (multa de USD 500). No perturbar la tranquilidad de los ocupantes con música, ruidos o escándalos indecorosas. No está permitido mascotas. No exceder la capacidad del aforo del departamento. No es posible colgar prendas u otros elementos, en ventanas, balcones y cualquier lugar visible. Recojo de la basura en las mañana por HK o botarlos en el estacionamiento directamente. La penalidad de pérdida de llave es de USD 50.',
                    'en': 'All persons must be identified and registered. Entry will not be allowed to people who are not previously registered. The consumption of alcoholic beverages is not allowed.  It is strictly forbidden to smoke in the apartment and in the common areas (fine of USD 500).  Do not disturb the tranquility of the occupants with music, noise or indecent scandals.  Pets are not allowed.  Do not exceed the capacity of the department.  It is not possible to hang garments or other items, in windows, balconies and any visible place.  Pick up the trash in the morning by HK or throw it in the parking lot directly. The key loss penalty is USD 50.'
                }
            }, {
                question: {
                    'es': '¿Puedo hacer reuniones o fiestas en el departamento?',
                    'en': 'Can I have meetings or parties in the department?'
                },
                answer: {
                    'es': 'No, está totalmente prohibido las fiestas o reuniones dentro del departamento. Trendy Host, está en la potestad de cancelar la reserva en cuento se notifique ruídos altos. Estamos ubicados en un edificio residencial y estamos sujetos con normas y reglas de los propietarios.',
                    'en': 'No, parties or meetings within the department are totally prohibited. Trendy Host is in the power to cancel the reservation in case high noise is notified. We are located in a residential building and are subject to rules and regulations of the owners.'
                }
            }, {
                question: {'es': '¿Puedo solicitar estacionamiento?', 'en': 'Can I request parking?'},
                answer: {
                    'es': 'Si, contamos con estacionamientos. Indicar al momento de realizar la reserva. Su host o en recepción le brindarán el número de espacio.',
                    'en': 'Yes, we have parking lots. Indicate when making the reservation. Your host or reception will give you the space number.'
                }
            }, {
                question: {'es': '¿Puedo realizar reclamos?', 'en': 'Can I make claims?'},
                answer: {
                    'es': 'Solo es posible realizar reclamaciones después de cancelar la reservación. Si crees que el motivo por el que la has llevado a cabo está contemplado en la Política de cancelación, puedes comunicarte con nosotros para que consideremos tu reclamación una vez que hayas cancelado la reservación y nos hayas informado por correo. Normalmente, solicitamos que los reclamos se envíen como máximo 14 días después de la fecha de llegada original y que se facilite algún tipo de documentación válida que demuestre el motivo de la cancelación.',
                    'en': 'It is only possible to make claims after canceling the reservation. If you believe that the reason for which you have carried out is contemplated in the Cancellation Policy, you can contact us to consider your claim once you have canceled the reservation and you have informed us by mail. Normally, we request that claims be sent no later than 14 days after the original arrival date and offer valid documentation proving the reason for cancellation.'
                }
            }, {
                question: {'es': '¿Cuál es la dirección exacta?', 'en': 'What is the exact address?'},
                answer: {
                    'es': 'Canvas – Av. José Pardo N° 510, Miraflores Osma – Av. Pedro de Osma N° 307, Barranco',
                    'en': 'Canvas - Av. José Pardo No. 510, Miraflores Osma - Av. Pedro de Osma N ° 307, Barranco'
                }
            }, {
                question: {'es': '¿Cuál será el número de departamento?', 'en': 'What will be the department number?'},
                answer: {
                    'es': 'Nosotros no contamos con esa información hasta el mismo día de la reserva, puesto es de acuerdo a la disponibilidad de ventas. Toda reserva se encuentra bajo el nombre de la persona. Cuando se realiza el Check in, le indicaremos el número y llave del departamento',
                    'en': 'We do not have this information until the day of the reservation, according to the availability of sales. All reservations are under the name of the person. When the Check in is done, we will indicate the number and key of the department.'
                }
            }, {
                question: {'es': '¿Qué servicios bajo requerimiento?', 'en': 'What services under required?'},
                answer: {
                    'es': 'Ponemos a disposición y bajo requerimiento de pedido con su host: secadora de cabello, plancha de ropa, mesa de planchar, frazadas adicionales, tapa oídos y calentador.',
                    'en': 'We make available and on request with your host: hair dryer, clothes iron, ironing board, extra blankets, ear covers and heater.'
                }
            }, {
                question: {
                    'es': '¿Cuándo recibiré mi comprobante de pago?',
                    'en': 'When will I receive my proof of payment?'
                },
                answer: {
                    'es': 'Al finalizar la estadía, se envía a través de un correo (el que se deja en el registro) la boleta electrónica del pago total.',
                    'en': 'At the end of the stay, the electronic payment slip is sent by mail (which is left in the register).'
                }
            }, {
                question: {'es': '¿Puedo solicitar servicio de taxi?', 'en': 'Can I request taxi service?'},
                answer: {
                    'es': 'Contamos con servicio de taxi aeropuerto – edificio (one way), las tarifas que manejamos son: Apto / Edificio : USD 25 (en auto hasta 3 personas) Apto / Edificio : USD 50 (en van hasta 8 personas) ** Estos serán pagados a su host en el Check in.\', en: \'We have taxi service airport - building (one way), the rates we handle are:  Apt / Building: USD 25 (by car up to 3 people)  Apt / Building: USD 50 (in van up to 8 people) ** These will be paid to your host in the Check in.',
                    'en': 'Contamos con servicio de taxi aeropuerto – edificio (one way), las tarifas que manejamos son: Apto / Edificio : USD 25 (en auto hasta 3 personas) Apto / Edificio : USD 50 (en van hasta 8 personas) ** Estos serán pagados a su host en el Check in.\', en: \'We have taxi service airport - building (one way), the rates we handle are:  Apt / Building: USD 25 (by car up to 3 people)  Apt / Building: USD 50 (in van up to 8 people) ** These will be paid to your host in the Check in.'
                }
            }, {
                question: {'es': '¿Quién es mi host?', 'en': 'Who is my host?'},
                answer: {
                    'es': 'CANVAS: Su anfitrión será el Sr. Salvador Peñaloza, agradecemos se comunique vía mensaje 24/7 por whatsapp al +51 972 256 715 OSMA: Su anfitrión será el Sr. Jesús Jimenez, agradecemos se comunique vía mensaje 24/7 por whatsapp al +51 946 221 946',
                    'en': 'CANVAS: Your host will be Mr. Salvador Peñaloza, we thank you for communicating by message 24/7 by whatsapp at +51 972 256 715 OSMA: Your host will be Mr. Jesús Jimenez, we are grateful to communicate by message 24/7 by whatsapp to +51 946 221 946'
                }
            }, {
                question: {'es': '¿Quién es mi host?', 'en': 'Can I extend or advance my stay?'},
                answer: {
                    'es': 'Claro que sí, respetamos la tarifa confirmada o ya cotizada y este pedido deberá de ser solicitado a través de un correo a : reservas@trendyhost.com.pe',
                    'en': 'Of course, we respect the confirmed or already quoted rate and this request must be requested by sending an email to: reservas@trendyhost.com.pe6'
                }
            }],
        testimonials: [
            {
                author: {
                    'es': 'Angela',
                    'en': 'Angela'
                },
                description: {
                    'es': 'Really nice beds and bedding, well stocked kitchen, stored bags for us until 7pm, nice shower when hot, well decorated, enjoyable common living room, let us checkout an hour late, well run. ',
                    'en': 'Really nice beds and bedding, well stocked kitchen, stored bags for us until 7pm, nice shower when hot, well decorated, enjoyable common living room, let us checkout an hour late, well run. '
                },
                avatar: {
                    'es': 'A.jpg',
                    'en': 'A.jpg'
                }
            },{
                author: {
                    'es': 'Kiensabe',
                    'en': 'Kiensabe'
                },
                description: {
                    'es': 'The location was great and the price was phenomenal. Right in Barranco with a short walk to all the major attractions. The room was a little snug, but perfect if you´re going to be out  exploring.',
                    'en': 'The location was great and the price was phenomenal. Right in Barranco with a short walk to all the major attractions. The room was a little snug, but perfect if you´re going to be out  exploring.'
                },
                avatar: {
                    'es': 'HmOvgDNh.jpg',
                    'en': 'HmOvgDNh.jpg'
                }
            },{
                author: {
                    'es': 'Denis',
                    'en': 'Denis'
                },
                description: {
                    'es': 'New, clean, free private parking, nice rooms, good location in Barranco',
                    'en': 'New, clean, free private parking, nice rooms, good location in Barranco'
                },
                avatar: {
                    'es': 'denis.jpg',
                    'en': 'denis.jpg'
                }
            },{
                author: {
                    'es': 'Santiago',
                    'en': 'Santiago'
                },
                description: {
                    'es': 'Nice apartment. Great bed. Jesús was very helpful',
                    'en': 'Nice apartment. Great bed. Jesús was very helpful'
                },
                avatar: {
                    'es': 'S.jpg',
                    'en': 'S.jpg'
                }
            },{
                author: {
                    'es': 'Rhea',
                    'en': 'Rhea'
                },
                description: {
                    'es': 'The property and amenities were excellent. Location was close to everything in Barranco.',
                    'en': 'The property and amenities were excellent. Location was close to everything in Barranco.'
                },
                avatar: {
                    'es': 'R.jpg',
                    'en': 'R.jpg'
                }
            },{
                author: {
                    'es': 'Demond',
                    'en': 'Demond'
                },
                description: {
                    'es': 'Great location! Very walkable to bars, restaurants and nightlife. The room was very clean, comfortable beds. Nice courtyard and gym!',
                    'en': 'Great location! Very walkable to bars, restaurants and nightlife. The room was very clean, comfortable beds. Nice courtyard and gym!'
                },
                avatar: {
                    'es': 'D.jpg',
                    'en': 'D.jpg'
                }
            },{
                author: {
                    'es': 'Thais',
                    'en': 'Thais'
                },
                description: {
                    'es': 'Very comfortable bed and great location to be in Barranco!',
                    'en': 'Very comfortable bed and great location to be in Barranco!'
                },
                avatar: {
                    'es': 'T.jpg',
                    'en': 'T.jpg'
                }
            },{
                author: {
                    'es': 'Kendall',
                    'en': 'Kendall'
                },
                description: {
                    'es': 'We had a great stay with Trendy Host. The location is perfect. We loved staying in Barranco and the apartment is just a short walk to the square, parks overlooking the ocean, and lots of restaurants and cafés nearby. The apartment was clean, comfortable, and had a lovely modern decor. We enjoyed  everything.',
                    'en': 'We had a great stay with Trendy Host. The location is perfect. We loved staying in Barranco and the apartment is just a short walk to the square, parks overlooking the ocean, and lots of restaurants and cafés nearby. The apartment was clean, comfortable, and had a lovely modern decor. We enjoyed  everything.'
                },
                avatar: {
                    'es': 'K.jpg',
                    'en': 'K.jpg'
                }
            },{
                author: {
                    'es': 'Alexandra',
                    'en': 'Alexandra'
                },
                description: {
                    'es': 'I loved that the place was modern! Hard to find in Peru. The front desk staff were SOOO friendly and helpful, and are there 24/7. Also it was very safe because there is a locked gate to get in that front desk opens for you. I never met the owner of trendy host, but was able to get very quick replies whenever I messaged through bookings.com. There was WiFi and A/C. If you want to stay in Barranco, this isa 5 min walk to the Center/Bridge. If you want to be in Miraflores, this is about a 15 min drive away. Stayed as a group of 3 and enjoyed ourselves.',
                    'en': 'I loved that the place was modern! Hard to find in Peru. The front desk staff were SOOO friendly and helpful, and are there 24/7. Also it was very safe because there is a locked gate to get in that front desk opens for you. I never met the owner of trendy host, but was able to get very quick replies whenever I messaged through bookings.com. There was WiFi and A/C. If you want to stay in Barranco, this isa 5 min walk to the Center/Bridge. If you want to be in Miraflores, this is about a 15 min drive away. Stayed as a group of 3 and enjoyed ourselves.'
                },
                avatar: {
                    'es': 'A.jpg',
                    'en': 'A.jpg'
                }
            },{
                author: {
                    'es': 'Dereck',
                    'en': 'Dereck'
                },
                description: {
                    'es': 'Property had a great location. I really enjoyed staying in Barranco vs. other areas of Lima. This place has everything you need in a great location. It is a MUCH better value than a hostel.',
                    'en': 'Property had a great location. I really enjoyed staying in Barranco vs. other areas of Lima. This place has everything you need in a great location. It is a MUCH better value than a hostel.'
                },
                avatar: {
                    'es': 'D.jpg',
                    'en': 'D.jpg'
                }
            },{
                author: {
                    'es': 'Alexandra',
                    'en': 'Alexandra'
                },
                description: {
                    'es': 'The location of this place was great. Very close walking to many things. The apartment was nice. Could easily sleep 4 although there was only 3 of us.',
                    'en': 'The location of this place was great. Very close walking to many things. The apartment was nice. Could easily sleep 4 although there was only 3 of us.'
                },
                avatar: {
                    'es': 'A.jpg',
                    'en': 'A.jpg'
                }
            },{
                author: {
                    'es': 'Andrea',
                    'en': 'Andrea'
                },
                description: {
                    'es': 'Checking in was very easy and straightforward, the front staff was very nice. The apartment looked just like the pictures! It was very clean and I enjoyed that it had air conditioning. The facilities looked very well kept and new.',
                    'en': 'Checking in was very easy and straightforward, the front staff was very nice. The apartment looked just like the pictures! It was very clean and I enjoyed that it had air conditioning. The facilities looked very well kept and new.'
                },
                avatar: {
                    'es': 'A.jpg',
                    'en': 'A.jpg'
                }
            },{
                author: {
                    'es': 'Thais',
                    'en': 'Thais'
                },
                description: {
                    'es': 'Very comfortable bed and great location to be in Barranco!',
                    'en': 'Very comfortable bed and great location to be in Barranco!'
                },
                avatar: {
                    'es': 'T.jpg',
                    'en': 'T.jpg'
                }
            },

        ]
    });
});

module.exports = {router};
