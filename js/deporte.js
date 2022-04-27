
//conectamos con el endpoints de los deportes
const urlDepor = 'https://carlosreneas.github.io/endpoints/categoria_deporte.json';
fetch(urlDepor)
      .then(response => response.json())
      .then(json => {console.log(json); localStorage.setItem("listDeporte", JSON.stringify(json))});


//traemos el JSON de nuestro localStorade
var deportes = JSON.parse(localStorage.getItem("listDeporte"));
var myDiv = document.getElementById("categ");
//listamos las 3 primeras noticias de la categoria deporte
const myH3 = document.createElement('h3');
const myDivD = document.createElement('div');
myH3.textContent = "Deportes";
myDivD.appendChild(myH3);
myDiv.appendChild(myDivD);
for(var i = 0; i < 3; i++){
      const myDiv2 = document.createElement('div');
      const myTitulo = document.createElement('a');
      
      myTitulo.textContent = deportes[i].titulo;

      myDiv2.appendChild(myTitulo);
      myDivD.appendChild(myDiv2)
}
