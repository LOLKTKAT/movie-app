import React, { useState, useEffect } from "react";

function useFetch(url, filterBtn) {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  function fetchMovies() {
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setState(data);
        console.log(url);
      })
      .catch((error) => {
        console.log(`Error:, ${error}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchMovies();
  }, [filterBtn]);

  return { state, loading, setLoading, error };
}

export default useFetch;
