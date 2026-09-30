export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  rating: number;
  reviews: number;
  sales: number;
  category: string;
  tags: string[];
  stock: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
}

const u = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const categories: Category[] = [
  { id: 'electronica', name: 'Electrónica y Gadgets', slug: 'electronica', description: 'Auriculares, cargadores, smartwatches y accesorios tech más vendidos', icon: '📱', image: u('photo-1505740420928-5e560c06d30e') },
  { id: 'moda', name: 'Moda y Accesorios', slug: 'moda', description: 'Ropa, joyería y accesorios de moda tendencia 2025-2026', icon: '👗', image: u('photo-1445205170230-053b83016050') },
  { id: 'hogar', name: 'Hogar y Organización', slug: 'hogar', description: 'Organización, decoración y soluciones inteligentes para el hogar', icon: '🏠', image: u('photo-1586023492125-27b2c045efd7') },
  { id: 'belleza', name: 'Belleza y Cuidado Personal', slug: 'belleza', description: 'Herramientas de belleza, skincare y accesorios de cuidado personal', icon: '💄', image: u('photo-1596462502278-27bfdd403348') },
  { id: 'salud', name: 'Salud y Bienestar', slug: 'salud', description: 'Masajeadores, correctores de postura y dispositivos de bienestar', icon: '🧘', image: u('photo-1544367567-0f2fcb009e0b') },
  { id: 'mascotas', name: 'Mascotas', slug: 'mascotas', description: 'Accesorios, juguetes y tecnología para perros y gatos', icon: '🐾', image: u('photo-1587300003388-59208cc962cb') },
  { id: 'auto', name: 'Auto y Motos', slug: 'auto', description: 'Soportes, cargadores y accesorios para vehículos', icon: '🚗', image: u('photo-1492144534655-ae79c964c9d7') },
  { id: 'deportes', name: 'Deportes y Outdoor', slug: 'deportes', description: 'Equipamiento deportivo, outdoor y fitness portátil', icon: '⚽', image: u('photo-1461896836934-ffe607ba6851') },
  { id: 'cocina', name: 'Cocina y Utensilios', slug: 'cocina', description: 'Utensilios de cocina, organizadores y gadgets culinarios', icon: '🍳', image: u('photo-1556909114-f6e7ad7d3136') },
  { id: 'oficina', name: 'Oficina y Smart Home', slug: 'oficina', description: 'Iluminación inteligente, organizadores y accesorios de oficina', icon: '💡', image: u('photo-1497366216548-37526070297c') },
];

function p(
  id: string,
  name: string,
  slug: string,
  description: string,
  price: number,
  originalPrice: number | undefined,
  imageIds: string[],
  rating: number,
  reviews: number,
  sales: number,
  category: string,
  tags: string[],
  stock: number
): Product {
  const images = imageIds.map((pid) => u(pid, 800));
  return {
    id,
    name,
    slug,
    description,
    price,
    originalPrice,
    image: images[0],
    images,
    rating,
    reviews,
    sales,
    category,
    tags,
    stock,
  };
}

export const products: Product[] = [
  // ========== ELECTRÓNICA ==========
  p('el-001', 'Auriculares TWS Bluetooth 5.3 con Cancelación de Ruido', 'auriculares-tws-bluetooth-53',
    'Auriculares inalámbricos semintraurales con cancelación activa de ruido (ANC), graves potentes y certificación IPX4. Ofrecen hasta 30 horas de autonomía total con el estuche de carga, Bluetooth 5.3 de baja latencia y micrófonos duales para llamadas claras. Ideales para deporte, trabajo y uso diario. Incluyen almohadillas de varios tamaños y cable de carga USB-C.',
    12990, 24990,
    ['photo-1590658268037-6bf12165a8df', 'photo-1484704849700-f032a568e944', 'photo-1572569511254-d8f925fe2cbb'],
    4.8, 12450, 89000, 'electronica', ['bluetooth', 'tws', 'audio', 'anc'], 150),

  p('el-002', 'Cable USB-C 240W PD Fast Charge 2m con Chip E-Marker', 'cable-usbc-240w-pd',
    'Cable de carga ultrarrápida USB-C a USB-C de 2 metros con chip E-Marker certificado. Soporta Power Delivery hasta 240W (5A), ideal para MacBook Pro, iPad, Samsung Galaxy, Huawei y laptops gaming. Transmisión de datos hasta 480 Mbps. Construcción trenzada resistente, conectores reforzados y compatibilidad universal con dispositivos PD.',
    5990, 9990,
    ['photo-1583863788434-e58a36330cf0', 'photo-1625948515291-69613efd103f', 'photo-1609091839311-b9bdbb3d0e0f'],
    4.9, 8900, 120000, 'electronica', ['cable', 'carga', 'usb-c', 'pd'], 300),

  p('el-003', 'Smartwatch Deportivo con Monitor de Sueño y SpO2', 'smartwatch-deportivo-spo2',
    'Reloj inteligente con pantalla AMOLED de 1.78", GPS integrado, sensor SpO2, monitor de frecuencia cardíaca 24/7 y seguimiento del sueño. Más de 100 modos deportivos, resistencia al agua 5ATM y batería de hasta 14 días de uso típico. Notificaciones de llamadas y mensajes, control de música y esfera personalizable. Compatible con iOS y Android.',
    24990, 39990,
    ['photo-1523275335684-37898b6baf30', 'photo-1579586337278-3befd40fd17a', 'photo-1434494878577-86c23bcb06b9'],
    4.6, 5600, 45000, 'electronica', ['smartwatch', 'fitness', 'gps', 'salud'], 80),

  p('el-004', 'Power Bank 20000mAh PD 65W con Display LED', 'powerbank-20000mah-65w',
    'Batería externa de alta capacidad 20000mAh con carga rápida bidireccional PD 65W. Pantalla LED digital que muestra el porcentaje exacto de batería. Tres puertos: 2× USB-C y 1× USB-A, permitiendo cargar laptop, tablet y smartphone a la vez. Protección contra sobrecarga, cortocircuito y temperatura. Diseño compacto con carcasa mate antideslizante.',
    18990, 29990,
    ['photo-1609091839311-b9bdbb3d0e0f', 'photo-1625948515291-69613efd103f', 'photo-1583863788434-e58a36330cf0'],
    4.7, 7200, 67000, 'electronica', ['powerbank', 'carga', 'portatil', 'pd'], 120),

  p('el-005', 'Mini Proyector LED 1080p Portátil Android', 'mini-proyector-1080p',
    'Proyector portátil Full HD 1080p nativo con sistema Android 11 integrado, WiFi 6 y Bluetooth 5.0. 200 ANSI lumens, contraste 2000:1 y proyección de 30 a 120 pulgadas. Reproduce Netflix, YouTube y apps directamente sin conectar dispositivos. Altavoz integrado, puerto HDMI y USB. Ideal para cine en casa, camping y presentaciones. Incluye control remoto y trípode.',
    59990, 89990,
    ['photo-1478720568477-152d9b164e26', 'photo-1593784991095-a205069470b6', 'photo-1522869635100-9f4c5e86aa37'],
    4.5, 2100, 18000, 'electronica', ['proyector', 'cine', 'android', 'portatil'], 45),

  p('el-006', 'Cargador Inalámbrico 3 en 1 MagSafe Compatible', 'cargador-inalambrico-3en1',
    'Estación de carga inalámbrica 3 en 1 compatible con MagSafe para iPhone 12 o superior, AirPods y Apple Watch. Carga rápida de 15W en el teléfono, 5W en auriculares y carga magnética para el reloj. Diseño plegable y base antideslizante. Indicadores LED de estado. Alimentación por USB-C PD (adaptador no incluido). Certificación Qi y protección térmica.',
    15990, 24990,
    ['photo-1615750174989-5768186b6a97', 'photo-1609091839311-b9bdbb3d0e0f', 'photo-1583863788434-e58a36330cf0'],
    4.7, 4300, 52000, 'electronica', ['cargador', 'magsafe', 'inalambrico', 'apple'], 90),

  p('el-007', 'Webcam Full HD 1080p con Micrófono Dual y Anillo LED', 'webcam-1080p-anillo-led',
    'Cámara web Full HD 1080p a 30 fps con autofoco, corrección automática de luz y micrófonos duales con reducción de ruido. Anillo LED integrado con 3 temperaturas de color y brillo ajustable. Clip universal para monitor y trípode de 1/4". Compatible con Zoom, Teams, Meet y streaming. Plug & play USB, sin drivers. Ideal para teletrabajo, clases online y creadores de contenido.',
    21990, 34990,
    ['photo-1587825140708-dfaf72ae4b04', 'photo-1614624532983-4ce03382d63d', 'photo-1598327105666-5b89351aff97'],
    4.6, 3800, 29000, 'electronica', ['webcam', 'streaming', 'oficina', 'led'], 70),

  p('el-008', 'Hub USB-C 7 en 1 con HDMI 4K y Lector SD', 'hub-usbc-7en1-hdmi',
    'Adaptador multipuerto USB-C 7 en 1: HDMI 4K@60Hz, 3× USB 3.0 (5 Gbps), USB-C PD 100W para cargar el portátil, lector de tarjetas SD y microSD. Compatible con MacBook, iPad Pro, Dell XPS, HP y Chromebook. Carcasa de aluminio disipadora de calor. Diseño compacto y cable corto reforzado. Perfecto para expandir conectividad en un solo puerto.',
    17990, 27990,
    ['photo-1625948515291-69613efd103f', 'photo-1583863788434-e58a36330cf0', 'photo-1609091839311-b9bdbb3d0e0f'],
    4.8, 5100, 41000, 'electronica', ['hub', 'usb-c', 'hdmi', '4k'], 110),

  p('el-009', 'Auriculares de Sueño Bluetooth Ultra Delgados', 'auriculares-sueno-bluetooth',
    'Auriculares de diadema ultrafinos diseñados para dormir de lado sin molestias. Bluetooth 5.3, máscara de ojos integrada con almohadilla de espuma memory foam y hasta 10 horas de reproducción. Controles táctiles, modo de ruido blanco y app con temporizador de apagado. Tela transpirable lavable. Ideales para insomnio, viajes en avión y meditación.',
    9990, 15990,
    ['photo-1484704849700-f032a568e944', 'photo-1590658268037-6bf12165a8df', 'photo-1572569511254-d8f925fe2cbb'],
    4.4, 2900, 35000, 'electronica', ['sueno', 'bluetooth', 'relajacion', 'viajes'], 95),

  p('el-010', 'Radio de Emergencia Solar + Manivela + Power Bank', 'radio-emergencia-solar',
    'Radio multifunción de emergencia con FM/AM/NOAA, linterna LED de alta potencia, sirena SOS y batería 2000mAh. Se carga por panel solar, manivela manual o USB. Funciona como power bank para cargar el celular en situaciones de corte de luz o camping. Resistente al agua IPX3, brújula integrada y antena telescópica. Incluye cable USB y manual en español.',
    19990, 32990,
    ['photo-1593784991095-a205069470b6', 'photo-1504280390367-361c6d9f38f4', 'photo-1478720568477-152d9b164e26'],
    4.7, 6400, 78000, 'electronica', ['radio', 'emergencia', 'solar', 'camping'], 60),

  // ========== MODA ==========
  p('mo-001', 'Collar en Capas de Acero Inoxidable Set 3 Piezas', 'collar-capas-acero',
    'Set de tres collares en capas de acero inoxidable 316L hipoalergénico, acabado dorado o plateado. Diseño minimalista contemporáneo con eslabones finos y colgantes geométricos sutiles. No se oxidan ni pierden color con el uso diario o el agua. Longitudes escalonadas (40, 45 y 50 cm) con extensión. Perfectos para combinar o regalar. Incluyen caja de presentación.',
    7990, 14990,
    ['photo-1599643478518-a784e5dc4c8f', 'photo-1515562141207-7a88fb7ce338', 'photo-1605100804763-247f67b3557e'],
    4.7, 8900, 95000, 'moda', ['joyeria', 'collar', 'acero', 'capas'], 200),

  p('mo-002', 'Pantalón Cargo Unisex Oversized Streetwear', 'pantalon-cargo-oversized',
    'Pantalón cargo unisex de corte oversized en algodón twill resistente. Múltiples bolsillos laterales con solapa, cintura elástica con cordón ajustable y bajo recto. Disponible en negro, beige y verde militar. Costuras reforzadas y tejido lavable a máquina. Estilo streetwear versátil para uso diario, viajes o look urbano. Tallas S a XXL.',
    18990, 29990,
    ['photo-1624378439575-d8705ad7ae80', 'photo-1542272454315-4c01d7abdf4a', 'photo-1473966968600-fa801b869a1a'],
    4.6, 5600, 62000, 'moda', ['pantalon', 'cargo', 'streetwear', 'unisex'], 140),

  p('mo-003', 'Anillos Ajustables Minimalistas Pack x5', 'anillos-ajustables-pack5',
    'Pack de 5 anillos ajustables de acero inoxidable con diseños geométricos, líneas finas y texturas mate/brillo. Abiertos en la parte posterior para adaptarse a casi cualquier talla de dedo. Resistentes al agua, no se oxidan y son hipoalergénicos. Ideales para apilar o usar por separado. Incluyen bolsita de terciopelo para guardar.',
    5990, 9990,
    ['photo-1605100804763-247f67b3557e', 'photo-1515562141207-7a88fb7ce338', 'photo-1599643478518-a784e5dc4c8f'],
    4.5, 7200, 110000, 'moda', ['anillos', 'joyeria', 'pack', 'minimalista'], 250),

  p('mo-004', 'Bolso Crossbody de Cuero PU con Cadena', 'bolso-crossbody-cadena',
    'Bolso bandolera crossbody de cuero sintético PU de alta calidad, textura suave y acabado premium. Cierre magnético, compartimento principal amplio, bolsillo interior con cremallera y cadena dorada desmontable (también se usa como clutch). Forro resistente y tamaño ideal para celular, billetera y llaves. Disponible en negro, camel y burdeos.',
    14990, 24990,
    ['photo-1548036328-c9fa89d128fa', 'photo-1590874103328-eac38a67478a', 'photo-1566150905458-1bf1fc113f0d'],
    4.8, 4100, 38000, 'moda', ['bolso', 'crossbody', 'mujer', 'cadena'], 85),

  p('mo-005', 'Gafas de Sol Polarizadas UV400 Estilo Retro', 'gafas-sol-polarizadas',
    'Gafas de sol polarizadas con protección UV400 certificada, lentes antirreflejo y montura ligera de acetato estilo aviador clásico. Reduce el deslumbramiento en carretera, playa y nieve. Incluye estuche rígido, paño de microfibra y funda blanda. Bisagras reforzadas y ajuste cómodo en nariz. Unisex, varias combinaciones de color de montura y lente.',
    8990, 15990,
    ['photo-1511499767150-a48a237f0083', 'photo-1572635196237-14b3f281503f', 'photo-1473496169904-658ba7c44d8a'],
    4.6, 6800, 74000, 'moda', ['gafas', 'sol', 'polarizadas', 'uv400'], 160),

  p('mo-006', 'Cinturón de Cuero Genuino con Hebilla Automática', 'cinturon-cuero-automatico',
    'Cinturón de cuero genuino de primera calidad con hebilla de trinquete automática (sin agujeros). Se ajusta con precisión al contorno de la cintura y se libera con un botón. Ancho 3,5 cm, longitud usable 100–120 cm. Costuras reforzadas y hebilla de aleación con acabado cepillado. Presentado en caja, ideal como regalo para hombre.',
    11990, 19990,
    ['photo-1624222247344-550fb60583fd', 'photo-1553062407-98eeb64c6a62', 'photo-1601925260368-ae2f83cf8b7f'],
    4.7, 3500, 28000, 'moda', ['cinturon', 'cuero', 'hombre', 'automatico'], 100),

  p('mo-007', 'Bufanda de Cachemira Sintética Ultra Suave', 'bufanda-cachemira',
    'Bufanda rectangular de 180×70 cm con tacto cachemira sintético ultra suave que no pica. Tejido denso y cálido, ideal para otoño e invierno. No genera electricidad estática y es fácil de lavar a mano. Disponible en 8 colores (gris, camel, negro, rojo, beige, azul, verde y crema). Acabado con flecos discretos. Perfecta para regalo o uso diario.',
    9990, 17990,
    ['photo-1520903920243-00d872a2d1c9', 'photo-1601925260368-ae2f83cf8b7f', 'photo-1434389677669-e08fc41f1a9e'],
    4.8, 2900, 32000, 'moda', ['bufanda', 'invierno', 'cachemira', 'accesorio'], 120),

  p('mo-008', 'Reloj de Pulsera Minimalista Unisex Cuarzo', 'reloj-minimalista-unisex',
    'Reloj de cuarzo japonés con caja de 36 mm, cristal mineral y correa de malla de acero intercambiable. Diseño nórdico minimalista, esfera limpia con índices sutiles y manecillas delgadas. Resistente al agua 3ATM (salpicaduras). Cierre desplegable con seguridad. Unisex, elegante para oficina o uso casual. Incluye caja de regalo.',
    16990, 27990,
    ['photo-1524592094714-0f0654e20314', 'photo-1523275335684-37898b6baf30', 'photo-1434494878577-86c23bcb06b9'],
    4.6, 4800, 41000, 'moda', ['reloj', 'minimalista', 'unisex', 'cuarzo'], 75),

  p('mo-009', 'Pendientes de Aro Geométricos Acero Inoxidable', 'pendientes-aro-geometricos',
    'Pack de 3 pares de pendientes de aro en acero inoxidable hipoalergénico con diseños geométricos modernos (círculo, hexágono y línea). No se oxidan ni provocan alergias. Cierre de presión seguro. Ligeros y cómodos para uso diario. Acabado dorado o plateado. Incluyen tarjetas de presentación para regalo.',
    6990, 12990,
    ['photo-1535632066927-ab7c9ab60908', 'photo-1515562141207-7a88fb7ce338', 'photo-1599643478518-a784e5dc4c8f'],
    4.7, 5200, 58000, 'moda', ['pendientes', 'aros', 'joyeria', 'pack'], 180),

  p('mo-010', 'Gorra Snapback Bordada Unisex Ajustable', 'gorra-snapback-bordada',
    'Gorra snapback de algodón estructurado con bordado frontal de alta densidad, visera plana y cierre ajustable de plástico. Forro interior transpirable y ojales de ventilación. Estilo streetwear unisex, talla única que se adapta a la mayoría de cabezas. Disponible en negro, blanco, navy y camuflaje. Ideal para sol, deporte y look casual.',
    7990, 12990,
    ['photo-1588850561407-ed78c456fedb', 'photo-1575429198097-0414ec08e8cd', 'photo-1521369909029-2afed882baee'],
    4.5, 3900, 47000, 'moda', ['gorra', 'snapback', 'streetwear', 'bordado'], 130),

  // ========== HOGAR ==========
  p('ho-001', 'Cinta Nano Doble Cara Ultra Fuerte Reutilizable', 'cinta-nano-doble-cara',
    'Cinta adhesiva de gel nano transparente de 3 metros, lavable y reutilizable cientos de veces. Soporta hasta 5 kg en superficies lisas (azulejo, vidrio, metal, plástico). Sin residuos al retirar. Ideal para colgar decoración, organizadores de baño y cocina, cableado y bricolaje sin taladrar. Se limpia con agua y jabón para recuperar adherencia.',
    3990, 7990,
    ['photo-1581578731548-c64695cc6952', 'photo-1558618666-fcd25c85cd64', 'photo-1603484477859-abe6a73f9363'],
    4.8, 15600, 210000, 'hogar', ['cinta', 'adhesivo', 'nano', 'organizacion'], 400),

  p('ho-002', 'Organizador de Joyas Modular con Espejo', 'organizador-joyas-modular',
    'Caja organizadora de joyas de 4 niveles con compartimentos ajustables, cajones acolchados y espejo LED con sensor táctil. Cierre con llave para mayor seguridad. Interior de terciopelo que protege anillos, collares y pendientes. Tamaño ideal para tocador o viaje. Estructura apilable y diseño elegante en blanco o rosa.',
    18990, 29990,
    ['photo-1611591437281-460bfbe1220a', 'photo-1515562141207-7a88fb7ce338', 'photo-1605100804763-247f67b3557e'],
    4.7, 4200, 36000, 'hogar', ['organizador', 'joyas', 'espejo', 'led'], 70),

  p('ho-003', 'Luz LED Sensor de Movimiento Recargable x3', 'luz-led-sensor-movimiento',
    'Pack de 3 luces LED inalámbricas con sensor de movimiento PIR, batería recargable USB-C y base magnética/adhesiva. Se encienden automáticamente al detectar movimiento en la oscuridad (alcance ~3 m). Ideal para armarios, pasillos, escaleras y bajo muebles. Autonomía de varias semanas según uso. Luz blanca cálida, sin cables ni instalación eléctrica.',
    9990, 17990,
    ['photo-1565814329452-e1efa11c5b5b', 'photo-1507473885765-e6ed057f782c', 'photo-1513694203232-719a280e022f'],
    4.8, 9800, 145000, 'hogar', ['luz', 'sensor', 'led', 'recargable'], 200),

  p('ho-004', 'Soportes de Cable Autoadhesivos Pack 100u', 'soportes-cable-pack100',
    'Pack de 100 clips organizadores de cables de nylon autoadhesivos, reutilizables y orientables. Mantienen ordenados los cables del escritorio, TV y detrás de muebles. Adhesivo 3M fuerte que no daña superficies al retirar. Varios tamaños en el set para cables finos y grueso. Solución simple y económica para el desorden de cables.',
    4990, 8990,
    ['photo-1558618666-fcd25c85cd64', 'photo-1581578731548-c64695cc6952', 'photo-1603484477859-abe6a73f9363'],
    4.6, 11200, 180000, 'hogar', ['cable', 'organizador', 'clips', 'pack'], 350),

  p('ho-005', 'Alfombra Antideslizante para Baño Memory Foam', 'alfombra-bano-memory-foam',
    'Alfombra de baño de espuma viscoelástica (memory foam) de 60×40 cm, altamente absorbente y de secado rápido. Base de goma antideslizante que se adhiere al suelo húmedo. Funda de microfibra suave, lavable a máquina. Reduce el riesgo de resbalones y aporta confort al salir de la ducha. Disponible en gris, beige y azul.',
    8990, 14990,
    ['photo-1584622650111-993a426fbf0a', 'photo-1552321554-5fefe8c9ef14', 'photo-1600566753190-17f0baa2a6c3'],
    4.7, 5600, 52000, 'hogar', ['alfombra', 'bano', 'memory-foam', 'antideslizante'], 110),

  p('ho-006', 'Estantería Flotante de Madera x3 con Soportes Ocultos', 'estanteria-flotante-madera',
    'Set de 3 estantes flotantes de madera de pino natural con soportes metálicos ocultos. Capacidad de carga hasta 15 kg por estante. Instalación sencilla con plantilla incluida (opción de tornillos o sistema adhesivo reforzado según superficie). Largo 40/50/60 cm. Acabado barnizado mate. Ideales para libros, plantas y decoración sin ocupar suelo.',
    15990, 24990,
    ['photo-1595428774223-ef52624120d2', 'photo-1586023492125-27b2c045efd7', 'photo-1513694203232-719a280e022f'],
    4.5, 3100, 27000, 'hogar', ['estante', 'madera', 'flotante', 'decoracion'], 65),

  p('ho-007', 'Humidificador Ultrasonic 500ml con Luz Nocturna', 'humidificador-ultrasonic',
    'Humidificador de niebla fría ultrasónico de 500 ml, silencioso (<30 dB), con apagado automático al vaciarse el depósito. 7 colores de luz LED nocturna, modos continuo e intermitente. Ideal para dormitorio, oficina y habitación infantil. Mejora la calidad del aire en climas secos y ayuda a aliviar congestión. Incluye cable USB y manual.',
    12990, 21990,
    ['photo-1585771724684-38269d6639fd', 'photo-1608571423902-eed4a5ad8108', 'photo-1507473885765-e6ed057f782c'],
    4.6, 4800, 43000, 'hogar', ['humidificador', 'aire', 'luz', 'ultrasonic'], 90),

  p('ho-008', 'Organizador de Zapatos Apilable Transparente x6', 'organizador-zapatos-x6',
    'Set de 6 cajas organizadoras de zapatos apilables con frontal transparente y ventilación lateral. Permiten ver el contenido sin abrir, protegen del polvo y ahorran espacio vertical en el armario. Plástico rígido y fácil de limpiar. Capacidad para zapatillas, tacones y botines. Dimensiones aproximadas 33×23×13 cm por caja.',
    14990, 24990,
    ['photo-1603484477859-abe6a73f9363', 'photo-1558618666-fcd25c85cd64', 'photo-1586023492125-27b2c045efd7'],
    4.7, 3900, 34000, 'hogar', ['zapatos', 'organizador', 'armario', 'apilable'], 80),

  p('ho-009', 'Cortinas Blackout Térmicas 2 Paneles', 'cortinas-blackout-termicas',
    'Par de cortinas blackout 100% opacas con aislamiento térmico y acústico ligero. Tamaño 140×260 cm por panel, ojales metálicos para barra estándar. Tejido denso que bloquea la luz solar y ayuda a mantener la temperatura de la habitación. Lavables a máquina. Colores: gris, beige, azul navy y negro. Ideales para dormitorio y salas de cine en casa.',
    22990, 35990,
    ['photo-1513694203232-719a280e022f', 'photo-1586023492125-27b2c045efd7', 'photo-1565814329452-e1efa11c5b5b'],
    4.6, 2700, 22000, 'hogar', ['cortinas', 'blackout', 'termicas', 'opacas'], 55),

  p('ho-010', 'Soporte de Pared para TV Articulado 32-70"', 'soporte-tv-articulado',
    'Soporte de pared articulado para televisores de 32 a 70 pulgadas, carga máxima 40 kg, patrón VESA hasta 600×400. Brazo de doble articulación con inclinación ±15° y giro 180°. Construcción de acero reforzado, nivel de burbuja incluido y plantilla de instalación. Permite acercar/alejar la TV y ocultar cables. Compatible con la mayoría de marcas.',
    27990, 42990,
    ['photo-1593359677879-a4bb92f829d1', 'photo-1461151304267-38535e780c79', 'photo-1593784991095-a205069470b6'],
    4.8, 5100, 29000, 'hogar', ['soporte', 'tv', 'pared', 'articulado'], 40),

  // ========== BELLEZA ==========
  p('be-001', 'Rizadores de Cabello sin Calor (Heatless Curler)', 'rizado-sin-calor',
    'Set de rizadores de satén sin calor: cinta de seda, gomas y horquillas. Se colocan por la noche y al despertar obtienes rizos naturales sin dañar el cabello con planchas o rizadores eléctricos. Reduce el frizz y rompe menos el cabello. Incluye tutorial ilustrado. Apto para cabello medio y largo. Reutilizable y fácil de lavar.',
    7990, 14990,
    ['photo-1522338140262-f46f5913618a', 'photo-1631730486572-226b1e126218', 'photo-1519699047748-d1dafe01ba9e'],
    4.7, 11200, 156000, 'belleza', ['cabello', 'rizado', 'sin-calor', 'saten'], 220),

  p('be-002', 'Cera en Stick para Peinar Flyaways Pack x2', 'cera-stick-flyaways',
    'Pack de 2 barras de cera de peinado no grasa para controlar pelos sueltos (flyaways), baby hairs y peinados slick back. Fórmula ligera que no apelmaza ni deja residuos blancos. Ideal para pelucas, trenzas, niños y peinados de oficina. Aplicación precisa tipo barra de labios. Larga duración y se retira fácilmente con champú.',
    4990, 8990,
    ['photo-1631730486572-226b1e126218', 'photo-1522338140262-f46f5913618a', 'photo-1519699047748-d1dafe01ba9e'],
    4.8, 9800, 190000, 'belleza', ['cera', 'cabello', 'peinado', 'flyaways'], 300),

  p('be-003', 'Masajeador Facial de Jade y Rodillo Gua Sha', 'masajeador-jade-gua-sha',
    'Set de rodillo facial de jade natural auténtico + herramienta Gua Sha. Ayuda a reducir la hinchazón matutina, mejorar la circulación y potenciar la absorción de sérums y cremas. Uso en frío (se puede guardar en nevera). Piedra lisa y fresca, mango ergonómico. Incluye bolsa de terciopelo y guía de técnicas básicas de masaje facial.',
    8990, 15990,
    ['photo-1616394584738-fc6e612e71b9', 'photo-1570172619604-923e4814dd52', 'photo-1596462502278-27bfdd403348'],
    4.6, 7600, 88000, 'belleza', ['jade', 'masaje', 'skincare', 'gua-sha'], 150),

  p('be-004', 'Pestañas Magnéticas Reutilizables Kit Completo', 'pestanas-magneticas',
    'Kit completo con 3 pares de pestañas magnéticas de distinto volumen + delineador magnético de larga duración. Se aplican sin pegamento en segundos: el delineador actúa como imán. Reutilizables hasta 30 veces si se cuidan. Aspecto natural o glam según el par. Incluye pinza de aplicación y instrucciones. Ideal para principiantes.',
    11990, 19990,
    ['photo-1512496015851-a90fb38ba796', 'photo-1596462502278-27bfdd403348', 'photo-1522335789203-aabd1fc54bc9'],
    4.5, 5400, 67000, 'belleza', ['pestanas', 'magneticas', 'maquillaje', 'kit'], 100),

  p('be-005', 'Cepillo de Limpieza Facial Sónico Recargable', 'cepillo-facial-sonico',
    'Cepillo facial sónico con 3 velocidades de vibración, 2 cabezales intercambiables (limpieza y suave) y batería recargable de hasta 30 días. Certificación IPX7 (usable en la ducha). Elimina impurezas y maquillaje residual mejor que solo con las manos. Temporizador de 1 minuto. Incluye base de carga USB y funda de viaje.',
    14990, 24990,
    ['photo-1556228720-195a672e8a03', 'photo-1570172619604-923e4814dd52', 'photo-1596462502278-27bfdd403348'],
    4.7, 4200, 41000, 'belleza', ['cepillo', 'facial', 'sonico', 'limpieza'], 85),

  p('be-006', 'Cortadora de Cabello Profesional T9 Zero Gap', 'cortadora-t9-zero-gap',
    'Máquina de corte profesional estilo T9 con cuchilla zero gap ajustable, ideal para fades, contornos, barba y cuerpo. Motor potente, batería de litio de hasta 3 horas de uso continuo y carga USB-C. Incluye 4 peines guía, aceite, cepillo y estuche. Cuerpo ergonómico antideslizante. Popular entre barberos y uso doméstico.',
    16990, 27990,
    ['photo-1621607512215-592785a8f2f8', 'photo-1503951914875-452162b0f3f1', 'photo-1585747860715-2ba37e789b2b'],
    4.6, 8900, 72000, 'belleza', ['cortadora', 'barba', 'profesional', 'fade'], 95),

  p('be-007', 'Espejo de Maquillaje con Luz LED Triple', 'espejo-maquillaje-led',
    'Espejo de tocador con triple panel, 3 modos de luz LED (fría, cálida y natural), aumento 1× / 3× / 5× y brillo regulable. Batería recargable o uso con cable USB. Plegable para guardar o viajar. Base antideslizante. Ideal para maquillaje profesional en casa, cejas y cuidado de la piel con luz uniforme sin sombras.',
    19990, 32990,
    ['photo-1631217868264-e5b90bb7e133', 'photo-1596462502278-27bfdd403348', 'photo-1522335789203-aabd1fc54bc9'],
    4.8, 3600, 28000, 'belleza', ['espejo', 'led', 'maquillaje', 'tocador'], 60),

  p('be-008', 'Set de Brochas de Maquillaje Profesional 12pcs', 'set-brochas-12pcs',
    'Set profesional de 12 brochas veganas de alta densidad con cerdas sintéticas suaves, mango de madera y ferula metálica. Incluye piezas para base, corrector, polvo, contour, difuminado de ojos y labios. Estuche de viaje con cremallera. No retienen producto ni se deforman con el lavado. Ideales para maquillaje diario y profesional.',
    12990, 21990,
    ['photo-1515688594390-b649af70d282', 'photo-1596462502278-27bfdd403348', 'photo-1522335789203-aabd1fc54bc9'],
    4.7, 5800, 49000, 'belleza', ['brochas', 'maquillaje', 'set', 'veganas'], 110),

  p('be-009', 'Rodillo de Hielo Facial de Acero Inoxidable', 'rodillo-hielo-facial',
    'Rodillo facial de hielo reutilizable de acero inoxidable de grado alimenticio. Se llena con agua y se congela; al pasarlo por el rostro reduce hinchazón, cierra poros y revitaliza la piel. Efecto lifting temporal y calmante post-ejercicio o después del sol. Incluye funda protectora. Fácil de limpiar y usar cada mañana.',
    6990, 11990,
    ['photo-1570172619604-923e4814dd52', 'photo-1616394584738-fc6e612e71b9', 'photo-1596462502278-27bfdd403348'],
    4.6, 4100, 53000, 'belleza', ['hielo', 'facial', 'skincare', 'rodillo'], 140),

  p('be-010', 'Difusor de Aceites Esenciales Ultrasónico', 'difusor-aceites-esenciales',
    'Difusor de aromaterapia ultrasónico de 300 ml con 7 luces LED de color, temporizador (1/3/6 h) y apagado automático. Niebla fría que no calienta los aceites. Incluye 6 aceites esenciales de regalo (lavanda, eucalipto, té verde, naranja, menta y limón). Silencioso, ideal para dormitorio, yoga y oficina. Alimentación USB.',
    15990, 25990,
    ['photo-1608571423902-eed4a5ad8108', 'photo-1585771724684-38269d6639fd', 'photo-1603006905003-be475563bc59'],
    4.7, 4700, 38000, 'belleza', ['difusor', 'aromaterapia', 'aceites', 'led'], 75),

  // ========== SALUD ==========
  p('sa-001', 'Masajeador de Cuello y Hombros EMS Portátil', 'masajeador-cuello-ems',
    'Masajeador cervical portátil con tecnología EMS (estimulación muscular eléctrica) y función de calor. 6 modos de masaje y 15 niveles de intensidad. Se coloca alrededor del cuello sin manos. Alivia la tensión por trabajo de oficina y malas posturas. Batería recargable, diseño ligero y almohadillas de silicona reemplazables. Uso doméstico y de viaje.',
    18990, 32990,
    ['photo-1544161515-4ab6ce6db874', 'photo-1571019614242-c5c5dee9f50b', 'photo-1544367567-0f2fcb009e0b'],
    4.7, 6800, 54000, 'salud', ['masaje', 'cuello', 'ems', 'calor'], 90),

  p('sa-002', 'Corrector de Postura Inteligente con Sensor', 'corrector-postura-sensor',
    'Dispositivo wearable discreto que se fija en la espalda o se lleva como clip y vibra suavemente cuando detecta mala postura. App para iOS/Android con historial, recordatorios y metas diarias. Batería de hasta 7 días. Ayuda a crear el hábito de mantener la espalda recta en oficina y estudio. Ligero, hipoalergénico y recargable USB.',
    14990, 24990,
    ['photo-1571019614242-c5c5dee9f50b', 'photo-1544367567-0f2fcb009e0b', 'photo-1571019613454-1cb2f99b2d8b'],
    4.5, 3900, 31000, 'salud', ['postura', 'sensor', 'oficina', 'wearable'], 70),

  p('sa-003', 'Pistola de Masaje Muscular Deep Tissue', 'pistola-masaje-muscular',
    'Pistola de masaje de percusión deep tissue con 6 cabezales intercambiables, 30 niveles de velocidad y batería de hasta 6 horas. Ideal para recuperación post-entrenamiento, contracturas y puntos gatillo. Motor silencioso brushless, empuñadura antideslizante y maletín de transporte. Uso en piernas, espalda, hombros y brazos. Potencia profesional a precio accesible.',
    29990, 49990,
    ['photo-1599058945522-28d584b6f14f', 'photo-1544161515-4ab6ce6db874', 'photo-1571019613454-1cb2f99b2d8b'],
    4.8, 5200, 28000, 'salud', ['masaje', 'muscular', 'fitness', 'percusion'], 55),

  p('sa-004', 'Calentador de Pies Eléctrico Plegable', 'calentador-pies-electrico',
    'Calentador de pies eléctrico con 3 niveles de temperatura, temporizador de seguridad y diseño plegable para guardar. Funda de felpa lavable, consumo bajo (~60 W) y protección contra sobrecalentamiento. Ideal para inviernos fríos, oficina y personas con mala circulación. Enchufe estándar, listo para usar. Tamaño que cabe bajo el escritorio.',
    16990, 27990,
    ['photo-1601925260368-ae2f83cf8b7f', 'photo-1544161515-4ab6ce6db874', 'photo-1584100936595-c0654b55a2e2'],
    4.6, 8100, 67000, 'salud', ['calentador', 'pies', 'invierno', 'electrico'], 100),

  p('sa-005', 'Esterilizador UV para Cepillo de Dientes', 'esterilizador-uv-cepillo',
    'Estuche portátil con luz UV-C que elimina hasta el 99,9 % de bacterias del cepillo de dientes en minutos. Compatible con la mayoría de cepillos manuales y cabezales de eléctricos. Batería recargable, tapa hermética y tamaño de bolsillo. Ideal para viajes y baño compartido. Indicador LED de ciclo completo. Fácil de limpiar.',
    9990, 16990,
    ['photo-1607613009820-a29f7bb81c04', 'photo-1556228720-195a672e8a03', 'photo-1584622650111-993a426fbf0a'],
    4.7, 4500, 42000, 'salud', ['uv', 'esterilizador', 'higiene', 'cepillo'], 120),

  p('sa-006', 'Soporte Lumbar para Silla de Oficina', 'soporte-lumbar-oficina',
    'Almohada lumbar ergonómica de memory foam con correas ajustables que se fijan a cualquier silla de oficina o auto. Sostiene la curva natural de la zona lumbar y reduce el dolor por sedentarismo. Funda transpirable desmontable y lavable. Densidad media-firme. Recomendada para jornadas largas frente al computador.',
    11990, 19990,
    ['photo-1586023492125-27b2c045efd7', 'photo-1497366216548-37526070297c', 'photo-1571019614242-c5c5dee9f50b'],
    4.6, 6200, 51000, 'salud', ['lumbar', 'oficina', 'ergonomia', 'memory-foam'], 85),

  p('sa-007', 'Báscula Inteligente con App y Análisis Corporal', 'bascula-inteligente-app',
    'Báscula inteligente Bluetooth que mide peso, grasa corporal, masa muscular, agua, IMC y hasta 13 métricas. Sincroniza con app gratuita iOS/Android, perfiles múltiples y gráficos de evolución. Plataforma de vidrio templado, capacidad 180 kg, precisión automática. Alimentación por pilas (incluidas). Ideal para seguimiento de objetivos fitness.',
    17990, 29990,
    ['photo-1571019613454-1cb2f99b2d8b', 'photo-1571019614242-c5c5dee9f50b', 'photo-1544367567-0f2fcb009e0b'],
    4.5, 3800, 29000, 'salud', ['bascula', 'inteligente', 'fitness', 'app'], 65),

  p('sa-008', 'Almohada de Viaje Memory Foam Inflable', 'almohada-viaje-memory',
    'Almohada cervical de viaje combinando inflado ajustable y relleno de memory foam en la zona de contacto. Funda de satén suave, bolsa de transporte compacta y válvula de inflado rápida. Soporta el cuello en avión, auto y tren. Se desinfla al mínimo para la maleta. Fácil de limpiar. Color gris antracita unisex.',
    8990, 14990,
    ['photo-1584100936595-c0654b55a2e2', 'photo-1544161515-4ab6ce6db874', 'photo-1601925260368-ae2f83cf8b7f'],
    4.6, 5100, 46000, 'salud', ['almohada', 'viaje', 'cuello', 'memory-foam'], 130),

  p('sa-009', 'Masajeador de Pies con Rodillos y Calor', 'masajeador-pies-calor',
    'Masajeador de pies tipo shiatsu con rodillos giratorios, función de calor y 3 intensidades. Estimula la circulación, alivia la fatiga tras el trabajo o el deporte y relaja la planta y el arco. Carcasa ergonómica, fácil de limpiar y cable de alimentación estándar. Uso en casa sentado; ideal para regalo a personas que pasan mucho tiempo de pie.',
    34990, 54990,
    ['photo-1544161515-4ab6ce6db874', 'photo-1571019613454-1cb2f99b2d8b', 'photo-1601925260368-ae2f83cf8b7f'],
    4.7, 2900, 18000, 'salud', ['pies', 'masaje', 'calor', 'shiatsu'], 40),

  p('sa-010', 'Monitor de Presión Arterial de Muñeca', 'monitor-presion-muneca',
    'Tensiómetro digital de muñeca con pantalla LCD grande, detección de arritmia, memoria de 90 mediciones y promedio de las últimas lecturas. Manguito ajustable, apagado automático y funda de transporte. Fácil de usar en casa para seguimiento de la presión. No sustituye consulta médica; útil como referencia diaria. Pilas incluidas.',
    15990, 25990,
    ['photo-1576091160399-112ba8d25d1d', 'photo-1571019613454-1cb2f99b2d8b', 'photo-1576091160550-2173dba999ef'],
    4.5, 3400, 25000, 'salud', ['presion', 'monitor', 'tensometro', 'salud'], 70),

  // ========== MASCOTAS ==========
  p('ma-001', 'Guantes de Aseo para Mascotas Pack x2', 'guantes-aseo-mascotas',
    'Pack de 2 guantes de silicona para cepillar y eliminar el pelo muerto de perros y gatos mientras los acaricias. Nódulos flexibles que masajean la piel y recogen el pelo en seco o en el baño. Fáciles de enjuagar y secar. Talla única elástica. Reduce la cantidad de pelo en sofás y ropa. Ideales para razas de doble capa.',
    5990, 9990,
    ['photo-1587300003388-59208cc962cb', 'photo-1450778869180-41d0601e046e', 'photo-1548199973-03cce0bbc87b'],
    4.8, 12400, 175000, 'mascotas', ['guantes', 'aseo', 'pelo', 'silicona'], 280),

  p('ma-002', 'Collar GPS Inteligente para Perros', 'collar-gps-perros',
    'Collar con GPS en tiempo real, geocerca (alerta si sale de una zona), monitor de actividad y seguimiento de salud básico. Impermeable IP67, batería de hasta 7 días y app iOS/Android. Localización por GPS + LBS + WiFi. Ajustable a varios tamaños de cuello. Ideal para perros que se escapan o paseos en zonas abiertas. SIM no incluida (según región).',
    39990, 59990,
    ['photo-1583511655857-d19b40a7a54e', 'photo-1601758228041-f3b2795255f1', 'photo-1548199973-03cce0bbc87b'],
    4.6, 2800, 19000, 'mascotas', ['gps', 'collar', 'inteligente', 'perros'], 45),

  p('ma-003', 'Fuente de Agua Automática para Mascotas 2L', 'fuente-agua-mascotas',
    'Fuente de agua automática de 2 litros con bomba silenciosa y filtro de carbón activado que retiene pelo e impurezas. Flujo continuo que incentiva a beber más (útil en gatos). Fácil de desmontar y lavar, bandeja ancha anti-salpicaduras. Alimentación USB de bajo consumo. Compatible con perros pequeños/medianos y gatos.',
    14990, 24990,
    ['photo-1548199973-03cce0bbc87b', 'photo-1450778869180-41d0601e046e', 'photo-1583337130417-3346a1be7dee'],
    4.7, 5600, 48000, 'mascotas', ['fuente', 'agua', 'automatica', 'filtro'], 90),

  p('ma-004', 'Cama Ortopédica Memory Foam para Perros', 'cama-ortopedica-perros',
    'Cama ortopédica con colchón de memory foam que alivia articulaciones y mejora el descanso de perros senior o activos. Funda desmontable lavable a máquina, base antideslizante y bordes elevados tipo nido. Disponible en tallas S a XL. Tejido resistente a arañazos y fácil de aspirar. Ideal para interior y zonas de descanso favoritas.',
    24990, 39990,
    ['photo-1541781774459-bb2a86f7f0a9', 'photo-1587300003388-59208cc962cb', 'photo-1548199973-03cce0bbc87b'],
    4.8, 4100, 32000, 'mascotas', ['cama', 'ortopedica', 'perros', 'memory-foam'], 55),

  p('ma-005', 'Juguete Interactivo de Dispensación de Premios', 'juguete-interactivo-premios',
    'Pelota o dispensador interactivo que libera snacks al empujarlo o girarlo. Estimula el intelecto, reduce el aburrimiento y la ansiedad por separación. Material resistente no tóxico, fácil de rellenar y lavar. Ajustable en dificultad. Apto para perros medianos y gatos curiosos. No incluye premios; usar croquetas o treats secos.',
    9990, 16990,
    ['photo-1535294435445-c4464030753a', 'photo-1587300003388-59208cc962cb', 'photo-1450778869180-41d0601e046e'],
    4.6, 3900, 41000, 'mascotas', ['juguete', 'interactivo', 'premios', 'enriquecimiento'], 110),

  p('ma-006', 'Arnés Reflectante Ajustable Antitirones', 'arnes-reflectante-perros',
    'Arnés ergonómico antitirones con tiras reflectantes 360°, acolchado en pecho y abdomen, y correas ajustables en cuello y pecho. Distribuye la presión para evitar ahogo. Hebillas de liberación rápida y anilla frontal/dorsal para la correa. Ideal para paseos nocturnos y entrenamiento. Tallas según contorno de pecho. Material transpirable.',
    11990, 19990,
    ['photo-1601758228041-f3b2795255f1', 'photo-1583511655857-d19b40a7a54e', 'photo-1548199973-03cce0bbc87b'],
    4.7, 5200, 45000, 'mascotas', ['arnes', 'reflectante', 'paseo', 'antitirones'], 100),

  p('ma-007', 'Cepillo Autolimpiante para Pelo de Mascotas', 'cepillo-autolimpiante-mascotas',
    'Cepillo con cerdas de acero inoxidable y botón de autolimpieza: al pulsar, el pelo se desprende del cepillo a un recipiente o superficie. Elimina hasta el 95 % del pelo muerto en pocas pasadas. Mango ergonómico antideslizante. Apto para perros y gatos de pelo corto, medio y largo. Reduce el pelo en casa y mejora el brillo del pelaje.',
    7990, 13990,
    ['photo-1450778869180-41d0601e046e', 'photo-1587300003388-59208cc962cb', 'photo-1548199973-03cce0bbc87b'],
    4.8, 8700, 92000, 'mascotas', ['cepillo', 'pelo', 'autolimpieza', 'aseo'], 160),

  p('ma-008', 'Transportín Plegable de Tela para Mascotas', 'transportin-plegable',
    'Transportín suave plegable de tela resistente con malla ventilada en tres lados, base acolchada lavable y asa reforzada + correa de hombro. Se pliega plano para guardar. Varias tallas según peso de la mascota. Útil para visitas al veterinario y viajes en auto. Consultar normas de aerolínea si se usa en avión. Cierre de cremallera seguro.',
    18990, 29990,
    ['photo-1548199973-03cce0bbc87b', 'photo-1587300003388-59208cc962cb', 'photo-1601758228041-f3b2795255f1'],
    4.5, 3100, 24000, 'mascotas', ['transportin', 'viaje', 'plegable', 'tela'], 50),

  p('ma-009', 'Comedero Elevado Doble con Antideslizante', 'comedero-elevado-doble',
    'Set de comedero y bebedero elevados con inclinación ergonómica que reduce la tensión en cuello y digestión. Base antideslizante de goma, bowls de acero inoxidable extraíbles y lavables. Altura adecuada para razas medianas. Menos derrames y más higiene. Estructura estable de plástico reforzado. Fácil de montar y limpiar a diario.',
    12990, 21990,
    ['photo-1583337130417-3346a1be7dee', 'photo-1548199973-03cce0bbc87b', 'photo-1450778869180-41d0601e046e'],
    4.6, 4400, 37000, 'mascotas', ['comedero', 'elevado', 'ergonomia', 'doble'], 80),

  p('ma-010', 'Cámara de Vigilancia para Mascotas WiFi 360°', 'camara-vigilancia-mascotas',
    'Cámara WiFi 1080p con rotación 360°, visión nocturna, audio bidireccional y detección de movimiento/sonido. App gratuita para ver a tu mascota en tiempo real, hablarle y recibir alertas. Almacenamiento en tarjeta microSD o nube (opcional). Instalación sencilla con base magnética o tornillos. Ideal para dejar solos a perros y gatos con tranquilidad.',
    27990, 42990,
    ['photo-1558002038-1055907df827', 'photo-1558618666-fcd25c85cd64', 'photo-1587300003388-59208cc962cb'],
    4.7, 3600, 22000, 'mascotas', ['camara', 'wifi', 'vigilancia', '360'], 40),

  // ========== AUTO ==========
  p('au-001', 'Soporte Magnético de Celular para Auto', 'soporte-magnetico-auto',
    'Soporte magnético para smartphone con montaje en rejilla de ventilación o tablero (placa adhesiva). Imán de neodimio fuerte, rotación 360° y opción de carga inalámbrica 15W en el modelo Qi. Compatible con fundas finas; incluye placas metálicas ultrafinas. Un solo movimiento para colocar o quitar el teléfono. Conducción más segura y manos libres.',
    7990, 14990,
    ['photo-1617531653332-bd46c24f2068', 'photo-1492144534655-ae79c964c9d7', 'photo-1449965408869-eaa3f722e40d'],
    4.8, 9800, 125000, 'auto', ['soporte', 'celular', 'magnetico', 'coche'], 200),

  p('au-002', 'Cargador de Auto USB-C PD 65W Dual', 'cargador-auto-65w',
    'Cargador de mechero 12/24 V con 2 puertos USB-C Power Delivery hasta 65 W y 1 USB-A. Carga simultánea de laptop, tablet y smartphone. Chip de identificación inteligente y protecciones contra sobrecorriente. Carcasa de aluminio con LED de estado. Compatible con iPhone, Samsung, MacBook Air y la mayoría de dispositivos PD.',
    9990, 16990,
    ['photo-1609091839311-b9bdbb3d0e0f', 'photo-1583863788434-e58a36330cf0', 'photo-1492144534655-ae79c964c9d7'],
    4.7, 5600, 68000, 'auto', ['cargador', 'auto', 'pd', 'usb-c'], 140),

  p('au-003', 'Aspiradora de Mano para Auto 120W', 'aspiradora-mano-auto',
    'Aspiradora portátil inalámbrica de 120 W de potencia de succión, batería de hasta 30 minutos y 3 boquillas (rendija, cepillo y extensión). Ideal para asientos, alfombras y maletero. Depósito fácil de vaciar, filtro lavable y carga USB-C. Ligera y con gancho para guardar en el auto. También útil en casa para migas y pelo de mascota.',
    19990, 32990,
    ['photo-1558618666-fcd25c85cd64', 'photo-1601362840469-51e4d8d58785', 'photo-1492144534655-ae79c964c9d7'],
    4.6, 4200, 35000, 'auto', ['aspiradora', 'auto', 'limpieza', 'inalambrica'], 70),

  p('au-004', 'Organizador de Maletero Plegable con Compartimentos', 'organizador-maletero',
    'Organizador de baúl plegable de tela reforzada con múltiples compartimentos, asas y base antideslizante. Capacidad aprox. 50 L. Mantiene bolsas de compra, herramientas y artículos de emergencia ordenados. Se pliega plano cuando no se usa. Bolsillos laterales de malla. Resistente a salpicaduras ligeras. Una solución simple para el caos del maletero.',
    12990, 21990,
    ['photo-1449965408869-eaa3f722e40d', 'photo-1492144534655-ae79c964c9d7', 'photo-1558618666-fcd25c85cd64'],
    4.7, 3800, 29000, 'auto', ['organizador', 'maletero', 'plegable', 'auto'], 85),

  p('au-005', 'Cubiertas de Asiento Universales 5 Piezas', 'cubiertas-asiento-auto',
    'Juego completo de fundas de asiento de tela elástica (delanteros + traseros) que protegen del desgaste, manchas y pelo de mascota. Instalación sin herramientas, se adaptan a la mayoría de sedanes y SUV. Costuras reforzadas y abertura para airbags laterales donde corresponde. Lavables. Varios colores. Renuevan el aspecto interior del vehículo.',
    24990, 39990,
    ['photo-1503376780353-7e6692767b70', 'photo-1492144534655-ae79c964c9d7', 'photo-1449965408869-eaa3f722e40d'],
    4.5, 5100, 42000, 'auto', ['cubiertas', 'asiento', 'proteccion', 'universal'], 60),

  p('au-006', 'Cámara de Retroceso Inalámbrica HD', 'camara-retroceso-inalambrica',
    'Cámara de estacionamiento inalámbrica 1080p con visión nocturna, impermeabilidad IP68 y monitor de 4,3" para el tablero. Instalación simplificada sin pasar cable de video por todo el auto (transmisor inalámbrico). Líneas guía de trayectoria, ángulo amplio. Alimentación desde luces de reversa. Mejora la seguridad al estacionar y maniobrar.',
    29990, 45990,
    ['photo-1492144534655-ae79c964c9d7', 'photo-1449965408869-eaa3f722e40d', 'photo-1503376780353-7e6692767b70'],
    4.6, 2900, 18000, 'auto', ['camara', 'retroceso', 'seguridad', 'inalambrica'], 45),

  p('au-007', 'Kit de Limpieza Interior de Auto 8 Piezas', 'kit-limpieza-auto',
    'Kit de 8 piezas: limpiador de tablero, limpiavidrios concentrado, limpiador de llantas, microfibras, esponjas y aplicadores. Fórmulas que no dejan grasa excesiva ni dañan plásticos. Rinde para varios lavados completos del interior. Ideal para mantener el auto como nuevo entre visitas al lavado profesional. Instrucciones de uso en español.',
    14990, 24990,
    ['photo-1601362840469-51e4d8d58785', 'photo-1492144534655-ae79c964c9d7', 'photo-1558618666-fcd25c85cd64'],
    4.7, 4700, 38000, 'auto', ['limpieza', 'kit', 'interior', 'microfibra'], 95),

  p('au-008', 'Adaptador de Carga EV Tipo 2 a Tipo 1', 'adaptador-carga-ev',
    'Adaptador de carga para vehículos eléctricos que convierte conector Tipo 2 (europeo/común en estaciones) a Tipo 1. Cable de 5 m, capacidad 32 A, carcasa robusta e indicadores LED. Permite usar más puntos de carga públicos según el modelo del auto. Verificar compatibilidad con tu vehículo y estación antes de comprar. Uso en corriente alterna.',
    45990, 69990,
    ['photo-1593941707882-a5bba14938c7', 'photo-1492144534655-ae79c964c9d7', 'photo-1558618666-fcd25c85cd64'],
    4.5, 1200, 8500, 'auto', ['ev', 'carga', 'adaptador', 'electrico'], 25),

  p('au-009', 'Soporte de Tablet/GPS para Tablero', 'soporte-tablet-tablero',
    'Brazo articulado con ventosa reforzada para tablets y GPS de 7 a 13". Rotación 360°, brazo extensible y base de vacío que se fija al tablero o parabrisas. Liberación rápida del dispositivo. Ideal para Waze/Google Maps en tablet o pantallas de navegación portátiles. Incluye placa de seguridad para no dejar la ventosa al sol extremo muchas horas.',
    11990, 19990,
    ['photo-1558618666-fcd25c85cd64', 'photo-1492144534655-ae79c964c9d7', 'photo-1617531653332-bd46c24f2068'],
    4.6, 3400, 27000, 'auto', ['soporte', 'tablet', 'gps', 'tablero'], 75),

  p('au-010', 'Luz LED de Ambiente Interior RGB App', 'luz-ambiente-rgb-auto',
    'Tira LED RGB para interior del auto controlable por app Bluetooth: 16 millones de colores, modos estáticos, fade y sincronización con música del celular. Instalación bajo asientos o consola con adhesivo. Alimentación por mechero 12 V con interruptor. Transforma el ambiente nocturno del vehículo. Longitud suficiente para cabina estándar.',
    9990, 17990,
    ['photo-1558618666-fcd25c85cd64', 'photo-1492144534655-ae79c964c9d7', 'photo-1507473885765-e6ed057f782c'],
    4.7, 6100, 55000, 'auto', ['led', 'rgb', 'ambiente', 'app'], 120),

  // ========== DEPORTES ==========
  p('de-001', 'Bandas de Resistencia Set 5 Niveles', 'bandas-resistencia-set5',
    'Set de 5 bandas elásticas de látex natural (aprox. 5 a 25 kg de resistencia), asas reforzadas, anclaje de puerta y bolsa de transporte. Permiten entrenar fuerza, glúteos, brazos y movilidad en casa o de viaje. Manual de ejercicios básicos incluido. Látex de alta elasticidad y costuras reforzadas en las asas. Alternativa económica al gimnasio.',
    9990, 16990,
    ['photo-1598289431512-b97b0917affc', 'photo-1517836357463-d25dfeac3438', 'photo-1571019613454-1cb2f99b2d8b'],
    4.8, 8900, 98000, 'deportes', ['bandas', 'resistencia', 'fitness', 'casa'], 180),

  p('de-002', 'Esterilla de Yoga Antideslizante 6mm', 'esterilla-yoga-6mm',
    'Colchoneta de yoga de TPE ecológico, 183×61 cm y 6 mm de grosor, doble cara antideslizante. Amortigua rodillas y muñecas sin ser inestable. Incluye correa de transporte. Libre de PVC tóxico, fácil de limpiar con paño húmedo. Ideal para yoga, pilates y ejercicios en el suelo. Disponible en varios colores.',
    12990, 21990,
    ['photo-1601925260368-ae2f83cf8b7f', 'photo-1544367567-0f2fcb009e0b', 'photo-1518611012118-696072aa579a'],
    4.7, 7200, 67000, 'deportes', ['yoga', 'esterilla', 'pilates', 'tpe'], 110),

  p('de-003', 'Botella de Agua Motivacional 1L con Marcadores', 'botella-motivacional-1l',
    'Botella de 1 litro de tritán libre de BPA con marcadores de hora para motivar la hidratación, pajita reutilizable, asa y tapa hermética. Diseño motivacional con frases o escala de tiempo. Apta para lavavajillas (sin la pajita en algunos modelos). Ideal para gimnasio, oficina y universidad. No retiene olores. Varios colores.',
    6990, 11990,
    ['photo-1602143407151-7111542de6e8', 'photo-1523362628745-0c100150b504', 'photo-1571934811356-5cc061b6821f'],
    4.6, 9500, 112000, 'deportes', ['botella', 'agua', 'motivacional', '1l'], 220),

  p('de-004', 'Soga de Saltar con Contador Digital', 'soga-saltar-contador',
    'Cuerda de saltar ajustable con contador digital de saltos, calorías estimadas y temporizador. Rodamientos de acero para giro suave, mango ergonómico antideslizante y cable revestido que no se enreda fácilmente. Ideal para cardio en poco espacio. Pilas del contador incluidas. Longitud ajustable a la altura del usuario.',
    7990, 13990,
    ['photo-1518611012118-696072aa579a', 'photo-1517836357463-d25dfeac3438', 'photo-1571019613454-1cb2f99b2d8b'],
    4.5, 4800, 43000, 'deportes', ['soga', 'cardio', 'contador', 'saltar'], 130),

  p('de-005', 'Mochila Deportiva Impermeable 30L', 'mochila-deportiva-30l',
    'Mochila de gimnasio 30 L con compartimento separado para zapatos, bolsillo húmedo para ropa sudada, puerto USB externo (power bank no incluido) y correas acolchadas. Tejido resistente al agua. Organización interior con bolsillos para botella y objetos pequeños. Ideal para gym, natación y viaje corto. Aspecto urbano discreto.',
    18990, 29990,
    ['photo-1553062407-98eeb64c6a62', 'photo-1581605405669-fbfbc00c0a07', 'photo-1517836357463-d25dfeac3438'],
    4.7, 3600, 28000, 'deportes', ['mochila', 'gimnasio', 'impermeable', '30l'], 70),

  p('de-006', 'Guantes de Fitness con Muñequera', 'guantes-fitness-muneca',
    'Guantes de entrenamiento con agarre de silicona, muñequeras ajustables y dorso transpirable. Protegen las manos de callos y mejoran el agarre en pesas y barras. Dedos abiertos para usar el celular. Cierre de velcro. Varias tallas. Ideales para gimnasio, cross-training y pesas en casa.',
    8990, 14990,
    ['photo-1517836357463-d25dfeac3438', 'photo-1571019613454-1cb2f99b2d8b', 'photo-1598289431512-b97b0917affc'],
    4.6, 5100, 49000, 'deportes', ['guantes', 'gimnasio', 'proteccion', 'muneca'], 150),

  p('de-007', 'Bolsa Seca Impermeable 20L para Outdoor', 'bolsa-seca-20l',
    'Dry bag de PVC 500D con sellado enrollable y capacidad 20 L. Flotante e impermeable para kayak, playa, camping y moto. Costuras termoselladas, asa y anilla para fijar. Protege ropa, electrónica y documentos del agua. Se comprime al enrollar el cierre. Colores visibles para no perderla. Obligatoria en deportes acuáticos.',
    9990, 16990,
    ['photo-1553062407-98eeb64c6a62', 'photo-1504280390367-361c6d9f38f4', 'photo-1523362628745-0c100150b504'],
    4.8, 4200, 36000, 'deportes', ['bolsa', 'impermeable', 'outdoor', 'drybag'], 90),

  p('de-008', 'Rodillera de Compresión Deportiva x2', 'rodillera-compresion',
    'Par de rodilleras de neopreno con gel de silicona, soporte lateral y compresión gradual. Estabilizan la rótula en running, gym y deportes de impacto. Transpirables y elásticas, se lavan a mano. Tallas según contorno de rodilla. Útiles en prevención y recuperación de molestias leves (no sustituyen órtesis médicas prescritas).',
    11990, 19990,
    ['photo-1571019613454-1cb2f99b2d8b', 'photo-1517836357463-d25dfeac3438', 'photo-1598289431512-b97b0917affc'],
    4.5, 3900, 32000, 'deportes', ['rodillera', 'compresion', 'soporte', 'running'], 100),

  p('de-009', 'Linterna Frontal LED Recargable 1000 Lúmenes', 'linterna-frontal-1000lm',
    'Linterna frontal de 1000 lúmenes con 5 modos (alto, medio, bajo, strobe, SOS), batería recargable USB-C e impermeabilidad IPX6. Ángulo de haz ajustable, cinta elástica cómoda y peso ligero. Ideal para running nocturno, camping, pesca y trabajos con las manos libres. Autonomía según modo de 2 a 10 horas. Incluye cable de carga.',
    14990, 24990,
    ['photo-1504280390367-361c6d9f38f4', 'photo-1518611012118-696072aa579a', 'photo-1478720568477-152d9b164e26'],
    4.7, 5600, 41000, 'deportes', ['linterna', 'frontal', 'camping', 'running'], 80),

  p('de-010', 'Bicicleta Estática Plegable con Monitor', 'bici-estatica-plegable',
    'Bicicleta de ejercicio plegable con 8 niveles de resistencia magnética, monitor LCD (tiempo, distancia, calorías, pulso) y asiento ajustable. Se pliega para guardar en espacios pequeños. Pedales con correa, base estable con ruedas de transporte. Ideal para cardio en casa sin ocupar un cuarto entero. Montaje sencillo con herramientas incluidas.',
    89990, 129990,
    ['photo-1534438327276-14e5300c3a48', 'photo-1517836357463-d25dfeac3438', 'photo-1571019613454-1cb2f99b2d8b'],
    4.4, 1800, 9500, 'deportes', ['bici', 'estatica', 'cardio', 'plegable'], 20),

  // ========== COCINA ==========
  p('co-001', 'Cortador de Verduras Multifunción 12 en 1', 'cortador-verduras-12en1',
    'Picador de verduras con 12 cuchillas intercambiables de acero inoxidable y contenedor de 1,5 L. Ralla, rebanada, juliana y cubos en segundos. Base antideslizante y empujador de seguridad para proteger los dedos. Ideal para ensaladas, guarniciones y meal prep. Piezas aptas para lavavajillas. Ahorra tiempo frente al cuchillo tradicional.',
    12990, 22990,
    ['photo-1556910103-1c0279a1dc47', 'photo-1556911220-bff31c8750ea', 'photo-1556909114-f6e7ad7d3136'],
    4.7, 11200, 145000, 'cocina', ['cortador', 'verduras', 'multifuncion', 'mandolina'], 160),

  p('co-002', 'Botella Pulverizadora de Aceite de Oliva', 'botella-aceite-spray',
    'Dispensador de aceite en spray de vidrio con bomba de presión, control de porciones y sin propelentes químicos. Ideal para air fryer, ensaladas y plancha: menos grasa y distribución uniforme. Capacidad aprox. 100–200 ml según modelo. Fácil de rellenar y limpiar. Evita el goteo del aceitero tradicional. Compatible con aceite de oliva y vinagre.',
    5990, 9990,
    ['photo-1474979266404-7eaacbcd87c5', 'photo-1556911220-bff31c8750ea', 'photo-1556909114-f6e7ad7d3136'],
    4.8, 15600, 210000, 'cocina', ['aceite', 'spray', 'airfryer', 'vidrio'], 300),

  p('co-003', 'Bolsas de Silicona Reutilizables Pack x6', 'bolsas-silicona-x6',
    'Set de 6 bolsas de silicona alimentaria reutilizables, herméticas, aptas para freezer, microondas y lavavajillas. Sustituto del plástico de un solo uso. Varios tamaños para snacks, verduras y leftovers. Cierre tipo zip reforzado, base expandible y marca de medidas. Fáciles de lavar y secar. Colores para organizar por contenido.',
    9990, 17990,
    ['photo-1604719312566-8912e9227c6a', 'photo-1556911220-bff31c8750ea', 'photo-1556909114-f6e7ad7d3136'],
    4.7, 8900, 98000, 'cocina', ['bolsas', 'silicona', 'reutilizable', 'freezer'], 200),

  p('co-004', 'Balanza de Cocina Digital de Precisión', 'balanza-cocina-digital',
    'Báscula de cocina digital de precisión 5 kg / 1 g con pantalla LCD, función tara y unidades g, oz, ml y lb:oz. Plataforma de vidrio o acero, fácil de limpiar. Ideal para repostería, dietas y café de filtro. Apagado automático y indicador de batería baja. Pilas incluidas. Diseño delgado que cabe en cualquier cajón.',
    7990, 13990,
    ['photo-1556911220-bff31c8750ea', 'photo-1556910103-1c0279a1dc47', 'photo-1556909114-f6e7ad7d3136'],
    4.6, 6700, 72000, 'cocina', ['balanza', 'precision', 'digital', 'reposteria'], 140),

  p('co-005', 'Organizador de Especias Magnético de Pared', 'organizador-especias-magnetico',
    'Rack magnético de acero inoxidable con 12 frascos de vidrio y etiquetas. Se adhiere a la nevera o a una placa metálica en la pared. Libera espacio en la encimera y mantiene las especias visibles y ordenadas. Frascos con tapa hermética. Ideal para cocinas pequeñas. Incluye plantilla de organización sugerida.',
    16990, 27990,
    ['photo-1596797038530-2c107229654b', 'photo-1556911220-bff31c8750ea', 'photo-1556909114-f6e7ad7d3136'],
    4.7, 4100, 34000, 'cocina', ['especias', 'organizador', 'magnetico', 'pared'], 75),

  p('co-006', 'Tapas Universales de Silicona Stretch x6', 'tapas-silicona-stretch',
    'Set de 6 tapas elásticas de silicona de distintos diámetros que se adaptan a bowls, latas y recipientes. Herméticas, reutilizables y aptas para microondas y lavavajillas (verificar rango de temperatura del set). Sustituyen film plástico. Colores vivos para identificar contenido. Se estiran y recuperan la forma cientos de veces.',
    6990, 11990,
    ['photo-1556911220-e15b29be8c8f', 'photo-1604719312566-8912e9227c6a', 'photo-1556909114-f6e7ad7d3136'],
    4.8, 7800, 89000, 'cocina', ['tapas', 'silicona', 'conservacion', 'reutilizable'], 180),

  p('co-007', 'Molino de Café Manual de Acero', 'molino-cafe-manual',
    'Molino de café de manivela con muelas de acero cónicas ajustables, cuerpo de aluminio y depósito para granos y café molido. Molienda uniforme desde espresso hasta prensa francesa. Sin electricidad, ideal para viaje y control total de la molienda. Manivela ergonómica y agarre antideslizante. El favorito de aficionados al café de especialidad.',
    19990, 32990,
    ['photo-1495474472287-4d71bcdd2085', 'photo-1514432324607-a09d9b4aefdd', 'photo-1447933601403-0c838bd6471e'],
    4.6, 3200, 21000, 'cocina', ['cafe', 'molino', 'manual', 'muelas'], 55),

  p('co-008', 'Utensilios de Silicona Set 10 Piezas', 'utensilios-silicona-set10',
    'Set de 10 utensilios de cocina en silicona alimentaria resistente hasta 230 °C, con mango de madera o nylon según modelo. Incluye espátula, cuchara, cucharón, pinzas, cepillo y más. No rayan sartenes antiadherentes. Se cuelgan o guardan en el recipiente del set. Aptos para lavavajillas (piezas de silicona). Colores modernos.',
    14990, 24990,
    ['photo-1556911220-bff31c8750ea', 'photo-1556910103-1c0279a1dc47', 'photo-1556909114-f6e7ad7d3136'],
    4.7, 5400, 46000, 'cocina', ['utensilios', 'silicona', 'set', 'antiadherente'], 100),

  p('co-009', 'Dispensador de Jabón y Esponja 2 en 1', 'dispensador-jabon-esponja',
    'Dispensador de jabón líquido para fregadero con soporte integrado para esponja, bomba de presión y depósito de unos 400 ml. Diseño moderno que reduce el desorden junto al grifo. Fácil de rellenar y limpiar. Base estable. Ideal para lavavajilla a mano. Compatible con jabones líquidos estándar (no geles muy densos).',
    8990, 14990,
    ['photo-1584622650111-993a426fbf0a', 'photo-1556911220-bff31c8750ea', 'photo-1556909114-f6e7ad7d3136'],
    4.5, 3900, 33000, 'cocina', ['dispensador', 'jabon', 'esponja', 'fregadero'], 110),

  p('co-010', 'Termo de Café de Acero Inoxidable 500ml', 'termo-cafe-500ml',
    'Botella térmica de acero inoxidable de doble pared al vacío, 500 ml. Mantiene la bebida caliente hasta 12 h y fría hasta 24 h. Tapa hermética a prueba de fugas, boca ancha para rellenar y beber, y base estable. No retiene olores. Ideal para café, té y agua en auto u oficina. Acabado mate que no muestra huellas.',
    11990, 19990,
    ['photo-1571934811356-5cc061b6821f', 'photo-1602143407151-7111542de6e8', 'photo-1495474472287-4d71bcdd2085'],
    4.8, 6800, 58000, 'cocina', ['termo', 'cafe', 'termico', 'acero'], 130),

  // ========== OFICINA ==========
  p('of-001', 'Lámpara de Escritorio LED con Carga Inalámbrica', 'lampara-escritorio-carga',
    'Lámpara de escritorio LED con 5 niveles de brillo, 3 temperaturas de color (fría, neutra, cálida), base con cargador inalámbrico Qi 15 W y puerto USB adicional. Brazo flexible o articulado según modelo. Cuidado de la vista (bajo parpadeo). Ideal para estudiar y trabajar de noche mientras cargas el teléfono. Alimentación por adaptador incluido.',
    24990, 39990,
    ['photo-1507473885765-e6ed057f782c', 'photo-1497366216548-37526070297c', 'photo-1527864550417-7fd91fc51a46'],
    4.7, 4500, 32000, 'oficina', ['lampara', 'led', 'carga', 'escritorio'], 70),

  p('of-002', 'Organizador de Escritorio con Cajones', 'organizador-escritorio',
    'Organizador de escritorio de bambú o madera con 3 cajones, porta lápices y bandeja superior. Mantiene bolígrafos, clips, post-its y cables ordenados. Diseño minimalista que combina con home office. Fácil de limpiar. Dimensiones pensadas para no ocupar todo el fondo del escritorio. Montaje mínimo o listo para usar.',
    14990, 24990,
    ['photo-1497366216548-37526070297c', 'photo-1527864550417-7fd91fc51a46', 'photo-1507473885765-e6ed057f782c'],
    4.6, 3800, 27000, 'oficina', ['organizador', 'escritorio', 'bambu', 'cajones'], 85),

  p('of-003', 'Soporte de Monitor Elevado con Cajón', 'soporte-monitor-elevado',
    'Elevador de monitor de bambú o metal con altura ergonómica, cajón de almacenamiento para teclado y espacio para hub USB. Reduce la tensión cervical al poner la pantalla a la altura de los ojos. Capacidad de carga alta, antideslizante. Compatible con monitores y laptops. Mejora la postura en jornadas largas.',
    19990, 32990,
    ['photo-1527864550417-7fd91fc51a46', 'photo-1497366216548-37526070297c', 'photo-1507473885765-e6ed057f782c'],
    4.7, 4100, 29000, 'oficina', ['soporte', 'monitor', 'ergonomia', 'elevador'], 60),

  p('of-004', 'Tira LED Inteligente WiFi 5m RGBIC', 'tira-led-wifi-5m',
    'Tira LED RGBIC de 5 metros direccionable, control por app WiFi y voz (Alexa / Google Assistant). Sincronización con música, escenas predefinidas y 16 millones de colores. Adhesivo 3M, cortable en marcas y fuente de alimentación incluida. Ideal para tras monitores, estanterías y ambiente gamer. Requiere WiFi 2,4 GHz.',
    17990, 29990,
    ['photo-1558618666-fcd25c85cd64', 'photo-1507473885765-e6ed057f782c', 'photo-1558002038-1055907df827'],
    4.6, 7200, 61000, 'oficina', ['led', 'wifi', 'smart', 'rgbic'], 120),

  p('of-005', 'Timbre Inteligente WiFi con Cámara HD', 'timbre-inteligente-camara',
    'Timbre de video 1080p con visión nocturna, detección de movimiento, audio bidireccional y alertas al celular. Almacenamiento en la nube o tarjeta local según modelo. Instalación en lugar del timbre cableado o con kit inalámbrico. App gratuita. Ideal para ver quién llama aunque no estés en casa. Resistente a la intemperie IP65.',
    34990, 54990,
    ['photo-1558002038-1055907df827', 'photo-1558618666-fcd25c85cd64', 'photo-1497366216548-37526070297c'],
    4.5, 2800, 19000, 'oficina', ['timbre', 'camara', 'seguridad', 'wifi'], 40),

  p('of-006', 'Soporte de Laptop Ajustable de Aluminio', 'soporte-laptop-aluminio',
    'Stand ergonómico de aluminio para laptops de 11 a 17", 6 niveles de altura, ventilación inferior y diseño plegable para transporte. Reduce la tensión de cuello y mejora el airflow del equipo. Base antideslizante y tope frontal. Compatible con MacBook y PC. Ligero pero firme. Ideal para home office y coworking.',
    16990, 27990,
    ['photo-1527864550417-7fd91fc51a46', 'photo-1497366216548-37526070297c', 'photo-1507473885765-e6ed057f782c'],
    4.8, 5600, 44000, 'oficina', ['soporte', 'laptop', 'ergonomia', 'aluminio'], 95),

  p('of-007', 'Enchufe Inteligente WiFi Pack x4', 'enchufe-inteligente-x4',
    'Pack de 4 enchufes inteligentes WiFi con control por app y voz (Alexa/Google), temporizadores, horarios y monitoreo de consumo en algunos modelos. Enchufe estándar chileno/latino según versión. No requieren hub. Ideal para automatizar lámparas, calefactores y apagar equipos en standby. WiFi 2,4 GHz.',
    19990, 32990,
    ['photo-1558002038-1055907df827', 'photo-1558618666-fcd25c85cd64', 'photo-1497366216548-37526070297c'],
    4.7, 4900, 38000, 'oficina', ['enchufe', 'wifi', 'smart', 'pack'], 100),

  p('of-008', 'Proyector de Estrellas Astronauta Galaxy', 'proyector-estrellas-astronauta',
    'Proyector de galaxia con forma de astronauta, 8 modos de nebulosa y estrellas, temporizador y control remoto. Proyecta en techo y paredes; ideal para dormitorio, relajación y decoración infantil. Ángulo de cabeza ajustable. Alimentación USB. Regalo popular y elemento decorativo con luz ambiental nocturna.',
    14990, 24990,
    ['photo-1507400492013-162706c8c05e', 'photo-1419242902214-272b3f66ee7a', 'photo-1507473885765-e6ed057f782c'],
    4.6, 6300, 52000, 'oficina', ['proyector', 'estrellas', 'galaxy', 'decoracion'], 80),

  p('of-009', 'Mouse Ergonómico Vertical Inalámbrico', 'mouse-ergonomico-vertical',
    'Mouse vertical inalámbrico 2,4 GHz + Bluetooth, 6 botones programables y DPI ajustable. La posición de “apretón de manos” reduce la tensión en muñeca y el riesgo de molestias por túnel carpiano. Compatible con Windows y macOS. Receptor USB nano y batería recargable o AA según modelo. Ideal para quienes trabajan muchas horas con el PC.',
    13990, 22990,
    ['photo-1527864550417-7fd91fc51a46', 'photo-1497366216548-37526070297c', 'photo-1587825140708-dfaf72ae4b04'],
    4.7, 4100, 31000, 'oficina', ['mouse', 'ergonomico', 'inalambrico', 'vertical'], 90),

  p('of-010', 'Cámara de Seguridad Interior 360° WiFi', 'camara-seguridad-360',
    'Cámara IP interior 1080p con rotación 360°, seguimiento automático de personas, visión nocturna y detección de movimiento. App con alertas, audio bidireccional y privacidad (puede girar a zona ciega). Tarjeta microSD o nube. Fácil de configurar por WiFi. Ideal para vigilar casa, mascotas u oficina cuando no estás.',
    22990, 36990,
    ['photo-1558002038-1055907df827', 'photo-1558618666-fcd25c85cd64', 'photo-1497366216548-37526070297c'],
    4.6, 3500, 24000, 'oficina', ['camara', 'seguridad', 'wifi', '360'], 55),
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

/** Comisión por venta de la tienda (margen sobre el precio de venta). */
export const COMMISSION_RATE = 0.40; // 40%

/** Costo estimado del producto (proveedor) = precio × (1 − comisión). */
export function getProductCost(price: number): number {
  return Math.round(price * (1 - COMMISSION_RATE));
}

/** Comisión / ganancia estimada por unidad = precio × comisión. */
export function getCommissionAmount(price: number): number {
  return Math.round(price * COMMISSION_RATE);
}

/** Porcentaje de comisión formateado (ej. "40%"). */
export function getCommissionPercentLabel(): string {
  return `${Math.round(COMMISSION_RATE * 100)}%`;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
  }).format(price);
}
