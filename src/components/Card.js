import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import GradeIcon from "@material-ui/icons/Grade";
import GradeOutlinedIcon from "@material-ui/icons/GradeOutlined";
import Statistics from "./Statistics";
import { textBlue, MAX_CHAR_DESC, MAX_CHAR_NAME } from "../constants";

const useStyles = makeStyles({
  root: {
    width: 300,
    color: textBlue
  },
  media: {
    height: 200,
  },
  content: {
    height: 200,
  },
  avatar: {
    marginRight: 8,
    height: 20,
    width: 20
  }
});
export default function MediaCard({ data }) {
  const classes = useStyles();
  const {
    name,
    descriptionContent,
    charityOrganization,
    mediaObject,
    id,
    donationTargetStatistic
  } = data;
  
  const previewString = (content, maxNum) => {
   return content?.length > maxNum
      ? content.substring(0, maxNum) + "..."
      : content;
  }
    

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
  const handleImageError = e => {
    e.target.src =
    "https://jgive-deploy-devcors-6rtudh0rg.herokuapp.com/defaults/charity_organizations/avatars/missing.jpg"

  }

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
          <Typography gutterBottom variant="h6" component="h2">
            {id} :{previewString(name, MAX_CHAR_NAME)}
          </Typography>
          <Typography variant="body2"  component="p">
            {previewString(descriptionContent, MAX_CHAR_DESC)}
          </Typography>
          {
            charityOrganization.name &&
            <Box display="flex" py={2}>
          <img
            className={classes.avatar}
            src={charityOrganization.avatar}
            onError={handleImageError}
            alt={charityOrganization.name}
          />
          <Typography variant="body2"  component="p">
            <b>by</b> {previewString(charityOrganization.name, MAX_CHAR_NAME)}
          </Typography>
        </Box>
          }
        
        <Statistics data={donationTargetStatistic} />
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
