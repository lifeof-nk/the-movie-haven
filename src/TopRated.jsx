import React from "react";

const TopRated = (props) => {
  return (
    <div className="movie--tile">
      <div className="image">
        <img
          src={`https://image.tmdb.org/t/p/w200/${props.image}`}
          alt="Movie poster"
        />
      </div>
      <div className="movie--info">
        <span>Movie</span>
        <span> {`${Math.floor(props.rating)}/10`}</span>
      </div>
      <h4 className="movie--title">{props.title}</h4>
    </div>
  );
};

export default TopRated;
