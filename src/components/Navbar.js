//API : d39ce3851046c25726c9bf63898ffa8f

// https://api.themoviedb.org/3/movie/550?api_key=d39ce3851046c25726c9bf63898ffa8f

// TOKEN DE ACCESO DE LECTURA A LA API : eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzljZTM4NTEwNDZjMjU3MjZjOWJmNjM4OThmZmE4ZiIsInN1YiI6IjYwY2QyMzVlMDc5YTk3MDAzZjg1NDY5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MIZJk88-HHIMm5F9gqzDN-hLTRJqQUA51dRMpmuwFaw

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import LiveTvSharpIcon from "@material-ui/icons/LiveTvSharp";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    // maxWidth: 1400,
    backgroundColor: "red",
  },
});

const Navbar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon tabs"
      >
        <Tab
          className={classes.tabs}
          onClick={() => {
            history.push(`/`);
          }}
          icon={<HomeIcon />}
          aria-label="home"
        />
        <Tab
          className={classes.tabs}
          onClick={() => {
            history.push(`/movies`);
          }}
          icon={<LocalMoviesIcon />}
          aria-label="movies"
        />
        <Tab
          className={classes.tabs}
          onClick={() => {
            history.push(`/series`);
          }}
          icon={<LiveTvSharpIcon />}
          aria-label="series"
        />
      </Tabs>
    </Paper>
  );
};
export default Navbar;
