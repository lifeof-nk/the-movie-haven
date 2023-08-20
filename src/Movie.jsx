import React from "react";

const Movie = (props) => {
  return (
    <div className="movie--tile">
      <div className="image">
        <img src={`https://image.tmdb.org/t/p/w500/${props.image}`} alt="img" />
      </div>
      <h4>{props.title}</h4>
      <div className="movie--info">
        <h5>rating</h5>

        <h3>year</h3>
      </div>
    </div>
  );
};

export default Movie;
