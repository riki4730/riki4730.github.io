# 🧁 Melina Pasta y Dulce - Sitio Web

> Sitio web completo, responsivo y accesible para un negocio de postres y pastas artesanales.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-Yes-28a745?style=flat-square)](https://developer.mozilla.org/es/docs/Web/CSS/Media_Queries)
[![Accessible](https://img.shields.io/badge/Accessible-WCAG%202.1-blueviolet?style=flat-square)](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 📋 Contenido

- [Características](#características)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Cómo Probar Localmente](#cómo-probar-localmente)
- [Personalización](#personalización)
  - [Cambiar número de WhatsApp](#cambiar-número-de-whatsapp)
  - [Agregar/Editar productos](#agregareditar-productos)
  - [Cambiar colores](#cambiar-colores)
- [Despliegue](#despliegue)
  - [Netlify](#netlify)
  - [Vercel](#vercel)
  - [GitHub Pages](#github-pages)
- [Accesibilidad](#accesibilidad)
- [Créditos](#créditos)

---

## ✨ Características

- ✅ **Diseño Responsive** - Mobile-first, se adapta a todos los dispositivos
- ✅ **Accesible** - Etiquetas ARIA, navegación por teclado, contraste adecuado
- ✅ **SEO Optimizado** - Meta tags, Open Graph, Twitter Cards
- ✅ **Rendimiento** - Imágenes optimizadas, lazy loading
- ✅ **WhatsApp Integration** - Botones con mensajes predefinidos
- ✅ **Sin dependencias** - HTML5, CSS3 y JavaScript vanilla
- ✅ **Fácil de personalizar** - Variables CSS y código comentado

---

## 📁 Estructura del Proyecto

```
delicias-artesanales/
│
├── index.html          # Página principal (estructura HTML)
├── styles.css          # Estilos CSS (diseño y responsive)
├── app.js              # Lógica JavaScript (productos dinámicos)
├── README.md           # Este archivo (documentación)
│
└── images/             # Carpeta de imágenes
    ├── hero-banner.jpg
    ├── producto-tiramisu.jpg
    ├── producto-pasta-alfredo.jpg
    ├── producto-cheesecake.jpg
    ├── producto-ravioles.jpg
    └── producto-torta-chocolate.jpg
```

---

## 🚀 Cómo Probar Localmente

### Opción 1: Abrir directamente

1. Descarga o clona este repositorio
2. Navega a la carpeta del proyecto
3. Haz **doble clic** en `index.html`
4. El sitio se abrirá en tu navegador predeterminado

### Opción 2: Servidor local (recomendado)

Si tienes **Node.js** instalado:

```bash
# Navega a la carpeta del proyecto
cd delicias-artesanales

# Usar npx serve (no requiere instalación)
npx serve

# O usar Python 3
python -m http.server 8000

# O usar PHP
php -S localhost:8000
```

Luego abre tu navegador en `http://localhost:8000`

### Opción 3: Extensión de VS Code

Instala la extensión **"Live Server"** de Ritwick Dey:

1. Abre el proyecto en VS Code
2. Haz clic derecho en `index.html`
3. Selecciona **"Open with Live Server"**

---

## 🎨 Personalización

### Cambiar número de WhatsApp

> ⚠️ **IMPORTANTE**: Debes cambiar el número placeholder por tu número real.

**Ubicación**: `app.js` - Línea 24

```javascript
// ANTES (placeholder):
const WHATSAPP_NUMBER = '+549XXXXXXXXXX';

// DESPUÉS (tu número real):
const WHATSAPP_NUMBER = '+5491123456789';
```

**Formato correcto**:
- Código de país: `+54` (Argentina)
- Código de área: `9` + `11` (para Buenos Aires)
- Número: `XXXXXXXX` (8 dígitos)
- **Sin espacios, guiones ni paréntesis**

✅ Correcto: `+5491123456789`
❌ Incorrecto: `+54 9 11 2345-6789`

---

### Agregar/Editar productos

**Ubicación**: `app.js` - Líneas 45-95 (array `productos`)

#### Para agregar un nuevo producto:

```javascript
{
    id: 6,  // Siguiente número disponible
    nombre: 'Nombre del Producto',
    descripcion: 'Descripción del producto (máx. 120 caracteres recomendado)',
    precio: 9999,  // Precio en números, sin formato
    categoria: 'postres',  // 'postres' o 'pastas'
    imagen: './images/nombre-imagen.jpg',
    alt: 'Descripción de la imagen para accesibilidad'
}
```

#### Ejemplo completo:

```javascript
const productos = [
    // ... productos existentes ...
    
    {
        id: 6,
        nombre: 'Macarons Franceses',
        descripcion: 'Delicados macarons de almendra en variedad de sabores: chocolate, vainilla, frambuesa y limón. Caja de 6 unidades.',
        precio: 6500,
        categoria: 'postres',
        imagen: './images/producto-macarons.jpg',
        alt: 'Caja de macarons de colores pastel'
    }
];
```

#### Para editar un producto existente:

Busca el producto por su `id` y modifica los campos necesarios:

```javascript
{
    id: 1,
    nombre: 'Tiramisú Clásico',  // ← Cambia esto
    descripcion: 'Nueva descripción...',  // ← Cambia esto
    precio: 9500,  // ← Cambia esto
    // ...
}
```

---

### Cambiar colores

**Ubicación**: `styles.css` - Líneas 18-35 (variables CSS `:root`)

```css
:root {
    /* Paleta actual */
    --color-bg: #F5F1E8;           /* Fondo general - Crema */
    --color-primary: #AFC9BE;       /* Header - Verde menta */
    --color-primary-dark: #7FA89C;  /* Botones - Verde oscuro */
    --color-accent: #D4B97A;        /* Detalles - Dorado */
    
    /* Cambia estos valores por tus colores preferidos */
}
```

#### Ejemplo: Cambiar a tonos rosas

```css
:root {
    --color-bg: #FFF5F5;           /* Rosa muy claro */
    --color-primary: #FFB6C1;       /* Rosa claro */
    --color-primary-dark: #FF69B4;  /* Rosa fuerte */
    --color-accent: #FFD700;        /* Dorado */
}
```

---

## 🌐 Despliegue

### Netlify (Recomendado - Gratis)

1. Crea una cuenta en [netlify.com](https://www.netlify.com)
2. Arrastra la carpeta del proyecto a la zona de drop
3. ¡Listo! Tu sitio estará online en segundos
4. Opcional: Conecta tu repositorio de GitHub para deploy automático

**URL resultante**: `https://tunombre.netlify.app`

---

### Vercel (Gratis)

1. Crea una cuenta en [vercel.com](https://vercel.com)
2. Haz clic en **"Add New Project"**
3. Importa tu repositorio de GitHub o sube la carpeta
4. Configura el framework preset como **"Other"**
5. Haz clic en **"Deploy"**

**URL resultante**: `https://tunombre.vercel.app`

---

### GitHub Pages (Gratis)

1. Crea un repositorio en GitHub
2. Sube todos los archivos del proyecto
3. Ve a **Settings** → **Pages**
4. En "Source", selecciona **"Deploy from a branch"**
5. Selecciona la rama `main` y carpeta `/ (root)`
6. Haz clic en **Save**
7. Espera 1-2 minutos y tu sitio estará en la URL mostrada

**URL resultante**: `https://tuusuario.github.io/nombre-repo`

---

### FTP/Servidor propio

1. Comprime todos los archivos en un `.zip`
2. Sube los archivos a tu servidor vía FTP
3. Extrae los archivos en la carpeta `public_html` o equivalente
4. Asegúrate de que `index.html` esté en la raíz

---

## ♿ Accesibilidad

Este sitio cumple con los estándares **WCAG 2.1 Nivel AA**:

| Característica | Implementación |
|----------------|----------------|
| **Navegación por teclado** | Tabindex lógico, focus visible |
| **Lectores de pantalla** | Etiquetas ARIA, alt text en imágenes |
| **Contraste de colores** | Ratio mínimo 4.5:1 para texto |
| **Skip link** | Salto al contenido principal |
| **Reducción de movimiento** | Respeta `prefers-reduced-motion` |
| **Texto escalable** | Unidades rem para todo el texto |

### Atajos de teclado

| Tecla | Acción |
|-------|--------|
| `Tab` | Navegar entre elementos interactivos |
| `Enter` | Activar botones/enlaces |
| `Escape` | Cerrar menú móvil |
| `Inicio` | Ir al inicio de la página |

---

## 📱 Vista previa en dispositivos

El sitio está optimizado para:

- 📱 **Móviles**: 320px - 639px
- 📱 **Tablets**: 640px - 1023px  
- 💻 **Escritorio**: 1024px+

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|------------|-----|
| **HTML5** | Estructura semántica |
| **CSS3** | Estilos, Grid, Flexbox, Variables |
| **JavaScript ES6+** | Lógica dinámica |
| **Font Awesome** | Iconografía |
| **Google Fonts** | Tipografía (Playfair Display, Lato) |

**Sin frameworks ni librerías pesadas** - Código vanilla para máximo rendimiento.

---

## 📝 Notas adicionales

### Mensajes de WhatsApp

Los mensajes se generan automáticamente usando `encodeURIComponent()` para asegurar que caracteres especiales (tildes, eñes) se codifiquen correctamente.

**Mensaje general** (botón flotante):
```
Hola, quiero consultar sobre sus productos.
```

**Mensaje de producto** (botón en card):
```
Hola, estoy interesado en el producto [NOMBRE]. ¿Podrías darme más información?
```

### Optimización de imágenes

Para mejorar el rendimiento:
1. Comprime las imágenes con [TinyPNG](https://tinypng.com)
2. Usa formatos modernos (WebP) con fallback a JPG
3. Mantén las dimensiones recomendadas:
   - Hero: 1920x1080px
   - Productos: 800x600px

---

## 📄 Licencia

Este proyecto está disponible para uso personal y comercial.

---

## 💖 Créditos

Desarrollado con amor para **Melina Pasta y Dulce**.

¿Preguntas o sugerencias? Contáctanos por WhatsApp:

[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=flat-square&logo=whatsapp&logoColor=white)](https://wa.me/549XXXXXXXXXX)

---

**¡Gracias por usar nuestro sitio!** 🧁✨
