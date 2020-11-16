import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import MuiCardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Statistics from "./Statistics";
import { MAX_CHAR_DESC, MAX_CHAR_NAME, textBlue } from "../constants";

const useStyles = makeStyles((theme) => ({
  content: {
    height: 200,
    color: textBlue,
  },
  avatar: {
    marginRight: theme.spacing(1),
    height: 20,
    width: 20,
  },
}));

export default function CardContent(props) {
  const classes = useStyles();
  const {
    name,
    descriptionContent,
    charityOrganization,
    id,
    donationTargetStatistic,
  } = props;

  const previewString = (content, maxNum) => {
    return content?.length > maxNum
      ? content.substring(0, maxNum) + "..."
      : content;
  };

  const handleImageError = (e) => {
    e.target.src =
      "https://jgive-deploy-devcors-6rtudh0rg.herokuapp.com/defaults/charity_organizations/avatars/missing.jpg";
  };

  return (
    <MuiCardContent className={classes.content}>
      <Typography gutterBottom variant="h6" component="h2">
        {previewString(name, MAX_CHAR_NAME)}
      </Typography>
      <Typography variant="body2" component="p">
        {previewString(descriptionContent, MAX_CHAR_DESC)}
      </Typography>
      {charityOrganization.name && (
        <Box display="flex" py={2}>
          <img
            className={classes.avatar}
            src={charityOrganization.avatar}
            onError={handleImageError}
            alt={charityOrganization.name}
          />
          <Typography variant="body2" component="p">
            <b>by</b> {previewString(charityOrganization.name, MAX_CHAR_NAME)}
          </Typography>
        </Box>
      )}

      <Statistics data={donationTargetStatistic} />
    </MuiCardContent>
  );
}
