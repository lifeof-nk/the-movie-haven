import React from "react";

const Popular = (props) => {
  console.log(props.title);
  return (
    <div className="popular--container">
      <img src={`https://image.tmdb.org/t/p/w200/${props.image}`} alt="" />
      <div className="popular--info">
        <span className="info">MOVIE / {props.release_date} / 100mins</span>
        <span className="title">{props.title}</span>
      </div>
    </div>
  );
};

export default Popular;
