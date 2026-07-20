// FAQ Tool Animation

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


// SHARE OPION SHOWS

(function(){
  const map = {
    fb:     u     => `https://www.facebook.com/sharer/sharer.php?u=${u}`,
    x:      (u,t) => `https://twitter.com/intent/tweet?url=${u}&text=${t}`,
    wa:     (u,t) => `https://wa.me/?text=${t}%20${u}`,
    tg:     (u,t) => `https://t.me/share/url?url=${u}&text=${t}`,
    li:     u     => `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
    rd:     (u,t) => `https://reddit.com/submit?url=${u}&title=${t}`,
    pin:    (u,t) => `https://pinterest.com/pin/create/button/?url=${u}&description=${t}`,
    signal: u     => `https://signal.me`,
    email:  (u,t) => `mailto:?subject=${t}&body=${u}`,
    sms:    (u,t) => `sms:?body=${t}%20${u}`
  };

  window.go = function(p, e) {
    if (e) e.preventDefault();
    const u = encodeURIComponent(window.location.href);
    const t = encodeURIComponent(document.title || 'Check this out');
    if (p === 'native') {
      if (navigator.share) {
        navigator.share({ title: document.title, url: window.location.href }).catch(() => {});
      } else { openModal(); return; }
    } else if (p === 'email' || p === 'sms') {
      window.location.href = map[p](u, t);
    } else {
      window.open(map[p](u, t), '_blank', 'width=640,height=520');
    }
    closeModal();
  };

  window.openModal = function() {
    document.getElementById('urlInp').value = window.location.href;
    document.getElementById('sOverlay').classList.add('on');
    document.body.style.overflow = 'hidden';
  };

  window.closeModal = function() {
    document.getElementById('sOverlay').classList.remove('on');
    document.body.style.overflow = '';
  };

  window.doCopy = function() {
    navigator.clipboard.writeText(window.location.href).catch(() => {
      const i = document.getElementById('urlInp'); i.select(); document.execCommand('copy');
    });
    const b = document.getElementById('copyBtn');
    b.textContent = 'Copied!'; b.classList.add('ok');
    setTimeout(() => { b.textContent = 'Copy link'; b.classList.remove('ok'); }, 2200);
  };

  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  window.addEventListener('scroll', () => {
    const t = document.getElementById('fabTop');
    if (t) t.style.display = window.scrollY > 300 ? 'flex' : 'none';
  });
})();
