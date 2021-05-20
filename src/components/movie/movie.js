import React from "react";

import "./movie.css";

const defaultImage = "https://popcornusa.s3.amazonaws.com/placeholder-movieimage.png";

const Movie = ({movie}) => {
  
  const poster = movie.Poster === "N/A" ? defaultImage : movie.Poster;
  return (
    <div className="movie">
      <div className="col s12 m4 l3">
        <div className="card">
          <div className="card-image">
            <img alt={`The movie titled is ${movie.Title}`} src={poster} />
          </div>
          <div className="card-content">
            <span className="card-title center-align">{movie.Title}</span>
            <p>({movie.Year})</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;