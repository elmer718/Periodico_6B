
//conectamos con el endpoints de las tecnologias
const urlTecno = 'https://carlosreneas.github.io/endpoints/categoria_tecnologia.json';
fetch(urlTecno)
      .then(response => response.json())
      .then(json => {console.log(json); localStorage.setItem("listTecnologias", JSON.stringify(json))});


//traemos el JSON de nuestro localStorade
var tecnologias = JSON.parse(localStorage.getItem("listTecnologias"));
var myDiv = document.getElementById("categ");
//listamos las 3 primeras noticias de la categoria tecnologia
let myH4 = document.createElement('h3');
const myDivT = document.createElement('div');
myH4.textContent = "Tecnologias";
myDivT.appendChild(myH4);
myDiv.appendChild(myDivT);
for(var i = 0; i < 3; i++){
      let myDiv2 = document.createElement('div');
      let myTitulo = document.createElement('a');
      
      myTitulo.textContent = tecnologias[i].titulo;

      if(localStorage.getItem("pathname") != window.location.pathname){
            myTitulo.setAttribute('href', "../html/noticia.html");
      }else{
            myTitulo.setAttribute('href', "html/noticia.html");
      }
      
      myDiv2.appendChild(myTitulo);
      myDivT.appendChild(myDiv2)
}
