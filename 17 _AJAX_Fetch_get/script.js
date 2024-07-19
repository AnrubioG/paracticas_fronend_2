const btn = document.querySelector("#btn-get");
const tarjetas = document.querySelector(".tarjetas");

btn.addEventListener("click", () => {
  const ruta = "https://restcountries.com/v3.1/all";
  fetch(ruta)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((element) => {
        let tarjeta = `<div class="card">
        <h2>${element.name.official}</h2>
        <img src="${element.flags.png}" alt="bandera de ${element.name.official}">
        </div>`;
        tarjetas.innerHTML += tarjeta;
      });
    })
    .catch((response) => {
      console.error(response);
    });
});
