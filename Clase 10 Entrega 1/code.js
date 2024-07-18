/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

/* --------------------- PUNTO 1: Escribe tu codigo aqui --------------------- */
function obtenerDatosDelUsuario() {
  datosPersona.nombre = prompt("Ingresa tu nombre");
  datosPersona.edad = parseInt(prompt("Ingresa el año en que naciste"));
  datosPersona.ciudad = prompt("Ingresa la ciudad donde vives");
  datosPersona.interesPorJs = confirm("¿Te interesa JavaScript");
}

/* --------------------- PUNTO 2: Escribe tu codigo aqui --------------------- */

function renderizarDatosUsuario() {
  obtenerDatosDelUsuario();
  document.querySelector("#nombre").textContent = datosPersona.nombre;
  document.querySelector("#edad").textContent = new Date().getFullYear() - datosPersona.edad;
  document.querySelector("#ciudad").textContent = datosPersona.ciudad;
  if (datosPersona.interesPorJs) {
    document.querySelector("#javascript").textContent = "si";
  } else {
    document.querySelector("#javascript").textContent = "no";
  }
}
/* --------------------- PUNTO 3: Escribe tu codigo aqui --------------------- */
function recorrerListadoYRenderizarTarjetas() {
  contenedorMaterias = document.querySelector("#fila");

  if(contenedorMaterias.children.length > 0){
    return
  }

  for (let i = 0; i < listado.length; i++) {
    const materia = `<div class="caja">
                    <img  src="${listado[i].imgUrl}" alt="${listado[i].lenguajes}">
                    <p class="lenguajes">${listado[i].lenguajes}</p>
                    <p class="bimestre">${listado[i].bimestre}</p>
                  </div>`;

    contenedorMaterias.innerHTML += materia;
  }
}
/* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
function alternarColorTema() {
  let sitio = document.querySelector("#sitio");
  sitio.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

function renderizarInformaionSobreMI() {
  let sobreMi = document.querySelector("#sobre-mi");

  document.addEventListener("keydown", (e) => {
    if (e.key === "F") {
      sobreMi.classList.toggle("oculto");
    }
  });
}
renderizarInformaionSobreMI();
