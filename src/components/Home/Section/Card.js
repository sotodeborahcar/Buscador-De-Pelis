import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
// import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  containerCard: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Card = ({ url, id, subtitle, media_type }) => {
  const classes = useStyles();
  let string = `/details/${id}`;
  if (media_type) {
    string += `?type=${media_type}`;
  }

  return (
    <Link to={string} className={classes.containerCard}>
      <CardMedia className={classes.cardMedia}>
        {/*  image="/static/images/cards/contemplative-reptile.jpg"
        /  title="Contemplative Reptile" */}
        <img className={classes.cardImagen} src={url} alt={subtitle} />
      </CardMedia>

      <Typography gutterBottom variant="h5" component="h2">
        Lizard
      </Typography>
    </Link>
  );
};

export default Card;
