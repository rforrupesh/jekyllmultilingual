---
layout: default
title: Fusionnez des fichiers PDF en ligne​
description: "Importez et organisez facilement vos PDF, puis téléchargez un fichier unique regroupant le tout. Rapide et sans limite. Un outil en ligne gratuit et illimité pour fusionner des PDF."
keywords: "Fusionner des PDF, diviser des PDF, combiner des PDF, séparer des PDF, compresser des PDF, convertir des PDF, Word en PDF, Excel en PDF, PowerPoint en PDF, PDF en JPG, JPG en PDF"
lang: fr
ref: home
permalink: /fr/
head_style: |
  #infoContent {
  max-width: 1120px;
  margin: 0 auto;
  padding: 12px 20px;
  }

  main {
  max-width: 1000px;
  margin: 0 auto;
  padding: 16px 20px 20px;
  } /* page-title & page-sub visible by default, hidden after upload */
  .page-title {
  display: block;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.4px;
  margin-bottom: 6px;
  }
  .page-sub {
  display: block;
  color: #111010;
  font-size: 14px;
  margin-bottom: 20px;
  }
  .page-title.hidden {
  display: none;
  }
  .page-sub.hidden {
  display: none;
  } /* ── UPLOAD BOX ── */
  .upload-box {
  background: #c41318 ;
  border: 1px dashed #ffffff;
  border-radius: 10px;
  padding: 60px 24px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
  user-select: none;
  }
  .upload-box:hover,
  .upload-box.dragover {
  border-color: #3b82f6;
  background: #840b0f;
  }
  .upload-box .icon {
  width: 46px;
  height: 46px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 14px;
  }
  .upload-box .icon svg {
  width: 22px;
  height: 22px;
  stroke: #555;
  }
  .upload-box h2 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #ffffff;
  }
  .upload-box p {
  color: #ffffff;
  font-size: 13px;
  margin-bottom: 20px;
  }
  .upload-note a {
  color: #fff;
  text-decoration: underline;
  transition: opacity 0.2s ease, color 0.2s ease;
  }
  .upload-note a:hover {
  opacity: 0.8;
  }
  .upload-note a:focus {
  outline: 2px solid #fff;
  outline-offset: 2px;
  border-radius: 2px;
  }
  .upload-note a:active {
  opacity: 0.6;
  }
  .btn-black {
  background: white;
  color: #000000;
  border: none;
  border-radius: 7px;
  padding: 9px 20px;
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  }
  .btn-black:hover {
  background: #f3f4f6;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
  .btn-black svg {
  width: 14px;
  height: 14px;
  }
  .upload-note {
  margin-top: 12px;
  color: #ffffff;
  font-size: 12px;
  }
  #uploadedState {
  display: none;
  } /* ── TOOLBAR ── */
  .toolbar {
  position: sticky;
  top: 52px;
  z-index: 40;
  background: var(--bg);
  padding: 14px 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  }
  .toolbar::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--border);
  }
  .toolbar-left {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  }
  .toolbar-title {
  font-size: 14px;
  font-weight: 600;
  }
  .file-count {
  background: #ebebea;
  color: #888;
  font-size: 11px;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 20px;
  }
  .btn-sm {
  background: #fff;
  color: #444;
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 5px 11px;
  font-family: inherit;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.15s;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  white-space: nowrap;
  }
  .btn-sm:hover {
  background: var(--bg);
  }
  .btn-sm svg {
  width: 12px;
  height: 12px;
  stroke: #888;
  }
  .btn-merge-top {
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 7px;
  padding: 8px 16px;
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  white-space: nowrap;
  }
  .btn-merge-top:hover {
  background: #1d4ed8;
  }
  .btn-merge-top:disabled {
  background: #93aedd;
  cursor: default;
  }
  .btn-merge-top svg {
  width: 14px;
  height: 14px;
  }
  .toolbar-right {
  display: flex;
  align-items: center;
  gap: 8px;
  }
  .btn-add-top {
  background: #fff;
  color: #444;
  border: 1px solid var(--border);
  border-radius: 7px;
  padding: 8px 16px;
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  white-space: nowrap;
  }
  .btn-add-top:hover {
  background: #f3f3f0;
  border-color: #ccc;
  }
  .btn-add-top svg {
  width: 14px;
  height: 14px;
  }
  @media (max-width: 600px) {
  .btn-add-top {
  display: none;
  }
  } /* ── FILE LIST ── */
  .file-list-wrap {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
  margin-top: 14px;
  }
  .file-row {
  display: grid;
  grid-template-columns: 32px 28px auto 1fr auto auto;
  align-items: center;
  gap: 10px;
  padding: 11px 14px;
  border-bottom: 1px solid #f0f0ec;
  background: #fff;
  position: relative;
  }
  .file-row:last-child {
  border-bottom: none;
  }
  .file-row.is-source {
  opacity: 0.35;
  }
  .file-row.drop-above::before {
  content: "";
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: #2563eb;
  border-radius: 2px;
  pointer-events: none;
  z-index: 5;
  }
  .file-row.drop-below::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: #2563eb;
  border-radius: 2px;
  pointer-events: none;
  z-index: 5;
  }
  .drag-handle {
  display: flex;
  flex-wrap: wrap;
  width: 16px;
  gap: 3px;
  cursor: grab;
  flex-shrink: 0;
  touch-action: none;
  -webkit-user-select: none;
  user-select: none;
  padding: 4px 1px;
  }
  .drag-handle:active {
  cursor: grabbing;
  }
  .drag-handle span {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #bbb;
  display: block;
  pointer-events: none;
  }
  .row-num {
  font-size: 11px;
  color: #bbb;
  font-weight: 500;
  text-align: center;
  pointer-events: none;
  }
  .row-icon {
  width: 34px;
  height: 34px;
  background: #fff4f0;
  border: 1px solid #fdd5c0;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  pointer-events: none;
  }
  .row-icon svg {
  width: 15px;
  height: 15px;
  stroke: #e05a1e;
  }
  .row-name {
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  pointer-events: none;
  }
  .row-size {
  font-size: 11px;
  color: #aaa;
  white-space: nowrap;
  flex-shrink: 0;
  pointer-events: none;
  }
  .row-del {
  background: none;
  border: none;
  cursor: pointer;
  color: #d0d0cc;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  transition: color 0.15s, background 0.15s;
  flex-shrink: 0;
  touch-action: manipulation;
  }
  .row-del:hover {
  color: #ef4444;
  background: #fef2f2;
  }
  .row-del svg {
  width: 14px;
  height: 14px;
  } /* ── GHOST ── */
  #dragGhost {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  background: #fff;
  border: 1.5px solid #2563eb;
  border-radius: 9px;
  padding: 10px 16px;
  font-size: 13px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  color: #1a1a1a;
  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.18), 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: none;
  align-items: center;
  gap: 8px;
  transform: translate(-20px, -50%);
  transition: none;
  }
  #dragGhost .ghost-icon {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  background: #fff4f0;
  border: 1px solid #fdd5c0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  }
  #dragGhost .ghost-icon svg {
  width: 11px;
  height: 11px;
  stroke: #e05a1e;
  }
  .add-row-btn {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 8px;
  padding: 11px 14px;
  color: #aaa;
  font-size: 13px;
  cursor: pointer;
  border: none;
  border-top: 1px dashed var(--border);
  background: #fafaf8;
  transition: background 0.15s, color 0.15s;
  font-family: inherit;
  border-radius: 0 0 10px 10px;
  }
  .add-row-btn:hover {
  background: #f0f0ec;
  color: #555;
  }
  .add-row-btn svg {
  width: 15px;
  height: 15px;
  stroke: currentColor;
  flex-shrink: 0;
  }
  .progress-wrap {
  display: none;
  position: sticky;
  top: 52px;
  z-index: 50;
  margin: 0 0 0 0;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 13px 16px;
  gap: 10px;
  align-items: center;
  box-shadow: 0 2px 12px rgba(37, 99, 235, 0.1);
  }
  .progress-wrap.show {
  display: flex;
  }
  .spinner {
  width: 42px;
  height: 42px;
  border: 3px solid rgba(255, 255, 255, 0.25);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  flex-shrink: 0;
  }
  @keyframes spin {
  to {
  transform: rotate(360deg);
  }
  }
  .progress-text {
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  } /* ── BOTTOM BAR ── */
  .bottom-bar {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  border-top: 1px solid var(--border);
  padding: 12px 16px;
  gap: 10px;
  align-items: center;
  z-index: 200;
  }
  .bottom-bar .btn-merge-full {
  flex: 1;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 13px 20px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  }
  .bottom-bar .btn-merge-full:hover {
  background: #1d4ed8;
  }
  .bottom-bar .btn-merge-full:disabled {
  background: #93aedd;
  cursor: default;
  }
  .bottom-bar .btn-merge-full svg {
  width: 15px;
  height: 15px;
  }
  .bottom-bar .add-btn {
  background: #fff;
  color: #444;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 13px 16px;
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  white-space: nowrap;
  transition: background 0.15s;
  }
  .bottom-bar .add-btn:hover {
  background: #f3f3f0;
  }
  .bottom-bar .add-btn svg {
  width: 14px;
  height: 14px;
  stroke: currentColor;
  }
  @media (max-width: 600px) {
  main {
  padding: 5px;
  }
  .btn-merge-top {
  display: none;
  }
  .bottom-bar {
  display: flex;
  }
  .file-row {
  grid-template-columns: 28px 22px auto 1fr auto;
  gap: 8px;
  padding: 10px 12px;
  }
  .row-size {
  display: none;
  }
  .page-title {
  font-size: 20px;
  }
  }
  @media (max-width: 400px) {
  .file-row {
  grid-template-columns: 28px auto 1fr auto;
  }
  .row-num {
  display: none;
  }
  } /* ── INFO ── */
  .divider {
  border: none;
  border-top: 1px solid var(--border);
  margin: 48px 0;
  }
  .section-title {
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.3px;
  margin-bottom: 12px;
  }
  .section-body {
  color: #555;
  line-height: 1.75;
  font-size: 14px;
  margin-bottom: 10px;
  }
  .cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 12px;
  margin-top: 16px;
  }
  .card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 9px;
  padding: 16px 18px;
  }
  .card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 9px;
  }
  .card ul {
  list-style: none;
  margin-bottom: 11px;
  }
  .card ul li {
  font-size: 13px;
  color: #666;
  padding: 3px 0 3px 12px;
  position: relative;
  line-height: 1.5;
  }
  .card ul li::before {
  content: "·";
  position: absolute;
  left: 2px;
  color: #bbb;
  font-size: 16px;
  line-height: 1.2;
  }
  .tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  }
  .tag {
  font-size: 15px;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 4px;
  }
  .tag.g {
  background: #f0fdf4;
  color: #16a34a;
  border: 1px solid #bbf7d0;
  }
  .tag.r {
  background: #fef2f2;
  color: #dc2626;
  border: 1px solid #fecaca;
  }
  .tips {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 14px;
  }
  .tip {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 12px 14px;
  font-size: 21px;
  color: #555;
  line-height: 1.6;
  }
  .tip-n {
  font-size: 19px;
  font-weight: 600;
  color: #241616;
  flex-shrink: 0;
  padding-top: 1px;
  } /* ── TOAST ── */
  .toast {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%) translateY(60px);
  background: #1a1a1a;
  color: #fff;
  font-size: 13px;
  padding: 10px 18px;
  border-radius: 7px;
  z-index: 9999;
  opacity: 0;
  transition: all 0.25s ease;
  pointer-events: none;
  white-space: nowrap;
  }
  .toast.on {
  transform: translateX(-50%) translateY(0);
  opacity: 1;
  }
  @media (max-width: 600px) {
  .toast {
  bottom: 90px;
  }
  } /* ── UPLOAD STATE ── */
  #uploadState {
  display: block;
  }
  #uploadState .upload-box {
  width: 100%;
  max-width: 920px;
  }
  #split-pdf-info .alink {
  color: #0000ee; /* high-contrast blue */
  text-decoration: underline; /* underline makes it distinguishable without color */
  font-weight: 500;
  }
  #split-pdf-info .alink:hover,
  #split-pdf-info .alink:focus {
  color: #0000aa;
  text-decoration: underline;
  outline: 2px solid #0000aa; /* focus indicator for keyboard users */
  outline-offset: 2px;
  }


scripts:
    - https://unpkg.com/pdf-lib/dist/pdf-lib.min.js
    - https://cdnjs.cloudflare.com/ajax/libs/pako/2.1.0/pako.min.js

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
  <h1 class="page-title" id="pageTitle">Fusionner des fichiers PDF</h1>
  <p class="page-sub" id="pageSub">Téléchargez vos fichiers, organisez-les, cliquez sur Fusionner PDF et téléchargez votre nouveau fichier PDF combiné.</p>
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
   <h2>Glissez vos fichiers PDF ici</h2>
<p>ou cliquez sur le bouton ci-dessous pour parcourir.</p>
      <button class="btn-black" id="browseBtn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
        </svg>
  Sélectionner les fichiers
      </button>
     <p class="upload-note">
 En téléchargeant des fichiers, vous acceptez nos
  <a href="https://rforrupesh.github.io/jekyllmultilingual/terminos-de-uso/" target="_blank">Conditions d'utilisation</a>
et notre
  <a href="https://rforrupesh.github.io/jekyllmultilingual/politica-de-privacidad/" target="_blank">Politique de confidentialité</a>.
</p> 
    </div>
    <input type="file" id="fileInput" multiple accept="application/pdf" hidden>
  </div>
  <!-- UPLOADED STATE -->
  <div id="uploadedState">
    <div class="toolbar">
      <div class="toolbar-left">
        <span class="toolbar-title">Fichiers à fusionner</span>
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
          </svg>Ajouter un PDF
        </button>
        <button class="btn-merge-top" id="mergeBtnTop" onclick="mergePDFs()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M8 6H5a2 2 0 00-2 2v8a2 2 0 002 2h3M16 6h3a2 2 0 012 2v8a2 2 0 01-2 2h-3M12 3v18"/>
          </svg>
Fusionner PDF
        </button>
      </div>
    </div>
    <div class="file-list-wrap" id="fileList"></div>
    <div class="progress-wrap" id="progressWrap">
      <div class="spinner"></div>
      <span class="progress-text" id="progressText">Fusion en cours…</span>
    </div>
  </div>
  
  <input type="file" id="moreInput" multiple accept="application/pdf" hidden>

  <!-- INFO — only shown before upload -->
<div id="infoContent" class="post-content">


<div id="split-pdf-info">
 
<section class="isec-block isec-articles" aria-labelledby="isec-why-title">
    <p class="isec-card__text">
         Fusionner plusieurs documents PDF en un seul fichier PDF est extrêmement facile avec notre outil. Ne perdez plus de temps à combiner des PDF manuellement.
    </p> 
    <p class="isec-card__text">
      Notre outil pour fusionner pdf est un outil PDF en ligne gratuit qui vous aide à joindre, fusionner et combiner deux ou plusieurs fichiers PDF instantanément
      sans réduire la qualité.
    </p>
    <p class="isec-card__text">
      Il utilise une technologie avancée pour fusionner des fichiers pdf rapidement, facilement et en toute sécurité en un seul clic. Combinez facilement
      des pages PDF, organisez vos fichiers PDF et créez un PDF de haute qualité en ligne à tout moment, partout.
    </p>
  </section>
<section>
   <figure class="isec-media"> 
    <img src="https://rforrupesh.github.io/jekyllmultilingual/assets/img/unir.webp"
         alt="Combinez plusieurs fichiers PDF en un seul instantanément"
         loading="lazy"
         width="710"
         height="350">
    <figcaption>
        Combinez plusieurs fichiers PDF en un seul instantanément
    </figcaption>
</figure>
</section>
  <section class="isec-block isec-articles" aria-labelledby="isec-why-title">
    <p class="isec-card__text">
       Recevoir des centaines de fichiers PDF dans votre gestionnaire de fichiers provenant de projets scolaires, de travaux de bureau, de devoirs universitaires, de documents professionnels ou de tâches professionnelles peut rendre difficile la gestion correcte des documents importants. Ces fichiers peuvent facilement être égarés, perdus ou mélangés avec des documents inutiles s'ils ne sont pas organisés à temps.
    </p> 
    <p class="isec-card__text">
     Au lieu de stocker plusieurs documents PDF séparément, il est préférable de les fusionner et de les organiser dans un seul fichier PDF pour une meilleure gestion des documents, un partage plus facile, un accès plus rapide et un stockage sécurisé. Gérer des PDF dans un seul document permet d'économiser de l'espace de stockage, d'améliorer la productivité et de garder les fichiers importants bien organisés.
    </p>
  </section>
  <section class="isec-block isec-why" aria-labelledby="isec-why-title">
    <div class="isec-block__head">
      <h2 id="isec-why-title" class="isec-block__title">Pourquoi utiliser UnificarPDF.com pour fusionner des pdf ?</h2>
    </div>
    <div class="isec-card-grid">
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="12" height="16" rx="2"/><path d="M4 6v14a2 2 0 0 0 2 2h10"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="12" height="16" rx="2"/><path d="M4 6v14a2 2 0 0 0 2 2h10"/></svg>
        </span>
        <h3 class="isec-card__title">Fusion de fichiers rapide</h3>
        <p class="isec-card__text">Cet outil de fusion pdf en ligne à haute vitesse est idéal pour combiner des rapports, des factures, des pages numérisées et des documents professionnels sans délai. Il améliore l'efficacité du flux de travail et aide les utilisateurs à gérer plus facilement leurs fichiers numériques.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-purple" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.12 15.88"/><path d="M14.47 14.48 20 20"/><path d="M8.12 8.12 12 12"/></svg></span>
        <span class="isec-card__icon isec-icon-purple" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.12 15.88"/><path d="M14.47 14.48 20 20"/><path d="M8.12 8.12 12 12"/></svg>
        </span>
        <h3 class="isec-card__title">Facile à utiliser</h3>
        <p class="isec-card__text">Une interface simple de glisser-déposer permet aux utilisateurs de fusionner des fichiers pdf facilement sans aucune connaissance technique. Téléchargez des documents, réorganisez des pages et créez un PDF propre et organisé en quelques clics seulement.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-teal" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M12 18v-6"/><path d="M9 15h6"/></svg></span>
        <span class="isec-card__icon isec-icon-teal" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M12 18v-6"/><path d="M9 15h6"/></svg>
        </span>
        <h3 class="isec-card__title">Traitement sécurisé des fichiers</h3>
        <p class="isec-card__text">Tous les documents téléchargés sont traités en toute sécurité. L'outil est conçu avec la protection de la vie privée à l'esprit, ce qui en fait une option fiable pour combiner des fichiers sensibles tels que des contrats, des rapports financiers et des documents personnels. Les fichiers sont automatiquement supprimés après le traitement.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
        </span>
        <h3 class="isec-card__title">PDF de sortie de haute qualité</h3>
        <p class="isec-card__text">Notre outil de fusion pdf préserve la mise en forme originale, la clarté des images et la qualité du texte lors de la combinaison de fichiers. Que ce soit pour des rapports professionnels, des notes d'étude ou des documents numérisés, le fichier fusionné final reste professionnel, clair et prêt à être partagé ou imprimé.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-purple" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/></svg></span>
        <span class="isec-card__icon isec-icon-purple" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/></svg>
        </span>
        <h3 class="isec-card__title">Disponible sur tous les systèmes d'exploitation.</h3>
        <p class="isec-card__text">L'outil de fusion pdf en ligne est disponible sur Windows, Mac, Linux, Android et iPhone sans aucune installation.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-teal" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg></span>
        <span class="isec-card__icon isec-icon-teal" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>
        </span>
        <h3 class="isec-card__title">Outil gratuit et pratique</h3>
        <p class="isec-card__text"> Les utilisateurs peuvent fusionner des fichiers pdf gratuitement en ligne sans inscription. C'est une solution pratique pour organiser des devoirs, des factures, des livres numériques, des CV et des fichiers numérisés dans un seul document PDF, disponible en ligne à tout moment et partout.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.99 6.57 2.57L21 8"/><path d="M21 3v5h-5"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.99 6.57 2.57L21 8"/><path d="M21 3v5h-5"/></svg>
        </span>
        <h3 class="isec-card__title">L'ordre original des pages est conservé</h3>
        <p class="isec-card__text">L'ordre des pages est préservé dans tous les fichiers lorsque vous les fusionnez, ou vous pouvez les réorganiser selon vos préférences.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-purple" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14h6v6"/><path d="M20 10h-6V4"/><path d="m14 10 7-7"/><path d="m3 21 7-7"/></svg></span>
        <span class="isec-card__icon isec-icon-purple" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14h6v6"/><path d="M20 10h-6V4"/><path d="m14 10 7-7"/><path d="m3 21 7-7"/></svg>
        </span>
        <h3 class="isec-card__title">Fusions illimitées, sans limite quotidienne</h3>
        <p class="isec-card__text">Il n'y a aucune limite au nombre de fois que vous pouvez utiliser l'outil dans une journée. Fusionnez un fichier aujourd'hui et cinquante demain — l'outil reste gratuit et accessible à chaque fois.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-teal" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg></span>
        <span class="isec-card__icon isec-icon-teal" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg>
        </span>
        <h3 class="isec-card__title">Aucun filigrane sur les fichiers de sortie</h3>
        <p class="isec-card__text">Le PDF fusionné est propre — aucune marque, tampon ou texte de filigrane n'est ajouté nulle part dans le fichier, il est donc prêt à être envoyé à un client ou soumis tel quel.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>
        </span>
        <h3 class="isec-card__title">Aucune métadonnée injectée dans votre fichier de sortie</h3>
        <p class="isec-card__text">L'outil n'ajoute aucune métadonnée cachée ni information de suivi au PDF fusionné. Le fichier de sortie est propre et exempt de toute donnée supplémentaire qui pourrait compromettre la confidentialité ou la sécurité.</p>
      </div>
    
    </div>
  </section>
  <section class="isec-block isec-how" aria-labelledby="isec-how-title">
    <div class="isec-block__head">
      <h2 id="isec-how-title" class="isec-block__title">Comment fusionner des fichiers PDF en un seul PDF ?</h2>
      <p class="isec-block__subtitle">Vous n'avez pas besoin de faire grand-chose pour fusionner des fichiers PDF en un seul document. Si vous ne savez pas comment fusionner des fichiers PDF, suivez simplement ces étapes faciles :</p>
    </div>
    <ol class="isec-steps">
      <li>
        <span class="isec-steps__num">1</span>
        <div class="isec-steps__body"> Téléchargez vos documents PDF ou faites glisser et déposez les fichiers dans l'outil de fusion PDF.</div>
      </li>
     <li> 
        <span class="isec-steps__num">2</span>
        <div class="isec-steps__body"> Organisez et réordonnez les pages ou les fichiers PDF si nécessaire.</div>
      </li>
      <li>
        <span class="isec-steps__num">3</span>
        <div class="isec-steps__body">Cliquez sur le bouton Fusionner PDF.</div>
      </li>
      <li>
        <span class="isec-steps__num">4</span>
        <div class="isec-steps__body">Attendez quelques secondes pendant que l'outil traite vos fichiers en toute sécurité.</div>
      </li>
      <li>
        <span class="isec-steps__num">5</span>
        <div class="isec-steps__body">Téléchargez votre nouveau PDF fusionné instantanément ou partagez-le en ligne.</div>
      </li>
    </ol>
  </section>
  <section class="isec-block isec-usecases" aria-labelledby="isec-usecases-title">
    <div class="isec-block__head">
      <h2 id="isec-usecases-title" class="isec-block__title">Outil de fusion PDF pour tous les cas d'utilisation</h2>
      <p class="isec-block__subtitle">Découvrez comment notre outil pour fusionner des pdf vous aide à organiser facilement vos documents PDF.</p>
    </div>
    <div class="isec-card-grid isec-card-grid--use">
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        </span>
        <h3 class="isec-card__title">PDF professionnel</h3>
        <p class="isec-card__text">Les entreprises utilisent les outils de fusion PDF pour combiner des factures, des contrats, des rapports et des présentations dans un seul fichier organisé. Cela facilite le partage de documents et garde les dossiers importants en un seul endroit.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-purple" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/></svg></span>
        <span class="isec-card__icon isec-icon-purple" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/></svg>
        </span>
        <h3 class="isec-card__title">PDF pour étudiants</h3>
        <p class="isec-card__text">Les étudiants peuvent fusionner des fichiers pdf — notes, articles de recherche et pages de devoir — en un seul PDF avant de soumettre leur travail en ligne. Cela permet de créer un document propre et professionnel.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-teal" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M5 7h14"/><path d="m5 7-3 6a3 3 0 0 0 6 0Z"/><path d="m19 7-3 6a3 3 0 0 0 6 0Z"/></svg></span>
        <span class="isec-card__icon isec-icon-teal" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M5 7h14"/><path d="m5 7-3 6a3 3 0 0 0 6 0Z"/><path d="m19 7-3 6a3 3 0 0 0 6 0Z"/></svg>
        </span>
        <h3 class="isec-card__title">Fichiers numérisés</h3>
        <p class="isec-card__text">Lorsque des documents sont numérisés page par page, un outil de fusion PDF peut combiner toutes les pages numérisées en un seul fichier. C'est utile pour les pièces d'identité, les formulaires et les documents de bureau.</p>
      </div>
      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.5 6.8-3.9"/><path d="m8.6 13.5 6.8 3.9"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.5 6.8-3.9"/><path d="m8.6 13.5 6.8 3.9"/></svg>
        </span>
        <h3 class="isec-card__title">Voyages et documents personnels</h3>
        <p class="isec-card__text">Il est courant de combiner billets, réservations d'hôtel, passeports et documents de voyage dans un seul PDF pour un accès facile lors des déplacements. Cela réduit la difficulté de gérer plusieurs fichiers séparés.</p>
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
        <h3 class="isec-card__title">Création de portfolio et de CV</h3>
        <p class="isec-card__text"> Les chercheurs d'emploi et les designers utilisent les outils de fusion PDF pour combiner CV, lettres de motivation,
          certificats et exemples de portfolio dans un seul document professionnel pour un partage facile.</p>
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
          <h3 class="isec-card__title">Dossiers de santé et médicaux</h3>
          <p class="isec-card__text">Les patients et les cliniques fusionnent des prescriptions, des résultats de laboratoire, des formulaires d'assurance et des pages d'antécédents médicaux dans un seul fichier, facilitant ainsi le transport ou le partage de dossiers complets avec les médecins ou les assureurs.
          </p>
        </div>
    </div>
  </section>
  <section class="isec-block isec-faq" aria-labelledby="isec-faq-title">
    <div class="isec-block__head">
      <h2 id="isec-faq-title" class="isec-block__title">Questions fréquemment posées</h2>
      <p class="isec-block__subtitle">Des questions ? Nous avons des réponses. Trouvez tout ce que vous devez savoir sur notre outil de fusion PDF.</p>
    </div>
    <p class="isec-faq__eyebrow">Pour commencer</p>
    <div class="isec-faq__list">
      <div class="isec-faq__item is-open">
        <button type="button" class="isec-faq__summary" aria-expanded="true">
          <span>Qu'est-ce que la fusion PDF ?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>La fusion PDF est le processus de combinaison de deux ou plusieurs fichiers PDF séparés en un seul document unifié. Notre outil offre une fusion rapide, sécurisée et automatisée directement dans votre navigateur.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Comment puis-je fusionner des fichiers PDF en ligne ?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Vous pouvez fusionner des fichiers PDF en ligne en téléchargeant vos documents sur UnificarPDF.com. L'outil les arrange et les combine automatiquement en un seul fichier en quelques secondes.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Dois-je installer un logiciel pour fusionner des PDF ?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Non. Vous pouvez fusionner des fichiers PDF en ligne en téléchargeant vos documents sur UnificarPDF.com. L'outil les arrange et les combine automatiquement en un seul fichier en quelques secondes.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Dois-je créer un compte ?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Non ! Vous pouvez commencer à fusionner immédiatement sans aucune inscription, e-mail ou création de compte. Téléchargez simplement vos fichiers et commencez — c'est aussi simple que ça.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Quels formats de fichiers peuvent être fusionnés ?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>UnificarPDF.com est conçu spécifiquement pour fusionner des fichiers PDF. Il ne convertit pas d'autres formats comme Word, Excel ou les images en PDF.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Peut-on télécharger de grands fichiers PDF ?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Oui, l'outil est conçu pour traiter aussi bien les petits documents que les PDF volumineux à plusieurs pages sans compromettre la mise en forme ou la qualité.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Puis-je exporter le fichier fusionné dans différents formats ?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Le résultat fusionné est fourni sous forme d'un seul fichier PDF, prêt à être téléchargé, partagé ou imprimé.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Puis-je réorganiser les pages avant de fusionner ?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Oui, une fois vos fichiers téléchargés, vous pouvez les faire glisser et les réorganiser pour définir l'ordre exact des pages avant de les combiner.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>UnificarPDF.com peut-il détecter et organiser plusieurs fichiers à la fois ?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Oui ! L'outil vous permet de télécharger plusieurs PDF ensemble, en les listant automatiquement pour que vous puissiez organiser visuellement l'ordre de fusion.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Puis-je fusionner des PDF dans n'importe quelle langue ?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Oui, l'outil prend en charge la fusion de PDF dans n'importe quelle langue, en préservant le texte et la mise en forme.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Puis-je fusionner des fichiers PDF sur des appareils mobiles ?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Oui, UnificarPDF.com est entièrement responsive et fonctionne parfaitement sur les ordinateurs de bureau, les tablettes et les appareils mobiles.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>UnificarPDF.com est-il adapté à un usage professionnel et académique ?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Absolument. Il est idéal pour combiner des rapports, des factures, des contrats, des articles de recherche et des pages de devoirs dans des documents clairs et organisés.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Mes données sont-elles sécurisées lors de la fusion de PDF ?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Oui, vos données sont sécurisées lors de l'utilisation de UnificarPDF.com. Nous mettons en œuvre des mesures de sécurité conformes aux normes du secteur pour protéger vos fichiers pendant le processus de fusion.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>En quoi UnificarPDF.com est-il différent d'Adobe Acrobat pour la fusion ?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>UnificarPDF.com offre une solution conviviale basée sur le Web pour fusionner des PDF sans nécessiter d'installation de logiciel ni de création de compte. Contrairement à Adobe Acrobat, qui nécessite un abonnement payant et un logiciel de bureau, UnificarPDF.com propose une alternative gratuite et accessible qui fonctionne directement dans votre navigateur.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Puis-je fusionner des PDF localement sans connexion Internet ?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Non, cet outil traite les fichiers sur le serveur, une connexion Internet est donc nécessaire. Pour une fusion entièrement hors ligne, un outil de bureau serait nécessaire à la place.</p>
          </div>
        </div>
      </div>
     
    </div>
  </section>
  <section>
        <div class="isec-block__head">
      <h2 id="isec-why-title" class="isec-block__title">Problèmes courants de fusion : Problèmes et solutions</h2>
    </div>
    <div class="isec-table-wrap">
  <table class="isec-table">
    <thead>
      <tr>
        <th>Problème</th>
        <th>Solution</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Les fichiers ne se connectent pas correctement.</td>
        <td>Assurez-vous que tous les <a href="https://en.wikipedia.org/wiki/PDF" class="alink">fichiers PDF</a> ne sont pas corrompus et re-téléchargez les fichiers manquants.</td>
      </tr>
      <tr>
        <td>Le bouton de fusion ne fonctionne pas.</td>
        <td>Actualisez la page, désactivez les extensions du navigateur ou essayez d'utiliser la dernière version de Chrome.</td>
      </tr>
      <tr>
        <td>Ordre des fichiers incorrect.</td>
        <td>Réorganisez manuellement les fichiers avant de les fusionner, ou renommez les fichiers en utilisant des numéros pour les maintenir dans la bonne séquence.</td>
      </tr>
    </tbody>
  </table>
</div>
  </section>


  </div>
<style>
#split-pdf-info {
  --isec-ink: var(--text, #1a1d27);
  --isec-ink-soft: var(--text-muted, #6b7280);
  --isec-line: var(--border, #e2e5ed);
  --isec-surface: var(--white, #ffffff);
  --isec-surface-alt: var(--surface, #f6f7f9);
  --isec-accent: var(--blue, #2563eb);
  --isec-accent-hover: var(--blue-hover, #1d4ed8);
  --isec-blue-bg: var(--blue-light, #eff6ff);
  --isec-blue-fg: var(--blue, #2563eb);
  --isec-purple-bg: var(--blue-mid, #dbeafe);
  --isec-purple-fg: var(--accent-h, #2f4ac9);
  --isec-teal-bg: var(--green-light, #f0fdf4);
  --isec-teal-fg: var(--green, #16a34a);
  --isec-radius: var(--radius, 10px);
  --isec-shadow: var(--shadow-sm, 0 1px 3px rgba(0,0,0,.08), 0 1px 2px rgba(0,0,0,.04));
  font-family: -apple-system, "Segoe UI", "Inter", Roboto, Helvetica, Arial, sans-serif;
  color: var(--isec-ink);
  max-width: var(--max-w, 1040px);
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
}

#split-pdf-info *, #split-pdf-info *::before, #split-pdf-info *::after {
  box-sizing: border-box;
}

#split-pdf-info .isec-hero {
  padding: 2px 0 8px;
  text-align: center;
}

#split-pdf-info .isec-hero__title {
  font-size: 30px;
  line-height: 1.2;
  font-weight: 800;
  color: var(--isec-ink);
  margin: 0 0 8px;
  letter-spacing: -0.01em;
}

#split-pdf-info .isec-hero__subtitle {
  font-size: 15.5px;
  line-height: 1.55;
  color: var(--isec-ink-soft);
  margin: 0 auto;
  max-width: 560px;
}

#split-pdf-info .isec-block {
  padding: 40px 0;
}

#split-pdf-info .isec-hero + .isec-block {
  border-top: none;
}

#split-pdf-info .isec-block__head {
  text-align: center;
  max-width: 620px;
  margin: 0 auto 28px;
}

#split-pdf-info .isec-block__title {
  font-size: 23px;
  font-weight: 800;
  line-height: 1.3;
  color: var(--isec-ink);
  margin: 0 0 8px;
  letter-spacing: -0.01em;
}

#split-pdf-info .isec-block__subtitle {
  font-size: 14.5px;
  line-height: 1.55;
  color: var(--isec-ink-soft);
  margin: 0;
}

#split-pdf-info .isec-card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

#split-pdf-info .isec-card-grid--use {
  grid-template-columns: repeat(4, 1fr);
}

#split-pdf-info .isec-card {
  position: relative;
  overflow: hidden;
  background: var(--isec-surface);
  border: 1px solid var(--isec-line);
  border-radius: var(--isec-radius);
  box-shadow: var(--isec-shadow);
  padding: 20px 20px 24px;
  display: flex;
  flex-direction: column;
}

#split-pdf-info .isec-card__bg-icon {
  position: absolute;
  right: -6px;
  bottom: -6px;
  width: 56px;
  height: 56px;
  opacity: 0.35;
  pointer-events: none;
  z-index: 0;
  -webkit-mask-image: radial-gradient(circle at bottom right, #000 0%, #000 35%, transparent 78%);
  mask-image: radial-gradient(circle at bottom right, #000 0%, #000 35%, transparent 78%);
}

#split-pdf-info .isec-card__bg-icon svg {
  width: 100%;
  height: 100%;
}

#split-pdf-info .isec-card__icon,
#split-pdf-info .isec-card__title,
#split-pdf-info .isec-card__text {
  position: relative;
  z-index: 1;
}

#split-pdf-info .isec-card__text {
  padding-right: 34px;
}

#split-pdf-info .isec-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 9px;
  margin-bottom: 12px;
}

#split-pdf-info .isec-card__icon svg {
  width: 19px;
  height: 19px;
}

#split-pdf-info .isec-card__bg-icon.isec-icon-blue,
#split-pdf-info .isec-card__bg-icon.isec-icon-purple,
#split-pdf-info .isec-card__bg-icon.isec-icon-teal {
  background: transparent;
  border-radius: 0;
}

#split-pdf-info .isec-icon-blue { background: var(--isec-blue-bg); color: var(--isec-blue-fg); }
#split-pdf-info .isec-icon-purple { background: var(--isec-purple-bg); color: var(--isec-purple-fg); }
#split-pdf-info .isec-icon-teal { background: var(--isec-teal-bg); color: var(--isec-teal-fg); }

#split-pdf-info .isec-card__title {
  font-size: 14.5px;
  font-weight: 700;
  color: var(--isec-ink);
  margin: 0 0 6px;
  line-height: 1.4;
}

#split-pdf-info .isec-card__text {
  font-size: 14px;
  line-height: 1.55;
  color: var(--isec-ink-soft);
  margin: 0;
}

#split-pdf-info .isec-steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 18px;
  max-width: 760px;
  margin: 0 auto;
}

#split-pdf-info .isec-steps > li {
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 14px;
  align-items: start;
}

#split-pdf-info .isec-steps__num {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--isec-accent);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

#split-pdf-info .isec-steps__body {
  font-size: 15px;
  line-height: 1.65;
  color: var(--isec-ink-soft);
  padding-top: 4px;
}

#split-pdf-info .isec-substeps {
  margin: 10px 0 0;
  padding-left: 18px;
  display: grid;
  gap: 6px;
}

#split-pdf-info .isec-substeps li {
  font-size: 14.5px;
  line-height: 1.6;
}

#split-pdf-info .isec-substeps strong {
  color: var(--isec-ink);
}

#split-pdf-info .isec-faq__eyebrow {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--isec-accent);
  text-align: center;
  margin: 0 0 14px;
}

#split-pdf-info .isec-faq__list {
  display: grid;
  gap: 8px;
  max-width: 700px;
  margin: 0 auto;
}

#split-pdf-info .isec-faq__item {
  border: 1px solid var(--isec-line);
  border-radius: var(--isec-radius);
  background: var(--isec-surface);
  overflow: hidden;
  transition: border-color .25s ease, box-shadow .25s ease;
}

#split-pdf-info .isec-faq__item.is-open {
  border-color: var(--isec-accent);
  box-shadow: var(--isec-shadow);
}

#split-pdf-info .isec-faq__summary {
  width: 100%;
  cursor: pointer;
  font: inherit;
  font-size: 14.5px;
  font-weight: 600;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  background: transparent;
  border: none;
  margin: 0;
  text-align: left;
  color: var(--isec-ink);
  transition: background-color .25s ease, color .25s ease;
}

#split-pdf-info .isec-faq__item.is-open .isec-faq__summary {
  background: var(--isec-blue-bg);
  color: var(--isec-accent);
}

#split-pdf-info .isec-faq__chev {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--isec-surface-alt);
  color: var(--isec-ink-soft);
  transition: transform .3s ease, background-color .25s ease, color .25s ease;
}

#split-pdf-info .isec-faq__chev svg {
  width: 15px;
  height: 15px;
}

#split-pdf-info .isec-faq__item.is-open .isec-faq__chev {
  background: var(--isec-accent);
  color: #fff;
  transform: rotate(180deg);
}

#split-pdf-info .isec-faq__panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows .28s ease;
}

#split-pdf-info .isec-faq__item.is-open .isec-faq__panel {
  grid-template-rows: 1fr;
}

#split-pdf-info .isec-faq__panel-inner {
  overflow: hidden;
}

#split-pdf-info .isec-faq__item p {
  margin: 0;
  padding: 4px 16px 16px;
  font-size: 14px;
  line-height: 1.6;
  color: var(--isec-ink-soft);
}

@media (max-width: 860px) {
  #split-pdf-info .isec-card-grid,
  #split-pdf-info .isec-card-grid--use {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  #split-pdf-info .isec-hero__title {
    font-size: 24px;
  }

  #split-pdf-info .isec-block {
    padding: 28px 0;
  }

  #split-pdf-info .isec-block__title {
    font-size: 19px;
  }

  #split-pdf-info .isec-card-grid,
  #split-pdf-info .isec-card-grid--use {
    grid-template-columns: 1fr;
  }

  #split-pdf-info .isec-steps > li {
    grid-template-columns: 26px 1fr;
  }

  #split-pdf-info .isec-steps__num {
    width: 26px;
    height: 26px;
    font-size: 12.5px;
  }
}


/* =========================
   TABLE
========================= */

#split-pdf-info .isec-table-wrap {
  width: 100%;
  overflow-x: auto;
  border: 1px solid var(--isec-line);
  border-radius: var(--isec-radius);
  box-shadow: var(--isec-shadow);
  background: var(--isec-surface);
}

#split-pdf-info .isec-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 650px;
}

#split-pdf-info .isec-table thead {
  background: var(--isec-blue-bg);
}

#split-pdf-info .isec-table th,
#split-pdf-info .isec-table td {
  padding: 14px 16px;
  text-align: left;
  border-bottom: 1px solid var(--isec-line);
  font-size: 14px;
  line-height: 1.6;
}

#split-pdf-info .isec-table th {
  font-weight: 700;
  color: var(--isec-ink);
  white-space: nowrap;
}

#split-pdf-info .isec-table td {
  color: var(--isec-ink-soft);
}

#split-pdf-info .isec-table tbody tr:nth-child(even) {
  background: var(--isec-surface-alt);
}

#split-pdf-info .isec-table tbody tr:hover {
  background: var(--isec-blue-bg);
  transition: background .2s ease;
}

#split-pdf-info .isec-table tbody tr:last-child td {
  border-bottom: none;
}

@media (max-width: 560px) {
  #split-pdf-info .isec-table th,
  #split-pdf-info .isec-table td {
    padding: 12px;
    font-size: 13px;
  }
}

/* =========================
   IMAGE & VIDEO
========================= */

#split-pdf-info .isec-media {
  margin: 24px auto;
  border-radius: var(--isec-radius);
  overflow: hidden;
  box-shadow: var(--isec-shadow);
  border: 1px solid var(--isec-line);
  background: var(--isec-surface);
}

#split-pdf-info .isec-media img,
#split-pdf-info .isec-media video,
#split-pdf-info .isec-media iframe {
  display: block;
  width: 100%;
  height: auto;
  border: 0;
}

/* Responsive YouTube/Vimeo */
#split-pdf-info .isec-video {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: var(--isec-radius);
  box-shadow: var(--isec-shadow);
  border: 1px solid var(--isec-line);
}

#split-pdf-info .isec-video iframe,
#split-pdf-info .isec-video video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
</style>

<script>
(function () {
  var root = document.getElementById('split-pdf-info');
  if (!root) return;
  var items = root.querySelectorAll('.isec-faq__item');
  items.forEach(function (item) {
    var btn = item.querySelector('.isec-faq__summary');
    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');
      item.classList.toggle('is-open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });
})();
</script>




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
  addBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>Ajouter d'autres fichiers`;
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

