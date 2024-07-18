let form = document.querySelector("form");
let inputNombre = document.querySelector("#nombre");
let inputPassword = document.querySelector("#pass");
let inputTelefono = document.querySelector("#tel");
let botonEnviar = document.querySelector("#enviar");

let inputs = [inputNombre, inputPassword, inputTelefono];

let registro = {
  nombre: "",
  pass: "",
  tel: "",
  hobbies: [],
  nacionalidad: "",
};

let validarInputs = () => {
  inputs.forEach((input) => {
    input.classList.remove('error')
    if (input.value === "") {
      input.classList.add("error");
      input.focus()
    }
  });
};

// Eventos

botonEnviar.addEventListener("click", (e) => {
  e.preventDefault();
  validarInputs();
});
