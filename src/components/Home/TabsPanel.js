import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import LiveTvSharpIcon from "@material-ui/icons/LiveTvSharp";

import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "transparent",
  },
  tabs: {
    color: "white",
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "gray",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "#fafafa",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const TabsPanel = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Hidden smDown>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon tabs"
        >
          <Tab
            onClick={() => {
              history.push(`/`);
            }}
            icon={<HomeIcon className={classes.tabs} />}
            aria-label="home"
          />
          <Tab
            className={classes.tabs}
            onClick={() => {
              history.push(`/movies`);
            }}
            icon={<LocalMoviesIcon className={classes.tabs} />}
            aria-label="movies"
          />
          <Tab
            className={classes.tabs}
            onClick={() => {
              history.push(`/series`);
            }}
            icon={<LiveTvSharpIcon className={classes.tabs} />}
            aria-label="series"
          />
        </Tabs>
      </Hidden>

      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </Paper>
  );
};
export default TabsPanel;
