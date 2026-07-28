---
layout: default
title: รวมไฟล์ PDF ออนไลน์ฟรี — รวม PDF หลายไฟล์เป็นเอกสารเดียว​
description: "อัปโหลดและจัดเรียงไฟล์ PDF ของคุณได้ง่าย ๆ จากนั้นดาวน์โหลดเป็นเอกสารเดียว รวดเร็ว ไม่จำกัดจำนวน และฟรี เครื่องมือรวม PDF ออนไลน์ไม่มีข้อจำกัด"
keywords: "รวม PDF, รวมไฟล์ PDF, แยกไฟล์ PDF, รวมไฟล์ PDF ออนไลน์, แยก PDF, บีบอัด PDF, แปลงไฟล์ PDF, Word เป็น PDF, Excel เป็น PDF, PowerPoint เป็น PDF, PDF เป็น JPG, JPG เป็น PDF"
ref: home
lang: th
permalink: /th/
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
  <h1 class="page-title" id="pageTitle">รวมไฟล์ PDF</h1>
  <p class="page-sub" id="pageSub">อัปโหลดไฟล์ของคุณ จัดเรียงลำดับ กดปุ่ม "รวม PDF" แล้วดาวน์โหลดไฟล์ PDF ที่รวมเสร็จแล้วได้เลย</p>

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
   <h2>ลากไฟล์ PDF มาที่นี่</h2>
<p>หรือคลิกปุ่มด้านล่างเพื่อเรียกดูข้อมูลเพิ่มเติม</p>
      <button class="btn-black" id="browseBtn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
        </svg>
 เลือกไฟล์
      </button>
        <p class="upload-note">
เมื่อคุณอัปโหลดไฟล์ คุณตกลงที่จะปฏิบัติตาม
  <a href="/th/terms-of-use/" target="_blank">ข้อกำหนดการใช้งาน</a>
และ   <a href="/th/privacy-policy/" target="_blank">นโยบายความเป็นส่วนตัว</a>.
</p> 
    </div>
    <input type="file" id="fileInput" multiple accept="application/pdf" hidden>

  
  </div>

  <!-- UPLOADED STATE -->
  <div id="uploadedState">
    <div class="toolbar">
      <div class="toolbar-left">
        <span class="toolbar-title">ไฟล์ที่จะรวมเข้าด้วยกัน</span>
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
          </svg>เพิ่มไฟล์ PDF
        </button>
        <button class="btn-merge-top" id="mergeBtnTop" onclick="mergePDFs()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M8 6H5a2 2 0 00-2 2v8a2 2 0 002 2h3M16 6h3a2 2 0 012 2v8a2 2 0 01-2 2h-3M12 3v18"/>
          </svg>
รวมไฟล์ PDF
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
         การรวมไฟล์ PDF หลายไฟล์เป็นไฟล์เดียวทำได้ง่ายมากด้วยเครื่องมือของเรา ไม่ต้องเสียเวลารวมไฟล์ PDF ด้วยมืออีกต่อไป
    </p> 
    <p class="isec-card__text">
      เครื่องมือรวม PDF ของเราเป็นเครื่องมือออนไลน์ฟรีที่ช่วยให้คุณรวมไฟล์ PDF ตั้งแต่สองไฟล์ขึ้นไปเข้าด้วยกันได้ทันที
      โดยไม่ลดทอนคุณภาพของไฟล์
    </p>

    <p class="isec-card__text">
      เครื่องมือนี้ใช้เทคโนโลยีขั้นสูงในการรวมไฟล์ PDF ของคุณได้อย่างรวดเร็ว ง่ายดาย และปลอดภัยเพียงคลิกเดียว รวมหน้า PDF จัดระเบียบไฟล์
      PDF และสร้างไฟล์ PDF คุณภาพสูงแบบออนไลน์ได้ทุกที่ทุกเวลา
    </p>
  </section>

<section>
   <figure class="isec-media"> 
    <img src="/assets/img/unir.webp"
         alt="รวมไฟล์ PDF หลายไฟล์เป็นไฟล์เดียวได้ทันที"
         loading="lazy"
         width="710"
         height="350">

    <figcaption>
        รวมไฟล์ PDF หลายไฟล์เป็นไฟล์เดียวได้ทันที
    </figcaption>
</figure>
</section>

  <section class="isec-block isec-articles" aria-labelledby="isec-why-title">
    <p class="isec-card__text">
       เมื่อมีไฟล์ PDF หลายร้อยไฟล์อยู่ในเครื่องจากงานโรงเรียน งานออฟฟิศ งานมหาวิทยาลัย เอกสารธุรกิจ หรืองานสายอาชีพ อาจทำให้จัดการเอกสารสำคัญได้ยาก
       ไฟล์เหล่านี้อาจหายหรือปะปนกับไฟล์ที่ไม่จำเป็นได้ง่าย ๆ หากไม่จัดระเบียบไว้ตั้งแต่แรก


    </p> 
    <p class="isec-card__text">
     แทนที่จะเก็บไฟล์ PDF หลายไฟล์แยกกัน การรวมไฟล์เหล่านั้นเป็น PDF ไฟล์เดียวจะช่วยให้จัดการเอกสารได้ดีขึ้น แชร์ได้ง่ายขึ้น เข้าถึงได้เร็วขึ้น และเก็บรักษาได้ปลอดภัยกว่า
     การรวมไฟล์ PDF ไว้ในเอกสารเดียวยังช่วยประหยัดพื้นที่จัดเก็บ เพิ่มประสิทธิภาพการทำงาน และทำให้ไฟล์สำคัญเป็นระเบียบเรียบร้อย


    </p>

  </section>


  <section class="isec-block isec-why" aria-labelledby="isec-why-title">
    <div class="isec-block__head">
      <h2 id="isec-why-title" class="isec-block__title">ทำไมต้องใช้ UnificarPDF.com ในการรวมไฟล์ PDF?</h2>
    </div>
    <div class="isec-card-grid">

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="12" height="16" rx="2"/><path d="M4 6v14a2 2 0 0 0 2 2h10"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="12" height="16" rx="2"/><path d="M4 6v14a2 2 0 0 0 2 2h10"/></svg>
        </span>
        <h3 class="isec-card__title">รวมไฟล์รวดเร็ว</h3>
        <p class="isec-card__text">เครื่องมือรวมไฟล์ออนไลน์ความเร็วสูงนี้เหมาะสำหรับการรวมรายงาน ใบแจ้งหนี้ หน้าเอกสารที่สแกน และเอกสารธุรกิจโดยไม่ต้องรอนาน ช่วยเพิ่มประสิทธิภาพการทำงานและทำให้จัดการไฟล์ดิจิทัลได้ง่ายขึ้น</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-purple" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.12 15.88"/><path d="M14.47 14.48 20 20"/><path d="M8.12 8.12 12 12"/></svg></span>
        <span class="isec-card__icon isec-icon-purple" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.12 15.88"/><path d="M14.47 14.48 20 20"/><path d="M8.12 8.12 12 12"/></svg>
        </span>
        <h3 class="isec-card__title">ใช้งานง่าย</h3>
        <p class="isec-card__text">อินเทอร์เฟซแบบลากแล้ววางที่ใช้งานง่ายช่วยให้คุณรวมไฟล์ PDF ได้โดยไม่ต้องมีความรู้ด้านเทคนิค อัปโหลดเอกสาร จัดเรียงหน้าใหม่ และสร้าง PDF ที่เป็นระเบียบเรียบร้อยได้ในไม่กี่คลิก</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-teal" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M12 18v-6"/><path d="M9 15h6"/></svg></span>
        <span class="isec-card__icon isec-icon-teal" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M12 18v-6"/><path d="M9 15h6"/></svg>
        </span>
        <h3 class="isec-card__title">ประมวลผลไฟล์อย่างปลอดภัย</h3>
        <p class="isec-card__text">เอกสารทุกไฟล์ที่อัปโหลดจะถูกประมวลผลอย่างปลอดภัย เครื่องมือนี้ออกแบบมาโดยคำนึงถึงการปกป้องความเป็นส่วนตัว จึงเป็นทางเลือกที่น่าเชื่อถือสำหรับการรวมไฟล์ที่มีข้อมูลอ่อนไหว เช่น สัญญา รายงานการเงิน และเอกสารส่วนบุคคล ไฟล์จะถูกลบออกโดยอัตโนมัติหลังการประมวลผล</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
        </span>
        <h3 class="isec-card__title">ไฟล์ PDF คุณภาพสูง</h3>
        <p class="isec-card__text">เครื่องมือรวม PDF ของเรารักษารูปแบบเดิม ความคมชัดของภาพ และคุณภาพข้อความไว้ครบถ้วนเมื่อรวมไฟล์ ไม่ว่าจะเป็นรายงานธุรกิจ สรุปการเรียน หรือเอกสารที่สแกน ไฟล์ที่รวมเสร็จแล้วจะยังคงความเป็นมืออาชีพ ชัดเจน และพร้อมแชร์หรือพิมพ์ได้ทันที</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-purple" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/></svg></span>
        <span class="isec-card__icon isec-icon-purple" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/></svg>
        </span>
        <h3 class="isec-card__title">ใช้งานได้บนทุกระบบปฏิบัติการ</h3>
        <p class="isec-card__text">เครื่องมือรวม PDF ออนไลน์นี้ใช้งานได้บน Windows, Mac, Linux, Android และ iPhone โดยไม่ต้องติดตั้งโปรแกรมใด ๆ</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-teal" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg></span>
        <span class="isec-card__icon isec-icon-teal" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>
        </span>
        <h3 class="isec-card__title">เครื่องมือฟรีและใช้งานได้จริง</h3>
        <p class="isec-card__text"> ผู้ใช้สามารถรวมเอกสารออนไลน์ได้โดยไม่มีค่าใช้จ่ายและไม่ต้องสมัครสมาชิก เป็นทางออกที่ใช้งานได้จริงสำหรับการรวมงานที่ได้รับมอบหมาย ใบแจ้งหนี้ อีบุ๊ก เรซูเม่ และไฟล์ที่สแกนเป็น PDF ไฟล์เดียว ใช้งานออนไลน์ได้ทุกที่ทุกเวลา</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.99 6.57 2.57L21 8"/><path d="M21 3v5h-5"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.99 6.57 2.57L21 8"/><path d="M21 3v5h-5"/></svg>
        </span>
        <h3 class="isec-card__title">รักษาลำดับหน้าเดิมไว้</h3>
        <p class="isec-card__text">ลำดับหน้าของทุกไฟล์จะถูกรักษาไว้เมื่อคุณรวมไฟล์ หรือคุณจะจัดเรียงใหม่ตามที่ต้องการก็ได้</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-purple" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14h6v6"/><path d="M20 10h-6V4"/><path d="m14 10 7-7"/><path d="m3 21 7-7"/></svg></span>
        <span class="isec-card__icon isec-icon-purple" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14h6v6"/><path d="M20 10h-6V4"/><path d="m14 10 7-7"/><path d="m3 21 7-7"/></svg>
        </span>
        <h3 class="isec-card__title">รวมไฟล์ได้ไม่จำกัด ไม่มีลิมิตรายวัน </h3>
        <p class="isec-card__text">ไม่มีการจำกัดจำนวนครั้งที่ใช้เครื่องมือต่อวัน วันนี้รวมไฟล์เดียว พรุ่งนี้รวมห้าสิบไฟล์ก็ได้ เครื่องมือยังคงฟรีและใช้งานได้ทุกครั้ง  </p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-teal" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg></span>
        <span class="isec-card__icon isec-icon-teal" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg>
        </span>
        <h3 class="isec-card__title">ไม่มีลายน้ำบนไฟล์ผลลัพธ์</h3>
        <p class="isec-card__text">ไฟล์ PDF ที่รวมออกมาสะอาด ไม่มีตราสัญลักษณ์ ตราประทับ หรือข้อความลายน้ำใด ๆ แทรกอยู่ในไฟล์ พร้อมส่งให้ลูกค้าหรือยื่นใช้งานได้ทันที </p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>
        </span>
        <h3 class="isec-card__title">ไม่แทรกข้อมูลเมตาลงในไฟล์ผลลัพธ์</h3>
        <p class="isec-card__text">เครื่องมือนี้ไม่เพิ่มข้อมูลเมตาแฝงหรือข้อมูลติดตามใด ๆ ลงในไฟล์ PDF ที่รวมแล้ว ไฟล์ผลลัพธ์จึงสะอาดและปราศจากข้อมูลเพิ่มเติมที่อาจกระทบต่อความเป็นส่วนตัวหรือความปลอดภัย</p>
      </div>
    


    </div>
  </section>

  <section class="isec-block isec-how" aria-labelledby="isec-how-title">
    <div class="isec-block__head">
      <h2 id="isec-how-title" class="isec-block__title">วิธีรวมไฟล์ PDF ให้เป็นไฟล์เดียว?</h2>
      <p class="isec-block__subtitle">คุณไม่ต้องทำอะไรมากในการรวมไฟล์ PDF เป็นเอกสารเดียว หากยังไม่รู้วิธีรวมไฟล์ PDF เพียงทำตามขั้นตอนง่าย ๆ ดังนี้:</p>
    </div>
    <ol class="isec-steps">
      <li>
        <span class="isec-steps__num">1</span>
        <div class="isec-steps__body"> อัปโหลดไฟล์ PDF ของคุณ หรือลากแล้ววางไฟล์ลงในเครื่องมือรวม PDF</div>
      </li>
     <li> 
        <span class="isec-steps__num">2</span>
        <div class="isec-steps__body"> จัดเรียงหรือสลับลำดับหน้า PDF หรือไฟล์ตามต้องการ</div>
      </li>
      <li>
        <span class="isec-steps__num">3</span>
        <div class="isec-steps__body">คลิกปุ่ม "รวม PDF"</div>
      </li>
      <li>
        <span class="isec-steps__num">4</span>
        <div class="isec-steps__body">รอสักครู่ในขณะที่เครื่องมือประมวลผลไฟล์ของคุณอย่างปลอดภัย</div>
      </li>
      <li>
        <span class="isec-steps__num">5</span>
        <div class="isec-steps__body">ดาวน์โหลดไฟล์ PDF ที่รวมเสร็จแล้วได้ทันที หรือแชร์ออนไลน์</div>
      </li>
    </ol>
  </section>

  <section class="isec-block isec-usecases" aria-labelledby="isec-usecases-title">
    <div class="isec-block__head">
      <h2 id="isec-usecases-title" class="isec-block__title">เครื่องมือรวมไฟล์ PDF สำหรับทุกการใช้งาน</h2>
      <p class="isec-block__subtitle">มาดูกันว่าเครื่องมือรวม PDF ของเราช่วยจัดระเบียบเอกสาร PDF ของคุณได้อย่างไร</p>
    </div>
    <div class="isec-card-grid isec-card-grid--use">

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        </span>
        <h3 class="isec-card__title">PDF สำหรับธุรกิจ</h3>
        <p class="isec-card__text">ธุรกิจต่าง ๆ ใช้เครื่องมือรวม PDF เพื่อรวมใบแจ้งหนี้ สัญญา รายงาน และงานนำเสนอเป็นไฟล์เดียวที่เป็นระเบียบ ทำให้แชร์เอกสารได้ง่ายขึ้นและเก็บบันทึกสำคัญไว้ในที่เดียว</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-purple" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/></svg></span>
        <span class="isec-card__icon isec-icon-purple" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/></svg>
        </span>
        <h3 class="isec-card__title">PDF สำหรับนักเรียนนักศึกษา</h3>
        <p class="isec-card__text">นักเรียนนักศึกษาสามารถรวมโน้ตย่อ งานวิจัย และหน้าเอกสารงานที่ได้รับมอบหมายเป็น PDF ไฟล์เดียวก่อนส่งงานออนไลน์ ช่วยให้ได้เอกสารที่สะอาดและดูเป็นมืออาชีพ</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-teal" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M5 7h14"/><path d="m5 7-3 6a3 3 0 0 0 6 0Z"/><path d="m19 7-3 6a3 3 0 0 0 6 0Z"/></svg></span>
        <span class="isec-card__icon isec-icon-teal" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M5 7h14"/><path d="m5 7-3 6a3 3 0 0 0 6 0Z"/><path d="m19 7-3 6a3 3 0 0 0 6 0Z"/></svg>
        </span>
        <h3 class="isec-card__title">ไฟล์ที่สแกน</h3>
        <p class="isec-card__text">เมื่อเอกสารถูกสแกนทีละหน้า เครื่องมือรวม PDF สามารถรวมหน้าที่สแกนทั้งหมดเป็นไฟล์เดียวได้ ซึ่งมีประโยชน์สำหรับเอกสารประจำตัว แบบฟอร์ม และเอกสารในสำนักงาน</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.5 6.8-3.9"/><path d="m8.6 13.5 6.8 3.9"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.5 6.8-3.9"/><path d="m8.6 13.5 6.8 3.9"/></svg>
        </span>
        <h3 class="isec-card__title">บันทึกการเดินทางและเอกสารส่วนตัว</h3>
        <p class="isec-card__text">การรวมตั๋วเดินทาง ใบจองโรงแรม หนังสือเดินทาง และเอกสารการเดินทางเป็น PDF ไฟล์เดียวเป็นเรื่องปกติเพื่อให้เข้าถึงได้ง่ายขณะเดินทาง ช่วยลดความยุ่งยากในการจัดการหลายไฟล์</p>
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
        <h3 class="isec-card__title">สร้างพอร์ตโฟลิโอและเรซูเม่</h3>
        <p class="isec-card__text"> ผู้หางานและนักออกแบบใช้เครื่องมือรวม PDF เพื่อรวมเรซูเม่ จดหมายสมัครงาน ใบรับรอง
          และตัวอย่างผลงานเป็นเอกสารมืออาชีพเดียวที่แชร์ได้ง่าย</p>
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
          <h3 class="isec-card__title">เอกสารด้านสุขภาพและการแพทย์</h3>
          <p class="isec-card__text">ผู้ป่วยและคลินิกรวมใบสั่งยา ผลตรวจแล็บ แบบฟอร์มประกัน และประวัติการรักษาเป็นไฟล์เดียว ทำให้พกพาหรือแชร์บันทึกทางการแพทย์ฉบับสมบูรณ์กับแพทย์หรือบริษัทประกันได้ง่ายขึ้น
          </p>
        </div>

    </div>
  </section>

  <section class="isec-block isec-faq" aria-labelledby="isec-faq-title">
    <div class="isec-block__head">
      <h2 id="isec-faq-title" class="isec-block__title">คำถามที่พบบ่อย</h2>
      <p class="isec-block__subtitle">มีคำถามใช่ไหม? เรามีคำตอบ ค้นหาทุกสิ่งที่คุณอยากรู้เกี่ยวกับเครื่องมือรวม PDF ของเรา</p>
    </div>
    <p class="isec-faq__eyebrow">เริ่มต้นใช้งาน</p>
    <div class="isec-faq__list">
      <div class="isec-faq__item is-open">
        <button type="button" class="isec-faq__summary" aria-expanded="true">
          <span>การรวม PDF คืออะไร?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>การรวม PDF คือกระบวนการนำไฟล์ PDF ตั้งแต่สองไฟล์ขึ้นไปมารวมเป็นเอกสารเดียวที่เป็นหนึ่งเดียว UnificarPDF.com ให้บริการรวมไฟล์ที่รวดเร็ว ปลอดภัย และอัตโนมัติผ่านเบราว์เซอร์ของคุณโดยตรง</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>รวมไฟล์ PDF ออนไลน์ได้อย่างไร?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>คุณสามารถรวมไฟล์ PDF ออนไลน์ได้โดยอัปโหลดเอกสารไปที่ UnificarPDF.com เครื่องมือจะจัดเรียงและรวมไฟล์ให้เป็นไฟล์เดียวภายในไม่กี่วินาที</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>ต้องติดตั้งโปรแกรมเพื่อรวมไฟล์ PDF ไหม?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>ไม่ต้องเลย คุณสามารถรวมไฟล์ PDF ออนไลน์ได้โดยอัปโหลดเอกสารไปที่ UnificarPDF.com เครื่องมือจะจัดเรียงและรวมไฟล์ให้เป็นไฟล์เดียวภายในไม่กี่วินาที</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>ต้องสมัครสมาชิกไหม?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>ไม่ต้อง! คุณเริ่มรวมไฟล์ได้ทันทีโดยไม่ต้องสมัคร ไม่ต้องใช้อีเมล หรือสร้างบัญชีใด ๆ แค่อัปโหลดไฟล์แล้วเริ่มใช้งานได้เลย ง่ายแค่นี้</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>รวมไฟล์ประเภทไหนได้บ้าง?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>UnificarPDF.com สร้างขึ้นมาเฉพาะสำหรับการรวมไฟล์ PDF โดยเฉพาะ ไม่รองรับการแปลงไฟล์ประเภทอื่น เช่น Word, Excel หรือรูปภาพ ให้เป็น PDF</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>รองรับการอัปโหลดไฟล์ PDF ขนาดใหญ่ไหม?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>รองรับครับ เครื่องมือนี้ออกแบบมาให้รองรับทั้งเอกสารขนาดเล็กและไฟล์ PDF หลายหน้าขนาดใหญ่ โดยไม่กระทบต่อรูปแบบหรือคุณภาพของไฟล์</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>ส่งออกไฟล์ที่รวมแล้วเป็นรูปแบบอื่นได้ไหม?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>ไฟล์ผลลัพธ์ที่รวมแล้วจะถูกส่งออกเป็นไฟล์ PDF ไฟล์เดียว พร้อมสำหรับดาวน์โหลด แชร์ หรือพิมพ์</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>จัดเรียงหน้าก่อนรวมไฟล์ได้ไหม?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>ได้ครับ เมื่ออัปโหลดไฟล์แล้ว คุณสามารถลากและจัดเรียงลำดับหน้าได้ตามที่ต้องการก่อนรวมไฟล์</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>UnificarPDF.com ตรวจจับและจัดระเบียบไฟล์หลายไฟล์พร้อมกันได้ไหม?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>ได้แน่นอน! เครื่องมือนี้ให้คุณอัปโหลดไฟล์ PDF หลายไฟล์พร้อมกัน แสดงรายการไฟล์อัตโนมัติเพื่อให้คุณจัดลำดับการรวมได้ด้วยภาพที่มองเห็นชัดเจน</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>รวมไฟล์ PDF ภาษาไหนก็ได้ไหม?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>ได้ครับ เครื่องมือรองรับการรวมไฟล์ PDF ได้ทุกภาษา โดยยังคงรักษาข้อความและรูปแบบเดิมไว้</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>รวมไฟล์ PDF บนมือถือได้ไหม?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>ได้ครับ UnificarPDF.com รองรับการแสดงผลทุกขนาดหน้าจอ ใช้งานได้ลื่นไหลทั้งบนคอมพิวเตอร์ แท็บเล็ต และมือถือ</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>UnificarPDF.com เหมาะกับการใช้งานด้านธุรกิจและการศึกษาไหม?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>เหมาะเลยครับ ไม่ว่าจะเป็นการรวมรายงาน ใบแจ้งหนี้ สัญญา งานวิจัย หรือหน้าเอกสารงานที่ได้รับมอบหมาย ให้เป็นเอกสารที่ชัดเจนและเป็นระเบียบ</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>ข้อมูลของฉันปลอดภัยไหมตอนรวมไฟล์ PDF?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>ปลอดภัยครับ ข้อมูลของคุณจะปลอดภัยเมื่อใช้ UnificarPDF.com เรานำมาตรการความปลอดภัยระดับมาตรฐานอุตสาหกรรมมาใช้เพื่อปกป้องไฟล์ของคุณระหว่างการรวมไฟล์</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>UnificarPDF.com ต่างจาก Adobe Acrobat สำหรับการรวม PDF อย่างไร?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>UnificarPDF.com มอบโซลูชันแบบเว็บที่ใช้งานง่ายสำหรับรวมไฟล์ PDF โดยไม่ต้องติดตั้งโปรแกรมหรือสมัครบัญชี ต่างจาก Adobe Acrobat ที่ต้องสมัครสมาชิกแบบเสียเงินและติดตั้งโปรแกรมบนเครื่อง UnificarPDF.com เป็นทางเลือกฟรีที่เข้าถึงได้ง่าย ใช้งานผ่านเบราว์เซอร์ได้โดยตรง</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>รวมไฟล์ PDF แบบออฟไลน์โดยไม่ต่ออินเทอร์เน็ตได้ไหม? </span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>ไม่ได้ครับ เครื่องมือนี้ประมวลผลไฟล์บนเซิร์ฟเวอร์ จึงจำเป็นต้องต่ออินเทอร์เน็ต หากต้องการรวมไฟล์แบบออฟไลน์ทั้งหมด จะต้องใช้โปรแกรมเดสก์ท็อปแทน</p>
          </div>
        </div>
      </div>
     
    </div>
  </section>

  <section>
        <div class="isec-block__head">
      <h2 id="isec-why-title" class="isec-block__title">ปัญหาการรวมไฟล์ที่พบบ่อย: ปัญหาและวิธีแก้</h2>

    </div>
    <div class="isec-table-wrap">
  <table class="isec-table">
    <thead>
      <tr>
        <th>ปัญหา</th>
        <th>วิธีแก้</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>ไฟล์เชื่อมต่อกันไม่ถูกต้อง</td>
        <td>ตรวจสอบให้แน่ใจว่าไฟล์ <a href="https://en.wikipedia.org/wiki/PDF" class="alink">PDF</a> ทั้งหมดไม่เสียหาย และอัปโหลดไฟล์ที่หายไปใหม่</td>
      </tr>

      <tr>
        <td>ปุ่มรวมไฟล์ไม่ทำงาน</td>
        <td>รีเฟรชหน้าเว็บ ปิดใช้งานส่วนขยายเบราว์เซอร์ หรือลองใช้ Chrome เวอร์ชันล่าสุด</td>
      </tr>

      <tr>
        <td>ลำดับไฟล์ไม่ถูกต้อง</td>
        <td>จัดเรียงไฟล์ใหม่ด้วยตนเองก่อนรวมไฟล์ หรือเปลี่ยนชื่อไฟล์โดยใส่ตัวเลขเพื่อให้อยู่ในลำดับที่ถูกต้อง</td>
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
  addBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>เพิ่มไฟล์เพิ่มเติม`;
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

