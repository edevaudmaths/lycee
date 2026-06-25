function showSec(id, event) {
  const section = document.getElementById(id);
  if (!section) return;

  document.querySelectorAll('.sub-section')
    .forEach(s => s.classList.remove('active'));

  section.classList.add('active');

  document.querySelectorAll('.sub-btn')
    .forEach(b => b.classList.remove('active'));

  if (event && event.currentTarget) {
    event.currentTarget.classList.add('active');
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const first = document.querySelector('.sub-section');
  if (first) first.classList.add('active');
});
function searchChapters() {
  const input = document.getElementById("searchInput");
  if (!input) return;

  const filter = input.value.toLowerCase();

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();

    if (text.includes(filter)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}
