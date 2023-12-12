import { useState, useEffect } from "react";
import "./App.css";
import Movie from "./Movie";
import Trending from "./Trending";
import TopRated from "./TopRated";
import Popular from "./Popular";
import PopularSeries from "./PopularSeries";
import Tvseries from "./Tvseries";

import WhatshotIcon from "@mui/icons-material/Whatshot";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import Header from "./Header";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [trending, setTrending] = useState([]);
  const [dayWeek, setDayWeek] = useState("day");
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [tvSeries, setTvSeries] = useState([]);
  const [activeButton, setActiveButton] = useState("day");

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
  const fetchPopular = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=bdbcaf8078edff33ef48cf08aa49f28f"
    )
      .then((response) => response.json())
      .then((data) => setPopular(data.results));
  };

  const fetchPopularSeries = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&api_key=bdbcaf8078edff33ef48cf08aa49f28f"
    )
      .then((response) => response.json())
      .then((data) => setPopularSeries(data.results));
  };

  const fetchTvSeries = () => {
    fetch(
      "https://api.themoviedb.org/3/trending/tv/week?language=en-US&api_key=bdbcaf8078edff33ef48cf08aa49f28f"
    )
      .then((response) => response.json())
      .then((data) => setTvSeries(data.results));
  };

  useEffect(() => {
    getMovies();
    fetchTrending();
    fetchTopRated();
    fetchPopular();
    fetchPopularSeries();
    fetchTvSeries();
  }, [query, dayWeek]);

  /**
   * updating search input value
   */
  const handleDayWeek = (selectedDayWeek) => {
    setDayWeek(selectedDayWeek);
  };

  const handleButtonClick = (buttonName) => {
    // Update the state to track which button has been clicked
    setActiveButton(buttonName);
  };

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
        key={movie.id}
        image={movie.poster_path}
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
        media_type={movie.media_type}
      />
    </div>
  ));

  const popularMovies = popular.slice(0, 10).map((movie) => (
    <div className="popular--movies">
      <Popular
        key={movie.id}
        image={movie.poster_path}
        title={movie.title}
        release_date={movie.release_date}
        media_type={movie.media_type}
      />
    </div>
  ));

  const popularTvSeries = popularSeries.slice(0, 10).map((series) => (
    <div>
      <PopularSeries
        key={series.id}
        title={series.name}
        rating={series.vote_average}
        release_date={series.first_air_date}
        image={series.poster_path}
      />
    </div>
  ));

  const series = tvSeries.map((item) => (
    <Tvseries
      key={item.id}
      image={item.poster_path}
      title={item.name}
      rating={item.vote_average}
      media_type={item.media_type}
    />
  ));

  // console.log(movies);

  return (
    <div className="App">
      <Header
        updateSearch={updateSearch}
        handleSearch={handleSearch}
        search={search}
      />
      <div className="trending-heading-container">
        <h3 className="trending--heading">
          <WhatshotIcon className="display--icon" />
          Trending Movies
        </h3>
        <div className="button--container">
          <button
            onClick={() => {
              handleDayWeek("day");
              handleButtonClick("day");
            }}
            className={activeButton === "day" ? "activeButton" : "notActive"}
          >
            Day
          </button>
          <button
            onClick={() => {
              handleDayWeek("week");
              handleButtonClick("week");
            }}
            className={activeButton === "week" ? "activeButton" : "notActive"}
          >
            Week
          </button>
        </div>
      </div>

      <div className="trending">{trendingMovies}</div>
      <section className="sections">
        <div className="section-1">
          {query ? (
            <div className="movies">{movie}</div>
          ) : (
            <div>
              <div className="top--rated">
                <h3>
                  <SmartDisplayIcon className="display--icon" /> Top Rated
                  Movies
                </h3>
                <div className="movies">{ratedMovies}</div>
              </div>
              <div className="recommended--series">
                <h3>
                  <SmartDisplayIcon className="display--icon" />
                  Latest TV Shows
                </h3>
                <div className="movies">{series}</div>
              </div>
            </div>
          )}
        </div>
        <div className="section-2">
          <div>
            <h3>
              <SmartDisplayIcon className="display--icon" />
              Now Playing
            </h3>
            {popularMovies}
          </div>
          <div>
            <h3 className="tvSeriesHeading">
              <SmartDisplayIcon className="display--icon" />
              Popular Tv Series
            </h3>
            {popularTvSeries}
          </div>
        </div>
      </section>
      <div>This is the footer</div>
    </div>
  );
}

export default App;
