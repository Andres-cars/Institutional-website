/* =========================================================
   MENÚ HAMBURGUESA (SOLO MÓVIL)
========================================================= */
function toggleMenu() {
  const menu = document.getElementById("menu");
  if (!menu) return;
  menu.classList.toggle("active");
}

/* =========================================================
   CARRUSEL - OFERTAS ACADÉMICAS
========================================================= */
document.addEventListener("DOMContentLoaded", () => {

  const track = document.querySelector('.ofertas');
  const cards = document.querySelectorAll('.oferta-card');
  const dotsContainer = document.querySelector('.dots');

  let index = 0;

  /* ───────── CREAR DOTS ───────── */
  cards.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');

    dot.addEventListener('click', () => {
      index = i;
      updateCarousel();
      resetAutoplay();
    });

    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dots span');

  /* ───────── FUNCIÓN PRINCIPAL ───────── */
  function updateCarousel() {
    const containerWidth = document.querySelector('.carousel-container').offsetWidth;
    const cardWidth = cards[0].offsetWidth + 30;
    const offset = (containerWidth / 2) - (cardWidth / 2);
    const translateX = offset - (index * cardWidth);

    track.style.transform = `translateX(${translateX}px)`;

    cards.forEach(c => c.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    cards[index].classList.add('active');
    dots[index].classList.add('active');
  }

  /* ───────── CLICK EN TARJETAS ───────── */
  cards.forEach((card, i) => {
    card.addEventListener('click', () => {
      index = i;
      updateCarousel();
      resetAutoplay();
    });
  });

  /* ───────── AUTOPLAY ───────── */
  let autoplay = setInterval(nextSlide, 4000);

  function nextSlide() {
    index = (index + 1) % cards.length;
    updateCarousel();
  }

  function resetAutoplay() {
    clearInterval(autoplay);
    autoplay = setInterval(nextSlide, 4000);
  }

  /* ───────── SWIPE MÓVIL ───────── */
  let startX = 0;

  track.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    clearInterval(autoplay);
  });

  track.addEventListener('touchend', e => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (diff > 50) index = (index + 1) % cards.length;
    if (diff < -50) index = (index - 1 + cards.length) % cards.length;

    updateCarousel();
    resetAutoplay();
  });

  /* ───────── INICIAL ───────── */
  window.addEventListener('load', updateCarousel);
  window.addEventListener('resize', updateCarousel);

});



