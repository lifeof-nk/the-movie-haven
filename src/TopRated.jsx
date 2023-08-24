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
        <h4 className="movie--title">{props.title}</h4>
        <span>Rating: {`${Math.floor(props.rating)}/10`}</span>
      </div>
    </div>
  );
};

export default TopRated;
