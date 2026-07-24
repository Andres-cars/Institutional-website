document.addEventListener("DOMContentLoaded", () => {

  const imagenes = [
    { src: "Boceto/Imagenes/graduados.PNG", titulo: "Bachillerato General Unificado" },
    { src: "Boceto/Imagenes/BGU.png", titulo: "Educación General Básica" },
    { src: "Boceto/Imagenes/inicialcopia.png", titulo: "Educación Inicial" }
  ];

  let index = 0;

  const img = document.querySelector(".slider-imagen img");
  const titulo = document.querySelector(".slider-texto h3");
  const btnLeft = document.querySelector(".slider-btn.left");
  const btnRight = document.querySelector(".slider-btn.right");

  if (!img || !btnLeft || !btnRight) {
    console.error("Slider: elementos no encontrados");
    return;
  }

function actualizarSlider() {
  img.style.opacity = 0;

  setTimeout(() => {
    img.src = imagenes[index].src;
    titulo.textContent = imagenes[index].titulo;
    img.style.opacity = 1;
  }, 300);
}


  btnRight.addEventListener("click", () => {
    index = (index + 1) % imagenes.length;
    actualizarSlider();
  });

  btnLeft.addEventListener("click", () => {
    index = (index - 1 + imagenes.length) % imagenes.length;
    actualizarSlider();
  });

});

const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
