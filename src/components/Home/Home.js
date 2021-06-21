import React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section/Section";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(() => ({
  rootHome: {
    maxWidth: 1440,
    width: "100%",
    padding: 20,
  },
  sectionHome: {},
}));

const Home = () => {
  const [moviesPopulares, setMoviesPopulares] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=d39ce3851046c25726c9bf63898ffa8f"
    )
      .then((res) => res.json())
      .then((data) => {
        setMoviesPopulares(data.results.slice(0, 6));
      });
  }, []);

  const [seriesPopulares, setSeriesPopulares] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/tv/week?api_key=d39ce3851046c25726c9bf63898ffa8f"
    )
      .then((res) => res.json())
      .then((data) => {
        setSeriesPopulares(data.results.slice(0, 6));
      });
  }, []);

  return (
    <Container wrap="no-wrap" className={classes.rootHome}>
      <Section
        className={classes.sectionHome}
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
