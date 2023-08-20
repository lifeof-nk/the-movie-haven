import { useState, useEffect } from "react";
import "./App.css";
import Movie from "./Movie";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("action");

  const getMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&api_key=bdbcaf8078edff33ef48cf08aa49f28f`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  };

  useEffect(() => {
    getMovies();
    console.log("this has ran");
  }, [query]);

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const movie = movies.map((movie) => (
    <div className="movie--component">
      <Movie
        key={movie.backdrop_path}
        image={movie.backdrop_path}
        title={movie.original_title}
      />
    </div>
  ));

  // console.log(movies);

  return (
    <div className="App">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="search movie"
          value={search}
          onChange={updateSearch}
        />
        <button>Search</button>
      </form>
      <div className="movies">{movie}</div>
    </div>
  );
}

export default App;
