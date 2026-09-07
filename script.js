(function () {
  "use strict";

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Soft sticky-header elevation after slight scroll
  var header = document.querySelector(".site-header");
  if (header && "IntersectionObserver" in window) {
    var sentinel = document.createElement("div");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.style.cssText = "position:absolute;top:0;height:1px;width:1px;pointer-events:none;";
    document.body.prepend(sentinel);

    var observer = new IntersectionObserver(
      function (entries) {
        header.classList.toggle("is-stuck", !entries[0].isIntersecting);
      },
      { threshold: [1] }
    );
    observer.observe(sentinel);
  }
})();
