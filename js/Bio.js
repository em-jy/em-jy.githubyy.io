// Mostrar animación al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
  const bioSection = document.querySelector('.bio');

  function showOnScroll() {
    const rect = bioSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      bioSection.classList.add('show');
      window.removeEventListener('scroll', showOnScroll);
    }
  }

  window.addEventListener('scroll', showOnScroll);
});
