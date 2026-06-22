// ═══════════════════════════════════════════════════════════
//  OFFLINE SUPPORT — paste this block just before </body>
// ═══════════════════════════════════════════════════════════

(function () {
  'use strict';

  // ── 1. Inject "Add to Offline" button styles ─────────────
  const style = document.createElement('style');
  style.textContent = `
    #offlineBtn {
      position: fixed;
      bottom: 24px;
      right: 20px;
      z-index: 9000;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 16px;
      background: #1a1a2e;
      color: #fff;
      border: none;
      border-radius: 50px;
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(0,0,0,0.25);
      transition: background .2s, transform .15s;
    }
    #offlineBtn:hover { background: #2563eb; transform: translateY(-1px); }
    #offlineBtn.installing { background: #7c3aed; cursor: wait; }
    #offlineBtn.ready      { background: #16a34a; cursor: default; }
    #offlineBtn.error      { background: #dc2626; }
    #offlineBtn svg        { width: 15px; height: 15px; flex-shrink: 0; }

    /* Hide on mobile if files are loaded (bottom bar takes space) */
    @media (max-width: 600px) {
      #offlineBtn { bottom: 78px; right: 12px; font-size: 12px; padding: 9px 13px; }
    }
  `;
  document.head.appendChild(style);

  // ── 2. Create the button ──────────────────────────────────
  const btn = document.createElement('button');
  btn.id = 'offlineBtn';
  btn.setAttribute('aria-label', 'Enable offline mode');

  const STATES = {
    idle: {
      cls: '',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
               <path d="M8 17l4 4 4-4"/><path d="M12 12v9"/>
               <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"/>
             </svg>`,
      text: 'Add to Offline',
    },
    installing: {
      cls: 'installing',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
               <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
             </svg>`,
      text: 'Caching…',
    },
    ready: {
      cls: 'ready',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
               <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
             </svg>`,
      text: 'Works Offline ✓',
    },
    error: {
      cls: 'error',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
               <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
             </svg>`,
      text: 'Retry Offline',
    },
  };

  function setState(key) {
    const s = STATES[key];
    btn.className = '';
    if (s.cls) btn.classList.add(s.cls);
    btn.innerHTML = s.icon + `<span>${s.text}</span>`;
    // Persist state so button shows correct status on reload
    try { localStorage.setItem('offlineState', key); } catch(e) {}
  }

  // ── 3. Restore previous state from localStorage ───────────
  const saved = (() => { try { return localStorage.getItem('offlineState'); } catch(e) { return null; } })();
  setState(saved === 'ready' ? 'ready' : 'idle');

  // ── 4. Service Worker registration ───────────────────────
  let swReg = null;

  async function registerSW() {
    if (!('serviceWorker' in navigator)) {
      setState('error');
      alert('Service Workers are not supported in this browser.');
      return;
    }

    setState('installing');

    try {
      // Register the SW — path must match where sw.js lives relative to the page
      swReg = await navigator.serviceWorker.register('./sw.js', { scope: './' });

      // Wait for the SW to be active
      await new Promise((resolve, reject) => {
        const sw = swReg.installing || swReg.waiting || swReg.active;
        if (!sw) { resolve(); return; }
        if (sw.state === 'activated') { resolve(); return; }
        sw.addEventListener('statechange', function onState() {
          if (this.state === 'activated') { this.removeEventListener('statechange', onState); resolve(); }
          if (this.state === 'redundant') { this.removeEventListener('statechange', onState); reject(new Error('SW redundant')); }
        });
        setTimeout(() => resolve(), 5000); // safety timeout
      });

      setState('ready');
      btn.disabled = true;
      showOfflineToast('✓ App cached — works offline now!');

    } catch (err) {
      console.error('[Offline] SW registration failed:', err);
      setState('error');
      showOfflineToast('⚠ Could not enable offline mode. Try again.');
    }
  }

  // Auto-register if already confirmed (page reload case)
  if (saved === 'ready' && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js', { scope: './' })
      .then(reg => { swReg = reg; btn.disabled = true; })
      .catch(() => { setState('idle'); });
  }

  // ── 5. Button click handler ───────────────────────────────
  btn.addEventListener('click', () => {
    if (btn.classList.contains('ready') || btn.classList.contains('installing')) return;
    registerSW();
  });

  document.body.appendChild(btn);

  // ── 6. Toast helper (reuses existing toast if present) ────
  function showOfflineToast(msg) {
    // Try to reuse the site's existing toast
    const existing = document.getElementById('toast');
    if (existing && typeof showToast === 'function') {
      showToast(msg, 4000);
      return;
    }
    // Fallback: create our own
    let t = document.getElementById('_offlineToast');
    if (!t) {
      t = document.createElement('div');
      t.id = '_offlineToast';
      t.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%) translateY(60px);background:#1a1a1a;color:#fff;font-size:13px;padding:10px 18px;border-radius:7px;z-index:9999;opacity:0;transition:all .25s;pointer-events:none;white-space:nowrap;';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.style.opacity = '1';
    t.style.transform = 'translateX(-50%) translateY(0)';
    clearTimeout(t._t);
    t._t = setTimeout(() => {
      t.style.opacity = '0';
      t.style.transform = 'translateX(-50%) translateY(60px)';
    }, 4000);
  }

  // ── 7. Online/offline indicator ───────────────────────────
  function updateNetworkStatus() {
    if (!navigator.onLine) {
      showOfflineToast('📴 You are offline — using cached version');
    }
  }
  window.addEventListener('offline', updateNetworkStatus);

})();
