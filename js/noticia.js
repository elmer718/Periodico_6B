
const urlNoticias = 'https://carlosreneas.github.io/endpoints/noticias.json';
fetch(urlNoticias)
      .then(response => response.json())
      .then(json => {console.log(json); localStorage.setItem("listNoticia", JSON.stringify(json))});


var noticias = localStorage.getItem("listNoticia");
var myDiv = document.getElementById("noti");
for (var i = 0; i < 3 /*noticias.length*/; i++) {
	const myA = document.createElement('a');
	const myP = document.createElement('p');

	myA.textContent = noticias[i].titulo;
	myP.textContent = noticias[i].descripcion;

	myDiv.appendChild(myA);
	myDiv.appendChild(myP);


}