import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import GradeIcon from "@material-ui/icons/Grade";
import GradeOutlinedIcon from "@material-ui/icons/GradeOutlined";

const useStyles = makeStyles({
  root: {
    width: 300,
    height: 600,
  },
  media: {
    height: 200,
  },
  content: {
    height: 200,
  },
});
export default function MediaCard({ data }) {
  const classes = useStyles();
  const {
    name,
    descriptionContent,
    charityOrganization,
    mediaObject,
    id,
  } = data;
  const maxChar = 200;
  const descriptionPreview =
    descriptionContent?.length > maxChar
      ? descriptionContent.substring(0, maxChar) + " . . ."
      : descriptionContent;

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
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={
          mediaObject?.thumbnail ||
          "https://d1qvck26m1aukd.cloudfront.net/defaults/charity_organizations/avatars/missing.jpg"
        }
        title="Organization Icon"
      />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h2">
          {id} :{name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {descriptionPreview}
        </Typography>
      </CardContent>
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
    </Card>
  );
}
