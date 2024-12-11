# Html y Css

## HTML

- 1 etiqueta
- 2 etiquetas
- Etiquetas definidas por el usuario.

### Utilidades integradas en VSC

- Emmet
- Path intellisence

### Extensiones

- Extension HTML Css Support (Ecmel).
- Extension Auto rename tag.
- Extension Live Server
- Extension Prettier - Code Formater
- Extension Css Peek
- Extension Live Share
-

- Peacock (John papa)
- Code Spell Checker
- Spanish Code Spell Checker
- Markdown all in one (Yu Zhang)
- Markdown lint (David Anson)
- Material Icon Theme
- GitHub Theme

![alt](https://es.wikipedia.org/wiki/Archivo:SVG_logo.svg)

### Fuentes de referencia

- MDN Web Docs
- Web.dev
- manz.dev
- codeAcademy.com
- freeCodeCamp.org
- w3.org
- whatwg.org
- https://caniuse.com/

- Estructura
- Seo
- Usabilidad
- Performance

Creación de repositorio.

- Crear Carpeta
- git init
- git ignore (.gitignore)
- readme (readme.md)
- npm init -y (package.json)
- editorconfig (.editorconfig)
- git add .
- git commit -m "Initial commit"
- Crear repositorio en Github
- git remote add <nombre> <url>
- git push <name>

Buenas prácticas

- No solo funciona, también valida. - UX, Accesibilidad, SEO y WPO (Web Page Optimicer)
  - Validar HTML en (https://validator.w3.org/)
  - Validar en el navegador (lighthouse)
  - Validar en https://www.opengraph.xyz/ para ver evaluación en redes sociales.
- 1 solo <h1> en cada fichero.
- Una lista ol o ul solo debe contener li. Para utilizar listas anidadas, el siguiente nivel debe estar dentro de un li
- SVG formato optimo (flaticons.com, (https://www.svgrepo.com/))

### Navegadores de

- Chrome Canary
- https://www.mozilla.org/es-ES/firefox/developer/

### Semántica en etiquetas.

- Articulo es un agrupamiento que se puede comprender sin necesidad de más información (<article>)
- Sección es un agrupamiento que agrupa una parte de elementos realcionados. (<section>)
- Div es un agrupamiento para su uso posterior (CSS o Javascript)

Diseños de interfaces
https://bentogrids.com/
https://grid.layoutit.com/
https://icons8.com/lunacy

## selector css atributos

data- se puede usar para crear un atributo personalizado, hay que poner otro nombre despues del guión.

[data-num='fsy1'] selecciona los elementos con atributo data-num='fsy1'

### Operadores posibles

[attr]
Selecciona los elementos que tienen el atributo attr.

[attr=value]
Selecciona los elementos cuyo atributo attr tenga exactamente el valor value.

[attr~=value]
Selecciona los elementos cuyo atributo attr tenga por valor una lista de palabras separadas por espacios, una de las cuales sea value.

[attr|=value]
Selecciona los elementos cuyo atributo attr tenga exactamente el valor value o empiece por value seguido de un guión - (U+002D). Se puede usar para coincidencias de subcódigos en otros idiomas.

[attr^=value]
Selecciona los elementos cuyo atributo attr tenga un valor prefijado por value.

[attr$=value]
Selecciona los elementos cuyo atributo attr cuyo valor tiene el sufijo (seguido) de value.

[attr*=value]
Selecciona los elementos cuyo atributo attr tenga un valor que contenga value.

[attr operator value i]
Agregar una i (o I) antes del corchete de cierre hace que el valor sea comparado sin distinguir entre mayúsculas y minúsculas (para caracteres dentro del rango ASCII).

[attr operator value s] Experimental
Agregar una s (o S) antes del corchete de cierre hace que el valor sea comparado distinguiendo entre mayúsculas y minúsculas (para caracteres dentro del rango ASCII).

## Búsquedas en el DOM

### Con query selector (como en css)

querySelector(....)
querySelectorAll(....)

### Con búsquedas antiguas.

getElementById(...)
getElementsByTagName(....)
getElementsByName(....)
getElementsByClassName(....)
