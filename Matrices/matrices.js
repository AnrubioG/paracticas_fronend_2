let matrizDiez = [];

let generarMatriz = () => {
  let j = 1;

  for (let i = 1; i < 11; i++) {
    let arreglo = [];

    for(let h=1; h<11; h++){
      arreglo.push(j);
      j++;
    }

    matrizDiez.push(arreglo);
  }
};


let diagonalRoja = () =>{
  let suma = 0
  for(let i = 0; i < matrizDiez.length; i++){
    suma += matrizDiez[i][i]
  }
  console.log(suma)
}

let diagonalVerde = () =>{
  let suma = 0
  for(let i = 0; i < matrizDiez.length; i++){
    suma += matrizDiez[i][9-i]
  }
  console.log(suma)
}

generarMatriz();
diagonalRoja()
diagonalVerde()


