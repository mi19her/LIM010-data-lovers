# Realidad Latina

## Índice

- [Requerimientos del proyecto](#requerimientos-del-proyecto)
- [Contenido de referencia](#contenido-de-referencia)

***

**Banco Mundial (World Bank)**

Este set de datos contiene [indicadores de desarrollo del Banco Mundial](src/data/worldbank/) 
de algunos países (Brasil, Chile, México y Perú). Estos datos incluyen indicadores 
demográficos, económicos y comerciales. Si _como equipo_ deciden trabajar con 
la data del [Banco Mundial](https://www.bancomundial.org/), deberán implementar 
las siguientes historias de usuario:

- Como usuaria quiero poder loguearme con mi usuario y contraseña para acceder 
al sitio web.
- Como usuaria quiero poder seleccionar un país y visualizar la data de sus 
respectivos indicadores para analizar el comportamiento demográfico/económico 
de cada región.
- Como usuaria quiero poder ordenar los datos de los indicadores de manera 
ascendente (menor a mayor) o descendente (mayor a menor) para entender su 
evolución por años y porcentaje.
- Como usuaria quiero poder filtrar los datos de los indicadores por año o 
rango de años para entender su evolución en un tiempo definido.
- Como usuario quiero poder ver el promedio de los porcentajes del indicador 
seleccionado para tomar decisiones nuevas.

### Planificación (Agile-Scrum)

En este proyecto te hemos dado las historias de usuario. Éstas representan los 
requerimientos y funcionalidades que desea el usuario final. Para su proceso de 
planificación, deberán definir colaborativamente los _criterios de aceptación_ 
y _definiciones de terminado_ específicos que permitan considerar a la _historia 
de usuario_ desarrollada como válida y aceptada por el usuario final.

Para realizar el seguimiento del desarrollo de las historias de usuario 
utilizarás [issues](https://help.github.com/en/articles/about-issues) y 
[project](https://help.github.com/en/articles/about-project-boards) en 
Github. No dudes en solicitar ayuda a tus coaches.

### UX (Diseño de experiencia de usuario)

Antes de iniciar a codear, debes entender el problema que quieres solucionar 
y cómo tu aplicación lo soluciona para ello:

- Primero trabaja tu prototipo de baja fidelidad con papel y lápiz (blanco y 
negro) para la vista mobile y desktop.
- Luego valida esta solución con una compañera (pedir feedback).
- Toma lo aprendido al momento de validar tu primer prototipo y desarrolla un 
nuevo prototipo de alta fidelidad usando [Figma](https://www.figma.com/) para 
la vista mobile y desktop.
- Recuerda utilizar la identidad gráfica (colores, tipografía, etc) 
correspondiente a la data que elijas.
- Deberás exportar tu diseño a [Zeplin](https://zeplin.io/) y utilizar las 
especificaciones de estilo que te dé Zeplin al momento de implementar tus 
diseños en código.
- En este proyecto te damos el prototipo final del 
[login en figma](https://www.figma.com/file/awZfJWfpAioeanwhlcrsjSjc/Data-lovers?node-id=1%3A2) 
el cual debe ser replicado en exactitud (_pixel perfect_).
- Elaborar el readme del proyecto.

`README.md`:
Debe contener lo siguiente:

- Un título con el nombre de tu proyecto.
- Un resumen de 1 o 2 líneas de qué se trata tu proyecto e indicar el usuario 
y la contraseña para utilizar el Demo.
- La imagen final de tu proyecto.
- Investigación UX:
  - Explicar quiénes son los usuarios y los objetivos en relación con el 
  producto.
  - Explicar cómo el producto soluciona los problemas/necesidades de dichos 
  usuarios.
  - Luego colocarás la foto de tu primer prototipo de baja fidelidad (mobile 
  y desktop) en papel.
  - Agregar un resumen del feedback recibido indicando las mejoras a realizar.
  - Imagen y link del prototipo de alta fidelidad final (mobile y desktop) en 
  Figma.

### Front-end

#### Visualmente (HTML5 y CSS3)

Deberás maquetar de forma exacta el prototipo final que hiciste en Figma 
utilizando HTML5 y CSS3.

A continuación describimos los archivos que utilizarás:

**`src/index.html`**:

En este archivo va el contenido que se mostrará al usuario (esqueleto HTML). 
Encontrarás 3 etiquetas iniciales:

- `<header>`: encabezado de tu proyecto.
- `<main>`: contenido principal de tu proyecto.
- `<footer>`: pie de página de tu proyecto.

También encontrarás una serie de _etiquetas_ (_tags_) `<script>` _comentadas_.
Para _cargar_ las diferentes fuentes de datos tendrás que _descomentar_ estas
_etiquetas_. Cada uno estos scripts asignará una variable global con la data 
correspondiente 
al set de datos selecionado.

Por ejemplo, si "descomentamos" la siguiente línea:

```html
<!-- <script src="./data/worldbank/worldbank.js"></script> -->
```

La línea quedaría así:

```html
<script src="./data/worldbank/worldbank.js"></script>
```

Y ahora tendríamos la variable global `WORLDBANK` disponible en nuestros otros
scripts (como `src/data.js` o `src/main.js`) prueba que funciona en cada 
archivo con :

```js
console.log(WORLDBANK);
```

**`src/style.css`**:

Este archivo debe contener las reglas de estilo. Queremos que escribas tus 
propias reglas, por eso NO está permitido el uso de frameworks de CSS3 (Bootstrap, 
materialize, etc).

#### Funcionalmente (JavaScript ES6 - pruebas unitarias)

- La lógica del proyecto debe estar implementada completamente en JavaScript (ES6).
- En este proyecto NO está permitido usar librerías o frameworks, sólo
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).
- No se debe utilizar la _pseudo-variable_ `this`.

Vamos a tener 2 archivos JavaScript separando responsabilidades, a continuación 
indicamos qué harás en cada archivo:

 **`src/main.js`**

En este archivo escribirás todo tu código que tenga que ver con mostrar los 
datos en la pantalla. Con esto nos referimos básicamente a la interacción 
con el DOM. Operaciones como creación de nodos, registro de manejadores de 
eventos (_event listeners_ o _event handlers_), ....

Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara para el equipo.

**`src/data.js`**

En este archivo escribirás todo el código que contenga las funcionalidades
descritas en las historias de usuario. Estas funciones, que representan lo
que el usuario necesita, deben ser [funciones puras](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d) 
e independientes del DOM.

**`src/data`**

En esta carpeta están los datos de las diferentes fuentes. Encontrarás una
carpeta por cada fuente de datos, y dentro de cada carpeta dos archivos: 
uno con la extensión `.js` y otro `.json`. Ambos archivos contienen la misma 
data.

- Inicialmente solo usarás el archivo con extensión `.js`.
- Cuando tu proyecto ya esté completado, en lugar de consumir la data desde 
un archivo con extensión`.js` lo harás desde el archivo con extensión`.json` 
utilizando [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API).

**`test/cipher.spec.js`**:

En este archivo tendrás que completar las pruebas unitarias de las funciones
implementadas en `data.js` utilizando **Jest**.
Recuerda que deberás configurar tu ambiente de trabajo para trabajar con esta 
herramienta.
Tus pruebas unitarias deben dar un 70% en _coverage_ (cobertura), _statements_
(sentencias), _functions_ (funciones) y _lines_ (líneas); y un mínimo del 50% 
de _branches_ (ramas).

## Contenido de referencia

### Diseño de experiencia de usuario (User Experience Design)

- Unidad de fundamentos de diseño visual de Visual Desing en LMS.

### Desarrollo Front-end

- Unidad de testing en curso de JavaScript en LMS.
- Unidad de arreglos en curso de JavaScript en LMS.
- Unidad de objetos en curso de JavaScript en LMS.
- Unidad de funciones en curso de JavaScript en LMS.
- Unidad de DOM en curso de Browser JavaScript en LMS.
- [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
- [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
- [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
- [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
- [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
- [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
- [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
- [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
- [Fetch API en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [json.org](https://json.org/json-es.html)

### Herramientas

- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [GitHub Pages](https://pages.github.com/)
- [Node.js](https://nodejs.org/)
- [Jest](https://jestjs.io/)

### Organización del Trabajo:

- [Historias de Usuario](https://www.youtube.com/watch?v=ky6wFiF5vMk&t=344s)
- [Cómo dividir H.U.](https://www.youtube.com/watch?v=Ueq786iZ30I&t=341s)
- [Definiciones de terminado](https://www.scrum.org/resources/blog/definicion-de-terminado-done)
- [Criterios de aceptación](https://pabloquilca.com/criterios-de-aceptacion/)
- [Github plannig](https://www.youtube.com/watch?v=RXEy6CFu9Hk)
