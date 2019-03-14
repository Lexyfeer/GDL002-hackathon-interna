//Array donde se almacenan las peliculas 
const movies = [];


//Declarar constante con arreglo de peliculas por ID
//  Estado de animo triste
const comedyMoviesById = ["tt0107048", "tt3106046", "tt0095631", "tt0093822", "tt0387808", "tt5463162",
"tt1119646", "tt7634968", "tt0212338", "tt0302886"];



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



// estado de animo feliz
const fantasyMoviesById =["tt0032138", "tt0120737 ", " tt0241527","tt0327597","tt4123430","tt5028340",
"tt0088323","tt3040964","tt1587310","tt0363771"]


const actionMoviesById = ["tt0088247","tt0095016","tt1206885","tt1206885","tt0093870","tt0266697","tt0088944","tt4912910" ,"tt2406566","tt0293662"]