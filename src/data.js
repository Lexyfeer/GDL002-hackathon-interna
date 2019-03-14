//Array donde se almacenan las peliculas 
const movies = [];


//Declarar constante con arreglo de peliculas por ID
//  Estado de animo triste
const comedyMoviesById = ["tt0107048", "tt3106046", "tt0095631", "tt0093822", "tt0387808", "tt5463162",
"tt1119646", "tt7634968", "tt0212338", "tt0302886"];


// Ciclo for para hacer push de cada pelicula
for(let i = 0; i <  comedyMoviesById.length; i++){
  fetch('http://www.omdbapi.com/?i=' +  comedyMoviesById[i] + '&apikey=c0df8f38').then( (data) => {
    return data.json();
  }).then((dataAsJSON) => {
    movies[i] = dataAsJSON;
  });
}

console.log(movies);

const ShowMovies=(movies)=>{
  let ShowMovies = movies;

  let movie = ShowMovies[1];
  console.log(movie.title);
}



// estado de animo feliz
const fantasyMoviesById =["tt0032138", "tt0120737 ", " tt0241527","tt0327597","tt4123430","tt5028340",
"tt0088323","tt3040964","tt1587310","tt0363771"]


const actionMoviesById = ["tt0088247","tt0095016","tt1206885","tt1206885","tt0093870","tt0266697","tt0088944","tt4912910" ,"tt2406566","tt0293662"]


document.getElementById('btn1').addEventListener('click', traer);
let contenido = document.querySelector('#content');

function traer () {
    
// fetch estaria tomando una url en este caso esta de manera local y al nivel por eso no se especifica que este dentro de alguna carpeta.
    fetch ('https://randomuser.me/api/')
    .then (dataApi => dataApi.json()) 
    .then (dataApi => {
        console.log(dataApi.results['0']);
         content.innerHTML = `<span class="movie"><h2>${dataApi.Title} + " (" + ${dataApi.Year} + ")"</h2></span><span><img src="${dataApi.Poster}" class="img-fluid border border-primary alt="></span><span><h3>${dataApi.Genre}</h3></span><span><p>${dataApi.Plot}</p></span>`;
        
    })
    
}