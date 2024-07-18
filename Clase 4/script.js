//  podemos ver o modificar la Url en la que estamos trabajando
// window.location.href

// seleecionar elementos en el DOM solo trae el primer elemento que cumpla con la condición
document.querySelector("h1");

// seleccionar todos los elementos que cumplan con un mismo selector
document.querySelectorAll("p");

// utilazando NTH child

document.querySelector("p.important");

// acceder al texto contenido

let contenido = document.querySelector("h1");

console.log(contenido.textContent);
