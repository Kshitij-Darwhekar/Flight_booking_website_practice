import React from 'react';
import { useNavigate } from 'react-router-dom';
import SkyscannerButton from '../helpers/SkyscannerButtons';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Grid, Paper, IconButton, Typography, MenuItem } from '@material-ui/core';
import { Search as SearchIcon, SwapHoriz as SwapIcon } from '@material-ui/icons';
import '../styles/Home.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1 ,
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '2rem',
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexGrow: 1,
  },
  iconButton: {
    margin: theme.spacing(1),
  },
  InputBase: {
    backgroundColor: 'var(--accent)',
    color: 'black',
    },

  title: {
    color: 'var(--accent)',
  }

}));

const sclasses =[
  {
    id: 1,
    name: 'Economy',
    label: 'Economy'
  },
  {
    id: 2,
    name: 'Premium Economy',
    label: 'Premium Economy'
  },
  {
    id: 3,
    name: 'Business',
    label: 'Business'
  },
  {
    id: 4,
    name: 'First Class',
    label: 'First Class'
  }
]





const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  function flights() {
    navigate('/flights');
  }


  return (

    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Search Flights with Skyscanner
      </Typography>
      <Paper className={classes.paper}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={2}>
            <TextField label="From" fullWidth className='InputBase' variant='filled' />
          </Grid>
          <Grid item xs={12} sm={1}>
            <IconButton className={classes.iconButton}>
              <SwapIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField label="To" fullWidth className='InputBase' variant='filled'/>
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField  label="Depart" type="date" fullWidth className='InputBase' variant='filled'/>
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField label="Return" type="date" fullWidth className='InputBase'  variant='filled'/>
          </Grid>
          <Grid item xs={12} sm={1}>
            <TextField label=" No. Of Travellers"  fullWidth className='InputBase' variant='filled' select>
            <SkyscannerButton />
            </TextField>
          </Grid>
          <Grid item xs={12} sm={2}>

            <TextField label="Class" fullWidth className='InputBase' variant='filled'  select>
              {sclasses.map((option) => (
                <MenuItem className='menuitem' key={option.id} value={option.name}>
                  {option.label}
                </MenuItem>
              ))}

            </TextField>

          </Grid>
         
          <Grid item xs={12} sm={12}>
            <Button className='search_button' variant="contained" color="primary" startIcon={<SearchIcon />} onClick={flights}>
              Search
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Home;
