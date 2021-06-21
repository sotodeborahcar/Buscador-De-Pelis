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
