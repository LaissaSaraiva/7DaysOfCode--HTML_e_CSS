const btnMobile = document.querySelector("#btn__mobile");

const btnX = document.querySelector("#btn__x");

function alternarMenu(evento) {
  if (evento.type === "touchstart") {
    evento.preventDefault();
  }
  const menuNav = document.querySelector("#menu__nav");
  menuNav.classList.toggle("ativo");
}

btnMobile.addEventListener("click", alternarMenu);
btnX.addEventListener("click", alternarMenu);

btnMobile.addEventListener("touchstart", alternarMenu);
btnX.addEventListener("touchstart", alternarMenu);
