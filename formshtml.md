# Formularios HTML

## Bloque form

La etiqueta <form> de HTML representa una sección de bloque en el documento que contendrá los controles del formulario.

### <form> admite los siguientes atributos

accept-charset: La codificación de caracteres aceptada por el servidor. La especificación permite un único valor "UTF-8" que no distinga entre mayúsculas y minúsculas, lo que refleja la ubicuidad de esta codificación (históricamente, se podían especificar varias codificaciones de caracteres como una lista separada por comas o espacios).

autocapitalize: Controla si el texto ingresado se escribe en mayúsculas automáticamente y, en caso afirmativo, de qué manera. Consulta la página del atributo global autocapitalize para obtener más información.

autocomplete: Indica si los elementos de entrada pueden tener sus valores completados automáticamente por el navegador de forma predeterminada. Los atributos de autocompletado en elementos de formulario los reemplazan en <form>. Valores posibles:
-off: El navegador no completará automáticamente las entradas. (Los navegadores tienden a ignorar esto en el caso de formularios de inicio de sesión sospechosos; consulte Administrar el llenado automático de campos de inicio de sesión.)
-on: El navegador puede completar automáticamente las entradas.

name: El nombre del formulario. El valor no debe ser una cadena vacía y debe ser único entre los elementos del formulario de la colección de formularios en la que se encuentra, si existe alguno.

rel: Controla las anotaciones y los tipos de enlaces que crea el formulario. Las anotaciones incluyen external, nofollow, opener, noopener y noreferrer. Los tipos de enlaces incluyen help, prev, next, search y license. El valor rel es una lista separada por espacios de estos valores enumerados.

Controla las anotaciones y los tipos de enlaces que crea el formulario. Las anotaciones incluyen external, nofollow, opener, noopener y noreferrer. Los tipos de enlaces incluyen help, prev, next, search y license. El valor rel es una lista separada por espacios de estos valores enumerados.

### Atributos para formularios

Los siguientes atributos controlan el comportamiento durante el envío del formulario.

action: La URL que procesa el envío del formulario. Este valor puede ser reemplazado por un atributo formaction en un elemento <button>, <input type="submit"> o <input type="image">. Este atributo se ignora cuando se configura method="dialog".

enctype: Si el valor del atributo de método es post, enctype es el tipo MIME del envío del formulario. Valores posibles:
-application/x-www-form-urlencoded: The default value.
-multipart/form-data: Use this if the form contains <input> elements with type=file.
-text/plain: Useful for debugging purposes.

This value can be overridden by formenctype attributes on <button>, <input type="submit">, or <input type="image"> elements.

method: The HTTP method to submit the form with. The only allowed methods/values are (case insensitive):

-post: El método POST; datos del formulario enviados como cuerpo de la solicitud.
-get (default): Los datos del formulario GET; se adjuntan a la URL de la acción con un separador ?. Utilice este método cuando el formulario no tenga efectos secundarios.
-dialog: cuando el formulario está dentro de un <dialog>, cierra el cuadro de diálogo y hace que se active un evento de envío al enviarlo, sin enviar datos ni borrar el formulario.

This value is overridden by formmethod attributes on <button>, <input type="submit">, or <input type="image"> elements.

novalidate: Este atributo booleano indica que no se debe validar el formulario al enviarlo. Si no se configura este atributo (y, por lo tanto, se valida el formulario), se puede reemplazar con un atributo formnovalidate en un elemento <button>, <input type="submit"> o <input type="image"> que pertenezca al formulario.

target: Indica dónde se mostrará la respuesta después de enviar el formulario. Es un nombre o palabra clave para un contexto de navegación (por ejemplo, pestaña, ventana o iframe). Las siguientes palabras clave tienen significados especiales:

-   \_self (default): Cargar en el mismo contexto de navegación que el actual.
-   \_blank: Cargar en un nuevo contexto de navegación sin nombre. Esto proporciona el mismo comportamiento que configurar rel="noopener", que no configura window.opener.
-   \_parent: Cargar en el contexto de navegación principal del actual. Si no hay principal, se comporta igual que \_self.
-   \_top: Cargar en el contexto de navegación de nivel superior (es decir, el contexto de navegación que es un antecesor del actual y no tiene padre). Si no tiene padre, se comporta igual que \_self.
-   \_unfencedTop: Cargar la respuesta de un formulario dentro de un marco delimitado integrado en el marco de nivel superior (es decir, atravesar más allá de la raíz del marco delimitado, a diferencia de otros destinos reservados). Solo disponible dentro de marcos delimitados.

Este valor puede ser reemplazado por un atributo formtarget en un elemento <button>, <input type="submit"> o <input type="image">.

### Elementos

#### <input>

    <input type='tipo' >

El parámetro <type> indica el control a mostrar. Su valor predeterminado es text, si no se especifica este atributo. Los posibles valores son:

-   button: Botón sin un comportamiento específico.
-   checkbox: Casilla de selección. Se debe usar el atributo value para definir el valor que se enviará por este elemento. Se usa el atributo checked para indicar si el elemento está seleccionado. También se puede usar el atributo indeterminate (el cual solo se puede establecer programaticamente) para indicar que la casilla está en un estado indeterminado (en la mayoría de las plataformas, se dibuja una línea horizontal a través de la casilla).
-   color: Control para especificar un color. Una interfaz de selección de color no requiere más funcionalidad que la de aceptar colores simples como texto (más información).
-   date: Control para introducir una fecha (año, mes y día, sin tiempo).
-   datetime-local: Control para introducir fecha y hora, sin zona horaria específica.
-   email: Campo para introducir una dirección de correo electrónico. El valor introducido se valida para que contenga una cadena vacía o una dirección de correo válida antes de enviarse. Las pseudo-clases :valid y :invalid son aplicadas según corresponda.
-   file: Control que permite al usuario seleccionar un archivo. Se puede usar el atributo accept para definir los tipos de archivo que el control podrá seleccionar.
-   hidden: Control que no es mostrado en pantalla, pero cuyo valor es enviado al servidor.
-   image: Botón de envío de formulario con gráfico. Se debe usar el atributo src para definir el origen de la imagen y el atributo alt para definir un texto alternativo. Se puede usar los atributos height y width para definir el tamaño de la imagen en píxeles.
-   month: Control para introducir un mes y año, sin zona horaria específica.
-   number: Control para introducir un número de punto flotante.
-   password: Control de línea simple cuyo valor permanece oculto. Se puede usar el atributo maxlength para especificar la longitud - - máxima del valor que se puede introducir.
-   radio: Botón radio. Se debe usar el atributo value para definir el valor que se enviará por este elemento. Se usa el atributo checked para indicar si el elemento está seleccionado de forma predeterminada. Los botones radio que tengan el mismo valor para su atributo name están dentro del mismo "grupo de botones radio". Solo un botón radio dentro de un grupo puede ser seleccionado a la vez.
-   range: Control para introducir un número cuyo valor exacto no es importante. Este control usa los siguientes valores predeterminados si no se especifica cada atributo:
    min: 0
    max: 100
    value: min + (max - min) / 2, o min si max es menor que min
    step: 1
-   reset: Botón que restaura los contenidos de un formulario a sus valores predeterminados.
    -search: Cuadro de texto de línea simple para introducir textos de búsqueda. Los saltos de línea son eliminados automáticamente del valor introducido.
-   submit: Botón que envía el formulario.
-   tel: Control para introducir un número telefónico. Los saltos de línea son eliminados automáticamente del valor introducido, pero no hay otra sintaxis forzada. Se pueden usar atributos como pattern y maxlength para restringir los valores introducidos en este control. Las pseudo-clases CSS :valid y :invalid son aplicadas según corresponda.
-   text: Campo de texto de línea simple. Los saltos de línea son eliminados automáticamente del valor introducido.
-   time: Control para introducir un valor de tiempo sin zona horaria específica.
-   url: Campo para editar una URL. El valor introducido se valida para que contenga una cadena vacía o una ruta URL absoluta antes de enviarse. Los saltos de línea y espacios en blanco al principio o al final del valor son eliminados automáticamente. Se pueden usar atributos como pattern y maxlength para restringir los valores introducidos en el control. Las pseudo-clases :valid y :invalid son aplicadas segun corresponda.
-   week: Control para introducir una fecha que consiste en número de semana del año y número de semana sin zona horaria específica.

#### <button>

#### <datalist>

#### <fieldset>

#### <label>

#### <legend>

#### <meter>

#### <optgroup>

#### <option>

#### <output>

#### <progress>

#### <select>

#### <textarea>.

## Uso de la validación de formularios incorporada

Una de las características más importantes de los controles de formularios es la capacidad de validar la mayoría de los datos del usuario sin depender de JavaScript. Esto se hace utilizando atributos de validación en los elementos del formulario. Hemos visto muchos de estos antes en el curso, pero para recapitular:

required: Especifica si es necesario completar un campo de formulario antes de que se pueda enviar el formulario.

Minlength y maxlength: Especifica la longitud mínima y máxima de los datos textuales (cadenas).

Min, max y step: Especifica los valores mínimo y máximo de los tipos de entrada numérica, y el incremento, o paso, para los valores, a partir del mínimo.

type: Especifica si los datos deben ser un número, una dirección de correo electrónico o algún otro tipo predefinido específico.

pattern: Especifica una expresión regular que define un patrón que los datos introducidos deben seguir.

Si los datos introducidos en un campo de formulario siguen todas las reglas especificadas por los atributos aplicados al campo, se consideran válidos. Si no, se considera inválido.

