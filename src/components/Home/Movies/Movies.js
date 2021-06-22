import { useEffect, useState } from "react";
import Section from "../Section/Section";
import Container from "@material-ui/core/Container";

const Movies = () => {
  // Movies populares
  const [moviesPopulares, setMoviesPopulares] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=d39ce3851046c25726c9bf63898ffa8f"
    )
      .then((res) => res.json())
      .then((data) => {
        setMoviesPopulares(data.results.slice(0, 4));
      });
  }, []);

  // Movies Mejores criticas
  const [moviesMejoresCriticas, setMoviesMejoresCriticas] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=d39ce3851046c25726c9bf63898ffa8f"
    )
      .then((res) => res.json())
      .then((data) => {
        setMoviesMejoresCriticas(data.results.slice(0, 4));
      });
  }, []);

  // Movies estrenos
  const [moviesEstrenos, setMoviesEstrenos] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=d39ce3851046c25726c9bf63898ffa8f"
    )
      .then((res) => res.json())
      .then((data) => {
        setMoviesEstrenos(data.results.slice(0, 4));
      });
  }, []);

  // Movies cines
  const [moviesCines, setMoviesCines] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=d39ce3851046c25726c9bf63898ffa8f"
    )
      .then((res) => res.json())
      .then((data) => {
        setMoviesCines(data.results.slice(0, 4));
      });
  }, []);

  return (
    <Container>
      <Section
        title="Peliculas populares"
        items={moviesPopulares}
        type="/movies/movies-populares"
      />

      <Section
        title="Peliculas con mejores criticas"
        items={moviesMejoresCriticas}
        type="/movies/movies-mejores-criticas"
      />

      <Section
        title="Peliculas a estrenarse"
        items={moviesEstrenos}
        type="/movies/movies-estrenos"
      />

      <Section
        title="Peliculas en cines"
        items={moviesCines}
        type="/movies/movies-cines"
      />
    </Container>
  );
};

export default Movies;
