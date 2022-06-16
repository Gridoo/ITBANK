fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
  .then((res) => res.json())
  .then((res) => console.log(res[0].casa.nombre));

const dolarOficial = document.getElementById(titulo1);
const div = document.createElement("div");
const text = document.createTextNode("casi");
document.body.appendChild(text);

dolarOficial.innerText = "hola";
