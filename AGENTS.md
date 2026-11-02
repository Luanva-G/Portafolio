# Guía de trabajo del portafolio

## Alcance y objetivo

Estas instrucciones aplican a todo el repositorio. El objetivo es corregir los problemas del portafolio, facilitar la incorporación de nuevos proyectos y presentar con claridad el perfil de Luis Ángel como desarrollador enfocado en backend.

Este archivo documenta trabajo pendiente; su creación no significa que las correcciones ya estén implementadas. Las instrucciones explícitas del usuario tienen prioridad.

## Contexto del proyecto

- React 19, TypeScript y Vite 7.
- Componentes actualmente en `components/`; entrada, aplicación y recursos en `src/`.
- Bootstrap 5, CSS personalizado de la plantilla Lindy y EmailJS para contacto.
- Comandos: `npm run dev`, `npm run lint`, `npm run build`, `npm run preview`.
- El Vite instalado requiere Node `^20.19.0 || >=22.12.0`; mantener documentación y entorno compatibles.
- Mantener el contenido público en español y usar nombres consistentes en el código.

## Forma de trabajar

- Leer la implementación actual antes de modificarla y conservar cambios del usuario.
- Hacer cambios enfocados y evitar reescrituras, migraciones o dependencias nuevas sin necesidad.
- No cambiar la identidad visual, ilustraciones, precios ni datos personales por decisión propia. Las recomendaciones comerciales y visuales deben tratarse como propuestas.
- No inventar proyectos, clientes, experiencia, métricas, tecnologías ni enlaces.
- No editar `node_modules/` ni archivos generados en `dist/`.
- No subir credenciales ni archivos `.env`. Las variables `VITE_*` se exponen al navegador: usarlas únicamente para valores públicos apropiados, nunca secretos de servidor.
- No enviar correos reales ni publicar el sitio como parte de las comprobaciones, salvo indicación del usuario.

## Prioridad 1: navegación y funcionamiento

- [x] Unificar `components/Navbar.tsx` y `components/Header.tsx`: `src/App.tsx` actualmente renderiza ambos. Conservar un único menú con acceso a las secciones existentes.
- [x] Unificar identificadores y enlaces de sección. Corregir la diferencia entre `proyectos` y `proyect`, las referencias a `contacto` y `contact`, y los espacios finales en enlaces de `Header.tsx`. Actualizar todos los consumidores al elegir los nombres definitivos.
- [ ] Hacer que el indicador activo siga la sección visible y que el menú móvil cierre al seleccionar un enlace. Mantener `aria-expanded`, `aria-controls` y nombres accesibles correctos.
  - Estado: Implementado en Navbar con seguimiento por posición, cierre al seleccionar, Escape y atributos ARIA; pendiente validación de interacción en navegador.
- [ ] Evitar que la barra fija tape los títulos al navegar por anclas, incluyendo cambios de tamaño de pantalla. Preferir una solución CSS coherente con la altura del menú.
  - Estado: Implementado con ResizeObserver, variable CSS de altura, scroll-padding y tratamiento del hash inicial; pendiente validación de anclas y cambios de tamaño en navegador.
- [x] Importar el fondo de `HeroSection.tsx` desde `src/assets` para que Vite lo incluya en producción; eliminar la ruta literal `/assets/img/hero/hero-5/hero-bg.svg`.
- [ ] Implementar en React la visibilidad del botón de `ScrollTop.tsx`; actualmente su CSS lo oculta y el script de plantilla no se carga. Añadir un nombre accesible.
  - Estado: Implementado con estado, listener pasivo y limpieza; pendiente comprobar aparición y navegación en navegador.
- [x] Eliminar la espera artificial de dos segundos en `App.tsx` y la duplicación de temporizadores en `Preloader.tsx`. Usar un indicador de carga solo si existe una operación real que lo requiera.
- [x] Corregir los dos errores de lint detectados: importación sin uso en `ClientsLogoSection.tsx` y comentario de regla inexistente `@next/next/no-img-element` en `ProjectCard.tsx`.

## Prioridad 2: añadir y presentar proyectos

- [x] Centralizar los proyectos en una colección tipada; usar identificadores estables como claves y separar los datos de la presentación.
- [x] Reutilizar o adaptar `ProjectCard.tsx` para evitar dos implementaciones independientes de tarjetas.
- [x] Sustituir el carrusel automático por una cuadrícula responsiva que permita explorar todos los proyectos sin movimiento obligatorio ni tarjetas duplicadas.
- [ ] Añadir los nuevos proyectos únicamente con información proporcionada por el usuario o comprobada en sus archivos o repositorios accesibles.
  - Estado: Implementación pendiente: faltan nombres/repositorios, contribución personal y demos/capturas cuando existan.
- [ ] Para cada proyecto, reunir: título, descripción del problema resuelto, contribución personal, tecnologías, captura y texto alternativo, repositorio y demo cuando existan. Añadir resultados solo si están verificados.
  - Estado: Los datos originales comprobables ya están centralizados. Faltan contribuciones detalladas y repositorios no proporcionados; no se inventaron valores.
- [x] Omitir botones de repositorio o demo cuando no exista una URL real; no usar `/#`, `#0` ni enlaces ficticios como sustitutos.
- [x] Para trabajos backend, explicar API, persistencia, autenticación, arquitectura o pruebas cuando el proyecto realmente incluya esas características. Una demo visual no es obligatoria.
- [x] Usar imágenes locales importadas por Vite, dimensiones o relación de aspecto estable y carga diferida cuando no sean imágenes iniciales relevantes.
- [x] Mantener enlaces externos con protección apropiada si abren una pestaña nueva y textos que identifiquen el proyecto.

Si faltan datos para incorporar los nuevos proyectos, pedir los nombres o repositorios y la contribución del usuario. Continuar con correcciones independientes mientras llega esa información.

## Prioridad 3: contacto y accesibilidad

- [x] Añadir etiquetas asociadas a todos los campos; los placeholders no deben ser sus únicas etiquetas.
- [x] Cambiar el correo a `type="email"` y usar atributos de autocompletado apropiados.
- [x] Validar la presencia de la configuración pública de EmailJS antes del envío y mostrar un mensaje útil si falta.
- [x] Conservar el bloqueo del botón mientras se envía, impedir envíos repetidos y preservar el contenido del formulario cuando falle.
- [x] Anunciar los estados de envío mediante `role="status"` o `aria-live`; evitar duplicar el error con un `alert()` del navegador.
- [x] Manejar errores sin asumir que cualquier excepción tiene la forma de `EmailJSResponseStatus`.
- [x] Convertir el correo visible en un enlace `mailto:` sin saltos de línea forzados dentro de la dirección.
- [ ] Dar nombres accesibles a los enlaces de redes sociales y mantener indicadores de foco visibles, incluido el botón del menú.
  - Estado: Nombres accesibles y foco visible implementados y revisados en código. Pendiente recorrido de teclado y comprobación visual del foco.
- [x] Añadir un contenedor `main`, una jerarquía coherente de encabezados y textos alternativos descriptivos o vacíos para imágenes decorativas.
- [ ] Respetar `prefers-reduced-motion` en animaciones y desplazamientos programáticos.
  - Estado: Regla CSS implementada; no quedan desplazamientos suaves obligatorios por JavaScript. Pendiente comprobar la preferencia en navegador.

## Prioridad 4: estilos, recursos y mantenimiento

- [x] Eliminar estilos iniciales de Vite que interfieran con el diseño y revisar `src/App.css`, actualmente sin importar.
- [x] Revisar los recursos usados antes de retirar archivos: hay scripts de plantilla sin conectar y CSS importado de Tiny Slider y GLightbox sin sus funcionalidades activas.
- [x] Mantener una única estrategia para Bootstrap. Actualmente se carga por CDN y también existen paquetes instalados y archivos beta locales. Conservar únicamente lo necesario para la implementación elegida.
- [x] Retirar dependencias, componentes y recursos sin uso confirmado. No confundir archivos presentes en el repositorio con archivos descargados por el navegador.
- [x] No conectar directamente `src/assets/js/main.js`: manipula el DOM y asume elementos y bibliotecas globales. Adaptar solo las funciones necesarias al ciclo de vida de React y limpiar sus listeners.
- [x] Revisar fuentes e iconos y reducir recursos innecesarios sin romper los iconos existentes.
- [x] Mantener la estructura coherente. Si se mueven componentes a `src/components`, actualizar importaciones y documentación en el mismo cambio; el traslado no es un requisito para corregir errores.

## Prioridad 5: presentación y documentación

- [x] Cambiar el idioma de `index.html` a `es` y definir un título con el nombre y especialidad del autor.
- [x] Añadir descripción y metadatos para compartir; usar URL canónica e imagen social solo cuando se conozcan sus valores reales.
- [x] Mostrar el nombre del autor en la bienvenida y facilitar el acceso a GitHub y LinkedIn.
- [x] Alinear las afirmaciones sobre backend y escalabilidad con lo demostrado por los proyectos, sin exagerar experiencia.
- [x] Actualizar `README.md`: React 19, requisito real de Node, estructura existente, instalación, configuración de EmailJS y comandos de validación. Reemplazar la URL de clonación de ejemplo solo si se conoce la real.
- [x] Revisar `.env.example` y `.gitignore` para mantener ejemplos claros y excluir archivos locales de configuración sensibles sin excluir el ejemplo.
- [x] Mantener la tarifa actual hasta que el usuario decida si desea cambiarla o retirar esa sección.

## Validación y criterio de finalización

- Ejecutar `npm run lint` y `npm run build` después de los cambios de código y corregir los errores del alcance trabajado.
- Verificar en navegador, cuando la herramienta esté disponible, navegación, anclas, menú móvil, tarjetas, foco por teclado, movimiento reducido y ausencia de desbordamiento horizontal.
- Revisar anchos representativos de móvil, tableta y escritorio, y comprobar el resultado de producción con `npm run preview` para detectar rutas rotas.
- Comprobar el formulario mediante simulaciones o validación local sin enviar mensajes reales; distinguir esa comprobación de una entrega real de correo.
- Añadir pruebas automatizadas solo cuando protejan comportamiento relevante, sin crear pruebas que simplemente repitan la implementación.
- Marcar casillas únicamente cuando el trabajo correspondiente esté implementado y comprobado. Mantener pendientes las verificaciones que no puedan realizarse.
- Al terminar, informar qué cambió, qué comprobaciones se ejecutaron y qué queda pendiente. No afirmar revisión visual, entrega de correo o publicación sin evidencia.

## Estado de referencia de la revisión inicial

- `npm run build`: aprobado.
- `npm run lint`: falló con los dos errores descritos arriba.
- No se verificó el diseño en navegador ni la entrega real de EmailJS.
- Los nuevos proyectos todavía no están identificados en esta guía.

## Resultado de la implementación

Las casillas marcadas se verificaron mediante compilación, lint, revisión del código, render estático o simulaciones, según corresponda. Las tareas con comportamiento visual pendiente se conservan abiertas aunque su código ya esté implementado. No equivalen a funcionalidades sin desarrollar.

### Implementación realizada

- Menú único en `Navbar.tsx`; eliminados `Header.tsx`, `Hero.tsx` y `Preloader.tsx` tras confirmar que no eran necesarios.
- Secciones finales: `home`, `projects`, `about`, `pricing` y `contact`; todos los enlaces locales apuntan a destinos existentes.
- Datos en `src/data/projects.ts`, tarjetas en `ProjectCard.tsx` y cuadrícula de Bootstrap sin duplicación ni animación automática.
- Contacto con etiquetas, validación nativa y de texto vacío, estados accesibles y transporte separado en `src/lib/contact.ts` para simular envíos sin red.
- Bootstrap únicamente desde npm. Retirados react-bootstrap del manifiesto y lock, scripts de plantilla, CSS de plugins sin inicializar, Bootstrap beta local y componentes sin uso. No se alteró manualmente `node_modules`.
- Conservadas las ilustraciones originales, incluyendo imágenes locales que podrían reutilizarse; LineIcons utiliza únicamente WOFF2.
- Perfil, idioma, metadatos, README, ejemplo de entorno y exclusiones actualizados. Se conserva la tarifa de 3 USD/h.

### Comprobaciones realizadas

- `npm test`: aprobado. Cuatro escenarios del transporte de contacto: configuración ausente/parcial, éxito, errores con reintento y solicitudes concurrentes. Transporte falso; cero correos reales.
- `npm run lint`: aprobado, sin errores.
- `npm run build`: aprobado, con comprobación TypeScript y generación normal de Vite. No se editaron manualmente archivos de `dist`.
- Render estático de React y análisis de HTML: aprobado para un menú, un main, un h1, dos tarjetas, IDs únicos, anclas locales, etiquetas de campos, alternativas de imágenes y referencias ARIA. No comprueba interacción ni disposición visual.
- Recursos de producción: once referencias locales comprobadas en disco, incluido el fondo del hero; una única fuente de iconos emitida. Manifiesto y lock coherentes.

### Validación pendiente por restricciones del entorno

- `npm run preview -- --host 127.0.0.1 --port 4173 --strictPort` no pudo iniciar: `listen EPERM` al abrir el puerto local.
- Chromium headless tampoco pudo iniciar: operación de socket no permitida.
- Por ello no se aprobó la revisión en móvil, tableta o escritorio, ni el recorrido real por teclado, menú, sección activa, anclas, movimiento reducido o desbordamientos. Las reglas responsivas y de foco están implementadas, pero necesitan revisión visual en un entorno con navegador operativo.
- Las simulaciones validan el transporte de contacto; la validación HTML, bloqueo visual de campos y anuncios de lector de pantalla necesitan comprobarse en navegador. La entrega real de EmailJS no se probó ni forma parte de las pruebas autorizadas.

### Información pendiente del autor

- Nombres o repositorios de nuevos proyectos, contribución personal y demos/capturas disponibles.
- Repositorios y contribuciones detalladas de proyectos existentes cuando quiera publicarlos.
- Dominio definitivo e imagen apropiada para completar URL canónica y metadatos sociales con URL real.
- Configurar los valores públicos reales de EmailJS en su entorno local o de alojamiento si aún no están configurados; no enviar secretos por el chat.
