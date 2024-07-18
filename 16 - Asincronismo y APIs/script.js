/* --------------------------- variables Globales --------------------------- */
const componenteDatos = document.querySelector("#datos");
const componenteTajetas = document.querySelector("#tarjetas");
const componentePromociones = document.querySelector("#promociones");
const btnIngresar = document.querySelector("button");

function renderizarPromociones(lista) {
  componentePromociones.innerHTML = "";

  lista.forEach((element) => {
    componentePromociones.innerHTML += `<h4>${element.titulo} </h4>`;
  });
}

function renderizarDatos(cuenta) {
  componenteDatos.innerHTML = "";
  componenteDatos.innerHTML += `<h2>Usuario ${cuenta.usuario}</h2>`;
  componenteDatos.innerHTML += `<h2>Saldo ${cuenta.saldo}</h2>`;
  componenteDatos.innerHTML += `<h2>Estado ${
    cuenta.activo == true ? "Activa" : "Inactiva"
  }</h2>`;
}

btnIngresar.addEventListener("click", function () {
  // .them es para el caso en el que se resuelve
  // .catch es para el caso en el que falla
  // finally es en cualquiera de los casos cuando la promesa finalice

  // promesacon demora de 3 segundos
  getPromocionesPromesa.then((response) => {
    renderizarPromociones(response);
  });

  // promesacon demora de 5 segundos
  getDatosPromesa.then((response) => {
    renderizarDatos(response);
  });
});
