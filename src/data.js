//Areeglos de peliculas de comedia por su IDs

// estado de animo triste
const comedyMoviesById = ["tt0107048", "tt3106046", "tt0095631", "tt0093822", "tt0387808", "tt5463162",
"tt1119646", "tt7634968", "tt0212338", "tt0302886"];


// estado de animo feliz
const fantasyMoviesById =["tt0032138", "tt0120737", "tt0241527","tt0327597","tt4123430","tt5028340",
"tt0088323","tt3040964","tt1587310","tt0363771"]

//estado aburrido
const actionMoviesById = ["tt0088247","tt0095016","tt1206885","tt1206885","tt0093870","tt0266697","tt0088944",
"tt4912910" ,"tt2406566","tt0293662"]


// Concatenar url de los arreglos de las peliculas para usar fetch 
const urlConcatenar = forFetch(comedyMoviesById);
const urlConcatenar2= forFetch2 (fantasyMoviesById);
const urlConcatenar3= forFetch3 (actionMoviesById);

//FUNCIÓN PARA TRISTE Generar url para fect con los id y key
function forFetch(comedyMoviesById){
  const urlConcatenar = [];
  for(i = 0; i < comedyMoviesById.length; i++){
    urlConcatenar[i] = 'http://www.omdbapi.com/?i=' + comedyMoviesById[i] + '&apikey=a934b92d';
  }
  return urlConcatenar;
}
main();

//Funcion para fetch
async function infForFetch(urlConcatenar) {
  
  let movies = [];
  // Crear y esperar promesas
  //Map me regresa tres valores, el valor actual, el índice del valor actual y el arreglo que se está mapeando en ese orden
  const fetchPromises = urlConcatenar.map(async (url, index) => {
    // Get response
    const response = await fetch(url);
    //  json data
    const data = await response.json();
    movies[index] = data;
  });
  // considerar que los datos (fetched) antes de regresar arreglo
  await Promise.all(fetchPromises);
  return movies;
}
//La función principal también es asíncrona, porque aquí ejecuto primero la recuperación y luego el resto
async function main() {
  //Espero a que se busquen los datos, y después de eso organizo mis datos por caracteres para su uso posterior
  const movies = await infForFetch(urlConcatenar);
  console.log(movies);
  showMovies (movies);
}


// imprimir las peliculas de comedia para estado de animo triste
function showMovies (movies){
  const div = document.getElementById('contentComedy');
  div.innerHTML = " ";

  movies.map((movies) => {
    let title = movies.Title + " (" + movies.Year + ")"
    let nameMovies =
    `<div class="card">
    <div class="row no-gutters">
      <div class="col-md-4 col-sm-12">
        <img class="img-fluid" src="${movies.Poster}" alt="...">
      </div>
      <div class="col-md-8 d-none d-md-block">
      <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p>${movies.Plot}</p>
     </div>
     </div>
     </div>
    </div>`;
    div.insertAdjacentHTML("beforeend", nameMovies);

  })
}


//FUNCIÓN PARA FELIZ Generar url para fecth con los id y key

function forFetch2(fantasyMoviesById){
  const urlConcatenar2 = [];
  for(i = 0; i < fantasyMoviesById.length; i++){
    urlConcatenar2[i] = 'http://www.omdbapi.com/?i=' + fantasyMoviesById[i] + '&apikey=a934b92d';
  }
  return urlConcatenar2;
}
main2();


async function infForFetch2(urlConcatenar2) {
  let movies2 = [];
  const fetchPromises2 = urlConcatenar2.map(async (url, index) => {
  const response = await fetch(url);
  const data2 = await response.json();
    movies2[index] = data2;
  });
  
  await Promise.all(fetchPromises2);
  return movies2;
}

async function main2() {
  
  const movies2 = await infForFetch2(urlConcatenar2);
  console.log(movies2);
  showMovies2 (movies2);
}

 
function showMovies2 (movies2){
  const div = document.getElementById('contentAction');
  div.innerHTML = " ";

  movies2.map((movies2) => {
    let title2 = movies2.Title + " (" + movies2.Year + ")"
    let nameMovies2 =
      `<div onclick="" class="movies">
        <div class="movieBg"><img src="${movies2.Poster}"></div>
        <div class="movieText">
          <h3 class="movieTitle"><strong>${title2}</strong></h3>
          <p class="moviePlot">${movies2.Plot}</p>
        </div>
      </div>`;
    div.insertAdjacentHTML("beforeend", nameMovies2);

  })
}


//FUNCION PARA ABURRIDO PELICULAS DE ACCIÓN

function forFetch3(actionMoviesById){
  const urlConcatenar3 = [];
  for(i = 0; i < actionMoviesById.length; i++){
    urlConcatenar3[i] = 'http://www.omdbapi.com/?i=' + actionMoviesById[i] + '&apikey=a934b92d';
  }
  return urlConcatenar3;
}
main3();

async function infForFetch3(urlConcatenar3) {
  let movies3 = [];
  const fetchPromises3 = urlConcatenar3.map(async (url, index) => {
  const response = await fetch(url);
  const data3 = await response.json();
    movies3[index] = data3;
  });
  
  await Promise.all(fetchPromises3);
  return movies3;
}

async function main3() {
 
  const movies3 = await infForFetch3(urlConcatenar3);
  console.log(movies3);
  showMovies3 (movies3);
}

// imprimir las peliculas DE ACCION para aburrido
function showMovies3 (movies3){
  const div = document.getElementById('contentFantasy');
  div.innerHTML = " ";

  movies3.map((movies3) => {
    let title3 = movies3.Title + " (" + movies3.Year + ")"
    let nameMovies3 =
      `<div onclick="" class="movies">
        <div class="movieBg"><img src="${movies3.Poster}"></div>
        <div class="movieText">
          <h3 class="movieTitle"><strong>${title3}</strong></h3>
          <p class="moviePlot">${movies3.Plot}</p>
        </div>
      </div>`;
    div.insertAdjacentHTML("beforeend", nameMovies3);

  })
}