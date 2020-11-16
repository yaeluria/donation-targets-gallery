import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import DataContext from '../data-context';

const useStyles = makeStyles((theme) => ({
root: {
    display: "flex",
    [theme.breakpoints.up('sm')]: {
        alignSelf: "flex-end"
      },
},
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  label: {
      marginTop: theme.spacing(1.4),
      paddingRight: theme.spacing(1)
  }
}));



export default function OrderSelect() {

 const orderOptions = [
     {
         text: "Most recent",
         value: "approved_at_DESC"
     },
     {
         text: "Trending Campaign",
         value: "trending_DESC"
     },
     {
        text: "Most funded",
        value: "donated_DESC"
     }

 ]
 const { filter, setFilter } = useContext(DataContext);
  
  const handleSelectOrder = (e) => {
    setFilter({
      orderBy: e.target.value,
    });
  };
  const classes = useStyles();
  return (
    <Box className={classes.root}>
     <Typography className={classes.label}>Sort by</Typography>
     <FormControl className={classes.formControl}>
      <Select
        value={filter?.orderBy}
        onChange={handleSelectOrder}
        displayEmpty
        inputProps={{ "aria-label": "select sort by" }}
      >
       {orderOptions.map((option)=> {
           return(
        <MenuItem key={option.value} value={option.value}>{option.text}</MenuItem>
           )
       })
       }
      </Select>
    </FormControl>
    </Box>
  );
}