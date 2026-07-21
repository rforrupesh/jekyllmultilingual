---
layout: default
title: Combina tus archivos PDF en uno gratis — Unir PDF Online​
description: "Sube y organiza tus PDF fácilmente, y descarga un único archivo combinado. Rápido y sin límites. Una herramienta en línea gratuita e ilimitada para Unir PDF."
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
  <p class="page-sub" id="pageSub">Sube tus archivos, organízalos, haz clic en Unir PDF y descarga tu nuevo PDF combinado gratis.</p>
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


<div id="split-pdf-info">
 
 <section class="isec-block isec-articles" aria-labelledby="isec-why-title">
    <p class="isec-card__text">
         Unir múltiples PDF documents en un solo archivo es súper fácil con nuestra herramienta. No pierdas tiempo combinando PDFs de forma manual.
    </p> 
    <p class="isec-card__text">
      Nuestro PDF Merger es una herramienta online gratis que te ayuda a juntar, unir y combinar dos o más PDF files al instante
      sin reducir la calidad.
    </p>
    <p class="isec-card__text">
      Usa tecnología avanzada para unir tus PDF documents de forma rápida, fácil y segura con un solo clic. Combina páginas PDF, organiza tus files y crea un PDF de alta calidad online desde cualquier lugar.
    </p>
  </section>
<section>
   <figure class="isec-media"> 
    <img src="./assets/img/unir.webp"
         alt="Unir múltiples PDF files en uno al instante"
         loading="lazy"
         width="710"
         height="350">
    <figcaption>
        Unir múltiples PDF files en uno al instante
    </figcaption>
</figure>
</section>
  <section class="isec-block isec-articles" aria-labelledby="isec-why-title">
    <p class="isec-card__text">
       Recibir cientos de PDF files en tu computador desde proyectos del colegio, trabajo de oficina, tareas universitarias, documentos de negocio o labores profesionales puede dificultar el manejo correcto de documentos importantes. Estos files se pueden perder fácilmente o mezclarse con documentos innecesarios si no se organizan a tiempo.
    </p> 
    <p class="isec-card__text">
     En vez de guardar múltiples PDF documents por separado, es mejor unirlos y organizarlos en un solo PDF file para un mejor manejo, compartir más fácil, acceso más rápido y almacenamiento seguro. Manejar PDFs en un solo documento ayuda a ahorrar espacio, mejora la productividad y mantiene los files importantes bien organizados.
    </p>
  </section>
  <section class="isec-block isec-why" aria-labelledby="isec-why-title">
    <div class="isec-block__head">
      <h2 id="isec-why-title" class="isec-block__title">¿Por qué usar UnificarPDF.com para unir PDF files?</h2>
    </div>
    <div class="isec-card-grid">
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="12" height="16" rx="2"/><path d="M4 6v14a2 2 0 0 0 2 2h10"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="12" height="16" rx="2"/><path d="M4 6v14a2 2 0 0 0 2 2h10"/></svg>
        </span>
        <h3 class="isec-card__title">Merge de Files Rápido</h3>
        <p class="isec-card__text">Este merger online de alta velocidad es ideal para combinar reportes, facturas, páginas escaneadas y documentos de negocio sin demoras. Mejora la eficiencia del workflow y ayuda a los usuarios a manejar sus digital files más fácilmente.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-purple" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.12 15.88"/><path d="M14.47 14.48 20 20"/><path d="M8.12 8.12 12 12"/></svg></span>
        <span class="isec-card__icon isec-icon-purple" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.12 15.88"/><path d="M14.47 14.48 20 20"/><path d="M8.12 8.12 12 12"/></svg>
        </span>
        <h3 class="isec-card__title">Fácil de Usar</h3>
        <p class="isec-card__text">Una interfaz sencilla de drag-and-drop permite unir PDF files fácilmente sin conocimientos técnicos. Sube tus documents, reorganiza las páginas y crea un PDF limpio y organizado en pocos clics.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-teal" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M12 18v-6"/><path d="M9 15h6"/></svg></span>
        <span class="isec-card__icon isec-icon-teal" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M12 18v-6"/><path d="M9 15h6"/></svg>
        </span>
        <h3 class="isec-card__title">Procesamiento Seguro de Files</h3>
        <p class="isec-card__text">Todos los documents subidos se procesan de forma segura. La herramienta está diseñada con la privacidad en mente, siendo una opción confiable para combinar files sensibles como contratos, reportes financieros y documentos personales. Los files se eliminan automáticamente después del procesamiento.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
        </span>
        <h3 class="isec-card__title">PDF Output de Alta Calidad</h3>
        <p class="isec-card__text">Nuestro PDF merge tool conserva el formato original, la claridad de imágenes y la calidad del texto al combinar files. Ya sea para reportes de negocio, notas de estudio o documentos escaneados, el archivo unido final queda profesional, claro y listo para compartir o imprimir.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-purple" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/></svg></span>
        <span class="isec-card__icon isec-icon-purple" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/></svg>
        </span>
        <h3 class="isec-card__title">Disponible en todos los sistemas operativos.</h3>
        <p class="isec-card__text">La herramienta para unir PDF online está disponible en Windows, Mac, Linux, Android e iPhone sin necesidad de instalar nada.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-teal" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg></span>
        <span class="isec-card__icon isec-icon-teal" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>
        </span>
        <h3 class="isec-card__title">Herramienta Gratis y Práctica</h3>
        <p class="isec-card__text">Puedes unir PDF gratis online sin costo ni registro. Es una solución práctica para organizar tareas, facturas, ebooks, hojas de vida y files escaneados en un solo PDF document, disponible online en cualquier momento y desde cualquier lugar.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.99 6.57 2.57L21 8"/><path d="M21 3v5h-5"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.99 6.57 2.57L21 8"/><path d="M21 3v5h-5"/></svg>
        </span>
        <h3 class="isec-card__title">Mantiene el orden original de páginas</h3>
        <p class="isec-card__text">El orden de las páginas se conserva en todos los files al unirlos, o puedes reorganizarlos como prefieras.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-purple" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14h6v6"/><path d="M20 10h-6V4"/><path d="m14 10 7-7"/><path d="m3 21 7-7"/></svg></span>
        <span class="isec-card__icon isec-icon-purple" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14h6v6"/><path d="M20 10h-6V4"/><path d="m14 10 7-7"/><path d="m3 21 7-7"/></svg>
        </span>
        <h3 class="isec-card__title">Merges Ilimitados, Sin Límite Diario</h3>
        <p class="isec-card__text">No hay límite en cuántas veces puedes usar la herramienta en un día. Une un file hoy y cincuenta mañana — la herramienta sigue gratis y disponible siempre.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-teal" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg></span>
        <span class="isec-card__icon isec-icon-teal" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg>
        </span>
        <h3 class="isec-card__title">Sin Watermarks en los Output Files</h3>
        <p class="isec-card__text">El PDF unido sale limpio — sin marcas, sellos ni texto de watermark en ninguna parte del file, listo para enviar a un cliente o entregar tal como está.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>
        </span>
        <h3 class="isec-card__title">Sin Metadata Inyectada en tu Output</h3>
        <p class="isec-card__text">La herramienta no agrega ningún metadata oculto ni información de tracking al PDF unido. El output file está limpio y libre de datos adicionales que puedan comprometer la privacidad o seguridad.</p>
      </div>
    
    </div>
  </section>
  <section class="isec-block isec-how" aria-labelledby="isec-how-title">
    <div class="isec-block__head">
      <h2 id="isec-how-title" class="isec-block__title">¿Cómo unir PDF files en un solo PDF?</h2>
      <p class="isec-block__subtitle">No necesitas hacer mucho para unir PDF files en un solo documento. Si no sabes cómo hacerlo, sigue estos sencillos pasos:</p>
    </div>
    <ol class="isec-steps">
      <li>
        <span class="isec-steps__num">1</span>
        <div class="isec-steps__body">Sube tus PDF documents o arrastra y suelta los files en el PDF merge tool.</div>
      </li>
     <li> 
        <span class="isec-steps__num">2</span>
        <div class="isec-steps__body">Organiza y reordena las páginas o files PDF si es necesario.</div>
      </li>
      <li>
        <span class="isec-steps__num">3</span>
        <div class="isec-steps__body">Haz clic en el botón Unir PDF.</div>
      </li>
      <li>
        <span class="isec-steps__num">4</span>
        <div class="isec-steps__body">Espera unos segundos mientras la herramienta procesa tus files de forma segura.</div>
      </li>
      <li>
        <span class="isec-steps__num">5</span>
        <div class="isec-steps__body">Descarga tu nuevo PDF unido al instante o compártelo online.</div>
      </li>
    </ol>
  </section>
  <section class="isec-block isec-usecases" aria-labelledby="isec-usecases-title">
    <div class="isec-block__head">
      <h2 id="isec-usecases-title" class="isec-block__title">Herramienta para unir PDF para cualquier uso</h2>
      <p class="isec-block__subtitle">Mira cómo nuestro PDF Merger te ayuda a organizar fácilmente tus PDF documents.</p>
    </div>
    <div class="isec-card-grid isec-card-grid--use">
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        </span>
        <h3 class="isec-card__title">PDF de Negocios</h3>
        <p class="isec-card__text">Las empresas usan PDF mergers para combinar facturas, contratos, reportes y presentaciones en un solo file organizado. Esto facilita compartir documentos y mantiene los registros importantes en un solo lugar.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-purple" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/></svg></span>
        <span class="isec-card__icon isec-icon-purple" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/></svg>
        </span>
        <h3 class="isec-card__title">PDFs de Estudiantes</h3>
        <p class="isec-card__text">Los estudiantes pueden unir apuntes, papers de investigación y páginas de tareas en un PDF antes de entregar su trabajo online. Esto ayuda a crear un documento limpio y profesional.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-teal" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M5 7h14"/><path d="m5 7-3 6a3 3 0 0 0 6 0Z"/><path d="m19 7-3 6a3 3 0 0 0 6 0Z"/></svg></span>
        <span class="isec-card__icon isec-icon-teal" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M5 7h14"/><path d="m5 7-3 6a3 3 0 0 0 6 0Z"/><path d="m19 7-3 6a3 3 0 0 0 6 0Z"/></svg>
        </span>
        <h3 class="isec-card__title">Files Escaneados</h3>
        <p class="isec-card__text">Cuando los documentos se escanean página por página, un PDF merger puede combinar todas las páginas escaneadas en un solo file. Muy útil para documentos de identidad, formularios y papeleo de oficina.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.5 6.8-3.9"/><path d="m8.6 13.5 6.8 3.9"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.5 6.8-3.9"/><path d="m8.6 13.5 6.8 3.9"/></svg>
        </span>
        <h3 class="isec-card__title">Viajes y Documentos Personales</h3>
        <p class="isec-card__text">Es muy común combinar tiquetes, reservas de hotel, pasaportes y documentos de viaje en un solo PDF para tenerlos a mano. Así evitas el problema de manejar múltiples files por separado.</p>
      </div>
      
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
            <circle cx="10" cy="11" r="2" />
            <path d="M7.5 16c.8-1.5 4.2-1.5 5 0" />
            <path d="M15 11h2" />
            <path d="M15 15h2" />
          </svg>
        </span><span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
            <path d="M8 13h8" />
            <path d="M8 17h8" />
            <path d="M8 9h2" />
          </svg>
        </span>
        <h3 class="isec-card__title">Portfolio y Hoja de Vida</h3>
        <p class="isec-card__text">Los que buscan trabajo y los diseñadores usan PDF merge tools para combinar hojas de vida, cartas de presentación, certificados y muestras de portfolio en un solo documento profesional fácil de compartir.</p>
      </div>
        <div class="isec-card">
          <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <path d="m8.6 10.5 6.8-3.9" />
              <path d="m8.6 13.5 6.8 3.9" /></svg></span>
          <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <path d="m8.6 10.5 6.8-3.9" />
              <path d="m8.6 13.5 6.8 3.9" /></svg>
          </span>
          <h3 class="isec-card__title">Historiales Médicos y de Salud</h3>
          <p class="isec-card__text">Pacientes y clínicas unen fórmulas médicas, resultados de laboratorio, formularios de seguro y páginas de historial médico en un solo file, facilitando llevar o compartir los records completos con médicos o aseguradoras.
          </p>
        </div>
    </div>
  </section>
  <section class="isec-block isec-faq" aria-labelledby="isec-faq-title">
    <div class="isec-block__head">
      <h2 id="isec-faq-title" class="isec-block__title">Preguntas Frecuentes</h2>
      <p class="isec-block__subtitle">¿Tienes preguntas? Tenemos las respuestas. Encuentra todo lo que necesitas saber sobre nuestro PDF Merger.</p>
    </div>
    <p class="isec-faq__eyebrow">Para Empezar</p>
    <div class="isec-faq__list">
      <div class="isec-faq__item is-open">
        <button type="button" class="isec-faq__summary" aria-expanded="true">
          <span>¿Qué es el merge de PDF?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>El merge de PDF es el proceso de combinar dos o más PDF files separados en un solo documento unificado. Nuestra herramienta entrega un merging rápido, seguro y automatizado directamente en tu browser.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>¿Cómo puedo unir PDF files online?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Puedes unir PDF en linea subiendo tus documentos a UnificarPDF.com. La herramienta los organiza y combina automáticamente en un solo file en cuestión de segundos.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>¿Necesito instalar un software para unir PDFs?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>No. Puedes unir PDF online subiendo tus documentos a UnificarPDF.com. La herramienta los organiza y combina automáticamente en un solo file en segundos.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>¿Necesito crear una cuenta?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>¡No! Puedes empezar a unir de inmediato sin ningún registro, email ni creación de cuenta. Solo sube tus files y listo — así de simple.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>¿Qué formatos de file se pueden unir?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>UnificarPDF.com está hecho específicamente para combinar PDF files. No convierte otros formatos como Word, Excel o imágenes en PDF.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>¿Se pueden subir PDF files grandes?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Sí, la herramienta está diseñada para manejar tanto documentos pequeños como PDFs grandes de múltiples páginas sin comprometer el formato ni la calidad.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>¿Puedo exportar el file unido en diferentes formatos?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>El output unido se entrega como un solo PDF file, listo para descargar, compartir o imprimir.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>¿Puedo reorganizar las páginas antes de unir?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Sí, una vez subidos tus files puedes arrastrarlos y reordenarlos para definir el orden exacto de las páginas antes de combinarlos.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>¿UnificarPDF.com puede detectar y organizar múltiples files a la vez?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>¡Sí! La herramienta te permite subir varios PDFs juntos, listándolos automáticamente para que puedas organizar el orden del merge de forma visual.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>¿Puedo unir PDFs en cualquier idioma?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Sí, la herramienta soporta unir PDFs en cualquier idioma, preservando el texto y el formato.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>¿Puedo unir PDF files desde dispositivos móviles?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Sí, UnificarPDF.com es totalmente responsive y funciona perfecto en computadores, tablets y dispositivos móviles.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>¿Es UnificarPDF.com apto para uso empresarial y académico?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Claro que sí. Es ideal para combinar reportes, facturas, contratos, papers de investigación y páginas de tareas en documentos claros y organizados.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>¿Mis datos están seguros al unir PDFs?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Sí, tus datos están seguros al usar UnificarPDF.com. Implementamos medidas de seguridad estándar de la industria para proteger tus files durante el proceso de merge.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>¿En qué se diferencia UnificarPDF.com de Adobe Acrobat para hacer merge?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>UnificarPDF.com ofrece una solución web fácil de usar para unir PDFs sin necesidad de instalar software ni crear una cuenta. A diferencia de Adobe Acrobat, que requiere suscripción paga y software de escritorio, UnificarPDF.com es una alternativa gratis y accesible que funciona directamente en tu browser.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>¿Puedo unir PDFs sin conexión a internet?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>No, esta herramienta procesa los files en el servidor, por lo que se necesita conexión a internet. Para hacer merge completamente offline, se necesitaría una herramienta de escritorio.</p>
          </div>
        </div>
      </div>
     
    </div>
  </section>
  <section>
        <div class="isec-block__head">
      <h2 id="isec-why-title" class="isec-block__title">Problemas Comunes al Unir PDFs: Problemas y Soluciones</h2>
    </div>
    <div class="isec-table-wrap">
  <table class="isec-table">
    <thead>
      <tr>
        <th>Problema</th>
        <th>Solución</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Los files no se están uniendo correctamente.</td>
        <td>Asegúrate de que todos los <a href="https://en.wikipedia.org/wiki/PDF" class="alink">PDF files</a> no estén dañados y vuelve a subir los files que falten.</td>
      </tr>
      <tr>
        <td>El botón de merge no funciona.</td>
        <td>Recarga la página, desactiva las extensiones del browser o intenta usar la última versión de Chrome.</td>
      </tr>
      <tr>
        <td>Orden incorrecto de files.</td>
        <td>Reorganiza manualmente los files antes de unirlos, o renómbralos usando números para mantenerlos en la secuencia correcta.</td>
      </tr>
    </tbody>
  </table>
</div>
  </section>


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

<script>

// Jab user upload button click kare tab load karo
function loadLibraries() {
  return Promise.all([
    loadScript('https://unpkg.com/pdf-lib/dist/pdf-lib.min.js'),
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/pako/2.1.0/pako.min.js')
  ]);
}

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    document.head.appendChild(script);
  });
}

    
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

