# Borja Zanón - Web de músico

Prototipo de web personal del músico para Borja Zanón. El proyecto nunca llegó a publicarse: se quedó en una maqueta funcional, con textos y ejemplos de relleno, y hoy se conserva como proyecto de aprendizaje y práctica.

![Cabecera de la web](assets/images/main.jpg)

## Qué incluye

Web de una sola página (*single page*) con navegación por secciones:

- **Home**: cabecera con foto a pantalla completa que se adapta al tamaño de la ventana.
- **Noticias**, **Biografía** y **Galería**: contenido de ejemplo.
- **Contacto**: formulario validado con AngularJS (nombre, email y mensaje con contador de caracteres). Al enviarlo, muestra los datos en la consola y lanza una animación musical (pentagrama con notas) que simula el envío y alterna entre éxito y error. No envía nada realmente.

Detalles de la navegación:

- Menú fijo que se queda pegado arriba al hacer scroll.
- El menú marca la sección visible en cada momento, con un subrayado animado.
- Scroll suave al pulsar una opción del menú.
- Menú desplegable en móvil.

## Tecnologías

- [AngularJS](https://angularjs.org/) 1.8 (componentes, directivas, servicios y controladores)
- [jQuery](https://jquery.com/) 3.7
- [Bootstrap](https://getbootstrap.com/docs/3.4/) 3.4 (solo CSS)
- [Sass](https://sass-lang.com/) (Dart Sass) + [Autoprefixer](https://github.com/postcss/autoprefixer)
- [UglifyJS](https://github.com/mishoo/UglifyJS) para empaquetar el JS
- [Browsersync](https://browsersync.io/) como servidor de desarrollo con recarga automática

## Requisitos

- Node.js **22 o superior** (recomendado: la última LTS)
- npm 10 o superior

## Puesta en marcha

```bash
npm install
npm start
```

`npm start` compila los estilos y el JavaScript y levanta la web en http://localhost:3000. Los cambios en HTML, CSS y JS compilados recargan el navegador automáticamente.

### Scripts disponibles

| Script | Descripción |
|---|---|
| `npm start` | `build` + `serve` |
| `npm run build` | Compila SCSS, aplica autoprefixer y empaqueta el JS |
| `npm run serve` | Levanta Browsersync sin recompilar |
| `npm run scss` | Compila `assets/scss` a `assets/css` |
| `npm run autoprefixer` | Añade prefijos de navegador a `assets/css/main.css` |
| `npm run uglify-app` | Une y minifica el JS de `app/` en `assets/js/app.js` |

Si modificas SCSS o JS de `app/`, ejecuta `npm run build` (o el script correspondiente) para regenerar los ficheros compilados.

## Estructura

```
├── index.html               # Página principal
├── app/
│   ├── app.js               # Módulo AngularJS "webBorja"
│   ├── components/          # Secciones: news, biography, gallery, contact
│   └── shared/              # Cabecera (foto adaptable), menú de navegación y botón musical
└── assets/
    ├── scss/                # Estilos fuente
    ├── images/              # Imágenes
    ├── css/                 # Generado (no versionado)
    └── js/                  # Generado (no versionado)
```

## Limitaciones conocidas

- **AngularJS dejó de tener soporte en 2021.** `npm audit` señala vulnerabilidades sin arreglo disponible. En esta web el riesgo es bajo: no hay backend y lo que se escribe en el formulario de contacto no se guarda ni se muestra a otros usuarios.
- **Bootstrap 3** tiene un aviso moderado de XSS en sus plugins JS. Por eso solo se usa su CSS.
- Sass avisa de que `@import` está obsoleto. Sigue funcionando con Dart Sass 1.x.
- El contenido es de ejemplo. El formulario de contacto no envía emails: solo muestra los datos en la consola del navegador.

## Autor

Christian García
