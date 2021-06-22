import { useEffect, useState } from "react";
import Card from "../Section/Card";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
// import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  rootSection: {
    maxWidth: 1440,
    marginTop: 30,
  },
  containerCards: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
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

const MoviesPopulares = () => {
  const [moviesPopulares, setMoviesPopulares] = useState([]);
  const classes = useStyles();
  //   const [page, setPage] = React.useState(1);
  //   const handleChange = (event, value) => {
  //     setPage(value);
  //   };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=d39ce3851046c25726c9bf63898ffa8f"
    )
      .then((res) => res.json())
      .then((data) => {
        setMoviesPopulares(data.results);
      });
  }, []);

  return (
    <Container className={classes.rootSection}>
      <Typography className={classes.titleSection} variant="h4" gutterBottom>
        Peliculas que son tendencia
      </Typography>

      <div className={classes.containerCards}>
        {moviesPopulares &&
          moviesPopulares.map((populares) => {
            return (
              <Card
                url={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${populares.poster_path}`}
                subtitle={populares.title}
                key={populares.id}
                id={populares.id}
              />
            );
          })}
      </div>

      {/* <div className={classes.root}>
        <Typography>Page: {page}</Typography>
        <Pagination count={10} page={page} onChange={handleChange} />
      </div> */}
    </Container>
  );
};
export default MoviesPopulares;
