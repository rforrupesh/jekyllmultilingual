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
