import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MuiCard from "@material-ui/core/Card";
import CardContent from './CardContent';
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import GradeIcon from "@material-ui/icons/Grade";
import GradeOutlinedIcon from "@material-ui/icons/GradeOutlined";

const useStyles = makeStyles((theme)=>({
  root: {
    width: 300,
  },
  media: {
    height: 200,
  },
  content: {
    height: 200,
  },
  avatar: {
    marginRight: theme.spacing(1),
    height: 20,
    width: 20
  }
}));
export default function Card({ data }) {
  const classes = useStyles();
  const {
    name,
    descriptionContent,
    charityOrganization,
    mediaObject,
    id,
    donationTargetStatistic
  } = data;
  
  const [newFavorite, setNewFavorite] = useState(false);
  const isInFavorites = (id) => localStorage.getItem(id);
  const addToFavorites = (id) => {
    if (isInFavorites(id)) {
      localStorage.removeItem(id);
    } else {
      localStorage.setItem(id, true);
    }
    //trigger re-render
    setNewFavorite(!newFavorite);
  };


  return (
    <MuiCard className={classes.root}>
      <CardMedia
        className={classes.media}
        image={
          mediaObject?.thumbnail ||
          "https://d1qvck26m1aukd.cloudfront.net/defaults/charity_organizations/avatars/missing.jpg"
        }
        title="Organization Icon"
      />
      <CardContent
        name={name}
        descriptionContent={descriptionContent}
        charityOrganization={charityOrganization}
        donationTargetStatistic={donationTargetStatistic}
      />
      <CardActions>
        <IconButton
          aria-label={
            isInFavorites(id) ? "remove from favorites" : "add to favorites"
          }
          onClick={() => addToFavorites(id)}
        >
          {isInFavorites(id) ? <GradeIcon /> : <GradeOutlinedIcon />}
        </IconButton>
      </CardActions>
    </MuiCard>
  );
}
