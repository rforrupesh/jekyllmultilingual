// Add this <script> tag in your HTML <head> BEFORE any CSS/JS/img loads:
// <script src="cache-fix.js"></script>

(function () {
  const VERSION = "v=" + Date.now(); // changes every deploy — or hardcode e.g. "v=2"

  // Fix <link href="..."> — CSS, icons
  document.querySelectorAll("link[href]").forEach((el) => {
    el.href = addVersion(el.getAttribute("href"));
  });

  // Fix <script src="...">
  document.querySelectorAll("script[src]").forEach((el) => {
    el.src = addVersion(el.getAttribute("src"));
  });

  // Fix <img src="...">
  document.querySelectorAll("img[src]").forEach((el) => {
    el.src = addVersion(el.getAttribute("src"));
  });

  function addVersion(url) {
    if (!url || /^(https?:|data:|\/\/)/.test(url)) return url; // skip external
    return url.includes("?") ? url + "&" + VERSION : url + "?" + VERSION;
  }
})();
