import React from "react";
import Proptypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movies__movie">
      <img src={poster} alt={title} title={title}></img>
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="genres">
          {genres.map((genre, index) => {
            return (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            );
          })}
        </ul>
        <p className="movie__summary">{summary.slice(0, 140)}...</p>
      </div>
    </div>
  );
}

Movie.prototype = {
  id: Proptypes.number.isRequired,
  year: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  summary: Proptypes.string.isRequired,
  poster: Proptypes.string.isRequired,
  genres: Proptypes.arrayOf(Proptypes.string).isRequired,
};

export default Movie;
