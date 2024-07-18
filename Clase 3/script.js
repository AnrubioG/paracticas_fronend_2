
// ===========================================================

// Practica Piedra papel o tijera

// progrmamos un pequeño juego interactivo de piedra papel o tijera
// el usuario podrá elegir una de las 3 opciones
// y la computadora elegira al azar otra de las tres
// entonces se mostrará si ganó o perdió
// lógica:
// 1 piedra gana => tijera
// 2 tijera gana => papel
// 3 papel gana => piedra

// ===========================================================

// solicitar que el usuario sleccione la opción con la que desea jugar
let pedirJuegoUsuario = () => {
  let opcion = parseInt(prompt("Elije tu juego:  1 para => Piedra, 2 para => Papel y 3 para => Tijera"));

  if (opcion >= 1 && opcion <= 3) {
    return opcion;
  } else {
    alert("No se ha ingresado una opcion valida, porfavor refresca para volver a empezar");
  }
};

// console.log(`Usuario: ${pedirJuegoUsuario()}`);

// generar la opción aleatoria de la computadora

let pedirJuegoComputadora = () => {
  let opcionGenerada = parseInt(Math.random() * 3 + 1);
  return opcionGenerada;
};

// console.log(`Computadora: ${pedirJuegoComputadora()}`);

// definir la logica del juego

let juego = () => {
  let usuario = pedirJuegoUsuario();
  let computadora = pedirJuegoComputadora();

  console.log(`Usuario: ${usuario}`);
  console.log(`Computadora: ${(computadora)}`);

  if (usuario === computadora) {
    console.log("Esto es un empate");
  } else if (
    (usuario === 1 && computadora === 2) ||
    (usuario === 2 && computadora === 3) ||
    (usuario === 3 && computadora === 1)
  ) {
    console.log("has ganado");
  } else {
    console.log("has perdido");
  }
};

juego();
