---
layout: post
title: "Convertir PDF a Markdown: guía sencilla"
thumbnail: /assets/img/convertir-pdf-a-markdown.webp
description: Aprende cómo convertir un PDF a Markdown para editar, organizar y reutilizar su contenido en blogs, documentos y proyectos de GitHub.
lang: es
ref: convertir-pdf-a-markdown
---

Los archivos PDF son útiles para compartir documentos, pero editar su contenido puede ser complicado. Si quieres utilizar ese texto en un blog, una página web o un proyecto de GitHub, convertir PDF a Markdown puede ayudarte.

Markdown es un formato de texto sencillo que permite crear títulos, listas, enlaces y otros elementos. En esta guía, aprenderás cómo preparar el contenido de un PDF y convertirlo en un archivo Markdown.

## ¿Qué es Markdown?

Markdown es un lenguaje de marcado ligero que utiliza símbolos sencillos para organizar el texto. Sus archivos suelen tener la extensión `.md` y se pueden abrir con cualquier editor de texto.

Por ejemplo, puedes escribir `# Mi título` para crear un encabezado, utilizar `**texto**` para mostrar palabras en negrita o añadir un guion al principio de una línea para crear una lista.

No necesitas conocimientos avanzados de programación para empezar a utilizarlo.

## ¿Por qué convertir un PDF a Markdown?

Convertir un PDF a Markdown puede ser útil en diferentes situaciones:

- **Editar contenido:** modifica el texto sin tener que trabajar directamente con el diseño del PDF.
- **Crear artículos:** reutiliza información en blogs y páginas web.
- **Trabajar con GitHub:** prepara archivos README y documentación para tus proyectos.
- **Organizar información:** estructura el contenido con títulos, listas y enlaces.
- **Facilitar el mantenimiento:** guarda el texto en un formato ligero y fácil de actualizar.

Markdown no conserva el diseño original del PDF, pero facilita la edición y reutilización de su contenido.

## Cómo convertir un PDF a Markdown

El método depende de si el PDF contiene texto seleccionable o si está formado por páginas escaneadas.

### 1. Extrae el texto del PDF

Abre el documento y comprueba si puedes seleccionar y copiar el texto.

Si puedes hacerlo, copia el contenido y pégalo en un editor de texto. Si el PDF contiene páginas escaneadas, necesitarás una herramienta de reconocimiento óptico de caracteres (OCR) para extraer las palabras de las imágenes.

Antes de continuar, revisa que el texto se haya extraído correctamente.

### 2. Organiza el contenido

El texto extraído puede contener saltos de línea innecesarios, encabezados repetidos o párrafos desordenados.

Corrige estos problemas y organiza la información. Separa los títulos de los párrafos y comprueba que las listas y tablas mantengan un orden lógico.

Este paso es especialmente importante si el PDF tiene varias columnas o un diseño complejo.

### 3. Convierte el texto al formato Markdown

Una vez que tengas el texto limpio, utiliza la sintaxis de Markdown para organizarlo.

Por ejemplo, para crear un documento con el título «Guía de usuario» y tres pasos, escribe un encabezado y coloca cada paso en una línea que comience con un guion.

El resultado será un texto estructurado que puedes guardar como `guia-de-usuario.md`.

Recuerda que extraer el texto de un PDF no lo convierte automáticamente en Markdown. Es posible que tengas que añadir los encabezados, las listas y otros elementos manualmente.

### 4. Utiliza Pandoc si necesitas una conversión más técnica

Pandoc es una herramienta que permite convertir documentos entre distintos formatos. Puede resultar útil si necesitas automatizar parte del proceso.

Sin embargo, Pandoc no suele convertir directamente un PDF común a Markdown. Primero tendrás que extraer el texto o convertir el documento a un formato compatible.

Por ejemplo, si ya has extraído el texto y lo has guardado en un archivo llamado `documento.txt`, puedes utilizar este comando:

    pandoc documento.txt -o documento.md

Este comando genera un archivo Markdown a partir del texto. No recupera automáticamente toda la estructura original del PDF, por lo que tendrás que revisar el resultado.

### 5. Comprueba el archivo final

Abre el archivo `.md` en un editor compatible con Markdown o visualízalo en GitHub.

Comprueba que los títulos, las listas, los enlaces y las tablas se muestren correctamente. Si el documento original contiene imágenes, puede que tengas que guardar esas imágenes por separado y añadirlas al archivo Markdown.

Guarda los cambios y revisa el documento antes de publicarlo.

## ¿Se puede convertir un PDF escaneado a Markdown?

Sí, pero primero necesitas extraer el texto mediante OCR.

Un PDF escaneado contiene páginas que funcionan como imágenes. Por eso, copiar el texto directamente puede no funcionar.

El OCR reconoce los caracteres de esas imágenes y los convierte en texto editable. Después, puedes corregir los errores y organizar el contenido utilizando Markdown.

La precisión depende de la calidad del escaneo, el idioma y la claridad del documento.

## ¿Qué elementos se conservan al convertir PDF a Markdown?

El resultado depende de la estructura del documento y del método utilizado.

- **Texto:** suele ser el elemento más fácil de recuperar cuando se puede seleccionar.
- **Títulos y subtítulos:** pueden necesitar formato manual.
- **Listas:** a menudo requieren pequeños ajustes.
- **Tablas:** pueden perder su estructura y necesitar una reconstrucción.
- **Imágenes:** normalmente deben extraerse o añadirse por separado.
- **Fuentes y colores:** no se conservan como en el diseño original del PDF.

Por eso, conviene revisar el archivo convertido antes de utilizarlo en una página web o un proyecto.

## PDF y Markdown: ¿cuál es la diferencia?

PDF y Markdown sirven para propósitos diferentes.

PDF es adecuado para compartir documentos cuyo diseño debe mantenerse estable en distintos dispositivos. Markdown es más práctico para editar texto, escribir documentación y publicar contenido en plataformas compatibles.

Si necesitas presentar un informe con un diseño específico, PDF puede ser la mejor opción. Si quieres actualizar el contenido con frecuencia o gestionarlo en GitHub, Markdown puede facilitar el trabajo.

## Conclusión

Convertir PDF a Markdown es una forma práctica de reutilizar el contenido de tus documentos. El proceso consiste en extraer el texto, corregirlo, organizarlo y guardarlo en un archivo `.md`.

Los documentos con texto seleccionable suelen ser más fáciles de procesar. Los PDF escaneados necesitan OCR, y los archivos con tablas o imágenes pueden requerir algunos ajustes manuales.

Con el método adecuado, puedes convertir el contenido de un PDF en texto más fácil de editar, mantener y publicar.
