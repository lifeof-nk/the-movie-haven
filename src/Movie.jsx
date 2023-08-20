import React from "react";

const Movie = (props) => {
  return (
    <div>
      <img src={props.image} alt="img" />
      <h4>{props.title}</h4>
      <h5>raing</h5>
    </div>
  );
};

export default Movie;
