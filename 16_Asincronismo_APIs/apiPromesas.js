/* una promesa es algo que se promete que 
sucederá y puede dar como resultado que su 
cumpliemiento fue exitoso o que falló*/

let getPromocionesPromesa = new Promise((resolve, rejct) => {
  setTimeout(() => {
    const promos = [
      {
        titulo: "Descuento en Juguetes del 20%",
      },
      {
        titulo: "Descuento en Electrodomesticos del 15%",
      },
    ];
    resolve(promos);
  }, 3000);
});

const getDatosPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const datos = {
      saldo: 10000,
      activo: true,
    };
    resolve(datos);
  }, 5000);
});
