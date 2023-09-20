import React from "react";

const PopularSeries = (props) => {
  return (
    <div>
      <div className="popular--container">
        <img src={`https://image.tmdb.org/t/p/w200/${props.image}`} alt="" />
        <div className="popular--info">
          <span className="info">TV SERIES / {props.release_date} </span>
          <span className="title">{props.title}</span>
        </div>
      </div>
    </div>
  );
};

export default PopularSeries;
