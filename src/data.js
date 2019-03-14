//Areeglo de peliculas de comedia

const comedyMovies = ["tt0107048", "tt3106046", "tt0095631", "tt0093822", "tt0387808", "tt5463162",
"tt1119646", "tt7634968", "tt0212338", "tt0302886"];


// estado de animo feliz
const fantasyMoviesById =["tt0032138", "tt0120737 ", " tt0241527","tt0327597","tt4123430","tt5028340",
"tt0088323","tt3040964","tt1587310","tt0363771"]

//estado aburrido
const actionMoviesById = ["tt0088247","tt0095016","tt1206885","tt1206885","tt0093870","tt0266697","tt0088944",
"tt4912910" ,"tt2406566","tt0293662"]

// Concatenar url para usar fetch
const urlConcatenar = urlGen(comedyMovies);
//Function to create url for fetch with IDs and key
function urlGen(comedyMovies){
  const urlConcatenar = [];
  for(i = 0; i < comedyMovies.length; i++){
    urlConcatenar[i] = 'http://www.omdbapi.com/?i=' + comedyMovies[i] + '&apikey=a934b92d';
  }
  return urlConcatenar;
}

main();


//Async function to fetch data
async function infForFetch(urlConcatenar) {
  //Array where I will save all my movie objects
  let movies = [];
  // Create all the promises and wait for them
  //Map me regresa tres valores, el valor actual, el índice del valor actual y el arreglo que se está mapeando en ese orden
  const fetchPromises = urlConcatenar.map(async (url, index) => {
    // Get response
    const response = await fetch(url);
    // Get json data
    const data = await response.json();
    movies[index] = data;
  });
  //I make sure that the data is fetched before I return my array
  await Promise.all(fetchPromises);
  return movies;
}
//Main function is async as well, because here I run the fetching first and then the rest
async function main() {
  //I wait for the data to be fetched, and after that I organize my data by characters for further use
  const movies = await infForFetch(urlConcatenar);
  console.log(movies);
  printMovies(movies);
  

}

//Función que sirve para imprimir data
function printMovies (movies){
  const div = document.getElementById('root');
  div.innerHTML = " ";

  movies.map((movies) => {
    let title = movies.Title + " (" + movies.Year + ")"
    let nameMovies =
      `<div onclick="" class="movies">
        <div class="movieBg"><img src="${movies.Poster}"></div>
        <div class="movieText">
          <h3 class="movieTitle"><strong>${title}</strong></h3>
          <p class="moviePlot">${movies.Plot}</p>
        </div>
      </div>`;
    div.insertAdjacentHTML("beforeend", nameMovies);

  })
}



