import React from "react";
import "../movies.css";

const GenreNames = ({
  DEFAULT_GENRES,
  selectedGenres,
  setSelectedGenres,
  setUrl,
  handleClick,
  handleFiltering,
}) => {
  return (
    <div className="genre-names__container">
      <div className="genre-names__button" onClick={handleFiltering}>
        Filter
      </div>
      <div className="genre-names__header">Genres</div>
      <div className="genre-names__names">
        {DEFAULT_GENRES.map((genre) => {
          return (
            <div className="genre-names__checkbox" key={genre.id}>
              <label htmlFor="input">{genre.name}</label>
              <input
                key={genre.id}
                onClick={(e) => handleClick(genre.id, e)}
                className="genre-names__input"
                type="checkbox"
                name="input"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GenreNames;
