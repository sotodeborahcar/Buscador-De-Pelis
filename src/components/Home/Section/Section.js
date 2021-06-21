import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { BiRightArrowCircle } from "react-icons/ri"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
// import { Card } from "@material-ui/core";

import Card from "./Card";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  linkTitle: {},
  titleSection: {},
  icon: {},
}));

const Section = ({ title, items, type, media_type }) => {
  const classes = useStyles();
  useEffect(() => {}, []);

  return (
    <Container className={classes.root}>
      <Link to={`${type}`} className={classes.linkTitle}>
        <Typography className={classes.titleSection} variant="h2" gutterBottom>
          {title} <ArrowForwardIosIcon className={classes.icon} />
        </Typography>
      </Link>

      <div className={classes.containerCards}>
        {items &&
          items.map((item) => {
            return (
              <Card
                url={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${item.poster_path}`}
                subtitle={item.title || item.name}
                key={item.id}
                id={item.id}
                media_type={media_type}
              />
            );
          })}
      </div>
    </Container>
  );
};

export default Section;
