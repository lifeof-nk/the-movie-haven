import { useState, useEffect } from "react";
import "./App.css";
import Movie from "./Movie";
import Trending from "./Trending";
import TopRated from "./TopRated";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [trending, setTrending] = useState([]);
  const [dayWeek, setDayWeek] = useState("day");
  const [topRated, setTopRated] = useState([]);

  /**
   * fetching the data from TMDB API
   */
  const getMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=bdbcaf8078edff33ef48cf08aa49f28f`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  };

  const fetchTrending = () => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/${dayWeek}?language=en-US&api_key=bdbcaf8078edff33ef48cf08aa49f28f`
    )
      .then((response) => response.json())
      .then((data) => setTrending(data.results));
  };

  const fetchTopRated = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=bdbcaf8078edff33ef48cf08aa49f28f`
    )
      .then((response) => response.json())
      .then((data) => setTopRated(data.results));
  };

  useEffect(() => {
    getMovies();
    fetchTrending();
    fetchTopRated();
  }, [query, dayWeek]);

  /**
   * updating search input value
   */

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  //mapping through list of movies collected from api to display on the screen
  const movie = movies.map((movie) => (
    <div className="movie--component">
      <Movie
        key={movie.backdrop_path}
        image={movie.backdrop_path}
        title={movie.original_title}
        type={movie.media_type}
        rating={movie.vote_average}
        date={movie.release_date}
      />
    </div>
  ));

  const trendingMovies = trending.map((movie) => (
    <div>
      <Trending
        key={movie.id}
        image={movie.poster_path}
        title={movie.original_title}
        type={movie.media_type}
      />
    </div>
  ));

  const ratedMovies = topRated.map((movie) => (
    <div className="movie--component">
      <TopRated
        key={movie.id}
        image={movie.poster_path}
        rating={movie.vote_average}
        title={movie.title}
      />
    </div>
  ));

  // console.log(movies);

  return (
    <div className="App">
      <form onSubmit={handleSearch} className="form">
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={updateSearch}
          className="form--input"
        />
        <button className="form--button">Search</button>
      </form>
      <h3 className="trending--heading">
        Trending
        <button
          className="trend--button"
          onClick={() => {
            setDayWeek("day");
          }}
        >
          Day
        </button>
        <button
          className="trend--button"
          onClick={() => {
            setDayWeek("week");
          }}
        >
          Week
        </button>
      </h3>
      <div className="trending">{trendingMovies}</div>
      {query ? (
        <div>
          <h3>Top Rated</h3>
          <div className="movies">{ratedMovies}</div>
        </div>
      ) : (
        <div className="movies">{movie}</div>
      )}
    </div>
  );
}

export default App;
