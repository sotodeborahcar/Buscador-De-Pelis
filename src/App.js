// import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
// import { ThemeProvider } from "@material-ui/core/styles";
import Navbar from "./components/Navbar";
// import Home from "./components/Home/Home";
// import Details from "./components/Home/Details/Details";
// import Movies from "./components/Home/Movies/Movies";
// import Series from "./components/Home/Series/Series";

// import MoviesPopulares from "./components/Home/Movies/MoviesPopulares";
// import MoviesMejoresCriticas from "./components/Home/Movies/MoviesMejoresCriticas";
// import MoviesEstrenos from "./components/Home/Movies/MoviesEstrenos";
// import MoviesCines from "./components/Home/Movies/MoviesCines";

// import SeriesPopulares from "./components/Home/Series/SeriesPopulares";
// import SeriesMejoresCriticas from "./components/Home/Series/SeriesMejoresCriticas";
// import SeriesCines from "./components/Home/Series/SeriesCines";

// import Footer from "./components/Footer";

const useStyles = makeStyles(() => ({
  "@global": {
    body: {
      margin: 0,
      padding: 0,
      // backgroundColor: "red",
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
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/series" component={Series} />
          <Route exact path="/details/:id" component={Details} />

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
          <Route exact path="/series/series-cines" component={SeriesCines} />
        </Switch> */}

        {/* <Footer /> */}
        {/* </ThemeProvider> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
