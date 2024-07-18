let btnContar = document.querySelector("#btnContar");
let btnDescontar = document.querySelector("#btnDescontar");
let conteo = document.querySelector("#textoContador");

let cuenta = 0;

btnContar.addEventListener("click", () => actualizarConteo(1));
btnDescontar.addEventListener("click", () => actualizarConteo(-1));

function actualizarConteo(value = 0) {
  if (cuenta + value >= 0) {
    cuenta += value;
    conteo.textContent = cuenta;
  }
}

actualizarConteo();

// function contar() {
//   cuenta += 1;
//   actualizarConteo()
// }

// function descontar() {
//   cuenta -= 1;
//   actualizarConteo()
// }
