# Maré — Catálogo online

Sitio estático (HTML + CSS + JS, sin frameworks) listo para publicar gratis en GitHub Pages.

## Archivos

```
mare-site/
├── index.html
├── style.css
├── script.js
├── README.md
└── images/
    ├── LEEME.txt   (lista de nombres de archivo exactos que necesitás)
    ├── logo.png            <- todavía no existe, agregalo vos
    ├── favicon.ico          <- todavía no existe, agregalo vos
    ├── hero.jpg              <- todavía no existe, agregalo vos
    └── enterizo-*.jpg  (7 fotos de producto) <- todavía no existen, agregalas vos
```

Mientras no subas una foto, esa sección muestra un placeholder elegante con el nombre del producto — la página nunca se ve "rota".

---

## Paso a paso, desde cero

### 1. Crear el repositorio en GitHub
1. Entrá a [github.com](https://github.com) e iniciá sesión (o creá una cuenta gratis).
2. Arriba a la derecha, hacé clic en el **+** y elegí **New repository**.
3. En "Repository name" escribí: `mare` (o el nombre que prefieras).
4. Marcalo como **Public**.
5. NO marques "Add a README file" (ya tenés uno).
6. Hacé clic en **Create repository**.

### 2. Subir los archivos
1. En la página del repositorio recién creado, hacé clic en **uploading an existing file** (o el botón **Add file → Upload files**).
2. Arrastrá `index.html`, `style.css`, `script.js` y `README.md` a la ventana.
3. Escribí un mensaje corto como "Primera versión del catálogo" y hacé clic en **Commit changes**.

### 3. Crear la carpeta de imágenes
GitHub no deja crear una carpeta vacía directamente, así que:
1. Hacé clic en **Add file → Upload files** de nuevo.
2. Arrastrá la carpeta `images` completa (con el archivo `LEEME.txt` adentro) — al arrastrar la carpeta entera, GitHub la crea automáticamente.
3. Comiteá los cambios.
4. Más adelante, cuando tengas tus fotos reales, repetís este mismo paso subiéndolas dentro de `images/` con el nombre exacto que indica `images/LEEME.txt`.

### 4. Activar GitHub Pages
1. Dentro del repositorio, andá a **Settings** (pestaña arriba).
2. En el menú de la izquierda, hacé clic en **Pages**.
3. En "Branch", elegí `main` y la carpeta `/ (root)`.
4. Hacé clic en **Save**.
5. Esperá 1-2 minutos.

### 5. Obtener tu enlace .github.io
1. Volvé a **Settings → Pages**.
2. Arriba vas a ver un mensaje verde: "Your site is live at `https://tu-usuario.github.io/mare/`".
3. Ese es el link que vas a compartir en Instagram/TikTok.

### 6. Cambiar las fotos
1. Sacá o preparé las fotos de tus productos.
2. Renombralas EXACTAMENTE como indica `images/LEEME.txt` (por ejemplo `enterizo-short-negro.jpg`).
3. En GitHub, entrá a la carpeta `images`, hacé clic en **Add file → Upload files** y subí las fotos — si ya existe un archivo con el mismo nombre, GitHub te pregunta si querés reemplazarlo.
4. Para el logo: subí tu PNG como `images/logo.png`. Después abrí `index.html`, buscá el comentario que dice `Para usar tu logo real...` (cerca del `<header>`) y seguí la instrucción de ese comentario para reemplazar el logo de texto por tu imagen.

### 7. Cambiar tu número de WhatsApp
1. Abrí `script.js` (podés editarlo directo en GitHub: hacé clic en el archivo y luego en el ícono de lápiz ✏️).
2. En la primera línea de código vas a ver:
   ```js
   const WHATSAPP_NUMBER = "50600000000";
   ```
3. Reemplazá ese número por el tuyo real, con código de país y sin espacios ni signos (ejemplo Costa Rica: `50688887777`).
4. Hacé clic en **Commit changes**.

### 8. Cambiar precios o productos más adelante
Todo el contenido de productos está en `index.html`, dentro de la sección `<section class="coleccion" id="coleccion">`.
- **Precio**: buscá `<p class="product-price">₡15.000</p>` (o el precio que quieras cambiar) y editalo.
- **Colores**: cada color es un botón `<button class="swatch" ...>`. Para agregar uno nuevo, copiá una línea existente y cambiá `data-color` (nombre del color), `data-img` (ruta de la foto) y `style="--swatch-color:#..."` (código hexadecimal del color del círculo).
- **Producto nuevo**: copiá todo el bloque `<article class="product-card">...</article>` de un producto existente, pegalo debajo, y cambiá nombre, precio, fotos y colores.

Cualquier cambio lo hacés editando el archivo directo en GitHub (ícono de lápiz) y confirmando con **Commit changes** — el sitio se actualiza solo, en 1-2 minutos.
