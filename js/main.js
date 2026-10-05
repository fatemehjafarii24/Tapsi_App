
const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
if (toggler && navbar) {
  const closeMenu = () => {
    navbar.classList.remove("nav--open");
    toggler.setAttribute("aria-expanded", "false");
    toggler.setAttribute("aria-label", "Open menu");
  };

  toggler.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("nav--open");
    toggler.setAttribute("aria-expanded", String(isOpen));
    toggler.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  navbar.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}
