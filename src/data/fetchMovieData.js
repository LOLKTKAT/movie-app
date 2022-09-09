export const fetchMovieData = (catagory, stateFunction) => {
  const url = `https://api.themoviedb.org/3/movie/${catagory}?api_key=3c65adb624ef91ce3af91112d2e89ecc&language=en-US&page=1`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      stateFunction(data.results);
    });
};
