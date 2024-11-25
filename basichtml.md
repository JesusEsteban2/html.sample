# HTML basico

## Estructura básica del documento

### Head

En este apartado, se define el documento, los metadatos y los enlaces.

<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Ejemplo de sitio Web básico" />
    <meta name="author" content="Alejandro Cerezo" />
    <meta name="keywords" content="HTML, CSS, JavaScript" />
    <meta name="robots" content="index, follow" />
    <title>Basic Web</title>
    <link rel="stylesheet" href="styles.css" />
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <script type="module" src="main.js" defer></script>
  </head>

#### Meta

Indica metadatos, principalmente para colaborar con los indexadores (SEO)

<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Ejemplo de sitio Web básico" />
<meta name="author" content="Alejandro Cerezo" />
<meta name="keywords" content="HTML, CSS, JavaScript" />
<meta name="robots" content="index, follow" />

Otros metadatos por ejem. de Open Graph que se usan en las redes sociales

<meta property="og:title" content="Título de la página" />
<meta property="og:description" content="Descripción de la página" />
<meta property="og:image" content="https://www.example.com/image.jpg" />
<meta property="og:url" content="https://www.example.com" />

## Etiquetas de bloques

### <section>

### <article>

### <p>

Bloque que contiene un párrafo.

<p>Esto es un párrafo.</p>

## Etiquetas de Cita o

### <blockquote>

Bloque de cita de una frase

### <q>

Cita corta o en línea

### <abbr>

Abreviatura o acrónimo

### <address>

Dirección o contacto del creador del recurso.

### <cite>

