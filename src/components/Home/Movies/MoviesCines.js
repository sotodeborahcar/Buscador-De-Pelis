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

const MoviesCines = () => {
  const [moviesCines, setMoviesCines] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=d39ce3851046c25726c9bf63898ffa8f"
    )
      .then((res) => res.json())
      .then((data) => {
        setMoviesCines(data.results);
      });
  }, []);

  return (
    <Container className={classes.rootSection}>
      <Typography className={classes.titleSection} variant="h4" gutterBottom>
        Películas en cines
      </Typography>

      <div className={classes.containerCards}>
        {moviesCines &&
          moviesCines.map((cines) => {
            return (
              <Card
                url={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${cines.poster_path}`}
                subtitle={cines.title}
                key={cines.id}
                id={cines.id}
              />
            );
          })}
      </div>
    </Container>
  );
};
export default MoviesCines;
