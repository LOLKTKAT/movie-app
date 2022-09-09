export const fetchMovieDetails = (movieId, stateFunction) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=3c65adb624ef91ce3af91112d2e89ecc&language=en-US`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      stateFunction(data);
    });
};
