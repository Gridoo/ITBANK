fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
.then(res => res.json())
.then(res => let i = res[0].casa.nombre);

let div= document.createElement("div");
titulo1.appendChild(div);
let text= document.createTextNode(´i´);