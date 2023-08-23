import { React } from "react";

const Trending = (props) => {
  return (
    <div className="trending--container">
      <div className="image">
        <img
          src={`https://image.tmdb.org/t/p/w200/${props.image}`}
          alt="Movie poster"
        />
      </div>
      <div className="movie--info">
        <h4 className="movie--title">{props.title}</h4>
        <span>{props.type}</span>
      </div>
    </div>
  );
};

export default Trending;
