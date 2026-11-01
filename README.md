# Borja Zanón - Web de músico

Prototipo de web personal para el músico Borja Zanón. Nunca llegó a publicarse oficialmente: es una maqueta funcional con contenido de ejemplo que se conserva como proyecto de aprendizaje.

**Demo:** https://christiangh.github.io/borja-zanon-website/

![Cabecera de la web](assets/images/main.jpg)

## Qué incluye

Web de una sola página con menú fijo, scroll suave, sección activa resaltada y menú desplegable en móvil.

- **Home**: cabecera con foto que se adapta a la ventana.
- **Noticias**: lista de titulares y noticia seleccionada al lado, con fechas en español.
- **Biografía**: texto e imágenes alternados.
- **Galería**: carrusel responsive; cada foto se abre a pantalla completa en un *lightbox*.
- **Contacto**: formulario validado con una animación musical que simula el envío (no envía nada).

## Tecnologías

AngularJS 1.8 (+ angular-i18n), jQuery 3.7, [Slick](https://kenwheeler.github.io/slick/), [Magnific Popup](https://dimsemenov.com/plugins/magnific-popup/), Bootstrap 3.4 (solo CSS), Sass + Autoprefixer, UglifyJS y Browsersync.

## Puesta en marcha

Requiere Node.js 22 o superior.

```bash
npm install
npm start      # compila y levanta la web en http://localhost:3000
```

Tras cambiar SCSS o JS de `app/`, ejecuta `npm run build` para regenerar `assets/css` y `assets/js` (no versionados).

## Despliegue

Cada push a `master` publica la web en GitHub Pages mediante GitHub Actions (`.github/workflows/deploy-pages.yml`): compila el proyecto y sube solo los ficheros necesarios, incluidas las librerías de `node_modules` que usa `index.html`.

## Estructura

```
├── index.html
├── app/
│   ├── components/   # Secciones: news, biography, gallery, contact
│   └── shared/       # Cabecera, menú, botón musical, galería de fotos y pie
└── assets/
    ├── scss/         # Estilos fuente
    └── images/
```

## Limitaciones

- AngularJS no tiene soporte desde 2021 y `npm audit` muestra avisos sin arreglo. El riesgo aquí es bajo: no hay backend ni se guardan datos.
- Contenido de ejemplo; el formulario solo muestra los datos en la consola.

## Autor

Christian García
