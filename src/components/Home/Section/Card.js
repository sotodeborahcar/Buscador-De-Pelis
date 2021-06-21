import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  divCard: {
    width: "calc(20%)",
    padding: "0px 4px",
    marginBottom: 20,
  },
  cardMedia: {
    margin: "(10px 3px)",
    position: "relative",
    overflow: "hidden",
    transition: "all 0.3s ease 0s",
  },
  cardImagen: {
    width: "100%",
    position: "relative",
    height: "auto",
    transform: "scale(1)",
    opacity: 1,
  },
});

const Card = ({ url, id, subtitle, media_type }) => {
  const classes = useStyles();
  let string = `/details/${id}`;
  if (media_type) {
    string += `?type=${media_type}`;
  }

  return (
    <div className={classes.divCard}>
      <Link to={string} className={classes.containerCard}>
        <CardMedia className={classes.cardMedia}>
          <img className={classes.cardImagen} src={url} alt={subtitle} />
        </CardMedia>

        <Typography gutterBottom variant="h5">
          Lizard
        </Typography>
      </Link>
    </div>
  );
};

export default Card;
