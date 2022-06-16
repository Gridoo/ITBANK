fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
.then(res => res.json())
.then(res => console.log(res[0].casa.nombre));
