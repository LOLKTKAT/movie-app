export const fetchSearchValue = (search, stateFunction, pageNumber) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=3c65adb624ef91ce3af91112d2e89ecc&language=en-US&query=${search}&page=${pageNumber}&include_adult=false
  `;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      stateFunction(data);
    });
};
