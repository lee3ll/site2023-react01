import React, { useEffect, useState } from "react";

import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";

import MovieSearch from "../movie/MovieSearch";
import MovieSlider from "../movie/MovieSlider";
import MovieCont from "../movie/MovieCont";
import MovieTeg from "../movie/MovieTeg";

const MoviePage = (query) => {
  const [movies, setMovies] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=6b6c09dc96064ff256d6877434f62094&query=${query}`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=6b6c09dc96064ff256d6877434f62094`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <Contents>
      <ContTitle title="movie" />
      <MovieSlider movies={movies} />
      <MovieSearch onSearch={search} />
      <MovieTeg />
      <MovieCont movies={movies} />
    </Contents>
  );
};

export default MoviePage;
