(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      links.classList.toggle("is-open", !open);
    });

    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        links.classList.remove("is-open");
      });
    });
  }
})();
