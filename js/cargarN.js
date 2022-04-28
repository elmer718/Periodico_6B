
//conectamos con el endpoints de las noticias


const urlNoticia = 'https://carlosreneas.github.io/endpoints/noticia_1.json';
fetch(urlNoticia)
      .then(response => response.json())
      .then(json => {console.log(json); localStorage.setItem("cargarNoti", JSON.stringify(json))});

//traemos el JSON de nuestro localStorade
var noticia = JSON.parse(localStorage.getItem("cargarNoti"));

	let div = document.getElementById("contenido");

	let tit = document.createElement('a');
	let img = document.createElement('img');
	let des = document.createElement('p');
	let par = document.createElement('p');

	tit.textContent = noticia.titulo+" - "+noticia.categoria+" - "+noticia.fecha;
	img.setAttribute('src', noticia.img);
	des.textContent = noticia.descripcion;
	par.textContent = noticia.detalle;

	div.appendChild(tit);
	div.appendChild(img);
	div.appendChild(des);
	div.appendChild(par);
