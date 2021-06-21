import { useEffect, useState } from "react";
import Card from "../Section/Card";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  rootSection: {
    maxWidth: 1440,
    marginTop: 30,
  },
  containerCards: {
    display: "flex",
    alignItems: "flex-start",
    // flexFlow: "row wrap",
    justifyContent: "center",
    width: "100%",
    "@media (max-width : 1400px)": {
      flexFlow: "wrap",
    },
  },
  linkTitle: {
    textDecoration: "none",
  },
  titleSection: {
    marginBottom: 30,
    color: "#ffff",
  },
}));

const MoviesMejoresCriticas = () => {
  const [moviesMejoresCriticas, setMoviesMejoresCriticas] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=d39ce3851046c25726c9bf63898ffa8f"
    )
      .then((res) => res.json())
      .then((data) => {
        setMoviesMejoresCriticas(data.results);
      });
  }, []);

  return (
    <Container className={classes.rootSection}>
      <Typography className={classes.titleSection} variant="h4" gutterBottom>
        Peliculas con mejores críticas
      </Typography>

      <div className={classes.containerCards}>
        {moviesMejoresCriticas &&
          moviesMejoresCriticas.map((criticas) => {
            return (
              <Card
                url={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${criticas.poster_path}`}
                subtitle={criticas.title}
                key={criticas.id}
                id={criticas.id}
              />
            );
          })}
      </div>
    </Container>
  );
};
export default MoviesMejoresCriticas;
