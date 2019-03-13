//Array donde se almacenan las peliculas 
const movies = [];


//Declarar constante con arreglo de peliculas por ID
const comedyMoviesById = ["tt0107048", "tt3106046", "tt0095631", "tt0093822", "tt0387808", "tt5463162","tt1119646", "tt7634968", "tt0212338", "tt0302886"];


// Ciclo for para hacer push de cada pelicula
for(let i = 0; i <  comedyMoviesById.length; i++){
  fetch('http://www.omdbapi.com/?i=' +  comedyMoviesById[i] + '&apikey=a934b92d').then( (data) => {
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
