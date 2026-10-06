---
layout: default
title: UniFicar PDF
description: "Une PDF gratis online: junta y combina varios archivos en uno sin marca de agua, sin registro y sin límites. Funciona en PC, Android e iPhone"
keywords: "Unir PDF, dividir PDF, combinar PDF, separar PDF, comprimir PDF, convertir PDF, Word a PDF, Excel a PDF, Powerpoint a PDF, PDF a JPG, JPG a PDF"
thumbnail: /assets/img/unir.webp
lang: es
ref: home
permalink: /

---

<!-- Floating ghost -->
<div id="dragGhost">
  <div class="ghost-icon">
    <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
    </svg>
  </div>
  <span id="dragGhostName"></span>
</div>

<main class="container1">

 <!-- H1 + P — visible before upload, hidden after -->
  <h1 class="page-title" id="pageTitle">Unir PDF Files</h1>
  <p class="page-sub" id="pageSub">Combine multiple PDF files into one document quickly, while the original PDF quality is carefully preserved. No sign up needed.</p>
  <!-- UPLOAD STATE (centered, full viewport height) -->
  <div id="uploadState">
    <div class="upload-box" id="dropZone">
      <div class="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
          <polyline points="17 8 12 3 7 8"/>
          <line x1="12" y1="3" x2="12" y2="15"/>
        </svg>
      </div>
   <h2>Arrastra tus PDF files aquí</h2>
<p>o haz clic en el botón de abajo para buscar.</p>
      <button class="btn-black" id="browseBtn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
        </svg>
  Seleccionar Files
      </button>
     <p class="upload-note">
 Al subir tus files, aceptas nuestros
  <a href="./terminos-de-uso/" target="_blank">Términos de Uso</a>
y nuestra
  <a href="./politica-de-privacidad/" target="_blank">Política de Privacidad</a>.
</p> 
    </div>
    <input type="file" id="fileInput" multiple accept="application/pdf" hidden>
  </div>
  <!-- UPLOADED STATE -->
  <div id="uploadedState">
    <div class="toolbar">
      <div class="toolbar-left">
        <span class="toolbar-title">Files para unir</span>
        <span class="file-count" id="fileCount">0</span>
        <button class="btn-sm" onclick="sortFiles('asc')">
          <svg viewBox="0 0 12 12" fill="none" stroke-width="1.6" stroke-linecap="round">
            <path d="M1 3h10M3 6h6M5 9h2"/>
          </svg>A-Z
        </button>
        <button class="btn-sm" onclick="sortFiles('desc')">
          <svg viewBox="0 0 12 12" fill="none" stroke-width="1.6" stroke-linecap="round">
            <path d="M1 9h10M3 6h6M5 3h2"/>
          </svg>Z–A
        </button>
      </div>
      <div class="toolbar-right">
        <button class="btn-add-top" onclick="document.getElementById('moreInput').click()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>Add PDF
        </button>
        <button class="btn-merge-top" id="mergeBtnTop" onclick="mergePDFs()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M8 6H5a2 2 0 00-2 2v8a2 2 0 002 2h3M16 6h3a2 2 0 012 2v8a2 2 0 01-2 2h-3M12 3v18"/>
          </svg>
Unir PDF
        </button>
      </div>
    </div>
    <div class="file-list-wrap" id="fileList"></div>
    <div class="progress-wrap" id="progressWrap">
      <div class="spinner"></div>
      <span class="progress-text" id="progressText">Uniendo PDFs…</span>
    </div>
  </div>

  <input type="file" id="moreInput" multiple accept="application/pdf" hidden>

  <!-- INFO — only shown before upload -->
<div id="infoContent" class="post-content">



<!-- Icon sprite (hidden) -->
<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">
  <symbol id="i-eye" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></symbol>
  <symbol id="i-device" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="14" height="11" rx="2"/><path d="M8 19h2M5 19h8"/><rect x="17" y="8" width="5" height="11" rx="1"/></symbol>
  <symbol id="i-file" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></symbol>
  <symbol id="i-layers" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/></symbol>
  <symbol id="i-user" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></symbol>
  <symbol id="i-clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></symbol>
  <symbol id="i-sort" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M3 12h12M3 18h6"/></symbol>
  <symbol id="i-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3z"/><path d="m9 12 2 2 4-4"/></symbol>
  <symbol id="i-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/></symbol>
  <symbol id="i-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></symbol>
</svg>

<section id="split-pdf-info">



  <!-- Free PDF Merging Tool -->
  <div class="isec-block">
    <div class="isec-block__head">
      <h2 class="isec-block__title">Herramienta gratuita para combinar archivos PDF</h2>
      <p class="isec-block__subtitle">La herramienta más sencilla para unir archivos PDF desde tu dispositivo, sin coste alguno. Funciona a la perfección sin Adobe y no requiere instalación.</p>
      <div class="isec-media">
  <img src="/assets/img/unir.webp" alt="Herramienta en línea para combinar archivos PDF en un solo documento" loading="lazy" decoding="async">
</div>
    </div>
  </div>

  <!-- Get an Instant PDF Solution -->
  <div class="isec-block">
    <div class="isec-block__head">
      <h2 class="isec-block__title">Obtenga una solución PDF instantánea</h2>
      <p class="isec-block__subtitle">Optimiza tu flujo de trabajo con archivos PDF profesionales y organizados gracias al procesamiento rápido y sencillo de documentos de UniFicarPDF.com. Tus archivos se gestionan de forma eficiente, para que el documento final esté listo en cuestión de segundos.</p>
    </div>
    <div class="isec-card-grid">
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue"><svg aria-hidden="true"><use href="#i-eye"/></svg></span>
        <span class="isec-card__icon isec-icon-blue"><svg aria-hidden="true"><use href="#i-eye"/></svg></span>
        <h3 class="isec-card__title">Vista previa en vivo</h3>
        <p class="isec-card__text">Visualice claramente sus archivos PDF y el orden de las páginas antes de crear el documento final. Revise todo de un vistazo y realice los cambios necesarios antes de descargar el PDF final.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-purple"><svg aria-hidden="true"><use href="#i-device"/></svg></span>
        <span class="isec-card__icon isec-icon-purple"><svg aria-hidden="true"><use href="#i-device"/></svg></span>
        <h3 class="isec-card__title">Funciona en todas partes</h3>
        <p class="isec-card__text">Usa UniFicarPDF.com en tu móvil, ordenador o portátil. Combina y gestiona tus archivos PDF cuando lo necesites, independientemente del dispositivo que uses. Funciona sin problemas en tu navegador en Windows, Mac, Linux, Android y iPhone.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-teal"><svg aria-hidden="true"><use href="#i-file"/></svg></span>
        <span class="isec-card__icon isec-icon-teal"><svg aria-hidden="true"><use href="#i-file"/></svg></span>
        <h3 class="isec-card__title">Sin límite de tamaño de archivo</h3>
        <p class="isec-card__text">No hay límite de tamaño de archivo, por lo que incluso los archivos PDF muy grandes pueden ser procesados.</p>
      </div>
    </div>
  </div>

  <!-- FAQ -->
  <div class="isec-block">
    <div class="isec-block__head">
      <h2 class="isec-block__title">Frequently Asked Questions</h2>
      <p class="isec-block__subtitle">Aquí respondemos algunas de las preguntas más frecuentes de nuestros usuarios. Si no encuentra la información que necesita, no dude en contactarnos para obtener más ayuda.</p>
    </div>
    <div class="isec-faq__list">

    <div class="isec-faq__item">
        <button class="isec-faq__summary" type="button" aria-expanded="false">
          <span>¿Cómo unir archivos PDF en uno solo?</span>
          <span class="isec-faq__chev"><svg aria-hidden="true"><use href="#i-chev"/></svg></span>
        </button>
        <div class="isec-faq__panel"><div class="isec-faq__panel-inner">
          <p>Sube tus documentos, organízalos en el orden que quieras y crea tu archivo final en unos pocos pasos sencillos. Primero, agrega tus archivos PDF desde tu dispositivo. Luego, arrástralos hasta darles la secuencia que necesitas. Cuando el orden se vea bien en la vista previa, haz clic en el botón y se crea el documento final, listo para descargarse como un único PDF.</p>
        </div></div>
      </div>

      <div class="isec-faq__item">
        <button class="isec-faq__summary" type="button" aria-expanded="false">
          <span>¿Existe un servicio gratuito para unir PDF en línea?</span>
          <span class="isec-faq__chev"><svg aria-hidden="true"><use href="#i-chev"/></svg></span>
        </button>
        <div class="isec-faq__panel"><div class="isec-faq__panel-inner">
          <p>Sí. UniFicarPDF.com es completamente gratis. Solo abre el sitio web en tu navegador, agrega tus archivos y descarga el resultado sin pagar nada. Como no hay que instalar nada, puedes empezar de inmediato desde cualquier dispositivo.</p>
        </div></div>
      </div>

      <div class="isec-faq__item">
        <button class="isec-faq__summary" type="button" aria-expanded="false">
          <span>¿Cuál es la forma más fácil de combinar documentos PDF?</span>
          <span class="isec-faq__chev"><svg aria-hidden="true"><use href="#i-chev"/></svg></span>
        </button>
        <div class="isec-faq__panel"><div class="isec-faq__panel-inner">
          <p>Agrega tus documentos, organiza su orden e inicia el proceso. Todo se puede hacer directamente desde tu navegador, con un simple arrastrar y soltar. Además, no se necesita software de escritorio ni conocimientos técnicos, y todo el proceso normalmente termina en cuestión de segundos.</p>
        </div></div>
      </div>

      <div class="isec-faq__item">
        <button class="isec-faq__summary" type="button" aria-expanded="false">
          <span>¿Cuántos archivos PDF puedo unir a la vez?</span>
          <span class="isec-faq__chev"><svg aria-hidden="true"><use href="#i-chev"/></svg></span>
        </button>
        <div class="isec-faq__panel"><div class="isec-faq__panel-inner">
          <p>Se pueden agregar hasta 20 archivos a la vez para una experiencia más fluida. Si agregas más de 20 archivos, el proceso igual funciona sin problema, pero tardará un poco más en terminar. Así, puedes reunir una gran cantidad de documentos sin dividirlos en lotes más pequeños.</p>
        </div></div>
      </div>

      <div class="isec-faq__item">
        <button class="isec-faq__summary" type="button" aria-expanded="false">
          <span>¿Hay un límite de tamaño de archivo?</span>
          <span class="isec-faq__chev"><svg aria-hidden="true"><use href="#i-chev"/></svg></span>
        </button>
        <div class="isec-faq__panel"><div class="isec-faq__panel-inner">
          <p>No. No hay límite de tamaño de archivo, e incluso se pueden unir archivos PDF de varios gigabytes. Sin embargo, los archivos más grandes naturalmente tardan más en procesarse, así que puede ser necesaria un poco de paciencia al trabajar con documentos muy pesados.</p>
        </div></div>
      </div>

      <div class="isec-faq__item">
        <button class="isec-faq__summary" type="button" aria-expanded="false">
          <span>¿Puedo agregar fotos a un PDF?</span>
          <span class="isec-faq__chev"><svg aria-hidden="true"><use href="#i-chev"/></svg></span>
        </button>
        <div class="isec-faq__panel"><div class="isec-faq__panel-inner">
          <p>Sí. Puedes trabajar con los formatos de imagen compatibles al preparar un documento con fotos o páginas escaneadas, como imágenes JPG y PNG. Esto es especialmente útil cuando las fotos, los formularios escaneados o las copias de documentos de identidad deben ir en el mismo documento que tus otros archivos PDF.</p>
        </div></div>
      </div>

      <div class="isec-faq__item">
        <button class="isec-faq__summary" type="button" aria-expanded="false">
          <span>¿Puedo usar UniFicarPDF.com sin Adobe Acrobat?</span>
          <span class="isec-faq__chev"><svg aria-hidden="true"><use href="#i-chev"/></svg></span>
        </button>
        <div class="isec-faq__panel"><div class="isec-faq__panel-inner">
          <p>Sí. Solo necesitas un navegador web moderno. No hace falta instalar Adobe Acrobat ni otro software de escritorio. En otras palabras, funciona como una alternativa gratuita para quienes no tienen Acrobat o prefieren no pagar por él.</p>
        </div></div>
      </div>

      <div class="isec-faq__item">
        <button class="isec-faq__summary" type="button" aria-expanded="false">
          <span>¿Puedo unir documentos PDF en Android?</span>
          <span class="isec-faq__chev"><svg aria-hidden="true"><use href="#i-chev"/></svg></span>
        </button>
        <div class="isec-faq__panel"><div class="isec-faq__panel-inner">
          <p>Sí. La herramienta funciona sin problemas desde un navegador móvil, así que se puede usar en celulares Android, iPhone y otros dispositivos móviles. Simplemente abre el sitio web en Chrome, Safari o cualquier otro navegador, selecciona tus archivos desde tu celular y descarga el PDF terminado.</p>
        </div></div>
      </div>

      <div class="isec-faq__item">
        <button class="isec-faq__summary" type="button" aria-expanded="false">
          <span>¿Puedo crear un solo documento a partir de varios archivos?</span>
          <span class="isec-faq__chev"><svg aria-hidden="true"><use href="#i-chev"/></svg></span>
        </button>
        <div class="isec-faq__panel"><div class="isec-faq__panel-inner">
          <p>Sí. Agrega los archivos que necesites y organízalos en el orden que prefieras antes de procesarlos. Se pueden agregar varios archivos a la vez y su secuencia se puede cambiar en cualquier momento, hasta que el documento final quede exactamente como quieres.</p>
        </div></div>
      </div>

      <div class="isec-faq__item">
        <button class="isec-faq__summary" type="button" aria-expanded="false">
          <span>¿Puedo reorganizar las páginas antes de descargar?</span>
          <span class="isec-faq__chev"><svg aria-hidden="true"><use href="#i-chev"/></svg></span>
        </button>
        <div class="isec-faq__panel"><div class="isec-faq__panel-inner">
          <p>Sí. Puedes organizar los archivos antes de crear el documento final, lo que te da control total sobre la secuencia de páginas. Revisa el orden en la vista previa en vivo, sube o baja los archivos según sea necesario y crea el PDF final solo cuando estés conforme con la disposición.</p>
        </div></div>
      </div>

      <div class="isec-faq__item">
        <button class="isec-faq__summary" type="button" aria-expanded="false">
          <span>¿UniFicarPDF.com requiere registro?</span>
          <span class="isec-faq__chev"><svg aria-hidden="true"><use href="#i-chev"/></svg></span>
        </button>
        <div class="isec-faq__panel"><div class="isec-faq__panel-inner">
          <p>No. Puedes usar la herramienta sin crear una cuenta ni proporcionar información personal.</p>
        </div></div>
      </div>

      <div class="isec-faq__item">
        <button class="isec-faq__summary" type="button" aria-expanded="false">
          <span>¿Funciona en celular y en Mac?</span>
          <span class="isec-faq__chev"><svg aria-hidden="true"><use href="#i-chev"/></svg></span>
        </button>
        <div class="isec-faq__panel"><div class="isec-faq__panel-inner">
          <p>Sí. Funciona muy bien en celulares, tabletas, portátiles y computadores de escritorio con un navegador compatible, incluidos Mac, Windows y Linux. Como los pasos son los mismos en todos los dispositivos, no tienes que aprender nada nuevo al cambiar de uno a otro.</p>
        </div></div>
      </div>

      <div class="isec-faq__item">
        <button class="isec-faq__summary" type="button" aria-expanded="false">
          <span>¿Se conservará la calidad de mis documentos?</span>
          <span class="isec-faq__chev"><svg aria-hidden="true"><use href="#i-chev"/></svg></span>
        </button>
        <div class="isec-faq__panel"><div class="isec-faq__panel-inner">
          <p>Sí. La herramienta está diseñada para mantener la calidad original de tus documentos PDF durante el procesamiento. Tu texto, tus imágenes y el diseño de las páginas quedan exactamente igual en el archivo final, y el documento no se comprime innecesariamente.</p>
        </div></div>
      </div>

      <div class="isec-faq__item">
        <button class="isec-faq__summary" type="button" aria-expanded="false">
          <span>¿Mis documentos se suben a un servidor?</span>
          <span class="isec-faq__chev"><svg aria-hidden="true"><use href="#i-chev"/></svg></span>
        </button>
        <div class="isec-faq__panel"><div class="isec-faq__panel-inner">
          <p>No. Tus archivos se procesan localmente en tu navegador (del lado del cliente) en lugar de subirse o almacenarse en nuestros servidores. Por eso, tus documentos permanecen seguros en tu propio dispositivo durante el proceso, algo especialmente útil cuando se manejan archivos privados o sensibles.</p>
        </div></div>
      </div>

    </div>
  </div>

<!-- About -->
  <div class="isec-block">
    <div class="isec-block__head">
      <h2 class="isec-block__title">Acerca de UniFicarPDF.com</h2>
      <p class="isec-block__subtitle">UniFicarPDF.com es una herramienta PDF que funciona en el navegador, creada para quienes solo quieren tener sus documentos en un solo archivo, sin andar buscando software. Esto es lo que puedes esperar cuando la uses.</p>
    </div>
    <div class="isec-card-grid">
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue"><svg aria-hidden="true"><use href="#i-layers"/></svg></span>
        <span class="isec-card__icon isec-icon-blue"><svg aria-hidden="true"><use href="#i-layers"/></svg></span>
        <h3 class="isec-card__title">Compatible con varios archivos PDF</h3>
        <p class="isec-card__text">UniFicarPDF.com te permite agregar tantos archivos PDF como necesites, ya sea arrastrándolos o seleccionándolos desde tu dispositivo. Además, todos se manejan en una sola sesión, por lo que no tienes que repetir el proceso con cada archivo. Los lotes de hasta 20 archivos funcionan mejor, mientras que los lotes más grandes simplemente tardan más tiempo.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-purple"><svg aria-hidden="true"><use href="#i-user"/></svg></span>
        <span class="isec-card__icon isec-icon-purple"><svg aria-hidden="true"><use href="#i-user"/></svg></span>
        <h3 class="isec-card__title">Interfaz fácil para principiantes</h3>
        <p class="isec-card__text">No necesitas ningún conocimiento técnico. Cada paso está claramente presentado en una sola página, desde agregar los archivos hasta descargar el resultado.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-teal"><svg aria-hidden="true"><use href="#i-file"/></svg></span>
        <span class="isec-card__icon isec-icon-teal"><svg aria-hidden="true"><use href="#i-file"/></svg></span>
        <h3 class="isec-card__title">Combina varios archivos</h3>
        <p class="isec-card__text">Agrega varios archivos a la vez y define su orden antes de crear el documento final. Esto ayuda muchísimo cuando se están armando informes, tareas, formularios, facturas o cualquier otro documento relacionado.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue"><svg aria-hidden="true"><use href="#i-clock"/></svg></span>
        <span class="isec-card__icon isec-icon-blue"><svg aria-hidden="true"><use href="#i-clock"/></svg></span>
        <h3 class="isec-card__title">Ahorra tiempo con un proceso sencillo</h3>
        <p class="isec-card__text">Todo el proceso normalmente toma solo unos segundos y funciona sin software de edición. Los archivos grandes naturalmente necesitan más tiempo, pero se manejan con la misma confiabilidad. Tus archivos originales no se modifican y solo tienes que descargar el documento terminado.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-purple"><svg aria-hidden="true"><use href="#i-sort"/></svg></span>
        <span class="isec-card__icon isec-icon-purple"><svg aria-hidden="true"><use href="#i-sort"/></svg></span>
        <h3 class="isec-card__title">Organización fácil de archivos</h3>
        <p class="isec-card__text">Revisa el orden de tus archivos en la vista previa y cámbialo cuando lo necesites. Así, obtienes la secuencia que quieres sin tener que abrir ni editar cada documento uno por uno.</p>
      </div>
    </div>
  </div>

 <!-- Why combine -->
  <div class="isec-block">
    <div class="isec-block__head">
      <h2 class="isec-block__title">¿Por qué deberías combinar archivos PDF?</h2>
      <p class="isec-block__subtitle">Trabajar con archivos PDF separados puede dificultar la organización, el envío y la gestión de los documentos. Sin embargo, cuando se reúnen los archivos relacionados, se crea un documento práctico que es más fácil de revisar, enviar, imprimir y conservar para tus registros. Esto puede ser especialmente útil para tareas, informes, solicitudes, presentaciones y otros documentos de uso diario.</p>
    </div>
  </div>

  <!-- How to -->
  <div class="isec-block">
    <div class="isec-block__head">
      <h2 class="isec-block__title">¿Cómo combinar archivos PDF con UniFicarPDF.com?</h2>
      <p class="isec-block__subtitle">Crear un único PDF organizado es un proceso sencillo de 3 pasos:</p>
    </div>
    <ol class="isec-steps">
      <li>
        <span class="isec-steps__num">1</span>
        <div class="isec-steps__body">El primer paso es visitar el sitio web de UniFicarPDF.com y subir tus archivos PDF.</div>
      </li>
      <li>
        <span class="isec-steps__num">2</span>
        <div class="isec-steps__body">Luego, organiza los archivos en el orden que prefieras antes de procesarlos.</div>
      </li>
      <li>
        <span class="isec-steps__num">3</span>
        <div class="isec-steps__body">Por último, haz clic en el botón y tu PDF final se crea y se descarga.</div>
      </li>
    </ol>
  </div>
  
 <!-- Security & Quality -->
  <div class="isec-block">
    <div class="isec-block__head">
      <h2 class="isec-block__title">Seguridad de los archivos y calidad del PDF al combinar documentos</h2>
    </div>
    <div class="isec-card-grid">
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-teal"><svg aria-hidden="true"><use href="#i-shield"/></svg></span>
        <span class="isec-card__icon isec-icon-teal"><svg aria-hidden="true"><use href="#i-shield"/></svg></span>
        <h3 class="isec-card__title">Seguridad</h3>
        <p class="isec-card__text">Tus archivos se procesan directamente en tu navegador durante la creación del PDF. UniFicarPDF.com no sube ni almacena tus documentos en sus servidores, por lo que tus archivos se mantienen privados.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue"><svg aria-hidden="true"><use href="#i-check"/></svg></span>
        <span class="isec-card__icon isec-icon-blue"><svg aria-hidden="true"><use href="#i-check"/></svg></span>
        <h3 class="isec-card__title">Calidad</h3>
        <p class="isec-card__text">El texto, las imágenes y el diseño de página de tus archivos originales pasan al PDF final exactamente como están.</p>
      </div>
    </div>
  </div>


 <!-- Blogs recientes -->

 <div class="isec-block">
    <div class="isec-block__head">
      <h2 class="isec-block__title">Blogs recientes</h2>
    </div>
  </div>

 {% assign seo_posts = site.posts | where: "category", "mergepdf" | where: "lang", page.lang %}
<div class="relatedbloganywhere-grid">
  {% if seo_posts.size > 0 %}
    {% assign posts_to_show = seo_posts %}
  {% else %}
    {% assign posts_to_show = site.posts | where: "lang", page.lang %}
  {% endif %}
  {% for post in posts_to_show limit:6 %}
    <div class="relatedbloganywhere-card">
      <a href="{{ post.url | relative_url }}">
        <div class="relatedbloganywhere-thumb">
          <img 
            src="{{ post.thumbnail | default:'/assets/img/unir.png' | relative_url }}" 
            alt="{{ post.title }}"
            loading="lazy">
        </div>
      </a>
      {% if post.category %}
        {% assign cat_slug = post.category %}
        {% assign cat_page = site.pages | where: "category_key", cat_slug | first %}
        <a class="relatedbloganywhere-category" href="{{ site.baseurl }}/category/{{ cat_slug }}/">
          {{ cat_page.title | default: cat_slug | replace: "-", " " }}
        </a>
      {% endif %}
      <div class="relatedbloganywhere-content">
        <a href="{{ post.url | relative_url }}">
          <h3>{{ post.title }}</h3>
        </a>
      </div>
    </div>
  {% endfor %}
</div>



</section>








    
  </div>
</main>

<!-- BOTTOM BAR (mobile) -->
<div class="bottom-bar" id="bottomBar" style="display:none;">
  <button class="add-btn" onclick="document.getElementById('moreInput').click()">
    <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round">
      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
    </svg>Add
  </button>
  <button class="btn-merge-full" id="mergeBtnBottom" onclick="mergePDFs()">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <path d="M8 6H5a2 2 0 00-2 2v8a2 2 0 002 2h3M16 6h3a2 2 0 012 2v8a2 2 0 01-2 2h-3M12 3v18"/>
    </svg>Merge PDF
  </button>
</div>

<!-- FOOTER — hidden until files uploaded -->

<div class="toast" id="toast"></div>


<script src="https://unpkg.com/pdf-lib/dist/pdf-lib.min.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pako/2.1.0/pako.min.js" defer></script>

<script>
  
let files = [];
function $(id) { return document.getElementById(id); }
const isMobile = () => window.innerWidth <= 600;

/* ── Hide/show UI chrome (h1, p, footer, info) after upload ── */
function showChrome(on) {
  const footer = $('mainFooter');
  const title  = $('pageTitle');
  const sub    = $('pageSub');
  const info   = $('infoContent');

  if (on) {
    // files loaded — hide title, sub, footer, info
    footer.classList.add('hidden');
    title.classList.add('hidden');
    sub.classList.add('hidden');
    if (info) info.style.display = 'none';
  } else {
    // no files — restore everything
    footer.classList.remove('hidden');
    title.classList.remove('hidden');
    sub.classList.remove('hidden');
    if (info) info.style.display = 'block';
  }
}

/* ── FILE LOADING ── */
$('browseBtn').addEventListener('click', e => { e.stopPropagation(); $('fileInput').click(); });
$('dropZone').addEventListener('click', () => $('fileInput').click());
$('fileInput').addEventListener('change', e => { load(e.target.files); $('fileInput').value = ''; });
$('moreInput').addEventListener('change', e => { load(e.target.files); $('moreInput').value = ''; });
$('dropZone').addEventListener('dragover', e => { e.preventDefault(); $('dropZone').classList.add('dragover'); });
$('dropZone').addEventListener('dragleave', () => $('dropZone').classList.remove('dragover'));
$('dropZone').addEventListener('drop', e => {
  e.preventDefault(); $('dropZone').classList.remove('dragover');
  load(e.dataTransfer.files);
});

function load(raw) {
  const pdfs = [...raw].filter(f => f.type === 'application/pdf');
  if (!pdfs.length) { showToast('No PDF files found.'); return; }
  files.push(...pdfs);
  $('uploadState').style.display   = 'none';
  $('uploadedState').style.display = 'block';
  $('infoContent').style.display   = 'none';
    $('mainFooter').style.display   = 'none';

  showChrome(true);
  showBottomBar(true);
  render();
}

function showBottomBar(on) {
  const bar = $('bottomBar');
  bar.style.display = (on && isMobile()) ? 'flex' : 'none';
}
window.addEventListener('resize', () => { if (files.length) showBottomBar(true); });

function fmtSize(b) {
  return b >= 1048576 ? (b / 1048576).toFixed(1) + ' MB' : Math.round(b / 1024) + ' KB';
}

/* ── RENDER ── */
function render() {
  const list = $('fileList');
  list.innerHTML = '';
  $('fileCount').textContent = files.length + ' file' + (files.length !== 1 ? 's' : '');

  files.forEach((f, i) => {
    const row = document.createElement('div');
    row.className = 'file-row';
    row.dataset.i = i;
    row.innerHTML = `
      <div class="drag-handle" data-handle="1" title="Drag to reorder">
        <span></span><span></span><span></span><span></span><span></span><span></span>
      </div>
      <div class="row-num">${i + 1}</div>
      <div class="row-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
        </svg>
      </div>
      <div class="row-name" title="${f.name}">${f.name}</div>
      <div class="row-size">${fmtSize(f.size)}</div>
      <button class="row-del" data-i="${i}" title="Remove">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>`;

    row.querySelector('.row-del').addEventListener('click', e => {
      e.stopPropagation();
      files.splice(+e.currentTarget.dataset.i, 1);
      if (!files.length) {
        $('uploadState').style.display   = 'flex';
        $('uploadedState').style.display = 'none';
        showChrome(false);
        showBottomBar(false);
      } else render();
    });

    const handle = row.querySelector('.drag-handle');
    handle.addEventListener('pointerdown', onDragStart, { passive: false });
    list.appendChild(row);
  });

  const addBtn = document.createElement('button');
  addBtn.className = 'add-row-btn';
  addBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>Add more files`;
  addBtn.onclick = () => $('moreInput').click();
  list.appendChild(addBtn);
}

function sortFiles(dir) {
  files.sort((a, b) => dir === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
  render();
}

/* ── DRAG & DROP ── */
const ghost     = $('dragGhost');
const ghostName = $('dragGhostName');
let dragState = null;
let autoScrollRAF = null;

function autoScroll(clientY) {
  stopAutoScroll();
  const ZONE = 80, MAX = 14;
  function frame() {
    const vh = window.innerHeight;
    let spd = 0;
    if (clientY < ZONE)          spd = -MAX * (1 - clientY / ZONE);
    else if (clientY > vh - ZONE) spd =  MAX * (1 - (vh - clientY) / ZONE);
    if (spd !== 0) window.scrollBy(0, spd);
    autoScrollRAF = requestAnimationFrame(frame);
  }
  autoScrollRAF = requestAnimationFrame(frame);
}
function updateAutoScroll(clientY) {
  const ZONE = 80, vh = window.innerHeight;
  if (clientY < ZONE || clientY > vh - ZONE) { if (autoScrollRAF) stopAutoScroll(); autoScroll(clientY); }
  else stopAutoScroll();
}
function stopAutoScroll() {
  if (autoScrollRAF) { cancelAnimationFrame(autoScrollRAF); autoScrollRAF = null; }
}

function rowAtPoint(x, y) {
  ghost.style.display = 'none';
  const el = document.elementFromPoint(x, y);
  ghost.style.display = 'flex';
  if (!el) return null;
  return el.closest('.file-row[data-i]');
}

function onDragStart(e) {
  if (e.button !== undefined && e.button !== 0) return;
  const row = e.currentTarget.closest('.file-row');
  if (!row) return;
  const srcIdx = +row.dataset.i;
  e.preventDefault();
  e.currentTarget.setPointerCapture(e.pointerId);
  ghostName.textContent = files[srcIdx].name;
  ghost.style.display = 'flex';
  ghost.style.left = e.clientX + 'px';
  ghost.style.top  = e.clientY + 'px';
  row.classList.add('is-source');
  dragState = { srcIdx, srcRow: row, lastTarget: null };
  document.addEventListener('pointermove', onDragMove, { passive: false });
  document.addEventListener('pointerup',   onDragEnd);
  document.addEventListener('pointercancel', onDragCancel);
}

function onDragMove(e) {
  if (!dragState) return;
  e.preventDefault();
  ghost.style.left = e.clientX + 'px';
  ghost.style.top  = e.clientY + 'px';
  updateAutoScroll(e.clientY);
  const target = rowAtPoint(e.clientX, e.clientY);
  clearDropIndicators();
  if (target && target !== dragState.srcRow) {
    const rect  = target.getBoundingClientRect();
    const midY  = rect.top + rect.height / 2;
    const toIdx = +target.dataset.i;
    if (e.clientY < midY) { target.classList.add('drop-above'); dragState.lastTarget = { row: target, position: 'above', toIdx }; }
    else { target.classList.add('drop-below'); dragState.lastTarget = { row: target, position: 'below', toIdx }; }
  } else { dragState.lastTarget = null; }
}

function onDragEnd()    { if (!dragState) return; cleanupDrag(); }
function onDragCancel() { cleanupDrag(); }

function cleanupDrag() {
  stopAutoScroll();
  const target = dragState && dragState.lastTarget;
  const srcIdx = dragState && dragState.srcIdx;
  clearDropIndicators();
  if (dragState && dragState.srcRow) dragState.srcRow.classList.remove('is-source');
  ghost.style.display = 'none';
  document.removeEventListener('pointermove', onDragMove);
  document.removeEventListener('pointerup',   onDragEnd);
  document.removeEventListener('pointercancel', onDragCancel);
  if (target !== null && target !== undefined && srcIdx !== null && srcIdx !== undefined) {
    let toIdx = target.toIdx;
    if (target.position === 'below') toIdx = toIdx + 1;
    toIdx = Math.max(0, Math.min(toIdx, files.length));
    if (toIdx !== srcIdx && toIdx !== srcIdx + 1) {
      const moved = files.splice(srcIdx, 1)[0];
      const insertAt = toIdx > srcIdx ? toIdx - 1 : toIdx;
      files.splice(insertAt, 0, moved);
      render();
    }
  }
  dragState = null;
}

function clearDropIndicators() {
  document.querySelectorAll('.drop-above, .drop-below').forEach(r => r.classList.remove('drop-above', 'drop-below'));
}

/* ── COMPRESSION ── */
const tick = () => new Promise(r => setTimeout(r, 0));

function deflateStream(rawBytes) {
  try {
    const compressed = pako.deflate(rawBytes, { level: 9 });
    if (compressed.byteLength < rawBytes.byteLength) return { data: compressed, didCompress: true };
  } catch(e) {}
  return { data: rawBytes, didCompress: false };
}

async function recompressAllStreams(pdfDoc, onProgress) {
  const context = pdfDoc.context;
  const indirectObjects = context.enumerateIndirectObjects();
  let done = 0, savedBytes = 0;
  const total = indirectObjects.length;
  for (const [ref, obj] of indirectObjects) {
    done++;
    if (done % 50 === 0) { onProgress && onProgress(done, total); await tick(); }
    if (!obj || typeof obj.encode !== 'function') continue;
    try {
      const rawBytes = obj.getContents ? obj.getContents() : null;
      if (!rawBytes || rawBytes.byteLength === 0) continue;
      const { data: recompressed, didCompress } = deflateStream(rawBytes);
      if (!didCompress) continue;
      obj.dict.set(context.obj('Filter'), context.obj('FlateDecode'));
      obj.dict.set(context.obj('Length'), context.obj(recompressed.byteLength));
      obj.dict.delete(context.obj('DecodeParms'));
      obj.contents = recompressed;
      savedBytes += (rawBytes.byteLength - recompressed.byteLength);
    } catch(e) {}
  }
  return savedBytes;
}

function stripBloatMetadata(pdfDoc) {
  try {
    const context = pdfDoc.context;
    const catalog = pdfDoc.catalog;
    const metaKey = context.obj('Metadata');
    if (catalog.has(metaKey)) catalog.delete(metaKey);
    const infoRef = pdfDoc.getInfoDict ? pdfDoc.getInfoDict() : null;
    if (infoRef) {
      ['Author','Creator','Producer','Keywords','Subject','CreationDate','ModDate'].forEach(k => {
        try { infoRef.delete(context.obj(k)); } catch(e) {}
      });
    }
  } catch(e) {}
}

/* ── MERGE ── */
async function mergePDFs() {
  if (files.length < 2) { showToast('Add at least 2 PDF files.'); return; }
  const topBtn = $('mergeBtnTop'), botBtn = $('mergeBtnBottom'),
        prog = $('progressWrap'), txt = $('progressText');
  [topBtn, botBtn].forEach(b => { if (b) b.disabled = true; });
  prog.classList.add('show');
  try {
    const { PDFDocument } = PDFLib;
    const out = await PDFDocument.create();
    for (let i = 0; i < files.length; i++) {
      txt.textContent = `Loading file ${i + 1} of ${files.length}…`;
      await tick();
      let bytes;
      try { bytes = await files[i].arrayBuffer(); }
      catch(e) { showToast(`no se pudo leer "${files[i].name}". omitido.`); continue; }
      let doc;
      try {
        doc = await PDFDocument.load(bytes, { ignoreEncryption: false });
      } catch(e) {
        if (e.message && e.message.toLowerCase().includes('encrypt')) {
          showToast(`"${files[i].name}" está protegido por contraseña. Saltado.`);
        } else {
          showToast(`"${files[i].name}" no se pudo analizar. Saltado.`);
        }
        continue;
      }
      const copied = await out.copyPages(doc, doc.getPageIndices());
      copied.forEach(p => out.addPage(p));
      await tick();
    }
    if (out.getPageCount() === 0) { showToast('No se fusionaron páginas. Revisa tus archivos.'); return; }
    txt.textContent = 'Stripping metadata…'; await tick();
    stripBloatMetadata(out);
    txt.textContent = 'Compressing streams…'; await tick();
    try {
      await recompressAllStreams(out, (done, total) => {
        txt.textContent = `Compressing streams… ${Math.round(done / total * 100)}%`;
      });
    } catch(e) { console.warn('Stream recompression partially failed:', e); }
    txt.textContent = 'Finalising…'; await tick();
    const finalBytes = await out.save({ useObjectStreams: true, addDefaultPage: false });
    const originalTotal = files.reduce((sum, f) => sum + f.size, 0);
    const saving = Math.max(0, Math.round((1 - finalBytes.byteLength / originalTotal) * 100));
    const sizeMB = finalBytes.byteLength >= 1048576
      ? (finalBytes.byteLength / 1048576).toFixed(2) + ' MB'
      : Math.round(finalBytes.byteLength / 1024) + ' KB';
    const name = files.map(f => f.name.replace(/\.pdf$/i, '')).join('_') + '_merged.pdf';
    const blob = new Blob([finalBytes], { type: 'application/pdf' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    a.click();
    const msg = saving > 0
      ? `✓ hecho! ${sizeMB} · ${saving}% más pequeño - misma calidad.`
      : `✓ hecho! ${sizeMB} salvado.`;
    showToast(msg, 5000);
  } catch(err) {
    showToast('Algo salió mal. Por favor inténtalo de nuevo.');
    console.error(err);
  } finally {
    [topBtn, botBtn].forEach(b => { if (b) b.disabled = false; });
    prog.classList.remove('show');
  }
}

/* ── TOAST ── */
function showToast(msg, duration = 3500) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('on');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('on'), duration);
}

/* ── HAMBURGER ── */
const menuBtn = $('btn');
const menuEl  = $('menu');
const overlayEl = $('overlay');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menuEl.classList.toggle('active');
    overlayEl.classList.toggle('active');
  });
  overlayEl.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    menuEl.classList.remove('active');
    overlayEl.classList.remove('active');
  });
}


 window.addEventListener('beforeunload', e => {
  if (!files.length) return;
  e.preventDefault();
  e.returnValue = '';  // this is the ONLY way to block reload/close
});
</script>

