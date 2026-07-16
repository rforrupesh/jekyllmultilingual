---
layout: default
title: Separa las páginas de un PDF por rangos - Dividir PDF online
description: Free browser-based PDF tools.
thumbnail: /assets/img/unir.webp
lang: es
ref: splitpdf
permalink: /dividir-pdf/

head_style: |
    /* ── LAYOUT ── */
    .app-shell {
      display: flex;
      flex: 1;
      min-height: 0;
      overflow: hidden;
    }

    /* ── UPLOAD STATE ── */
    #uploadState {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 20px 20px;
      overflow-y: auto;   /* scroll within the panel */
    }
    .upload-inner { width: 100%; max-width: 920px; }
    .upload-inner h1 { font-size: 22px; font-weight: 700; margin-bottom: 4px; }
    .upload-inner p.sub { font-size: 13px; color: var(--text-muted); margin-bottom: 24px; }

    .drop-zone {
      background: #c41318;
      border: 1px dashed #ffffff;
      border-radius: 14px;
      padding: 56px 32px;
      text-align: center;
      cursor: pointer;
      transition: border-color .2s, background .2s;
      user-select: none;
    }
    .drop-zone:hover, .drop-zone.dragover { border-color: #3b82f6;
       background: #C62828; }
    .drop-zone .dz-icon {
      width: 52px; height: 52px;
      background: var(--white); border: 1px solid var(--border);
      border-radius: 12px;
      display: flex; align-items: center; justify-content: center;
      margin: 0 auto 16px;
      box-shadow: var(--shadow-sm);
    }
    .drop-zone .dz-icon svg { width: 24px; height: 24px; stroke: #555; }
    .drop-zone h2 { font-size: 17px; font-weight: 600; margin-bottom: 6px;color: #ffffff; }
    .drop-zone p { font-size: 13px; color: #ffffff; margin-bottom: 22px; }
    .btn-blue {
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
    .btn-blue:hover { background: var(--blue-hover); }
    .btn-blue svg { width: 14px; height: 14px; }
    .upload-note { margin-top: 14px; font-size: 11px;   color: #ffffff; } 
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

    /* ── UPLOADED STATE ── */
    #uploadedState {
      display: none;
      flex: 1;
      min-height: 0;
      overflow: hidden;
      height: 100%;        /* fill the full viewport row */
    }

    /* ─────────────────────────────────────
       SIDEBAR  — flex column, fixed footer
       ───────────────────────────────────── */
    .sidebar {
      width: var(--sidebar-w);
      flex-shrink: 0;
      background: var(--white);
      border-right: 1px solid var(--border);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      height: 100%;          /* stretch to full row height */
      position: relative;    /* anchor for absolutely-positioned children if needed */
    }

    .sidebar-header {
      padding: 16px 18px 14px;
      border-bottom: 1px solid var(--border);
      display: flex; align-items: center; justify-content: space-between;
      flex-shrink: 0;
    }
    .sidebar-header .file-info { min-width: 0; }
    .sidebar-header .fname {
      font-size: 13px; font-weight: 600;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      max-width: 180px;
    }
    .sidebar-header .fmeta { display: flex; gap: 6px; margin-top: 3px; }

    .badge {
      background: #ebebea; color: var(--text-muted);
      font-size: 10px; font-weight: 600;
      padding: 2px 7px; border-radius: 20px;
    }
    .btn-sm {
      background: var(--white); color: #444;
      border: 1px solid var(--border); border-radius: 6px;
      padding: 5px 11px;
      font-family: inherit; font-size: 11px; font-weight: 500;
      cursor: pointer; transition: background .15s;
      display: inline-flex; align-items: center; gap: 5px;
      white-space: nowrap;
    }
    .btn-sm:hover { background: var(--bg); }

    /* TABS */
    .tabs {
      display: flex;
      border-bottom: 1px solid var(--border);
      padding: 0 18px;
      flex-shrink: 0;
    }
    .tab-btn {
      background: none; border: none; border-bottom: 2px solid transparent;
      padding: 10px 12px; font-family: inherit;
      font-size: 13px; font-weight: 500;
      color: var(--text-muted); cursor: pointer;
      transition: color .15s, border-color .15s;
      margin-bottom: -1px;
    }
    .tab-btn.active { color: var(--blue); border-bottom-color: var(--blue); }

    /* ── Scrollable panel body ── */
    .sidebar-scroll {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .panel-body {
      padding: 18px;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    /* ── STICKY FOOTER inside sidebar — always visible on desktop ── */
    .sidebar-footer {
      flex-shrink: 0;               /* never compressed */
      padding: 14px 18px 18px;
      background: var(--white);
      display: flex;
      flex-direction: column;
      gap: 8px;
      box-shadow: 0 -4px 16px rgba(0,0,0,.06);  /* subtle lift to show it's fixed */
    }

    .field-label {
      font-size: 10px; font-weight: 700; letter-spacing: .06em;
      text-transform: uppercase; color: var(--text-muted);
      margin-bottom: 6px;
    }

    .select-wrap { position: relative; }
    .select-wrap select {
      width: 100%;
      font-size: 13px; font-family: inherit; font-weight: 500;
      border: 1px solid var(--border); border-radius: 8px;
      padding: 9px 36px 9px 12px;
      background: var(--white); color: var(--text);
      cursor: pointer; appearance: none; -webkit-appearance: none;
    }
    .select-wrap select:focus { outline: none; border-color: var(--blue); box-shadow: 0 0 0 3px rgba(37,99,235,.12); }
    .select-wrap::after {
      content: '';
      position: absolute; right: 12px; top: 50%;
      transform: translateY(-50%);
      width: 0; height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      pointer-events: none;
    }

    .range-row { display: flex; align-items: center; gap: 8px; }
    .range-row label { font-size: 12px; color: var(--text-muted); white-space: nowrap; }
    .num-input {
      width: 70px;
      font-size: 13px; font-family: inherit; font-weight: 500;
      border: 1px solid var(--border); border-radius: 7px;
      padding: 8px 10px; background: var(--white); color: var(--text);
    }
    .num-input:focus { outline: none; border-color: var(--blue); box-shadow: 0 0 0 3px rgba(37,99,235,.12); }
    .range-del {
      background: none; border: 1px solid var(--border);
      border-radius: 6px; padding: 7px;
      cursor: pointer; color: var(--text-light);
      display: flex; align-items: center;
      transition: color .15s, border-color .15s, background .15s;
    }
    .range-del:hover { color: var(--red); border-color: #fecaca; background: var(--red-light); }

    .info-box {
      background: var(--blue-light);
      border: 1px solid var(--blue-mid);
      border-radius: 8px;
      padding: 11px 13px;
      font-size: 12px; color: #1e40af; line-height: 1.55;
    }

    /* ── RESULT ACTION BUTTONS ── */

    .btn-dl {
      width: 100%;
      background: var(--blue); color: #fff;
      border: none; border-radius: 10px;
      padding: 13px 16px;
      font-family: inherit; font-size: 14px; font-weight: 700;
      cursor: pointer; transition: background .15s, opacity .15s;
      display: flex; align-items: center; justify-content: center; gap: 8px;
      box-shadow: 0 2px 8px rgba(22,163,74,.25);
      position: relative; overflow: hidden;
    }
    .btn-dl:hover:not(:disabled) { background: var(--blue-hover); }
    .btn-dl:disabled { opacity: .75; cursor: default; }
    .btn-dl svg { width: 15px; height: 15px; transition: opacity .15s; }

    .btn-share {
      width: 100%;
      background: var(--white); color: var(--blue);
      border: 1.5px solid var(--blue); border-radius: 10px;
      padding: 11px 16px;
      font-family: inherit; font-size: 14px; font-weight: 600;
      cursor: pointer; transition: background .15s, opacity .15s;
      display: flex; align-items: center; justify-content: center; gap: 8px;
      position: relative; overflow: hidden;
    }
    .btn-share:hover:not(:disabled) { background: var(--blue-light); }
    .btn-share:disabled { opacity: .75; cursor: default; }
    .btn-share svg { width: 14px; height: 14px; transition: opacity .15s; }

    /* spinner inside buttons */
    .btn-spinner {
      display: none;
      width: 16px; height: 16px; flex-shrink: 0;
      border-radius: 50%;
      border: 2.5px solid rgba(255,255,255,.35);
      animation: spin .6s linear infinite;
    }
    .btn-share .btn-spinner {
      border-color: rgba(37,99,235,.25);
    }
    .btn-dl.loading .btn-spinner,
    .btn-share.loading .btn-spinner { display: block; }
    .btn-dl.loading .btn-icon,
    .btn-share.loading .btn-icon { display: none; }
    .btn-dl.loading,
    .btn-share.loading { pointer-events: none; }

    /* selection helpers */
    .sel-helpers { display: flex; gap: 6px; flex-wrap: wrap; }

    /* grid panel */
    .grid-panel {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      background: var(--bg);
    }
    .grid-toolbar {
      padding: 12px 20px;
      display: flex; align-items: center; justify-content: space-between;
      gap: 10px; flex-wrap: wrap;
      background: var(--white);
      border-bottom: 1px solid var(--border);
      flex-shrink: 0;
    }
    .grid-toolbar-left { display: flex; align-items: center; gap: 8px; }
    .grid-title { font-size: 13px; font-weight: 600; }
    .zoom-track { display: flex; align-items: center; gap: 6px; }
    .zoom-track input[type=range] { width: 80px; accent-color: var(--blue); cursor: pointer; }
    .zoom-track span { font-size: 11px; color: var(--text-muted); min-width: 28px; }

    .page-grid-wrap {
      flex: 1;
      overflow-y: auto;
      padding: 20px;
    }
    #pageGrid {
      display: grid;
      gap: 14px;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    }

    /* page card */
    .page-card {
      background: var(--white);
      border: 2px solid var(--border);
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      user-select: none;
      touch-action: pan-x pan-y;
      transition: border-color .15s, box-shadow .15s, opacity .15s;
      display: flex; flex-direction: column;
      overflow: hidden;
      will-change: transform;
      contain: layout style;
    }
    .page-card:hover { border-color: #93c5fd; box-shadow: var(--shadow-md); }
    .page-card.selected { border-color: var(--blue); box-shadow: 0 0 0 3px rgba(37,99,235,.18); }
    .page-card.deleted { opacity: .35; }
    .page-card.is-source { opacity: .3; }
    /* Hide selection visuals when not on the Selection tab — CSS only, no JS loop */
    #pageGrid:not(.tab-selection) .page-card.selected { border-color: var(--border); box-shadow: none; }
    #pageGrid:not(.tab-selection) .page-card .badge-check { display: none !important; }
    /* on non-selection tabs, cards are not click-selectable */
    body.tab-range .page-card,
    body.tab-skip  .page-card { cursor: default; }

    .card-actions {
      position: absolute; top: 6px; right: 6px;
      display: flex; flex-direction: column; gap: 4px;
      z-index: 2;
    }
    .card-btn {
      width: 28px; height: 28px;
      background: var(--white);
      border: 1px solid var(--border);
      border-radius: 50%;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      box-shadow: var(--shadow-sm);
      transition: background .15s, border-color .15s, color .15s;
      color: var(--text-muted);
    }
    .card-btn svg { width: 13px; height: 13px; }
    .card-btn.del-btn { color: var(--red); border-color: #fecaca; background: #fff5f5; }
    .card-btn.del-btn:hover { background: var(--red); color: #fff; }
    .card-btn.rot-btn:hover { background: var(--blue); color: #fff; border-color: var(--blue); }

    .card-zoom-btn {
      position: absolute; bottom: 30px; right: 6px;
      width: 26px; height: 26px;
      background: rgba(255,255,255,.9);
      border: 1px solid var(--border);
      border-radius: 50%;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      box-shadow: var(--shadow-sm);
      color: var(--text-muted);
      z-index: 2;
      opacity: 0;
      transition: opacity .15s;
    }
    .page-card:hover .card-zoom-btn { opacity: 1; }
    .card-zoom-btn svg { width: 12px; height: 12px; }

    .card-canvas-wrap {
      width: 100%;
      background: #f8f9fb;
      display: flex; align-items: center; justify-content: center;
      min-height: 120px;
      overflow: hidden;
    }
    .card-canvas-wrap canvas { width: 100%; height: auto; display: block; transition: transform .2s; }

    .card-label {
      padding: 6px 8px;
      text-align: center;
      font-size: 10px; font-weight: 700;
      letter-spacing: .06em; text-transform: uppercase;
      color: var(--text-muted);
      background: var(--white);
    }

    .badge-deleted {
      position: absolute; top: 6px; left: 6px;
      background: var(--red); color: #fff;
      font-size: 9px; font-weight: 700; letter-spacing: .04em;
      padding: 2px 6px; border-radius: 4px;
      text-transform: uppercase;
    }
    .badge-check {
      position: absolute; top: 6px; left: 6px;
      width: 20px; height: 20px; border-radius: 50%;
      background: var(--blue); color: #fff;
      font-size: 11px; font-weight: 700;
      display: flex; align-items: center; justify-content: center;
    }

    /* progress */
    .progress-bar-wrap {
      display: none;
      align-items: center;
      gap: 10px;
      padding: 10px 20px;
      background: var(--white);
      border-bottom: 1px solid var(--border);
      flex-shrink: 0;
    }
    .progress-bar-wrap.show { display: flex; }
    .spinner {
      width: 14px; height: 14px;
      border: 2px solid var(--border);
      border-radius: 50%;
      animation: spin .65s linear infinite;
      flex-shrink: 0;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .progress-text { font-size: 12px; color: var(--text-muted); }

    /* range highlight */
    .page-card.in-range { border-color: #60a5fa; background: #eff6ff; }
    .page-card.in-range .card-label { background: #dbeafe; color: var(--blue); font-weight: 700; }
    .page-card.range-start { border-color: var(--blue); border-left: 3px solid var(--blue); }
    .page-card.range-end   { border-color: var(--blue); border-right: 3px solid var(--blue); }

    /* skip highlight — red to indicate pages will be removed */
    .page-card.skip-highlight { border-color: #f87171; background: var(--red-light); }
    .page-card.skip-highlight .card-label { background: #fee2e2; color: var(--red); font-weight: 700; }

    /* preview modal */
    .preview-modal {
      display: none;
      position: fixed; inset: 0; z-index: 9000;
      align-items: center; justify-content: center;
    }
    .preview-modal.open { display: flex; }
    .preview-backdrop {
      position: absolute; inset: 0;
      background: rgba(15,20,40,.72);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
    }
    .preview-box {
      position: relative; z-index: 1;
      background: var(--white);
      border-radius: 14px;
      box-shadow: 0 24px 64px rgba(0,0,0,.28);
      max-width: min(680px, 92vw);
      width: 100%;
      display: flex; flex-direction: column;
      max-height: 90vh;
      overflow: hidden;
      animation: modalIn .2s ease;
    }
    @keyframes modalIn {
      from { opacity: 0; transform: scale(.94) translateY(10px); }
      to   { opacity: 1; transform: scale(1) translateY(0); }
    }
    .preview-header {
      display: flex; align-items: center; justify-content: space-between;
      padding: 14px 18px;
      border-bottom: 1px solid var(--border);
      flex-shrink: 0;
    }
    .preview-title { font-size: 14px; font-weight: 600; }
    .preview-nav { display: flex; align-items: center; gap: 8px; }
    .preview-nav-btn {
      width: 30px; height: 30px;
      background: var(--bg); border: 1px solid var(--border); border-radius: 7px;
      cursor: pointer; display: flex; align-items: center; justify-content: center;
      color: var(--text-muted); transition: background .15s, color .15s;
    }
    .preview-nav-btn:hover { background: var(--blue-light); color: var(--blue); border-color: #93c5fd; }
    .preview-nav-btn:disabled { opacity: .35; cursor: default; }
    .preview-nav-btn svg { width: 14px; height: 14px; }
    .preview-page-info { font-size: 12px; font-weight: 600; color: var(--text-muted); min-width: 60px; text-align: center; }
    .preview-close {
      width: 30px; height: 30px;
      background: none; border: 1px solid var(--border); border-radius: 7px;
      cursor: pointer; display: flex; align-items: center; justify-content: center;
      color: var(--text-muted); transition: background .15s, color .15s;
    }
    .preview-close:hover { background: var(--red-light); color: var(--red); border-color: #fecaca; }
    .preview-close svg { width: 14px; height: 14px; }
    .preview-canvas-wrap {
      flex: 1; overflow: auto;
      display: flex; align-items: flex-start; justify-content: center;
      padding: 20px;
      background: #f0f2f8;
    }
    .preview-canvas-wrap canvas {
      max-width: 100%;
      border-radius: 6px;
      box-shadow: 0 4px 24px rgba(0,0,0,.15);
    }
    .preview-footer {
      padding: 11px 18px;
      border-top: 1px solid var(--border);
      display: flex; align-items: center; gap: 10px;
      flex-shrink: 0;
      background: var(--white);
    }
    .preview-range-badge {
      display: inline-flex; align-items: center; gap: 5px;
      background: var(--blue-light); color: var(--blue);
      border: 1px solid var(--blue-mid);
      font-size: 11px; font-weight: 600;
      padding: 3px 9px; border-radius: 20px;
    }
    .preview-range-badge.out { background: #f3f4f6; color: var(--text-muted); border-color: var(--border); }

    /* toast */
    .toast {
      position: fixed; bottom: 24px; left: 50%;
      transform: translateX(-50%) translateY(60px);
      background: #1a1a1a; color: #fff;
      font-size: 13px; padding: 10px 20px;
      border-radius: 8px; z-index: 9999;
      opacity: 0; transition: all .25s ease;
      pointer-events: none; white-space: nowrap;
      box-shadow: var(--shadow-md);
    }
    .toast.on { transform: translateX(-50%) translateY(0); opacity: 1; }

    /* drag ghost */
    #dragGhost {
      position: fixed; pointer-events: none; z-index: 9999;
      background: var(--white);
      border: 1.5px solid var(--blue);
      border-radius: 9px; padding: 9px 14px;
      font-size: 13px; font-weight: 500;
      color: var(--text);
      box-shadow: 0 8px 24px rgba(37,99,235,.18);
      display: none; align-items: center; gap: 8px;
      transform: translate(-20px, -50%);
    }
    #dragGhost .ghost-icon {
      width: 20px; height: 20px; flex-shrink: 0;
      background: #fff4f0; border: 1px solid #fdd5c0;
      border-radius: 4px; display: flex; align-items: center; justify-content: center;
    }
    #dragGhost .ghost-icon svg { width: 10px; height: 10px; stroke: #e05a1e; }

    /* info content */
    .info-section {
      max-width: 1000px; 
      margin: 0 auto; 
      padding: 48px 24px 80px;
      display: none;
    }
    #uploadState .info-section { display: block; }
    .divider { border: none; border-top: 1px solid var(--border); margin: 40px 0; }
    .section-title { font-size: 18px; font-weight: 700; letter-spacing: -.3px; margin-bottom: 12px; }
    .section-body { color: #555; line-height: 1.75; font-size: 14px; margin-bottom: 10px; }
    .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px,1fr)); gap: 12px; margin-top: 16px; }
    .card { background: var(--white); border: 1px solid var(--border); border-radius: 10px; padding: 16px 18px; }
    .card h3 { font-size: 13px; font-weight: 600; margin-bottom: 9px; }
    .card ul { list-style: none; margin-bottom: 11px; }
    .card ul li { font-size: 13px; color: #666; padding: 3px 0 3px 12px; position: relative; line-height: 1.5; }
    .card ul li::before { content: '·'; position: absolute; left: 2px; color: #bbb; font-size: 16px; line-height: 1.2; }
    .tags { display: flex; flex-wrap: wrap; gap: 4px; }
    .tag { font-size: 11px; font-weight: 500; padding: 2px 8px; border-radius: 4px; }
    .tag.g { background: #f0fdf4; color: var(--green); border: 1px solid #bbf7d0; }
    .tag.r { background: #fef2f2; color: #dc2626; border: 1px solid #fecaca; }
    .tips { display: flex; flex-direction: column; gap: 8px; margin-top: 14px; }
    .tip { display: flex; gap: 12px; align-items: flex-start; background: var(--white); border: 1px solid var(--border); border-radius: 8px; padding: 12px 14px; font-size: 13px; color: #555; line-height: 1.6; }
    .tip-n { font-size: 11px; font-weight: 700; color: #bbb; flex-shrink: 0; padding-top: 1px; }

  

    /* ── MOBILE ── */
    @media (max-width: 700px) {
      .info-section { display: none; }

      #uploadedState {
        flex-direction: column;
        height: 100dvh;
        overflow: hidden;
        padding-bottom: 76px;
      }

      .sidebar {
        width: 100%;
        border-right: none;
        border-bottom: 1px solid var(--border);
        overflow: visible;
        flex-shrink: 0;
        height: auto;
      }

      /* Hide desktop sticky footer on mobile (mobile bar handles it) */
      .sidebar-footer { display: none !important; }

      .panel-body { padding: 12px 14px; gap: 10px; }
      .tabs { padding: 0 14px; }
      .tab-btn { padding: 8px 10px; font-size: 12px; }
      .sidebar-header { padding: 10px 14px; }
      .sidebar-header .fname { font-size: 12px; max-width: 160px; }
      .field-label { font-size: 9px; margin-bottom: 4px; }
      .select-wrap select { padding: 7px 30px 7px 10px; font-size: 12px; }
      .num-input { padding: 6px 8px; font-size: 12px; width: 60px; }
      .info-box { font-size: 11px; padding: 8px 10px; }

      .grid-panel { flex: 1; min-height: 0; display: flex; flex-direction: column; overflow: hidden; }
      .grid-toolbar { padding: 8px 14px; }
      .zoom-track { display: none; }
      .swipe-hint { display: inline-flex !important; }

      /* Horizontal page strip */
      .page-grid-wrap {
        flex: 1;
        overflow-x: auto;
        overflow-y: hidden;
        padding: 10px 14px;
        -webkit-overflow-scrolling: touch;
        scroll-snap-type: x mandatory;
        scrollbar-width: thin;
        scrollbar-color: #c7ccd6 transparent;
      }
      .page-grid-wrap::-webkit-scrollbar { height: 3px; }
      .page-grid-wrap::-webkit-scrollbar-thumb { background: #c7ccd6; border-radius: 3px; }

      #pageGrid {
        display: flex !important;
        flex-direction: row !important;
        flex-wrap: nowrap !important;
        gap: 10px !important;
        height: 100%;
        align-items: flex-start;
        width: max-content;
        grid-template-columns: unset !important;
      }
      #pageGrid .page-card { width: 120px; flex-shrink: 0; scroll-snap-align: start; height: auto; }

      .card-zoom-btn { opacity: 1 !important; width: 24px; height: 24px; bottom: 28px; right: 4px; }
      .card-zoom-btn svg { width: 11px; height: 11px; }
      .card-actions { top: 4px; right: 4px; gap: 3px; }
      .card-btn { width: 26px; height: 26px; }
      .card-btn svg { width: 12px; height: 12px; }

      /* Fixed mobile bottom bar — JS shows/hides; only layout here */
      .mobile-action-bar {
        position: fixed;
        bottom: 0; left: 0; right: 0;
        z-index: 200;
        background: var(--white);
        border-top: 1px solid var(--border);
        padding: 12px 16px;
        padding-bottom: max(12px, env(safe-area-inset-bottom));
        gap: 10px;
        align-items: center;
        box-shadow: 0 -4px 16px rgba(0,0,0,.08);
      }

      .preview-modal { align-items: flex-end; }
      .preview-box { max-width: 100%; width: 100%; max-height: 92vh; border-radius: 16px 16px 0 0; }
    }
    @media (max-width: 380px) { #pageGrid .page-card { width: 100px; } }

    /* Mobile bottom bar — hidden until a file is loaded (JS controls display) */
    .mobile-action-bar { display: none; }

    /* ── MOBILE RESULT BAR — hidden until split done, JS controls ── */
    .mobile-action-bar { display: none; }
    .mob-result-bar {
      display: flex; gap: 10px; align-items: center; width: 100%;
    }
    .mob-btn-dl {
      flex: 1;
      background: var(--blue); color: #fff;
      border: none; border-radius: 10px;
      padding: 14px 10px;
      font-family: inherit; font-size: 15px; font-weight: 700;
      cursor: pointer; transition: background .15s;
      display: flex; align-items: center; justify-content: center; gap: 8px;
    }
    .mob-btn-dl:hover { background: var(--blue-hover); }
    .mob-btn-dl svg { width: 16px; height: 16px; }
    .mob-btn-sh {
      flex: 1;
      background: var(--white); color: var(--blue);
      border: 1.5px solid var(--blue); border-radius: 10px;
      padding: 14px 10px;
      font-family: inherit; font-size: 15px; font-weight: 700;
      cursor: pointer; transition: background .15s;
      display: flex; align-items: center; justify-content: center; gap: 8px;
    }
    .mob-btn-sh:hover { background: var(--blue-light); }
    .mob-btn-sh svg { width: 15px; height: 15px; }

    #rangeList .range-row { margin-bottom: 8px; }

    /* ── Skip pages free-text input ── */
    .skip-pages-input {
      width: 100%;
      font-size: 13px; font-family: inherit; font-weight: 500;
      border: 1px solid var(--border); border-radius: 8px;
      padding: 10px 12px;
      background: var(--white); color: var(--text);
      transition: border-color .15s, box-shadow .15s;
    }
    .skip-pages-input:focus {
      outline: none; border-color: var(--blue);
      box-shadow: 0 0 0 3px rgba(37,99,235,.12);
    }
    .skip-pages-input.invalid {
      border-color: var(--red);
      box-shadow: 0 0 0 3px rgba(239,68,68,.12);
    }
    .skip-preview {
      display: flex; flex-wrap: wrap; gap: 4px;
      min-height: 0;
    }
    .skip-chip {
      font-size: 11px; font-weight: 600;
      padding: 3px 8px; border-radius: 5px;
      background: var(--blue-mid); color: var(--blue);
      border: 1px solid #bfdbfe;
    }
    .skip-chip.invalid {
      background: var(--red-light); color: var(--red);
      border-color: #fecaca;
    }
    .skip-count {
      font-size: 11px; color: var(--text-muted);
      width: 100%; margin-top: 2px;
    }
   

styles:
  - https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap

scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js
  - https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.min.js
  - https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js
---





<div id="dragGhost">
  <div class="ghost-icon">
    <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
    </svg>
  </div>
  <span id="dragGhostName"></span>
</div>

<div class="app-shell">

  <!-- ─── UPLOAD STATE ─── -->
  <div id="uploadState">
    <div class="upload-inner">
      <h1>Split PDF</h1>
      <p class="sub">Extract pages by range, selection, or skip pattern. Everything runs locally.</p>
      <div class="drop-zone" id="dropZone">
        <div class="dz-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
            <polyline points="17 8 12 3 7 8"/>
            <line x1="12" y1="3" x2="12" y2="15"/>
          </svg>
        </div>
        <h2>Drop a PDF file here</h2>
        <p>or click the button below to browse</p>
        <button class="btn-blue" id="browseBtn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
          </svg>
          Select File
        </button>
        <p class="upload-note">

            By uploading files, you agree to our
  <a href="https://rforrupesh.github.io/jekyllmultilingual/terminos-de-uso/" target="_blank">Terms of Use</a>
  and our
  <a href="https://rforrupesh.github.io/jekyllmultilingual/politica-de-privacidad/" target="_blank">Privacy Policy</a>.
  
        </p>
      </div>
      <input type="file" id="fileInput" accept=".pdf,application/pdf" hidden>
    </div>

    <div class="info-section">
          <div id="split-pdf-info">

  <section class="isec-block isec-why" aria-labelledby="isec-why-title">
    <div class="isec-block__head">
      <h2 id="isec-why-title" class="isec-block__title">Why Choose UnificarPDF.com for Remove PDF Pages?</h2>
    </div>
    <div class="isec-card-grid">

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="12" height="16" rx="2"/><path d="M4 6v14a2 2 0 0 0 2 2h10"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="12" height="16" rx="2"/><path d="M4 6v14a2 2 0 0 0 2 2h10"/></svg>
        </span>
        <h3 class="isec-card__title">Single Page Split / Multi Document Split</h3>
        <p class="isec-card__text">Split the individual page from a document or split the document in pages.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-purple" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.12 15.88"/><path d="M14.47 14.48 20 20"/><path d="M8.12 8.12 12 12"/></svg></span>
        <span class="isec-card__icon isec-icon-purple" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.12 15.88"/><path d="M14.47 14.48 20 20"/><path d="M8.12 8.12 12 12"/></svg>
        </span>
        <h3 class="isec-card__title">Split Specific/Customized Pages</h3>
        <p class="isec-card__text">Here you have an option to select specific or customize page ranges to split.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-teal" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M12 18v-6"/><path d="M9 15h6"/></svg></span>
        <span class="isec-card__icon isec-icon-teal" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M12 18v-6"/><path d="M9 15h6"/></svg>
        </span>
        <h3 class="isec-card__title">Split to Individual Documents</h3>
        <p class="isec-card__text">Documents split from a single PDF can be saved separately.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
        </span>
        <h3 class="isec-card__title">Interactive Elements are Preserved</h3>
        <p class="isec-card__text">The page split preserves all the interactive elements such as bookmark, hyperlink etc.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-purple" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/></svg></span>
        <span class="isec-card__icon isec-icon-purple" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/></svg>
        </span>
        <h3 class="isec-card__title">Live Page Previews</h3>
        <p class="isec-card__text">Thumbnails show your actual page content, not generic placeholders, so you can verify exactly what you're splitting before downloading.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-teal" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg></span>
        <span class="isec-card__icon isec-icon-teal" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>
        </span>
        <h3 class="isec-card__title">Remove Any Unwanted Pages in One Click</h3>
        <p class="isec-card__text">Each thumbnail comes with a delete button, enabling you to delete a page that is not required without even splitting it.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.99 6.57 2.57L21 8"/><path d="M21 3v5h-5"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.99 6.57 2.57L21 8"/><path d="M21 3v5h-5"/></svg>
        </span>
        <h3 class="isec-card__title">Rotate Either Individual Pages or All Pages at Once</h3>
        <p class="isec-card__text">You can correct the orientation of an individual page or rotate all the pages at once. In case your page is in the wrong orientation, Restore makes it right again.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-purple" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14h6v6"/><path d="M20 10h-6V4"/><path d="m14 10 7-7"/><path d="m3 21 7-7"/></svg></span>
        <span class="isec-card__icon isec-icon-purple" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14h6v6"/><path d="M20 10h-6V4"/><path d="m14 10 7-7"/><path d="m3 21 7-7"/></svg>
        </span>
        <h3 class="isec-card__title">Smaller File Size</h3>
        <p class="isec-card__text">The files generated after splitting the PDF files are small in size without losing the quality.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-teal" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg></span>
        <span class="isec-card__icon isec-icon-teal" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg>
        </span>
        <h3 class="isec-card__title">No Interruption while Processing</h3>
        <p class="isec-card__text">When processing the files, they will not get interrupted during the procedure.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>
        </span>
        <h3 class="isec-card__title">Watermark Free Files</h3>
        <p class="isec-card__text">The generated files after splitting the PDF are free from watermarks and the files have high quality.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-purple" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg></span>
        <span class="isec-card__icon isec-icon-purple" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>
        </span>
        <h3 class="isec-card__title">Available on Multiple Operating Systems</h3>
        <p class="isec-card__text">The online PDF splitter is available on different operating systems like Windows, Mac, Linux, Android, and iPhone.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-teal" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z"/></svg></span>
        <span class="isec-card__icon isec-icon-teal" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z"/></svg>
        </span>
        <h3 class="isec-card__title">Accessible through Browser</h3>
        <p class="isec-card__text">It is accessible through the browser, so there is no need to install the software or application on your device.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m7 8 5-5 5 5"/><path d="M5 21h14"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m7 8 5-5 5 5"/><path d="M5 21h14"/></svg>
        </span>
        <h3 class="isec-card__title">Can Upload PDF Files Easily</h3>
        <p class="isec-card__text">You can upload your file on the splitter easily.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-purple" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg></span>
        <span class="isec-card__icon isec-icon-purple" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>
        </span>
        <h3 class="isec-card__title">No Sign-Up Required</h3>
        <p class="isec-card__text">There is no need to sign up on the website to process your PDF file. It is free of cost.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-teal" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
        <span class="isec-card__icon isec-icon-teal" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </span>
        <h3 class="isec-card__title">Process PDFs Securely without Any Delays</h3>
        <p class="isec-card__text">The PDF files can be processed without any interruption or delay.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V3"/><path d="m7 10 5 5 5-5"/><path d="M4 21h16"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V3"/><path d="m7 10 5 5 5-5"/><path d="M4 21h16"/></svg>
        </span>
        <h3 class="isec-card__title">Downloadable Files are Available Immediately</h3>
        <p class="isec-card__text">Once the splitting process of the page is done, the downloadable files are available for immediate download.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-purple" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/></svg></span>
        <span class="isec-card__icon isec-icon-purple" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/></svg>
        </span>
        <h3 class="isec-card__title">Same Page Order</h3>
        <p class="isec-card__text">The same page order can be selected in all the files.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-teal" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/></svg></span>
        <span class="isec-card__icon isec-icon-teal" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/></svg>
        </span>
        <h3 class="isec-card__title">Change files anytime</h3>
        <p class="isec-card__text">Uploaded the wrong PDF? Change button to change them instantly without refreshing the page.</p>
      </div>

    </div>
  </section>

  <section class="isec-block isec-how" aria-labelledby="isec-how-title">
    <div class="isec-block__head">
      <h2 id="isec-how-title" class="isec-block__title">How Our PDF Splitter Works</h2>
      <p class="isec-block__subtitle">The UnifcarPDF program makes it very easy to split a PDF file. Here's how to do it:</p>
    </div>
    <ol class="isec-steps">
      <li>
        <span class="isec-steps__num">1</span>
        <div class="isec-steps__body">Upload your file. File details will be available right away, so you can be sure that the correct file is there — and if not, a "Change" button located right next to the file details allows you to upload another PDF without reloading the page.</div>
      </li>
      <li>
        <span class="isec-steps__num">2</span>
        <div class="isec-steps__body">
          Pick a splitting mode:
          <ul class="isec-substeps">
            <li><strong>Range</strong> — select an easy "From To" range, use several ranges simultaneously (they will all be returned in a ZIP), or divide the entire file in equal portions.</li>
            <li><strong>Selection</strong> — click on page thumbnails to select exactly what you need, with handy Select All, Clear and Invert tools.</li>
            <li><strong>Skip</strong> — just enter the pages needed in any format, e.g., 4 56-34 1 2-10. Reverse ranges are supported too.</li>
          </ul>
        </div>
      </li>
      <li>
        <span class="isec-steps__num">3</span>
        <div class="isec-steps__body">Check the entire grid. Each page is displayed as a live thumbnail preview of itself — not just a placeholder, but the actual page content — labeled Page 1, Page 2, and so on. You can drag and drop any thumbnail to reorder the pages before splitting or downloading. Hover over any page and you'll get a little trash icon to delete just that page, and a rotate icon to rotate that page individually - or use Rotate All at the top to rotate all pages at once. If a page (or the entire set) ends up rotated the wrong way, the Restore button will put everything back the way it was.</div>
      </li>
      <li>
        <span class="isec-steps__num">4</span>
        <div class="isec-steps__body">To the right of the "Pages" header is a zoom slider which lets you increase or decrease the thumbnail size (it even tells you the current value, like 140) depending on how close you need to look at the content.</div>
      </li>
      <li>
        <span class="isec-steps__num">5</span>
        <div class="isec-steps__body">View your result. Download the PDF (or ZIP if you have split it into several files) or share it immediately.</div>
      </li>
    </ol>
  </section>

  <section class="isec-block isec-usecases" aria-labelledby="isec-usecases-title">
    <div class="isec-block__head">
      <h2 id="isec-usecases-title" class="isec-block__title">Perfect for Every Use Case</h2>
      <p class="isec-block__subtitle">See how our PDF splitter helps you easily organize and split PDF documents.</p>
    </div>
    <div class="isec-card-grid isec-card-grid--use">

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        </span>
        <h3 class="isec-card__title">Business PDF</h3>
        <p class="isec-card__text">Create separate files for contracts, reports, invoices and Presentations.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-purple" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/></svg></span>
        <span class="isec-card__icon isec-icon-purple" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/></svg>
        </span>
        <h3 class="isec-card__title">Student PDFs</h3>
        <p class="isec-card__text">Extract specific content from your academic PDFs like chapters, lectures, or assignments.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-teal" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M5 7h14"/><path d="m5 7-3 6a3 3 0 0 0 6 0Z"/><path d="m19 7-3 6a3 3 0 0 0 6 0Z"/></svg></span>
        <span class="isec-card__icon isec-icon-teal" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M5 7h14"/><path d="m5 7-3 6a3 3 0 0 0 6 0Z"/><path d="m19 7-3 6a3 3 0 0 0 6 0Z"/></svg>
        </span>
        <h3 class="isec-card__title">PDFs - Legal and Financial</h3>
        <p class="isec-card__text">Extract relevant pages from legal documents, bank documents and other official documents.</p>
      </div>

      <div class="isec-card">
        <span class="isec-card__bg-icon isec-icon-blue" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.5 6.8-3.9"/><path d="m8.6 13.5 6.8 3.9"/></svg></span>
        <span class="isec-card__icon isec-icon-blue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.5 6.8-3.9"/><path d="m8.6 13.5 6.8 3.9"/></svg>
        </span>
        <h3 class="isec-card__title">Easier to share &amp; save</h3>
        <p class="isec-card__text">Small documents are easy to share and store.</p>
      </div>

    </div>
  </section>

  <section class="isec-block isec-faq" aria-labelledby="isec-faq-title">
    <div class="isec-block__head">
      <h2 id="isec-faq-title" class="isec-block__title">Frequently Asked Questions</h2>
      <p class="isec-block__subtitle">Got questions? We have answers. Find everything you need to know about our PDF Splitter.</p>
    </div>
    <p class="isec-faq__eyebrow">Getting Started</p>
    <div class="isec-faq__list">
      <div class="isec-faq__item is-open">
        <button type="button" class="isec-faq__summary" aria-expanded="true">
          <span>What is PDF Splitter?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>A PDF Splitter is a web application where users will be able to split their existing PDF document(s) into smaller PDFs based on some page numbers or ranges.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>How to Split PDF Online?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Upload PDF(s) Select the pages (or page ranges) you want Hit Split PDF Download your file</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Can I upload my PDF using Drag &amp; Drop?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Yes. Simply drag and drop your PDF documents at UnificarPDF.com and upload them.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Is it possible to reorder or delete uploaded PDF documents?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Yes. You can reorder the uploaded PDF files before conversion or just delete the files you no longer need.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Selection, Range and Skip – What's the difference?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Range is for structured splits like single ranges, multiple ranges or equal groups. Selection is visually clicking through thumbnails. Skip is fastest if you already know exactly what page numbers you want.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Can I split my PDF by page numbers/page ranges?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Yes. Choose the pages or pages range you want to split from the PDF.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Is it possible to extract selected pages from the PDF?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Yes. You can extract and save a single page, multiple pages or a specific page range into a new PDF.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>What happens when I split my pdf?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>If you split your PDF and the result is only one PDF, it will be downloaded as PDF. If it splits into several PDFs it will be packed as ZIP archive.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Will my PDF file quality be affected by splitting?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>No. The formatting, font, layout, images, text and all else remain intact.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Can you split large pdfs?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Yeah. It will work with any size PDF, big or small.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Is it possible to split password protected PDFs?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Of course. Crack it with the password and get it split.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Do I have to download or install any software?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>No. Everything runs in your web browser. You don't have to do anything else.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Do I have to create an account?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>No, UnificarPDF.com is usable without registration, without login.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Is the tool compatible with mobile devices?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Yes, sir. You can split PDFs on Android, iPhone, tablet, laptop and PC.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Is my PDF file secure?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Yes. Files are securely transferred. After you done wth cut pdf then pdf file automatically removes the uploaded and generated files from its server.</p>
          </div>
        </div>
      </div>
      <div class="isec-faq__item">
        <button type="button" class="isec-faq__summary" aria-expanded="false">
          <span>Is UnificarPDF.com free to use?</span>
          <span class="isec-faq__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="isec-faq__panel">
          <div class="isec-faq__panel-inner">
            <p>Yes. Free online split pdf files without software download and registration.</p>
          </div>
        </div>
      </div>
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
  padding: 44px 0 8px;
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
  border-top: 1px solid var(--isec-line);
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
  font-size: 13.5px;
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


      
    </div>


  </div>

  <!-- ─── UPLOADED STATE ─── -->
  <div id="uploadedState">

    <!-- SIDEBAR -->
    <aside class="sidebar">
      <div class="sidebar-header">
        <div class="file-info">
          <div class="fname" id="fileNameLabel">document.pdf</div>
          <div class="fmeta">
            <span class="badge" id="pageCountLabel">— pages</span>
            <span class="badge" id="fileSizeLabel">—</span>
          </div>
        </div>
        <button class="btn-sm" id="changeFileBtn">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="11" height="11" stroke="#888"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>
          Change
        </button>
      </div>

      <!-- TABS -->
      <div class="tabs">
        <button class="tab-btn active" id="tabRange" onclick="switchTab('range')">Range</button>
        <button class="tab-btn" id="tabSelection" onclick="switchTab('selection')">Selection</button>
        <button class="tab-btn" id="tabSkip" onclick="switchTab('skip')">Skip</button>
      </div>

      <!-- Scrollable area -->
      <div class="sidebar-scroll">

        <!-- TAB: Range -->
        <div id="panelRange" class="panel-body">
          <div>
            <div class="field-label">Splitting Mode</div>
            <div class="select-wrap">
              <select id="rangeMode" onchange="onRangeModeChange()">
                <option value="single">Single Range</option>
                <option value="multi">Multiple Ranges → ZIP</option>
                <option value="groups">Split into Groups → ZIP</option>
              </select>
            </div>
          </div>
          <div id="modeSingle">
            <div class="field-label">Define Range</div>
            <div class="range-row">
              <input type="number" id="singleFrom" class="num-input" min="1" value="1">
              <label>to</label>
              <input type="number" id="singleTo" class="num-input" min="1" value="1">
            </div>
          </div>
          <div id="modeMulti" style="display:none;">
            <div class="field-label">Ranges</div>
            <div id="rangeList"></div>
            <button class="btn-sm" onclick="addRange()" style="margin-top:4px;">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" width="11" height="11" stroke="#888"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Add Range
            </button>
          </div>
          <div id="modeGroups" style="display:none;">
            <div class="field-label">Pages per group</div>
            <input type="number" id="groupSize" class="num-input" min="1" value="1">
          </div>
          <div class="info-box" id="infoBox">Result will be a <strong>single .pdf</strong> file.</div>
        </div>

        <!-- TAB: Selection -->
        <div id="panelSelection" class="panel-body" style="display:none;">
          <p style="font-size:12px;color:var(--text-muted);margin:0;">Click page thumbnails to select them. All selected pages will be extracted into one PDF.</p>
          <div class="sel-helpers">
            <button class="btn-sm" onclick="selectAll()">Select All</button>
            <button class="btn-sm" onclick="clearSelection()">Clear</button>
            <button class="btn-sm" onclick="invertSelection()">Invert</button>
          </div>
          <span class="badge" id="selectionCount">0 selected</span>
        </div>

        <!-- TAB: Skip -->
        <div id="panelSkip" class="panel-body" style="display:none;">
          <p style="font-size:12px;color:var(--text-muted);margin:0;">Type page numbers or ranges. Use commas or spaces. Reversed ranges like <strong>56-34</strong> are fine.</p>
          <div>
            <div class="field-label">Pages to extract</div>
            <input type="text" id="skipPages" class="skip-pages-input" placeholder="e.g. 4 56-34 1 2-10" spellcheck="false" autocomplete="off">
          </div>
          <div id="skipPreview" class="skip-preview"></div>
        </div>

      </div><!-- /sidebar-scroll -->

      <!-- STICKY FOOTER: download + share always visible -->
      <div class="sidebar-footer">
        <button class="btn-dl" id="downloadBtn" onclick="downloadResult()">
          <div class="btn-spinner"></div>
          <span class="btn-icon" style="display:flex;align-items:center;gap:8px;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            Download Result
          </span>
        </button>
        <button class="btn-share" id="shareBtn" onclick="shareResult()">
          <div class="btn-spinner"></div>
          <span class="btn-icon" style="display:flex;align-items:center;gap:8px;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" width="14" height="14"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            Share Result
          </span>
        </button>
      </div>
    </aside>

    <!-- GRID PANEL -->
    <div class="grid-panel">
      <div class="grid-toolbar">
        <div class="grid-toolbar-left">
          <span class="grid-title">Pages</span>
          <div class="zoom-track">
            <svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" width="13" height="13"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="range" id="zoomSlider" min="80" max="240" value="140" oninput="onZoom(this.value)">
            <span id="zoomVal">140</span>
          </div>
        </div>
        <div style="display:flex;gap:6px;">
          <button class="btn-sm" onclick="rotateAll()">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" width="11" height="11" stroke="#888"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg>
            Rotate All
          </button>
          <button class="btn-sm" onclick="restoreAll()">Restore</button>
        </div>
        <span class="swipe-hint" style="display:none;font-size:10px;color:#9ca3af;font-weight:500;letter-spacing:.04em;margin-left:auto;">← swipe pages →</span>
      </div>

      <div class="progress-bar-wrap" id="progressWrap">
        <div class="spinner"></div>
        <span class="progress-text" id="progressText">Working…</span>
      </div>

      <div class="page-grid-wrap">
        <div id="pageGrid"></div>
      </div>
    </div>
  </div>

</div><!-- /app-shell -->

<!-- ── MOBILE FIXED BOTTOM BAR — shown after split ── -->
<div class="mobile-action-bar" id="mobileActionBar">
  <div class="mob-result-bar">
    <button class="mob-btn-dl" id="mobDownloadBtn" onclick="downloadResult()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
      Download
    </button>
    <button class="mob-btn-sh" id="mobShareBtn" onclick="shareResult()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
      Share
    </button>
  </div>
</div>

<!-- ─── PREVIEW MODAL ─── -->
<div class="preview-modal" id="previewModal">
  <div class="preview-backdrop" id="previewBackdrop"></div>
  <div class="preview-box">
    <div class="preview-header">
      <span class="preview-title" id="previewTitle">Page 1</span>
      <div class="preview-nav">
        <button class="preview-nav-btn" id="prevPageBtn" title="Previous page">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <span class="preview-page-info" id="previewPageInfo">1 / 1</span>
        <button class="preview-nav-btn" id="nextPageBtn" title="Next page">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
      <button class="preview-close" id="previewClose" title="Close">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <div class="preview-canvas-wrap">
      <canvas id="previewCanvas"></canvas>
    </div>
    <div class="preview-footer">
      <span id="previewRangeBadge" class="preview-range-badge">In range</span>
      <span style="font-size:12px;color:var(--text-muted);" id="previewFooterNote"></span>
    </div>
  </div>
</div>

<div class="toast" id="toast"></div>

<script>


function $(id) { return document.getElementById(id); }
const tick = () => new Promise(r => setTimeout(r, 0));

let pdfFile = null, pdfJsDoc = null, pdfLibDoc = null;
let pages = [], currentTab = 'range', multiRanges = [], splitResult = null;

function fmtSize(b) { return b >= 1048576 ? (b/1048576).toFixed(1)+' MB' : Math.round(b/1024)+' KB'; }

    /* ── Warn before leaving page if a PDF is loaded (unsaved work) ── */
window.addEventListener('beforeunload', function (e) {
  if (pdfFile) {
    e.preventDefault();
    e.returnValue = ''; // Chrome ke liye zaroori hai default popup dikhane ke liye
    return '';
  }
});
    
/* ── File loading ── */
$('browseBtn').addEventListener('click', e => { e.stopPropagation(); $('fileInput').click(); });
$('dropZone').addEventListener('click', () => $('fileInput').click());
$('changeFileBtn').addEventListener('click', () => $('fileInput').click());
$('fileInput').addEventListener('change', e => { loadFile(e.target.files[0]); $('fileInput').value = ''; });
$('dropZone').addEventListener('dragover', e => { e.preventDefault(); $('dropZone').classList.add('dragover'); });
$('dropZone').addEventListener('dragleave', () => $('dropZone').classList.remove('dragover'));
$('dropZone').addEventListener('drop', e => {
  e.preventDefault(); $('dropZone').classList.remove('dragover');
  const f = e.dataTransfer.files[0];
  if (f) loadFile(f);
  else showToast('Please drop a PDF file.');
});

async function loadFile(file) {
  thumbCache = {};  // clear cache only on new file load
  if (!file) return;
  // Accept by extension too — some browsers/OS don't set MIME type reliably
  const nameOk = file.name.toLowerCase().endsWith('.pdf');
  const typeOk = !file.type || file.type === 'application/pdf' || file.type === 'application/x-pdf';
  if (!nameOk && !typeOk) { showToast('Please select a PDF file.'); return; }

  pdfFile = file;
  $('uploadState').style.display = 'none';
 $('mainFooter').style.display = 'none';
  $('uploadedState').style.display = 'flex';
  $('fileNameLabel').textContent = file.name;
  $('fileSizeLabel').textContent = fmtSize(file.size);
  $('pageCountLabel').textContent = 'Loading…';
  $('pageGrid').innerHTML = '';
  splitResult = null;
  setStatusWorking('Loading PDF…');
  $('progressWrap').classList.remove('show');

  try {
    const bytes = await file.arrayBuffer();
    // Make two independent copies — ArrayBuffer is neutered after first transfer
    const bytesForJs  = bytes.slice(0);
    const bytesForLib = bytes.slice(0);

    pdfJsDoc  = await pdfjsLib.getDocument({ data: bytesForJs }).promise;
    pdfLibDoc = await PDFLib.PDFDocument.load(bytesForLib, { ignoreEncryption: true });

    const total = pdfJsDoc.numPages;
    $('pageCountLabel').textContent = total + ' page' + (total !== 1 ? 's' : '');
    $('singleTo').value = total;
    $('singleFrom').max = total;
    $('singleTo').max   = total;
    pages = Array.from({ length: total }, (_, i) => ({ origIndex: i, rotation: 0, deleted: false, selected: false }));
    multiRanges = [{ from: 1, to: total }];
    renderRangeList(); updateSelectionCount(); updateInfoBox();
    await renderPageGrid();
    scheduleAutoSplit(300);
  } catch (err) {
    console.error('PDF load error:', err);
    showToast('Could not load PDF: ' + (err.message || 'unknown error'));
    resetToUpload();
  }
}

function resetToUpload() {
  $('uploadState').style.display = 'flex';
  $('uploadedState').style.display = 'none';
  pdfFile = null; pdfJsDoc = null; pdfLibDoc = null; pages = [];
}

/* ── Tabs ── */
function switchTab(tab) {
  currentTab = tab;
  ['range','selection','skip'].forEach(t => {
    const key = t.charAt(0).toUpperCase() + t.slice(1);
    $('tab'+key).classList.toggle('active', t === tab);
    $('panel'+key).style.display = t === tab ? 'flex' : 'none';
  });
  // CSS class on grid controls selected-state visibility — zero per-card DOM writes
  $('pageGrid').classList.toggle('tab-selection', tab === 'selection');
  document.body.className = document.body.className
    .replace(/\btab-\S+/g, '').trim() + ' tab-' + tab;
  updateRangeHighlight();
  if (tab === 'skip') updateSkipPreview();
  scheduleAutoSplit();
}

/* ── Range mode ── */
function onRangeModeChange() {
  const m = $('rangeMode').value;
  $('modeSingle').style.display = m === 'single' ? 'block' : 'none';
  $('modeMulti').style.display  = m === 'multi'  ? 'block' : 'none';
  $('modeGroups').style.display = m === 'groups' ? 'block' : 'none';
  updateInfoBox();
  scheduleAutoSplit();
}

function updateInfoBox() {
  const m = $('rangeMode').value;
  const box = $('infoBox');
  if (m === 'single') box.innerHTML = 'Result will be a <strong>single .pdf</strong> file.';
  else box.innerHTML = 'Result will be a <strong>.zip</strong> with multiple PDF files.';
}

function addRange() { multiRanges.push({ from: 1, to: pages.length }); renderRangeList(); }
function removeRange(i) {
  multiRanges.splice(i, 1);
  if (multiRanges.length === 0) multiRanges.push({ from: 1, to: pages.length });
  renderRangeList();
}
function renderRangeList() {
  const list = $('rangeList'); list.innerHTML = '';
  multiRanges.forEach((r, i) => {
    const row = document.createElement('div');
    row.className = 'range-row';
    row.innerHTML = `
      <input type="number" class="num-input" min="1" max="${pages.length}" value="${r.from}" style="width:60px;"
        onchange="multiRanges[${i}].from=Math.max(1,+this.value)">
      <label style="font-size:12px;color:var(--text-muted)">to</label>
      <input type="number" class="num-input" min="1" max="${pages.length}" value="${r.to}" style="width:60px;"
        onchange="multiRanges[${i}].to=Math.min(${pages.length},+this.value)">
      <button class="range-del" onclick="removeRange(${i})">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" width="13" height="13"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>`;
    list.appendChild(row);
  });
}

/* ── Selection helpers ── */
function selectAll()     { pages.forEach(p => { if (!p.deleted) p.selected = true; }); syncAllCards(); updateSelectionCount(); scheduleAutoSplit(); }
function clearSelection(){ pages.forEach(p => { p.selected = false; }); syncAllCards(); updateSelectionCount(); scheduleAutoSplit(); }
function invertSelection(){ pages.forEach(p => { if (!p.deleted) p.selected = !p.selected; }); syncAllCards(); updateSelectionCount(); scheduleAutoSplit(); }
function updateSelectionCount() { $('selectionCount').textContent = pages.filter(p=>p.selected&&!p.deleted).length+' selected'; }

/* ── Rotate / restore ── */
function rotateAll() {
  pages.forEach(p => { if (!p.deleted) p.rotation=(p.rotation+90)%360; });
  $('pageGrid').querySelectorAll('[data-pi]').forEach(card => {
    const i = +card.dataset.pi; if (!pages[i]) return;
    const canvas = card.querySelector('canvas');
    if (canvas && canvas.dataset.rendered) {
      canvas.dataset.rendered = '';
      enqueueRender(() => renderThumb(i, canvas), true);
    }
  });
}
function restoreAll() {
  pages.forEach(p => { p.rotation=0; p.deleted=false; });
  syncAllCards();
  updateSelectionCount();
}

/* ── Zoom ── */
function onZoom(val) {
  $('pageGrid').style.gridTemplateColumns = `repeat(auto-fill,minmax(${val}px,1fr))`;
  $('zoomVal').textContent = val;
}

/* ── Thumbnail system ── */
const THUMB_SCALE    = 0.25;
const MAX_CONCURRENT = 8;
let   renderQueue    = [];
let   activeRenders  = 0;
let   pageCache      = [];
let   thumbCache     = {};   // canvas imageData cache per "idx:rotation"
let   thumbObserver  = null;

// Pre-fetch all page objects in parallel — getPage() is cheap (parses structure only, no render)
async function prefetchPages() {
  pageCache = await Promise.all(
    pages.map(p => pdfJsDoc.getPage(p.origIndex + 1).catch(() => null))
  );
}

function enqueueRender(fn, priority) {
  if (priority) renderQueue.unshift(fn); else renderQueue.push(fn);
  drainQueue();
}
function drainQueue() {
  while (activeRenders < MAX_CONCURRENT && renderQueue.length) {
    activeRenders++;
    const fn = renderQueue.shift();
    fn().catch(()=>{}).finally(() => { activeRenders--; drainQueue(); });
  }
}

async function renderThumb(pageIdx, canvas) {
  if (!canvas || canvas.dataset.rendered) return;
  const pg  = pageCache[pageIdx];
  const rot = pages[pageIdx] ? pages[pageIdx].rotation : 0;
  if (!pg) return;

  const cacheKey = pageIdx + ':' + rot;

  // instant paint from cache
  if (thumbCache[cacheKey]) {
    const cached = thumbCache[cacheKey];
    canvas.width  = cached.width;
    canvas.height = cached.height;
    canvas.getContext('2d').putImageData(cached, 0, 0);
    canvas.dataset.rendered = '1';
    canvas.style.opacity = '1';
    return;
  }

  try {
    const vp = pg.getViewport({ scale: THUMB_SCALE, rotation: rot });
    canvas.width  = vp.width;
    canvas.height = vp.height;
    const ctx = canvas.getContext('2d');
    await pg.render({ canvasContext: ctx, viewport: vp }).promise;
    // store in cache
    thumbCache[cacheKey] = ctx.getImageData(0, 0, canvas.width, canvas.height);
    canvas.dataset.rendered = '1';
    canvas.style.opacity = '1';
  } catch {
    canvas.width = 72; canvas.height = 96;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#f0f1f5'; ctx.fillRect(0,0,72,96);
    ctx.fillStyle = '#aaa'; ctx.font = '11px sans-serif';
    ctx.textAlign = 'center'; ctx.fillText(pageIdx+1, 36, 52);
    canvas.style.opacity = '1';
  }
}

function initThumbObserver() {
  if (thumbObserver) thumbObserver.disconnect();
  const scrollRoot = document.querySelector('.page-grid-wrap');
  thumbObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      thumbObserver.unobserve(entry.target);
      const idx    = +entry.target.dataset.pi;
      const canvas = entry.target.querySelector('canvas');
      if (canvas && !canvas.dataset.rendered) {
        enqueueRender(() => renderThumb(idx, canvas), true);
      }
    }
  }, { root: scrollRoot, rootMargin: '600px' }); // bigger lookahead
}

/* ── Page grid ── */
async function renderPageGrid() {
  const grid = $('pageGrid');
  grid.innerHTML = '';
  renderQueue   = [];
  activeRenders = 0;
  // don't wipe thumbCache — reuse across reorders

  // Build all card shells instantly (no render yet)
  const frag = document.createDocumentFragment();
  for (let i = 0; i < pages.length; i++) frag.appendChild(buildPageCard(pages[i], i));
  grid.appendChild(frag);
  $('progressWrap').classList.remove('show');
  onZoom($('zoomSlider').value);
  updateRangeHighlight();

  // Pre-fetch all page objects in parallel, THEN start observer
  await prefetchPages();
  initThumbObserver();
  grid.querySelectorAll('[data-pi]').forEach(card => thumbObserver.observe(card));
}

function buildPageCard(page, idx) {
  const card = document.createElement('div');
  card.className = 'page-card';
  card.dataset.pi = idx;

  const canvasWrap = document.createElement('div');
  canvasWrap.className = 'card-canvas-wrap';
  const canvas = document.createElement('canvas');
  // placeholder until IntersectionObserver triggers
  canvas.width = 72; canvas.height = 96;
  canvas.style.opacity = '0';
  canvas.style.transition = 'opacity .25s';
  const ctxPh = canvas.getContext('2d');
  ctxPh.fillStyle = '#f0f1f5'; ctxPh.fillRect(0,0,72,96);
  canvasWrap.appendChild(canvas);

  const actions = document.createElement('div');
  actions.className = 'card-actions';

  const delBtn = document.createElement('button');
  delBtn.className = 'card-btn del-btn'; delBtn.title = 'Delete page'; delBtn.dataset.delbtn = '1';
  delBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>';
  delBtn.addEventListener('click', e => {
    e.stopPropagation();
    page.deleted = !page.deleted; if (page.deleted) page.selected = false;
    updateCardVisual(card, page); updateSelectionCount();
    scheduleAutoSplit();
  });

  const rotBtn = document.createElement('button');
  rotBtn.className = 'card-btn rot-btn'; rotBtn.title = 'Rotate 90°';
  rotBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg>';
  rotBtn.addEventListener('click', e => {
    e.stopPropagation();
    page.rotation = (page.rotation + 90) % 360;
    canvas.dataset.rendered = '';
    enqueueRender(() => renderThumb(idx, canvas), true);
  });

  actions.appendChild(delBtn);
  actions.appendChild(rotBtn);

  const zoomBtn = document.createElement('button');
  zoomBtn.className = 'card-zoom-btn'; zoomBtn.title = 'Preview';
  zoomBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
  zoomBtn.addEventListener('click', e => { e.stopPropagation(); openPreview(idx); });

  const label = document.createElement('div');
  label.className = 'card-label';
  label.textContent = 'Page ' + (idx + 1);

  const delBadge = document.createElement('div');
  delBadge.className = 'badge-deleted'; delBadge.textContent = 'Deleted'; delBadge.style.display = 'none';

  const checkBadge = document.createElement('div');
  checkBadge.className = 'badge-check'; checkBadge.textContent = '✓'; checkBadge.style.display = 'none';

  card.appendChild(canvasWrap);
  card.appendChild(actions);
  card.appendChild(zoomBtn);
  card.appendChild(label);
  card.appendChild(delBadge);
  card.appendChild(checkBadge);

  card.addEventListener('click', () => {
    if (currentTab !== 'selection') return; // selection only active on Selection tab
    if (page.deleted) return;
    page.selected = !page.selected;
    updateCardVisual(card, page); updateSelectionCount();
    scheduleAutoSplit();
  });
card.style.cursor = 'move';
  card.addEventListener('pointerdown', onPageDragStart, { passive: false });  return card;
}

function applyCanvasRotation(canvas, deg) {
  if (deg === 90 || deg === 270) {
    const ratio = canvas.height / (canvas.width || 1);
    canvas.style.width = (ratio * 100).toFixed(1) + '%';
    canvas.style.transform = `rotate(${deg}deg)`;
  } else {
    canvas.style.width = '100%';
    canvas.style.transform = `rotate(${deg}deg)`;
  }
}

function updateCardVisual(card, page) {
  const canvas = card.querySelector('canvas');
  const delBadge = card.querySelector('.badge-deleted');
  const checkBadge = card.querySelector('.badge-check');
  const delBtn = card.querySelector('[data-delbtn]');
  // selected visual is CSS-driven via .tab-selection on the grid — no per-card toggle needed
  card.classList.toggle('deleted', page.deleted);
  card.classList.toggle('selected', page.selected && !page.deleted);
  if (delBadge) delBadge.style.display = page.deleted ? 'block' : 'none';
  if (checkBadge) checkBadge.style.display = (page.selected && !page.deleted) ? 'flex' : 'none';
  if (delBtn) delBtn.title = page.deleted ? 'Restore page' : 'Delete page';
  if (canvas) applyCanvasRotation(canvas, page.rotation);
}

function syncAllCards() {
  $('pageGrid').querySelectorAll('[data-pi]').forEach(card => {
    const i = +card.dataset.pi; if (pages[i]) updateCardVisual(card, pages[i]);
  });
}


/* ── Drag & Reorder ── */
const ghost = $('dragGhost'), ghostName = $('dragGhostName');
const dropIndicator = document.createElement('div');
dropIndicator.id = 'dropIndicator';
dropIndicator.style.cssText = `
  position:fixed;pointer-events:none;z-index:9999;display:none;
  width:3px;border-radius:3px;background:var(--blue,#3b82f6);
  box-shadow:0 0 8px rgba(59,130,246,0.7);
  transition: top 0.08s ease, left 0.08s ease, height 0.08s ease;
`;
document.body.appendChild(dropIndicator);
let pageDragState = null, autoScrollRAF = null;

function startAutoScroll(y) {
  stopAutoScroll();
  const ZONE = 80, MAX = 14;
  function frame() {
    const vh = window.innerHeight; let spd = 0;
    if (y < ZONE) spd = -MAX*(1-y/ZONE);
    else if (y > vh-ZONE) spd = MAX*(1-(vh-y)/ZONE);
    if (spd) window.scrollBy(0,spd);
    autoScrollRAF = requestAnimationFrame(frame);
  }
  autoScrollRAF = requestAnimationFrame(frame);
}
function stopAutoScroll() { if (autoScrollRAF) { cancelAnimationFrame(autoScrollRAF); autoScrollRAF=null; } }

function cardAtPoint(x, y) {
  ghost.style.display='none'; const el=document.elementFromPoint(x,y); ghost.style.display='flex';
  return el ? el.closest('[data-pi]') : null;
}

function onPageDragStart(e) {
  if (e.target.closest('.card-btn,.card-zoom-btn')) return;
  if (e.button!==undefined&&e.button!==0) return;
  e.preventDefault();

  const card=e.currentTarget, srcIdx=+card.dataset.pi;
  const pointerId=e.pointerId;

  // commit drag instantly on mousedown
  try { card.setPointerCapture(pointerId); } catch(_) {}
  ghostName.textContent='Page '+(srcIdx+1);
  ghost.style.display='flex';
  ghost.style.left=e.clientX+'px';
  ghost.style.top=e.clientY+'px';
card.classList.add('is-source');
  card.style.cursor='move';
  document.body.style.cursor='move';
    pageDragState={srcIdx,srcCard:card,lastTarget:null};

  function onMove(ev) {
    ev.preventDefault();
    ghost.style.left=ev.clientX+'px'; ghost.style.top=ev.clientY+'px';
    const ZONE=80,vh=window.innerHeight;
    if (ev.clientY<ZONE||ev.clientY>vh-ZONE) { stopAutoScroll(); startAutoScroll(ev.clientY); } else stopAutoScroll();
    const target=cardAtPoint(ev.clientX,ev.clientY);
    $('pageGrid').querySelectorAll('[data-pi]').forEach(c=>{c.style.outline='';c.style.outlineOffset='';});
    if (target&&target!==pageDragState.srcCard) {
      const rect=target.getBoundingClientRect(), midX=rect.left+rect.width/2;
      const isBefore=ev.clientX<midX;
      target.style.outline='2px solid var(--blue)'; target.style.outlineOffset='-2px';
      pageDragState.lastTarget={card:target,position:isBefore?'before':'after',toIdx:+target.dataset.pi};
      const lineX=isBefore ? rect.left-3 : rect.right+1;
      dropIndicator.style.display='block';
      dropIndicator.style.left=(lineX+window.scrollX)+'px';
      dropIndicator.style.top=(rect.top+window.scrollY)+'px';
      dropIndicator.style.height=rect.height+'px';
    } else {
      pageDragState.lastTarget=null;
      dropIndicator.style.display='none';
    }
  }

  function onUp() {
    cleanup();
    cleanupPageDrag();
  }

  function onCancel() {
    cleanup();
    stopAutoScroll();
    const ds=pageDragState;
    $('pageGrid').querySelectorAll('[data-pi]').forEach(c=>{c.style.outline='';c.style.outlineOffset='';});
    if (ds&&ds.srcCard) ds.srcCard.classList.remove('is-source');
    ghost.style.display='none';
    dropIndicator.style.display='none';
    pageDragState=null;
  }

function cleanup() {
    card.style.cursor='move';
    document.body.style.cursor='';    document.removeEventListener('pointermove',onMove);
    document.removeEventListener('pointerup',onUp);
    document.removeEventListener('pointercancel',onCancel);
  }

  document.addEventListener('pointermove',onMove,{passive:false});
  document.addEventListener('pointerup',onUp);
  document.addEventListener('pointercancel',onCancel);
}

function onPageDragMove(e) {
  // handled inline in onPageDragStart closure above
}
function cleanupPageDrag() {
  stopAutoScroll();
  const ds=pageDragState;
  pageDragState=null;
  $('pageGrid').querySelectorAll('[data-pi]').forEach(c=>{c.style.outline='';c.style.outlineOffset='';});
  if (ds&&ds.srcCard) ds.srcCard.classList.remove('is-source');
  ghost.style.display='none';
  dropIndicator.style.display='none';
  if (!ds||!ds.lastTarget||ds.srcIdx===null) return;

  let {toIdx,position}=ds.lastTarget;
  if (position==='after') toIdx+=1;
  toIdx=Math.max(0,Math.min(toIdx,pages.length));
  if (toIdx===ds.srcIdx||toIdx===ds.srcIdx+1) return;

  const moved=pages.splice(ds.srcIdx,1)[0];
  const at=toIdx>ds.srcIdx?toIdx-1:toIdx;
  pages.splice(at,0,moved);

  // Reorder DOM cards directly — no full re-render needed
  const grid=$('pageGrid');
  const cards=[...grid.querySelectorAll('[data-pi]')];
  // Detach source card
  const srcCard=cards[ds.srcIdx];
  grid.removeChild(srcCard);
  // Re-attach at correct position
  const remaining=[...grid.querySelectorAll('[data-pi]')];
  const refCard=remaining[at]||null;
  grid.insertBefore(srcCard, refCard);
  // Update all data-pi indices and labels
  [...grid.querySelectorAll('[data-pi]')].forEach((card,i)=>{
    card.dataset.pi=i;
    const lbl=card.querySelector('.card-label');
    if (lbl) lbl.textContent='Page '+(i+1);
    if (pages[i]) updateCardVisual(card,pages[i]);
  });
  updateRangeHighlight();
  scheduleAutoSplit(800);
}

/* ── PDF helpers ── */
function activePageSlice(from, to) { return pages.filter((p,i)=>!p.deleted&&(i+1)>=from&&(i+1)<=to); }

async function buildOutputPDF(pageObjs) {
  const {PDFDocument,degrees}=PDFLib; const out=await PDFDocument.create();
  for (const p of pageObjs) {
    const [copied]=await out.copyPages(pdfLibDoc,[p.origIndex]);
    if (p.rotation!==0) { const ex=copied.getRotation?copied.getRotation().angle:0; copied.setRotation(degrees((ex+p.rotation)%360)); }
    out.addPage(copied);
  }
  return out.save();
}

/* ── Auto-split state helpers — silent background processing ── */
function setStatusWorking(msg) { /* silent */ }
function setStatusDone(msg)    { /* silent */ }
function setStatusReady(msg)   { /* silent */ }
function setStatusError(msg)   { showToast(msg); }
function showMobileBar() {
  if (window.innerWidth <= 900) $('mobileActionBar').style.display = 'flex';
}
function hideMobileBar() {
  $('mobileActionBar').style.display = 'none';
}

// Legacy stubs so old call-sites don't break
function showSplitState() { splitResult = null; }
function showDownloadState() { /* no-op */ }
function resetToSplit() { showSplitState(); }

/* ── Auto-split debounce ── */
let autoSplitTimer = null;
let splitInProgress = false;
function scheduleAutoSplit(delay) {
  clearTimeout(autoSplitTimer);
  if (!pdfLibDoc) return;
  splitResult = null; // invalidate previous result while new one is being built
  autoSplitTimer = setTimeout(doSplit, delay == null ? 600 : delay);
}

/* ── Split ── */
async function doSplit() {
  if (!pdfLibDoc) return;
  splitInProgress = true;
  const active = pages.filter(p => !p.deleted);
  if (!active.length) { showToast('All pages deleted — restore some first.'); splitInProgress = false; return; }

  try {
    if (currentTab === 'range') {
      const m = $('rangeMode').value;
      if (m === 'single') await splitSingleRange();
      else if (m === 'multi') await splitMultiRange();
      else await splitGroups();
    } else if (currentTab === 'selection') {
      await splitSelection();
    } else {
      await splitSkip();
    }
  } catch (err) {
    showToast('Error: ' + (err.message || 'unknown'));
    console.error(err);
  }
  splitInProgress = false;
  if (splitResult) showMobileBar();
}

async function splitSingleRange() {
  const total=pages.length;
  let from=Math.max(1,Math.min(parseInt($('singleFrom').value)||1,total));
  let to=Math.max(1,Math.min(parseInt($('singleTo').value)||total,total));
  if (from>to) { setStatusError('From must be ≤ To.'); return; }
  const slice=activePageSlice(from,to);
  if (!slice.length) { setStatusError('No active pages in that range.'); return; }
  const bytes=await buildOutputPDF(slice), base=pdfFile.name.replace(/\.pdf$/i,'');
  splitResult={blob:new Blob([bytes],{type:'application/pdf'}),filename:`${base}_p${from}-${to}.pdf`};
}
async function splitMultiRange() {
  if (!multiRanges.length) { setStatusError('Add at least one range.'); return; }
  const zip=new JSZip(), base=pdfFile.name.replace(/\.pdf$/i,''), total=pages.length;
  for (let ri=0;ri<multiRanges.length;ri++) {
    let {from,to}=multiRanges[ri]; from=Math.max(1,Math.min(+from,total)); to=Math.max(1,Math.min(+to,total));
    if (from>to) continue;
    const slice=activePageSlice(from,to); if (!slice.length) continue;
    zip.file(`${base}_p${from}-${to}.pdf`,await buildOutputPDF(slice));
  }
  splitResult={blob:await zip.generateAsync({type:'blob'}),filename:base+'_ranges.zip'};
}
async function splitGroups() {
  const size=Math.max(1,parseInt($('groupSize').value)||1), active=pages.filter(p=>!p.deleted);
  if (!active.length) { setStatusError('No active pages.'); return; }
  const zip=new JSZip(), base=pdfFile.name.replace(/\.pdf$/i,''); let part=1;
  for (let i=0;i<active.length;i+=size) {
    const chunk=active.slice(i,i+size);
    zip.file(`${base}_part${part}_p${chunk[0].origIndex+1}-${chunk[chunk.length-1].origIndex+1}.pdf`,await buildOutputPDF(chunk)); part++;
  }
  splitResult={blob:await zip.generateAsync({type:'blob'}),filename:base+'_groups.zip'};
}
async function splitSelection() {
  const sel=pages.filter(p=>p.selected&&!p.deleted);
  if (!sel.length) { setStatusError('No pages selected — tap pages to select them.'); return; }
  const base=pdfFile.name.replace(/\.pdf$/i,'');
  splitResult={blob:new Blob([await buildOutputPDF(sel)],{type:'application/pdf'}),filename:`${base}_selection.pdf`};
}
/* ── Skip: parse page list like "1, 2-10, 4, 5" ── */
function parseSkipPages(str, total) {
  const errors = [];
  const indices = new Set();
  if (!str.trim()) return { indices, errors };
  // Split on commas or whitespace (or both)
  const parts = str.split(/[\s,]+/);
  for (const token of parts) {
    if (!token) continue;
    const rangeMatch = token.match(/^(\d+)-(\d+)$/);
    const singleMatch = token.match(/^(\d+)$/);
    if (rangeMatch) {
      let a = parseInt(rangeMatch[1]), b = parseInt(rangeMatch[2]);
      if (a > b) [a, b] = [b, a]; // handle reversed e.g. 56-34 → 34-56
      if (a < 1 || b > total) errors.push(token);
      else for (let i = a; i <= b; i++) indices.add(i - 1);
    } else if (singleMatch) {
      const n = parseInt(singleMatch[1]);
      if (n < 1 || n > total) errors.push(token);
      else indices.add(n - 1);
    } else {
      errors.push(token);
    }
  }
  return { indices, errors };
}

function updateSkipPreview() {
  const input = $('skipPages');
  const preview = $('skipPreview');
  const total = pages.length;
  if (!total || !input) return;
  const str = input.value;
  preview.innerHTML = '';
  if (!str.trim()) return;

  const parts = str.split(/[\s,]+/);
  let hasError = false;

  for (const token of parts) {
    if (!token) continue;
    const chip = document.createElement('span');
    const rangeMatch = token.match(/^(\d+)-(\d+)$/);
    const singleMatch = token.match(/^(\d+)$/);
    let isValid = false;
    if (rangeMatch) {
      let a = parseInt(rangeMatch[1]), b = parseInt(rangeMatch[2]);
      if (a > b) [a, b] = [b, a];
      isValid = a >= 1 && b <= total;
    } else if (singleMatch) {
      const n = parseInt(singleMatch[1]);
      isValid = n >= 1 && n <= total;
    }
    chip.className = 'skip-chip' + (isValid ? '' : ' invalid');
    chip.textContent = token;
    preview.appendChild(chip);
    if (!isValid) hasError = true;
  }

  const { indices } = parseSkipPages(str, total);
  if (indices.size > 0) {
    const countEl = document.createElement('span');
    countEl.className = 'skip-count';
    countEl.textContent = indices.size + ' page' + (indices.size !== 1 ? 's' : '') + ' selected';
    preview.appendChild(countEl);
  }

  input.classList.toggle('invalid', hasError);
}

async function splitSkip() {
  const str = ($('skipPages').value || '').trim();
  const total = pages.length;
  if (!str) { setStatusError('Enter page numbers or ranges — e.g. 1, 2-10, 4, 5'); return; }
  const { indices, errors } = parseSkipPages(str, total);
  if (errors.length) { setStatusError('Invalid pages: ' + errors.join(', ')); return; }
  if (!indices.size) { setStatusError('No pages selected.'); return; }

  // Keep only non-deleted pages whose origIndex is in the set
  const kept = pages.filter(p => !p.deleted && indices.has(p.origIndex));
  // Sort by order they appear in the page list
  kept.sort((a, b) => [...indices].indexOf(a.origIndex) - [...indices].indexOf(b.origIndex));

  if (!kept.length) { setStatusError('All selected pages are deleted — restore them first.'); return; }
  const base = pdfFile.name.replace(/\.pdf$/i, '');
  splitResult = { blob: new Blob([await buildOutputPDF(kept)], { type: 'application/pdf' }), filename: `${base}_pages.pdf` };
}

function setBtnLoading(btn, loading) {
  if (loading) btn.classList.add('loading');
  else btn.classList.remove('loading');
}

function waitForResult() {
  return new Promise((resolve, reject) => {
    if (splitResult) { resolve(splitResult); return; }
    const MAX = 15000, INTERVAL = 100;
    let elapsed = 0;
    const timer = setInterval(() => {
      elapsed += INTERVAL;
      if (splitResult) { clearInterval(timer); resolve(splitResult); }
      else if (elapsed >= MAX) { clearInterval(timer); reject(new Error('Timed out — try adjusting options.')); }
    }, INTERVAL);
  });
}

async function downloadResult() {
  const btn = $('downloadBtn');
  setBtnLoading(btn, true);
  try {
    const result = await waitForResult();
    const a = document.createElement('a');
    a.href = URL.createObjectURL(result.blob);
    a.download = result.filename;
    a.click();
  } catch (err) {
    showToast(err.message || 'Nothing to download yet.');
  } finally {
    setBtnLoading(btn, false);
  }
}

async function shareResult() {
  const btn = $('shareBtn');
  setBtnLoading(btn, true);
  try {
    const result = await waitForResult();
    const file = new File([result.blob], result.filename, { type: result.blob.type });
    if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
      try { await navigator.share({ files: [file], title: result.filename }); return; }
      catch (err) { if (err.name !== 'AbortError') console.warn(err); }
    }
    // fallback: download
    const a = document.createElement('a');
    a.href = URL.createObjectURL(result.blob);
    a.download = result.filename;
    a.click();
  } catch (err) {
    showToast(err.message || 'Nothing to share yet.');
  } finally {
    setBtnLoading(btn, false);
  }
}

/* ── Toast ── */
function showToast(msg,d=3500) {
  const t=$('toast'); t.textContent=msg; t.classList.add('on');
  clearTimeout(t._t); t._t=setTimeout(()=>t.classList.remove('on'),d);
}

/* ── Range Highlight ── */
function getActiveRange() {
  if (currentTab !== 'range' || $('rangeMode').value !== 'single') return null;
  const total = pages.length;
  const from = Math.max(1, Math.min(parseInt($('singleFrom').value)||1, total));
  const to   = Math.max(1, Math.min(parseInt($('singleTo').value)||total, total));
  return { from, to };
}

function updateRangeHighlight() {
  const range = getActiveRange();
  const isSkip = currentTab === 'skip';
  const skipInput = $('skipPages');
  const skipIndices = isSkip && skipInput ? parseSkipPages(skipInput.value || '', pages.length).indices : null;

  $('pageGrid').querySelectorAll('[data-pi]').forEach(card => {
    const displayPos = +card.dataset.pi + 1;
    const origIdx = pages[+card.dataset.pi] ? pages[+card.dataset.pi].origIndex : -1;
    card.classList.remove('in-range', 'range-start', 'range-end', 'skip-highlight');
    if (range && displayPos >= range.from && displayPos <= range.to) {
      card.classList.add('in-range');
      if (displayPos === range.from) card.classList.add('range-start');
      if (displayPos === range.to)   card.classList.add('range-end');
    }
    if (skipIndices && skipIndices.has(origIdx)) {
      card.classList.add('skip-highlight');
    }
  });
}

document.addEventListener('input', e => {
  const id = e.target.id;
  if (id === 'singleFrom' || id === 'singleTo') { updateRangeHighlight(); scheduleAutoSplit(); }
  if (id === 'groupSize') scheduleAutoSplit();
  if (id === 'skipPages') { updateSkipPreview(); updateRangeHighlight(); scheduleAutoSplit(); }
});
document.addEventListener('change', e => {
  const id = e.target.id;
  if (id === 'singleFrom' || id === 'singleTo') { updateRangeHighlight(); scheduleAutoSplit(); }
  if (id === 'rangeMode') updateRangeHighlight();
  // multi-range inputs (dynamically created) — trigger if inside #rangeList
  if (e.target.closest && e.target.closest('#rangeList')) scheduleAutoSplit();
});

// Re-evaluate mobile bar on resize/orientation change
window.addEventListener('resize', () => {
  if (!pdfFile || !splitResult) return;
  if (window.innerWidth <= 900) $('mobileActionBar').style.display = 'flex';
  else $('mobileActionBar').style.display = 'none';
});

/* ── Preview Modal ── */
let previewPageIdx = 0;

async function openPreview(pageIdx) {
  previewPageIdx = pageIdx;
  $('previewModal').classList.add('open');
  document.body.style.overflow = 'hidden';
  await renderPreviewPage();
}

function closePreview() {
  $('previewModal').classList.remove('open');
  document.body.style.overflow = '';
}

async function renderPreviewPage() {
  if (!pdfJsDoc || previewPageIdx < 0 || previewPageIdx >= pages.length) return;
  const page = pages[previewPageIdx];
  const displayNum = previewPageIdx + 1;
  const total = pages.length;

  $('previewTitle').textContent = 'Page ' + displayNum;
  $('previewPageInfo').textContent = displayNum + ' / ' + total;
  $('prevPageBtn').disabled = previewPageIdx === 0;
  $('nextPageBtn').disabled = previewPageIdx === total - 1;

  const range = getActiveRange();
  const badge = $('previewRangeBadge');
  const note  = $('previewFooterNote');
  if (range) {
    const inRange = displayNum >= range.from && displayNum <= range.to;
    badge.textContent = inRange ? '✓ In range (p' + range.from + '–' + range.to + ')' : '✗ Outside range';
    badge.className = 'preview-range-badge' + (inRange ? '' : ' out');
    note.textContent = inRange ? 'This page will be included in the output.' : 'This page will NOT be included.';
  } else {
    badge.textContent = page.selected ? '✓ Selected' : page.deleted ? 'Deleted' : 'Not selected';
    badge.className = 'preview-range-badge' + (page.selected && !page.deleted ? '' : ' out');
    note.textContent = '';
  }

  const canvas = $('previewCanvas');
  try {
    const pg = await pdfJsDoc.getPage(page.origIndex + 1);
    const scale = Math.min(2.0, 900 / Math.max(pg.getViewport({scale:1}).width, 1));
    const vp = pg.getViewport({ scale, rotation: page.rotation });
    canvas.width  = vp.width;
    canvas.height = vp.height;
    canvas.style.maxWidth = '100%';
    await pg.render({ canvasContext: canvas.getContext('2d'), viewport: vp }).promise;
  } catch(err) {
    canvas.width = 400; canvas.height = 560;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#f3f3f0'; ctx.fillRect(0,0,400,560);
    ctx.fillStyle = '#bbb'; ctx.font = '16px Inter,sans-serif';
    ctx.textAlign = 'center'; ctx.fillText('Page ' + displayNum, 200, 280);
  }
}

$('prevPageBtn').addEventListener('click', async () => {
  if (previewPageIdx > 0) { previewPageIdx--; await renderPreviewPage(); }
});
$('nextPageBtn').addEventListener('click', async () => {
  if (previewPageIdx < pages.length - 1) { previewPageIdx++; await renderPreviewPage(); }
});
$('previewClose').addEventListener('click', closePreview);
$('previewBackdrop').addEventListener('click', closePreview);
document.addEventListener('keydown', e => {
  if (!$('previewModal').classList.contains('open')) return;
  if (e.key === 'Escape') closePreview();
  if (e.key === 'ArrowLeft'  && previewPageIdx > 0) { previewPageIdx--; renderPreviewPage(); }
  if (e.key === 'ArrowRight' && previewPageIdx < pages.length-1) { previewPageIdx++; renderPreviewPage(); }
});
</script>
