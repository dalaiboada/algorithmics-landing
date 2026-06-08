const carrusel = document.querySelector(".slider");
const deslizador = carrusel.querySelector(".slider_contenedor");
const bordeMiniaturas = document.querySelector(".thumbnail");

let itemsMiniatura = bordeMiniaturas.querySelectorAll(".item");
bordeMiniaturas.appendChild(itemsMiniatura[0]);

const ANIM_DURATION = 1200;
const AUTO_INTERVAL = 12000;

let animTimeout;
let autoTimeout;

function mostrarDeslizador(direccion) {
  const itemsDeslizador = deslizador.querySelectorAll(".item");
  itemsMiniatura = bordeMiniaturas.querySelectorAll(".item");

  if (direccion === "next") {
    deslizador.appendChild(itemsDeslizador[0]);
    bordeMiniaturas.appendChild(itemsMiniatura[0]);
    carrusel.classList.add("siguiente");
  } else {
    deslizador.prepend(itemsDeslizador[itemsDeslizador.length - 1]);
    bordeMiniaturas.prepend(itemsMiniatura[itemsMiniatura.length - 1]);
    carrusel.classList.add("anterior");
  }

  clearTimeout(animTimeout);
  animTimeout = setTimeout(() => {
    carrusel.classList.remove("siguiente", "anterior");
  }, ANIM_DURATION);

  clearTimeout(autoTimeout);
  autoTimeout = setTimeout(() => mostrarDeslizador("next"), AUTO_INTERVAL);
}

carrusel.addEventListener("click", (e) => {
  const btn = e.target.closest(".prev, .next");
  if (!btn) return;
  mostrarDeslizador(btn.classList.contains("next") ? "next" : "prev");
});

autoTimeout = setTimeout(() => mostrarDeslizador("next"), AUTO_INTERVAL);
