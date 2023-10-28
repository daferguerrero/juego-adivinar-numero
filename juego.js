// Generar un número aleatorio entre 1 y 100
let numeroAzar = Math.floor(Math.random() * 100) + 1;

// Obtener los elementos del DOM
let numeroDigitado = document.getElementById("numeroDigitado");
let mensaje = document.getElementById("mensaje");

// Función para comprobar el número ingresado por el usuario
function comprobarNunero() {
  let numeroIngresado = parseInt(numeroDigitado.value);

  if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
    mensaje.textContent = "Por favor introduce un número entero entre 1 y 100";
      mensaje.style.color = "#00f";
    return;
  }

  if (numeroIngresado === numeroAzar) {
    mensaje.textContent = "Felicitaciones, has adivinado el número...!!";
    mensaje.style.color = "#008000";
    numeroDigitado.disabled = true;
  } else if (numeroIngresado < numeroAzar) {
    mensaje.textContent = "El número es mayor. Intenta de nuevo.";
    mensaje.style.color = "#f00";
  } else {
    mensaje.textContent = "El número es menor. Intenta de nuevo.";
    mensaje.style.color = "#f00";
  }
}

document.getElementById("btn-comprobar").addEventListener("click", comprobarNunero);
