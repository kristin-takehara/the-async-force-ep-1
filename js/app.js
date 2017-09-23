// console.log('hello');

////////PERSON4NAME////////
var oReq = new XMLHttpRequest();
function reqListener() {
  var data = JSON.parse(this.responseText);
  document.getElementById("person4Name").innerHTML = data.name;
}

oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://swapi.co/api/people/4/");
oReq.send();
//////////PERSON4HOMEWORLD///////////////

var oReq2 = new XMLHttpRequest();
function reqListener2() {
  var data = JSON.parse(this.responseText);
  document.getElementById("person4HomeWorld").innerHTML = data.name;
}
oReq2.addEventListener("load", reqListener2);
oReq2.open("GET", "http://swapi.co/api/planets/1/");
oReq2.send();
///////////PERSON14NAME/////////////

var oReq3 = new XMLHttpRequest();
function reqListener3() {
  var data = JSON.parse(this.responseText);
  document.getElementById("person14Name").innerHTML = data.name;
}
oReq3.addEventListener("load", reqListener3);
oReq3.open("GET", "http://swapi.co/api/people/14/");
oReq3.send();
////////////FILM LIST//////////////

/////FILM 1 OF 4//////
var oReq4a = new XMLHttpRequest();
function reqListener4a() {
  var data = JSON.parse(this.responseText);

  var filmList = document.getElementById("filmList");
  var newFilm = document.createElement("li");
  newFilm.className = "film";
  filmList.appendChild(newFilm);

  var newFilmTitle = document.createElement("h2");
  newFilmTitle.innerHTML = data.title;
  newFilm.appendChild(newFilmTitle);

  // var getFilm = document.getElementsByClassName("h2");
var planet = document.createElement("h3");
  planet.innerHTML = "Planets";
  newFilm.appendChild(planet);
}


oReq4a.addEventListener("load", reqListener4a);
oReq4a.open("GET", "http://swapi.co/api/films/2/");
oReq4a.send();

///////PLANET 1 OF 4////////////

var oReq4b = new XMLHttpRequest();
function reqListener4b() {
  var data = JSON.parse(this, responseText);


  var ulPlanetCl = document.createElement("ul");
  ulPlanetCl.className = "filmPlanets";
  planet.appendChild(ulPlanetCl);

  var liPlanet = document.createElement("li");
  liPlanet.innerHTML = data.name;
}

oReq4b.addEventListener("load", reqListener4b);
oReq4b.open("GET", "http://swapi.co/api/planets/2/");
oReq4b.send();


/////FILM 2 OF 4//////
// var oReq5 = new XMLHttpRequest();
// function reqListener5() {
//   var data = JSON.parse(this.responseText);

//   var films = document.getElementById("films");
//   var newFilm = document.createElement("li");
//   newFilm.className = "film";
//   newFilm.innerHTML = data.title;
//   films.appendChild(newFilm);

// }


// oReq5.addEventListener("load", reqListener5);
// oReq5.open("GET", "http://swapi.co/api/films/6/");
// oReq5.send();