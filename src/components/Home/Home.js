import React from "react";
import { useEffect, useState } from "react";
import Section from "./Section/Section";
import Container from "@material-ui/core/Container";

const Home = () => {
  const [moviesPopulares, setMoviesPopulares] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=d39ce3851046c25726c9bf63898ffa8f"
    )
      .then((res) => res.json())
      .then((data) => {
        setMoviesPopulares(data.results.slice(0, 5));
      });
  }, []);

  const [seriesPopulares, setSeriesPopulares] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/tv/week?api_key=d39ce3851046c25726c9bf63898ffa8f"
    )
      .then((res) => res.json())
      .then((data) => {
        setSeriesPopulares(data.results.slice(0, 5));
      });
  }, []);

  return (
    <Container>
      <Section
        title="Películas que son tendencia"
        items={moviesPopulares}
        type="/movies/trending"
        media_type="movie"
      />

      <Section
        title="Series que son tendencia"
        items={seriesPopulares}
        type="/movies/trending"
        media_type="movie"
      />
    </Container>
  );
};

export default Home;
