//API : d39ce3851046c25726c9bf63898ffa8f

// https://api.themoviedb.org/3/movie/550?api_key=d39ce3851046c25726c9bf63898ffa8f

// TOKEN DE ACCESO DE LECTURA A LA API : eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzljZTM4NTEwNDZjMjU3MjZjOWJmNjM4OThmZmE4ZiIsInN1YiI6IjYwY2QyMzVlMDc5YTk3MDAzZjg1NDY5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MIZJk88-HHIMm5F9gqzDN-hLTRJqQUA51dRMpmuwFaw

// import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
// import { ThemeProvider } from "@material-ui/core/styles";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";

import Movies from "./components/Home/Movies/Movies";
import Series from "./components/Home/Series/Series";

import MoviesPopulares from "./components/Home/Movies/MoviesPopulares";
import MoviesMejoresCriticas from "./components/Home/Movies/MoviesMejoresCriticas";
import MoviesEstrenos from "./components/Home/Movies/MoviesEstrenos";
import MoviesCines from "./components/Home/Movies/MoviesCines";

import SeriesPopulares from "./components/Home/Series/SeriesPopulares";
import SeriesMejoresCriticas from "./components/Home/Series/SeriesMejoresCriticas";
import SeriesAire from "./components/Home/Series/SeriesAire";

import Details from "./components/Home/Details/Details";

import Footer from "./components/Footer";

const useStyles = makeStyles(() => ({
  "@global": {
    body: {
      margin: 0,
      padding: 0,
      backgroundColor: "rgb(54,57,63)",
      boxSizing: "border-box",
    },
  },
  root: {
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
        {/* <ThemeProvider theme={theme}> */}
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/series" component={Series} />

          <Route
            exact
            path="/movies/movies-populares"
            component={MoviesPopulares}
          />
          <Route
            exact
            path="/movies/movies-mejores-criticas"
            component={MoviesMejoresCriticas}
          />
          <Route
            exact
            path="/movies/movies-estrenos"
            component={MoviesEstrenos}
          />
          <Route exact path="/movies/movies-cines" component={MoviesCines} />

          <Route
            exact
            path="/series/series-populares"
            component={SeriesPopulares}
          />
          <Route
            exact
            path="/series/series-mejores-criticas"
            component={SeriesMejoresCriticas}
          />
          <Route exact path="/series/series-aire" component={SeriesAire} />

          <Route exact path="/details/:id" component={Details} />
        </Switch>

        <Footer />
        {/* </ThemeProvider> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
