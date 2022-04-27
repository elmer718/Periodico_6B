
//listamos todas las noticias
//conectamos con el endpoints de las noticias
const urlNoticias = 'https://carlosreneas.github.io/endpoints/noticias.json';
fetch(urlNoticias)
      .then(response => response.json())
      .then(json => {console.log(json); localStorage.setItem("listNoticia", JSON.stringify(json))});

//traemos el JSON de nuestro localStorade
var noticias = JSON.parse(localStorage.getItem("listNoticia"));
var myDivN = document.getElementById("noti");
//listamos las 3 primeras noticias
for(var i = 0; i < 3; i++){
	const myTitulo = document.createElement('a');
	const myParrafo = document.createElement('p');
	const myVer = document.createElement('a');

	myTitulo.textContent = noticias[i].titulo+" - "+noticias[i].categoria+" - "+noticias[i].fecha;
	myParrafo.textContent = noticias[i].descripcion;
	myVer.textContent = "Ver Mas";

	myParrafo.appendChild(myVer);
	myDivN.appendChild(myTitulo);
	myDivN.appendChild(myParrafo);
}
//listamos todas las noticias
function listarTodo(){
	myDivN.textContent = "";
	for (let i of noticias) {
		const myTitulo = document.createElement('a');
		const myParrafo = document.createElement('p');
		const myVer = document.createElement('a');

		myTitulo.textContent = i.titulo+" - "+i.categoria+" - "+i.fecha;
		myParrafo.textContent = i.descripcion;
		myVer.textContent = "Ver Mas";

		myParrafo.appendChild(myVer);
		myDivN.appendChild(myTitulo);
		myDivN.appendChild(myParrafo);
	}

}
