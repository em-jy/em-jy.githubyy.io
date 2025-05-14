document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.image-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.image-card').forEach(c => {
        if (c !== card) c.classList.remove('active');
      });
      card.classList.toggle('active');
    });
  });
});
