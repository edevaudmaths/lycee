function showSec(id, event) {
  // sécurise section
  const section = document.getElementById(id);
  if (!section) return;

  // reset sections
  document.querySelectorAll('.sub-section')
    .forEach(s => s.classList.remove('active'));

  section.classList.add('active');

  // reset boutons
  document.querySelectorAll('.sub-btn')
    .forEach(b => b.classList.remove('active'));

  // bouton actif fiable (iOS FIX)
  const btn = event?.currentTarget;
  if (btn) btn.classList.add('active');
}

/* sécurité au chargement */
document.addEventListener("DOMContentLoaded", () => {
  const first = document.querySelector('.sub-section');
  if (first) first.classList.add('active');
});
