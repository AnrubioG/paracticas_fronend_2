const formulrio = document.querySelector("form");
const postText = document.querySelector("#titulo");
const contador = document.querySelector("#caracteres");
const posteos = document.querySelector("#titulo-publicado");

postText.addEventListener("keyup", (e) => {
  let caracteres = postText.value.length;
  contador.innerHTML = caracteres;
});

formulrio.addEventListener("submit", (e) => {
  e.preventDefault();

  const url = "https://jsonplaceholder.typicode.com/posts/";
  const datosEnviar = {
    id_user: 1,
    title: postText.value,
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(datosEnviar),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      posteos.innerHTML += `<p>Post guardado con el id ${json.id} y el titulo ${json.title}</p>`;
    })
    .catch((response) => console.error("hubo un error"));
  postText.value = "";
});
