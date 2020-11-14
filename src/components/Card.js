import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 300,
    height: 400
  },
  media: {
    height: 200,
  },
});
export default function MediaCard({data}) {
  const classes = useStyles();
  const {name, descriptionContent, charityOrganization, mediaObject, id} = data;
  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={mediaObject?.thumbnail || "https://d1qvck26m1aukd.cloudfront.net/defaults/charity_organizations/avatars/missing.jpg" }
          title="Organization Icon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {id} :
           { name } 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* todo - description string should have maxlength followed by ... */}
            {descriptionContent}
          </Typography>
        </CardContent>
    </Card>
  );
}
