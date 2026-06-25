
/* ===== SOUS-ONGLETS ===== */
function showSec(id, event) {

  const sections = document.querySelectorAll(".sub-section");
  sections.forEach(s => s.classList.remove("active"));

  document.getElementById(id).classList.add("active");

  const buttons = document.querySelectorAll(".sub-btn");
  buttons.forEach(b => b.classList.remove("active"));

  if (event) {
    event.target.classList.add("active");
  }
}

/* ===== MENU ACTIF AUTOMATIQUE ===== */
document.addEventListener("DOMContentLoaded", () => {

  const links = document.querySelectorAll(".menu-btn");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });

});

/* ===== BARRE DE RECHERCHE ===== */
function searchChapters() {

  const input = document.getElementById("searchInput");
  const filter = input.value.toLowerCase();

  const chapters = document.querySelectorAll(".card");

  chapters.forEach(card => {

    const text = card.textContent.toLowerCase();

    if (text.includes(filter)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }

  });
}
