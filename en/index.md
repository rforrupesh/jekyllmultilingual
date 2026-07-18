---
layout: default
title: Merge PDF Files Online for Free — Combine PDFs into One Document​
description: "Upload and organize your PDF files easily, then download a single merged document. Fast, unlimited, and free. An online PDF Merge tool with no limits."
keywords: "Merge PDF, Split PDF, Combine PDF, Separate PDF, Compress PDF, Convert PDF, Word to PDF, Excel to PDF, PowerPoint to PDF, PDF to JPG, JPG to PDF"
ref: home
lang: en
permalink: /en/
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
  <h1 class="page-title" id="pageTitle">Merge PDF Files</h1>
  <p class="page-sub" id="pageSub">Upload your files, arrange them, click Merge PDF, and download your new combined PDF file.</p>

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
   <h2>Drag PDF files here</h2>
<p>or click the button below to browse.</p>
      <button class="btn-black" id="browseBtn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
        </svg>
  Select Files
      </button>
     <p class="upload-note">
 By uploading files, you agree to our
  <a href="https://rforrupesh.github.io/jekyllmultilingual/terminos-de-uso/" target="_blank">Terms of Use</a>
and 
  <a href="https://rforrupesh.github.io/jekyllmultilingual/politica-de-privacidad/" target="_blank">Privacy Policy</a>.
</p> 
    </div>
    <input type="file" id="fileInput" multiple accept="application/pdf" hidden>
  </div>

  <!-- UPLOADED STATE -->
  <div id="uploadedState">
    <div class="toolbar">
      <div class="toolbar-left">
        <span class="toolbar-title">Files to merge</span>
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
Combine PDF
        </button>
      </div>
    </div>

    <div class="file-list-wrap" id="fileList"></div>

    <div class="progress-wrap" id="progressWrap">
      <div class="spinner"></div>
      <span class="progress-text" id="progressText">Merging…</span>
    </div>
  </div>

  <input type="file" id="moreInput" multiple accept="application/pdf" hidden>

  <!-- INFO — only shown before upload -->
<div id="infoContent" class="post-content">


<div id="split-pdf-info">
 
  <section class="isec-block isec-articles" aria-labelledby="isec-why-title">
    <p class="isec-card__text">
         Merging multiple PDF documents into a single PDF file is extremely easy with our tool. Don't waste time combining PDFs manually.
    </p> 
    <p class="isec-card__text">
      Our PDF Merger is a free online PDF tool that helps you join, merge, and combine two or more PDF files instantly
      without reducing quality.
    </p>

    <p class="isec-card__text">
      It uses advanced technology to merge your PDF documents quickly, easily, and securely with a single click. Easily
      combine PDF pages, organize PDF files, and create a high-quality PDF online anytime, anywhere.
    </p>
  </section>

<section>
   <figure class="isec-media"> 
    <img src="https://rforrupesh.github.io/jekyllmultilingual/assets/img/unir.webp"
         alt="Combine multiple PDF files into one instantly"
         loading="lazy"
         width="710"
         height="350">

    <figcaption>
        Combine multiple PDF files into one instantly
    </figcaption>
</figure>
</section>

  <section class="isec-block isec-articles" aria-labelledby="isec-why-title">
    <p class="isec-card__text">
       Receiving hundreds of PDF files in your file manager from school projects, office work, university assignments, business documents, or professional tasks can make it difficult to manage important documents properly. These files can easily be misplaced, lost, or mixed with unnecessary documents if they are not organized in time.


    </p> 
    <p class="isec-card__text">
<a href="https://www.w3schools.com/" class="alink">Visit W3Schools</a>
     Instead of storing multiple PDF documents separately, it is better to combine and organize them into a single PDF file for better document management, easier sharing, faster access, and secure storage. Managing PDFs in one document helps save storage space, improves productivity, and keeps important files well organized.


    </p>

  </section>


  <section class="isec-block isec-why" aria-labelledby="isec-why-title">
    <div class="isec-block__head">
      <h2 id="isec-why-title" class="isec-block__title">Why use UnificarPDF.com to merge PDF files?</h2>
    </div>
    <div class="isec-card-grid">

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="12" height="16" rx="2"/><path d="M4 6v14a2 2 0 0 0 2 2h10"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="12" height="16" rx="2"/><path d="M4 6v14a2 2 0 0 0 2 2h10"/></svg>
        </span>
        <h3 class="isec-card__title">Fast File Merging</h3>
        <p class="isec-card__text">This high-speed online merger is ideal for combining reports, invoices, scanned pages, and business documents without delays. It improves workflow efficiency and helps users manage digital files more easily.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-purple" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.12 15.88"/><path d="M14.47 14.48 20 20"/><path d="M8.12 8.12 12 12"/></svg></span>
        <span class="isec-card__icon isec-icon-purple" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.12 15.88"/><path d="M14.47 14.48 20 20"/><path d="M8.12 8.12 12 12"/></svg>
        </span>
        <h3 class="isec-card__title">Easy to Use</h3>
        <p class="isec-card__text">A simple drag-and-drop interface allows users to merge PDF files easily without technical knowledge. Upload documents, rearrange pages, and create a clean, organized PDF in just a few clicks.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-teal" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M12 18v-6"/><path d="M9 15h6"/></svg></span>
        <span class="isec-card__icon isec-icon-teal" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M12 18v-6"/><path d="M9 15h6"/></svg>
        </span>
        <h3 class="isec-card__title">Secure File Processing</h3>
        <p class="isec-card__text">All uploaded documents are processed securely. The tool is designed with privacy protection in mind, making it a reliable option for combining sensitive files such as contracts, financial reports, and personal documents. Files are automatically deleted after processing.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
        </span>
        <h3 class="isec-card__title">High-Quality PDF Output</h3>
        <p class="isec-card__text">Our PDF merge tool preserves original formatting, image clarity, and text quality when combining files. Whether for business reports, study notes, or scanned documents, the final merged file remains professional, clear, and ready to share or print.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-purple" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/></svg></span>
        <span class="isec-card__icon isec-icon-purple" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/></svg>
        </span>
        <h3 class="isec-card__title">Available on all operating systems.</h3>
        <p class="isec-card__text">The online PDF merging tool is available on Windows, Mac, Linux, Android, and iPhone without any installation.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-teal" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg></span>
        <span class="isec-card__icon isec-icon-teal" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>
        </span>
        <h3 class="isec-card__title">Free and Practical Tool</h3>
        <p class="isec-card__text"> Users can merge documents online without cost or registration. It is a practical solution for organizing assignments, invoices, ebooks, resumes, and scanned files into a single PDF document, available online anytime and anywhere.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.99 6.57 2.57L21 8"/><path d="M21 3v5h-5"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.99 6.57 2.57L21 8"/><path d="M21 3v5h-5"/></svg>
        </span>
        <h3 class="isec-card__title">It maintains the original page order</h3>
        <p class="isec-card__text">The order of the pages is preserved in all files when you join them, or you can rearrange them as you prefer.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-purple" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14h6v6"/><path d="M20 10h-6V4"/><path d="m14 10 7-7"/><path d="m3 21 7-7"/></svg></span>
        <span class="isec-card__icon isec-icon-purple" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14h6v6"/><path d="M20 10h-6V4"/><path d="m14 10 7-7"/><path d="m3 21 7-7"/></svg>
        </span>
        <h3 class="isec-card__title">Unlimited Merges, No Daily Limit </h3>
        <p class="isec-card__text">There's no cap on how many times you can use the tool in a day. Merge one file today and fifty tomorrow — the tool stays free and accessible every time.  </p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-teal" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg></span>
        <span class="isec-card__icon isec-icon-teal" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg>
        </span>
        <h3 class="isec-card__title">No Watermarks on the Output Files</h3>
        <p class="isec-card__text">The merged PDF comes out clean — no branding, stamps, or watermark text added anywhere in the file, so it's ready to send to a client or submit as-is. </p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>
        </span>
        <h3 class="isec-card__title">No Metadata Injected Into Your Output</h3>
        <p class="isec-card__text">The tool does not add any hidden metadata or tracking information to the merged PDF. The output file is clean and free of any additional data that could compromise privacy or security.</p>
      </div>
    


    </div>
  </section>

  <section class="isec-block isec-how" aria-labelledby="isec-how-title">
    <div class="isec-block__head">
      <h2 id="isec-how-title" class="isec-block__title">How to Combine PDF Files into One PDF?</h2>
      <p class="isec-block__subtitle">You do not need to do much to merge PDF files into a single document. If you do not know how to merge PDF files, simply follow these easy steps:</p>
    </div>
    <ol class="isec-steps">
      <li>
        <span class="isec-steps__num">1</span>
        <div class="isec-steps__body"> Upload your PDF documents or drag and drop the files into the PDF merge tool.</div>
      </li>
     <li> 
        <span class="isec-steps__num">2</span>
        <div class="isec-steps__body"> Arrange and reorder PDF pages or files if necessary.</div>
      </li>
      <li>
        <span class="isec-steps__num">3</span>
        <div class="isec-steps__body">Click the Merge PDF button.</div>
      </li>
      <li>
        <span class="isec-steps__num">4</span>
        <div class="isec-steps__body">Wait a few seconds while the tool securely processes your files.</div>
      </li>
      <li>
        <span class="isec-steps__num">5</span>
        <div class="isec-steps__body">Download your new merged PDF instantly or share it online.</div>
      </li>
    </ol>
  </section>

  <section class="isec-block isec-usecases" aria-labelledby="isec-usecases-title">
    <div class="isec-block__head">
      <h2 id="isec-usecases-title" class="isec-block__title">Combine PDF To PDF tool for any use case</h2>
      <p class="isec-block__subtitle">See how our PDF Merger helps you easily organize and  PDF documents.</p>
    </div>
    <div class="isec-card-grid isec-card-grid--use">

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        </span>
        <h3 class="isec-card__title">Business PDF</h3>
        <p class="isec-card__text">Businesses use PDF mergers to combine invoices, contracts, reports, and presentations into a single organized file. This makes document sharing easier and keeps important records in one place.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-purple" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/></svg></span>
        <span class="isec-card__icon isec-icon-purple" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/></svg>
        </span>
        <h3 class="isec-card__title">Student PDFs</h3>
        <p class="isec-card__text">Students can merge notes, research papers, and assignment pages into one PDF before submitting work online. This helps create a clean and professional document.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-teal" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M5 7h14"/><path d="m5 7-3 6a3 3 0 0 0 6 0Z"/><path d="m19 7-3 6a3 3 0 0 0 6 0Z"/></svg></span>
        <span class="isec-card__icon isec-icon-teal" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M5 7h14"/><path d="m5 7-3 6a3 3 0 0 0 6 0Z"/><path d="m19 7-3 6a3 3 0 0 0 6 0Z"/></svg>
        </span>
        <h3 class="isec-card__title">Scanned Files</h3>
        <p class="isec-card__text">When documents are scanned page by page, a PDF merger can combine all scanned pages into a single file. This is useful for ID documents, forms, and office paperwork.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.5 6.8-3.9"/><path d="m8.6 13.5 6.8 3.9"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.5 6.8-3.9"/><path d="m8.6 13.5 6.8 3.9"/></svg>
        </span>
        <h3 class="isec-card__title">Travel and Personal Records</h3>
        <p class="isec-card__text">It is common to combine tickets, hotel reservations, passports, and travel documents into one PDF for easy access while traveling. This reduces the hassle of managing multiple files.</p>
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
        <h3 class="isec-card__title">Portfolio and Resume Creation</h3>
        <p class="isec-card__text"> Job seekers and designers use PDF merge tools to combine resumes, cover letters,
          certificates, and portfolio samples into a single professional document for easy sharing.</p>
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
          <h3 class="isec-card__title">Healthcare and Medical Records</h3>
          <p class="isec-card__text">Patients and clinics merge prescriptions, lab reports, insurance forms, and medical history pages into a single file, making it easier to carry or share complete records with doctors or insurers.
          </p>
        </div>

    </div>
  </section>

  <section class="isec-block isec-faq" aria-labelledby="isec-faq-title">
    <div class="isec-block__head">
      <h2 id="isec-faq-title" class="isec-block__title">Frequently Asked Questions</h2>
      <p class="isec-block__subtitle">Got questions? We have answers. Find everything you need to know about our PDF Merger.</p>
    </div>
    <p class="isec-faq__eyebrow">Getting Started</p>
    <div class="isec-faq__list">
      <div class="isec-faq__item is-open">
        <button type="button" class="isec-faq__summary" aria-expanded="true">
          <span>What is PDF merging?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>PDF merging is the process of combining two or more separate PDF files into a single, unified document.  delivers fast, secure, and automated merging directly in your browser.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>How can I merge PDF files online?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>You can merge PDF files online by uploading your documents to UnificarPDF.com. The tool automatically arranges and combines them into one file within seconds.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Do I need to install software to merge PDFs?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>No. You can merge PDF files online by uploading your documents to UnificarPDF.com. The tool automatically arranges and combines them into one file within seconds.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Do I need to create an account?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>No! You can start merging immediately without any registration, email, or account creation. Just upload your files and begin — it’s that simple.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>What file formats can be merged?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>UnificarPDF.com is built specifically for combining PDF files. It doesn’t convert other formats like Word, Excel, or images into PDF.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Does we upload large PDF files?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Yes, the tool is designed to handle both small documents and larger multi-page PDFs without compromising formatting or quality.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Can I export the merged file in different formats?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>The merged output is delivered as a single PDF file, ready for download, sharing, or printing.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Can I rearrange pages before merging?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Yes, once your files are uploaded you can drag and reorder them to set the exact page sequence before combining.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Can UnificarPDF.com detect and organize multiple files at once?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Yes! The tool lets you upload several PDFs together, automatically listing them so you can arrange the merge order visually.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Can I merge PDFs in any language?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Yes, the tool supports merging PDFs in any language, preserving the text and formatting.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Can I merge PDF files on mobile devices?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Yes, UnificarPDF.com is fully responsive and works seamlessly on desktops, tablets, and mobile devices.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Is UnificarPDF.com suitable for business and academic use?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Absolutely. It’s ideal for combining reports, invoices, contracts, research papers, and assignment pages into clear, organized documents.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Is my data secure when merging PDFs?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Yes, your data is secure when using UnificarPDF.com. We implement industry-standard security measures to protect your files during the merging process.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>How is UnificarPDF.com different from Adobe Acrobat for merging?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>UnificarPDF.com offers a user-friendly, web-based solution for merging PDFs without the need for software installation or account creation. Unlike Adobe Acrobat, which requires a paid subscription and desktop software, UnificarPDF.com provides a free, accessible alternative that works directly in your browser.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Can I merge PDFs locally without an internet connection? </span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>No, this tool processes files on the server, so an internet connection is required. For fully offline merging, a desktop tool would be needed instead.</p>
          </div>
        </div>
      </div>
     
    </div>
  </section>

  <section>
        <div class="isec-block__head">
      <h2 id="isec-why-title" class="isec-block__title">Common Combining Problems: Problems and Solutions</h2>

    </div>
    <div class="isec-table-wrap">
  <table class="isec-table">
    <thead>
      <tr>
        <th>Problem</th>
        <th>Solution</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>The files are not connecting correctly.</td>
        <td>Make sure all PDF files are not corrupted and re-upload any missing files.</td>
      </tr>

      <tr>
        <td>The merge button is not working.</td>
        <td>Refresh the page, disable browser extensions, or try using the latest version of Chrome.</td>
      </tr>

      <tr>
        <td>Incorrect file order.</td>
        <td>Manually reorder the files before merging them, or rename the files using numbers to keep them in the correct sequence.</td>
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

