// seleccionamos los input del html
let inputNombre = document.querySelector("#nombre");
let inputEmail = document.querySelector("#email");
let textConsulta = document.querySelector("#consulta");
let submit = document.querySelector("#submit");

let consulta = {
  nombre: "",
  email: "",
  textoConsulta: "",
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  
  inputNombre.classList.remove('error')
  inputEmail.classList.remove('error')
  textConsulta.classList.remove('error')
  
  inputNombre.value !== "" ? consulta.nombre = inputNombre.value : inputNombre.classList.toggle('error');
  inputEmail.value !== "" ? consulta.email = inputEmail.value : inputEmail.classList.add('error');
  textConsulta.value !== "" ? consulta.textoConsulta = textConsulta.value : textConsulta.classList.add('error');

});
