import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    amount: {
        fontWeight: 800,
        fontSize: theme.spacing(2),
    },
}));
export default function Statistics(props) {
    const { totalMatchedAmount, donorCount } = props.data;
    const classes = useStyles();
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      
        // These options are needed to round to whole numbers if that's what you want.
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      const isAmount = 
      Math.floor(totalMatchedAmount) > 1
    return (
      <Box display="flex" justifyContent="space-between">
        {isAmount && (
          <Typography variant="body2" component="span">
            <span className={classes.amount}>
              {formatter.format(totalMatchedAmount)}
            </span>{" "}
            raised
          </Typography>
        )}
        {donorCount > 1 && (
          <Typography variant="body2" component="span">
            <span className={classes.amount}>
              {donorCount}
            </span>{" "}
            donors
          </Typography>
        )}
      </Box>
    );
}