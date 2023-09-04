
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.backgroundColor = "white";
  } else {
    header.style.backgroundColor = "#fff";
  }
});

let headerVisible = true;
let prevScrollY = window.scrollY;

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var mainNav = document.querySelector(".main-nav");

  // Cambiar el color de fondo del encabezado según el desplazamiento
  if (window.scrollY > 100) {
    header.style.backgroundColor = "red";
  } else {
    header.style.backgroundColor = "#333";
  }

  // Mostrar u ocultar el menú al desplazarse hacia arriba o abajo
  if (window.scrollY > prevScrollY) {
    // Desplazamiento hacia abajo
    if (headerVisible) {
      header.style.transform = "translateY(-100%)";
      mainNav.style.transform = "translateY(-100%)";
      headerVisible = false;
    }
  } else {
    // Desplazamiento hacia arriba
    if (!headerVisible) {
      header.style.transform = "translateY(0)";
      mainNav.style.transform = "translateY(0)";
      headerVisible = true;
    }
  }

  // Actualizar el valor del desplazamiento anterior
  prevScrollY = window.scrollY;
});




