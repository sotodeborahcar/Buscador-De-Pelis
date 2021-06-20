//API : d39ce3851046c25726c9bf63898ffa8f

// https://api.themoviedb.org/3/movie/550?api_key=d39ce3851046c25726c9bf63898ffa8f

// TOKEN DE ACCESO DE LECTURA A LA API : eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzljZTM4NTEwNDZjMjU3MjZjOWJmNjM4OThmZmE4ZiIsInN1YiI6IjYwY2QyMzVlMDc5YTk3MDAzZjg1NDY5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MIZJk88-HHIMm5F9gqzDN-hLTRJqQUA51dRMpmuwFaw

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import TabsPanel from "./Home/TabsPanel";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#01081c",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <Hidden lgUp>
            <TabsPanel />
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
