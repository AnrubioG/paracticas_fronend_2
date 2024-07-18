// Mat.random

let random = Math.random();
let randomEscalado = Math.random() * 3 + 1;

console.log(random);
console.log(parseInt(randomEscalado));

// Mat.round

let num = Math.round(22.3);
let numDos = Math.round(22.6);
let aleatorio = Math.round(Math.random() * (100 - 1) + 1);

console.log(num);
console.log(numDos);
console.log(aleatorio);

// Mat.max

let elMayor = Math.max(6, 9, 1, 2.4);

console.log(elMayor);

// For in: solo opera sobre objetos literales

let persona = {
  nombre: "Estela",
  edad: 26,
  profesion: "estudiante",
};

for (const propiedad in persona) {
  console.log(persona[propiedad]);
}

// for of: solo opera sobre arreglos

let estudiantes = ["Melisa", "Andrea", "Marta"];

for (const estudiante of estudiantes) {
  console.log(estudiante);
}

