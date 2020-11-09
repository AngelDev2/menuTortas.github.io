"use strict";

let forma = document.getElementById("forma"),
  salidaTor = document.getElementById("salidaTortas"),
  tortas = document.getElementsByName("tortas"),
  precio = document.getElementsByName("precio");

forma.addEventListener("click", validaTorta, false);

function validaTorta() {
  const arrTortas = [];
  let total = 0;
  for (let i = 0; i < tortas.length; i++) {
    let tor = tortas[i];
    if (tor.checked) {
      arrTortas.push(tor.value);
      switch (tor.value) {
        case "Hawaiana":
          total += 45;
          break;
        case "Cubana":
          total += 90;
          break;
        case "Mexicana":
          total += 60;
          break;
        case "Española":
          total += 50;
          break;
        case "Suiza":
          total += 35;
          break;
      }
    }
}
console.log(total);
  salidaTor.textContent = "Selecciono: "+arrTortas.join(", ") + "   ---Su total a pagar es de: $" + total;
}
