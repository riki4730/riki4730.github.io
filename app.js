/**
 * ============================================
 * DELICIAS ARTESANALES - APLICACIÓN JAVASCRIPT
 * ============================================
 * 
 * Funcionalidades principales:
 * - Renderizado dinámico de productos desde array/JSON
 * - Generación de enlaces de WhatsApp con encodeURIComponent
 * - Filtros de categorías
 * - Navegación responsive
 * - Botón flotante de WhatsApp
 * - Botón volver arriba
 * - Accesibilidad mejorada
 * 
 * @author Delicias Artesanales
 * @version 1.0.0
 */

// ============================================
// CONFIGURACIÓN GLOBAL
// ============================================

/**
 * CONFIGURACIÓN DE WHATSAPP
 * =========================
 * IMPORTANTE: Reemplaza el número de teléfono placeholder
 * por tu número real de WhatsApp Business.
 * 
 * Formato: Código de país + código de área + número
 * Ejemplo Argentina: +54911XXXXXXXX (sin espacios ni guiones)
 * 
 * INSTRUCCIONES PARA CAMBIAR EL NÚMERO:
 * 1. Busca la línea de abajo que dice: const WHATSAPP_NUMBER = '+549XXXXXXXXXX';
 * 2. Reemplaza '+549XXXXXXXXXX' con tu número real
 * 3. Guarda el archivo y actualiza la página
 */
const WHATSAPP_NUMBER = '+5492216720243';

/**
 * MENSAJES PREDEFINIDOS PARA WHATSAPP
 * ===================================
 * Estos mensajes se enviarán automáticamente cuando
 * el usuario haga clic en los botones de WhatsApp.
 */
const WHATSAPP_MESSAGES = {
    // Mensaje general para el botón flotante
    general: 'Hola, quiero consultar sobre sus productos.',
    
    // Mensaje para productos específicos (se concatena con el nombre)
    producto: (nombreProducto) => `Hola, estoy interesado en el producto ${nombreProducto}. ¿Podrías darme más información?`
};

// ============================================
// DATOS DE PRODUCTOS
// ============================================

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║                    📝 AGREGAR MÁS PRODUCTOS AQUÍ 📝                       ║
 * ╠══════════════════════════════════════════════════════════════════════════╣
 * ║                                                                          ║
 * ║  Para agregar un nuevo producto, copia el siguiente bloque y pégalo      ║
 * ║  DESPUÉS del último producto (antes del corchete de cierre ]):           ║
 * ║                                                                          ║
 * ║  {                                                                       ║
 * ║      id: 6,  // ← Cambia este número al siguiente disponible            ║
 * ║      nombre: 'Nombre del Producto',                                      ║
 * ║      descripcion: 'Descripción del producto',                            ║
 * ║      precio: 9999,  // ← Precio sin puntos ni comas                     ║
 * ║      categoria: 'postres',  // ← 'postres' o 'pastas'                   ║
 * ║      imagen: './images/nombre-imagen.jpg',  // ← Ruta de la imagen      ║
 * ║      alt: 'Descripción de la imagen'                                     ║
 * ║  },                                                                      ║
 * ║                                                                          ║
 * ║  IMPORTANTE:                                                             ║
 * ║  - Cada producto debe terminar con coma (,) EXCEPTO el último           ║
 * ║  - El ID debe ser único y consecutivo                                    ║
 * ║  - Guarda la imagen en la carpeta /images/                               ║
 * ║                                                                          ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

/**
 * ARRAY DE PRODUCTOS
 * ==================
 * Aquí puedes agregar, editar o eliminar productos.
 * Cada producto debe tener las siguientes propiedades:
 * 
 * - id: Número único de identificación
 * - nombre: Nombre del producto
 * - descripcion: Descripción corta (máx. 120 caracteres recomendado)
 * - precio: Precio en formato numérico
 * - categoria: 'postres' o 'pastas'
 * - imagen: Ruta a la imagen del producto
 * - alt: Texto alternativo para accesibilidad
 */
const productos = [
    {
        id: 1,
        nombre: 'Tiramisú Clásico',
        descripcion: 'Auténtico tiramisú italiano con capas de bizcocho empapado en café, crema de mascarpone y cacao en polvo. El postre perfecto para cualquier ocasión.',
        precio: 8500,
        categoria: 'postres',
        imagen: './images/producto-tiramisu.jpg',
        alt: 'Porción de tiramisú artesanal con capas de mascarpone y cacao'
    },
    {
        id: 2,
        nombre: 'Fettuccine Alfredo',
        descripcion: 'Pasta fresca casera con salsa Alfredo cremosa, queso parmesano rallado y un toque de nuez moscada. Servido con albahaca fresca.',
        precio: 12000,
        categoria: 'pastas',
        imagen: './images/producto-pasta-alfredo.jpg',
        alt: 'Plato de fettuccine con salsa Alfredo cremosa y parmesano'
    },
    {
        id: 3,
        nombre: 'Cheesecake de Frutos Rojos',
        descripcion: 'Cheesecake de textura suave y cremosa con base de galletas y cobertura de salsa de frutos rojos frescos. Una explosión de sabor.',
        precio: 9500,
        categoria: 'postres',
        imagen: './images/producto-cheesecake.jpg',
        alt: 'Cheesecake con salsa de frambuesas y arándanos frescos'
    },
    {
        id: 4,
        nombre: 'Ravioles de Espinaca y Ricota',
        descripcion: 'Ravioles caseros rellenos de espinaca fresca y ricota, acompañados de salsa de tomate natural y albahaca. Porción para 2 personas.',
        precio: 11000,
        categoria: 'pastas',
        imagen: './images/producto-ravioles.jpg',
        alt: 'Ravioles caseros con salsa de tomate y queso parmesano'
    },
    {
        id: 5,
        nombre: 'Torta de Chocolate Decadente',
        descripcion: 'Torta de chocolate con múltiples capas de bizcocho húmedo, ganache de chocolate negro y decoración con trufas. Ideal para celebraciones.',
        precio: 18000,
        categoria: 'postres',
        imagen: './images/producto-torta-chocolate.jpg',
        alt: 'Torta de chocolate de varios pisos con ganache y trufas'
    },
    {
        id: 6,
        nombre: 'Torta tres leches',
        descripcion: 'Torta de chocolate con múltiples capas de bizcocho húmedo, ganache de chocolate negro y decoración con trufas. Ideal para celebraciones.',
        precio: 5000,
        categoria: 'postres',
        imagen: './images/producto-torta-chocolate.jpg',
        alt: 'Torta de chocolate de varios pisos con ganache y trufas'
    }
];

// ============================================
// FUNCIONES UTILITARIAS
// ============================================

/**
 * Formatea un número como precio en pesos argentinos
 * @param {number} precio - El precio a formatear
 * @returns {string} Precio formateado (ej: "$ 8.500")
 */
function formatearPrecio(precio) {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(precio);
}

/**
 * Genera el enlace de WhatsApp con mensaje codificado
 * @param {string} mensaje - El mensaje a enviar
 * @returns {string} URL completa de WhatsApp
 */
function generarLinkWhatsApp(mensaje) {
    // encodeURIComponent asegura que caracteres especiales se codifiquen correctamente
    const mensajeCodificado = encodeURIComponent(mensaje);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${mensajeCodificado}`;
}

/**
 * Genera el enlace de WhatsApp para un producto específico
 * @param {string} nombreProducto - Nombre del producto
 * @returns {string} URL de WhatsApp con mensaje personalizado
 */
function generarLinkWhatsAppProducto(nombreProducto) {
    const mensaje = WHATSAPP_MESSAGES.producto(nombreProducto);
    return generarLinkWhatsApp(mensaje);
}

// ============================================
// RENDERIZADO DE PRODUCTOS
// ============================================

/**
 * Crea el HTML de una card de producto
 * @param {Object} producto - Objeto con los datos del producto
 * @returns {string} HTML de la card
 */
function crearCardProducto(producto) {
    // Generar el enlace de WhatsApp específico para este producto
    const linkWhatsApp = generarLinkWhatsAppProducto(producto.nombre);
    
    // Formatear el precio
    const precioFormateado = formatearPrecio(producto.precio);
    
    // Capitalizar la primera letra de la categoría
    const categoriaFormateada = producto.categoria.charAt(0).toUpperCase() + producto.categoria.slice(1);
    
    return `
        <article 
            class="product-card" 
            data-categoria="${producto.categoria}"
            data-id="${producto.id}"
            role="article"
            aria-labelledby="producto-nombre-${producto.id}"
        >
            <!-- Imagen del producto -->
            <div class="product-image">
                <img 
                    src="${producto.imagen}" 
                    alt="${producto.alt}"
                    loading="lazy"
                    width="400"
                    height="300"
                >
                <span class="product-category">${categoriaFormateada}</span>
            </div>
            
            <!-- Contenido de la card -->
            <div class="product-content">
                <h3 id="producto-nombre-${producto.id}" class="product-name">
                    ${producto.nombre}
                </h3>
                <p class="product-description">
                    ${producto.descripcion}
                </p>
                
                <!-- Precio y botón de consulta -->
                <div class="product-footer">
                    <span class="product-price" aria-label="Precio: ${precioFormateado}">
                        <span class="currency">$</span>
                        ${producto.precio.toLocaleString('es-AR')}
                    </span>
                    <a 
                        href="${linkWhatsApp}"
                        class="btn-consultar"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Consultar sobre ${producto.nombre} por WhatsApp"
                    >
                        <i class="fab fa-whatsapp" aria-hidden="true"></i>
                        <span>Consultar</span>
                    </a>
                </div>
            </div>
        </article>
    `;
}

/**
 * Renderiza todos los productos en el grid
 * @param {string} filtro - Categoría a filtrar ('todos', 'postres', 'pastas')
 */
function renderizarProductos(filtro = 'todos') {
    const grid = document.getElementById('productsGrid');
    
    // Si no existe el grid, salir de la función
    if (!grid) return;
    
    // Filtrar productos según la categoría
    const productosFiltrados = filtro === 'todos' 
        ? productos 
        : productos.filter(p => p.categoria === filtro);
    
    // Generar el HTML de todas las cards
    const htmlProductos = productosFiltrados.map(crearCardProducto).join('');
    
    // Insertar en el DOM
    grid.innerHTML = htmlProductos || `
        <div class="no-results" role="alert">
            <i class="fas fa-search" aria-hidden="true"></i>
            <p>No se encontraron productos en esta categoría.</p>
        </div>
    `;
    
    // Anunciar cambio para lectores de pantalla
    grid.setAttribute('aria-label', `Mostrando ${productosFiltrados.length} productos`);
}

// ============================================
// FILTROS DE CATEGORÍAS
// ============================================

/**
 * Inicializa los filtros de categorías
 */
function inicializarFiltros() {
    const botonesFiltro = document.querySelectorAll('.filter-btn');
    
    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', () => {
            // Obtener el filtro seleccionado
            const filtro = boton.dataset.filter;
            
            // Actualizar estado visual de los botones
            botonesFiltro.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            boton.classList.add('active');
            boton.setAttribute('aria-pressed', 'true');
            
            // Renderizar productos filtrados
            renderizarProductos(filtro);
        });
    });
}

// ============================================
// NAVEGACIÓN RESPONSIVE
// ============================================

/**
 * Inicializa el menú de navegación responsive
 */
function inicializarNavegacion() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!menuToggle || !mainNav) return;
    
    // Función para abrir/cerrar el menú
    function toggleMenu() {
        const isOpen = mainNav.classList.contains('is-open');
        
        if (isOpen) {
            mainNav.classList.remove('is-open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
        } else {
            mainNav.classList.add('is-open');
            menuToggle.setAttribute('aria-expanded', 'true');
            menuToggle.setAttribute('aria-label', 'Cerrar menú de navegación');
        }
    }
    
    // Evento click en el botón de menú
    menuToggle.addEventListener('click', toggleMenu);
    
    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('is-open')) {
                toggleMenu();
            }
            
            // Actualizar enlace activo
            navLinks.forEach(l => {
                l.classList.remove('active');
                l.removeAttribute('aria-current');
            });
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        });
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (
            mainNav.classList.contains('is-open') &&
            !mainNav.contains(e.target) &&
            !menuToggle.contains(e.target)
        ) {
            toggleMenu();
        }
    });
    
    // Cerrar menú con la tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
            toggleMenu();
            menuToggle.focus();
        }
    });
}

// ============================================
// BOTÓN VOLVER ARRIBA
// ============================================

/**
 * Inicializa el botón de volver arriba
 */
function inicializarBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    if (!backToTop) return;
    
    // Mostrar/ocultar botón según el scroll
    function toggleBackToTop() {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
    
    // Evento de scroll con throttling para mejor rendimiento
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                toggleBackToTop();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Acción al hacer clic
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// HEADER AL HACER SCROLL
// ============================================

/**
 * Agrega clase al header cuando se hace scroll
 */
function inicializarHeaderScroll() {
    const header = document.querySelector('.header');
    
    if (!header) return;
    
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 50) {
                    header.classList.add('is-scrolled');
                } else {
                    header.classList.remove('is-scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ============================================
// ACTUALIZAR AÑO EN EL FOOTER
// ============================================

/**
 * Actualiza el año del copyright automáticamente
 */
function actualizarAnio() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ============================================
// OBSERVER PARA ANIMACIONES AL SCROLL
// ============================================

/**
 * Inicializa el Intersection Observer para animaciones
 */
function inicializarScrollAnimations() {
    // Verificar si el navegador soporta IntersectionObserver
    if (!('IntersectionObserver' in window)) return;
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos con clase .animate-on-scroll
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// INICIALIZACIÓN DE LA APLICACIÓN
// ============================================

/**
 * Función principal de inicialización
 * Se ejecuta cuando el DOM está completamente cargado
 */
function init() {
    // Renderizar productos inicialmente
    renderizarProductos();
    
    // Inicializar filtros
    inicializarFiltros();
    
    // Inicializar navegación responsive
    inicializarNavegacion();
    
    // Inicializar botón volver arriba
    inicializarBackToTop();
    
    // Inicializar efectos del header
    inicializarHeaderScroll();
    
    // Actualizar año en el footer
    actualizarAnio();
    
    // Inicializar animaciones al scroll
    inicializarScrollAnimations();
    
    // Log de confirmación
    console.log('🧁 Melina Pasta y Dulce - App inicializada correctamente');
    console.log(`📱 Número de WhatsApp configurado: ${WHATSAPP_NUMBER}`);
    console.log(`🍰 Productos cargados: ${productos.length}`);
    console.log('➕ Para agregar más productos, busca el comentario "AGREGAR MÁS PRODUCTOS AQUÍ" en app.js');
}

// ============================================
// EVENT LISTENERS
// ============================================

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);

// Manejar errores de carga de imágenes
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        console.warn('Error al cargar imagen:', e.target.src);
        // Opcional: mostrar imagen de placeholder
        // e.target.src = './images/placeholder.jpg';
    }
}, true);

// ============================================
// EXPORTAR FUNCIONES PARA TESTING
// ============================================

// Si estamos en un entorno de testing (Node.js), exportar funciones
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        formatearPrecio,
        generarLinkWhatsApp,
        generarLinkWhatsAppProducto,
        crearCardProducto,
        productos,
        WHATSAPP_NUMBER
    };
}
