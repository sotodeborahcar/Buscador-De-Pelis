import { useEffect, useState } from "react";
import Section from "../Section/Section";
import Container from "@material-ui/core/Container";

const Series = () => {
  // Series populares
  const [seriesPopulares, setSeriesPopulares] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=d39ce3851046c25726c9bf63898ffa8f"
    )
      .then((res) => res.json())
      .then((data) => {
        setSeriesPopulares(data.results.slice(0, 4));
      });
  }, []);

  // Series Mejores criticas
  const [seriesMejoresCriticas, setSeriesMejoresCriticas] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=d39ce3851046c25726c9bf63898ffa8f"
    )
      .then((res) => res.json())
      .then((data) => {
        setSeriesMejoresCriticas(data.results.slice(0, 4));
      });
  }, []);

  // Series al Aire
  const [seriesAire, setSeriesAire] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?api_key=d39ce3851046c25726c9bf63898ffa8f"
    )
      .then((res) => res.json())
      .then((data) => {
        setSeriesAire(data.results.slice(0, 4));
      });
  }, []);

  return (
    <Container>
      <Section
        title="Series populares"
        items={seriesPopulares}
        type="/series/series-populares"
        media_type="tv"
      />

      <Section
        title="Series con mejores criticas"
        items={seriesMejoresCriticas}
        type="/series/series-mejores-criticas"
        media_type="tv"
      />

      <Section
        title="Series al aire"
        items={seriesAire}
        type="/series/series-aire"
        media_type="tv"
      />
    </Container>
  );
};

export default Series;
