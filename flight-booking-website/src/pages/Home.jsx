import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Grid, Paper, IconButton, Typography, MenuItem } from '@material-ui/core';
import { Search as SearchIcon, SwapHoriz as SwapIcon } from '@material-ui/icons';
import '../styles/Home.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  iconButton: {
    margin: theme.spacing(1),
  },
  InputBase: {
    backgroundColor: 'var(--accent) !important',
    color: 'black',
    },

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

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={3}>
            <TextField label="From" fullWidth className='InputBase' variant='filled' />
          </Grid>
          <Grid item xs={12} sm={1}>
            <IconButton className={classes.iconButton}>
              <SwapIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField label="To" fullWidth className='InputBase' variant='filled'/>
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField  label="Depart" type="date" fullWidth className='InputBase' variant='filled'/>
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField label="Return" type="date" fullWidth className='InputBase' variant='filled'/>
          </Grid>
          <Grid item xs={12} sm={1}>
            <TextField label="Travellers" type="number" fullWidth className='InputBase' variant='filled'/>
          </Grid>
          <Grid item xs={12} sm={1}>

            <TextField label="Class" fullWidth className='InputBase' variant='filled' select>
              {sclasses.map((option) => (
                <MenuItem className='menuitem' key={option.id} value={option.name}>
                  {option.label}
                </MenuItem>
              ))}

            </TextField>

          </Grid>
         
          <Grid item xs={12} sm={12}>
            <Button style={{
              backgroundColor: 'var(--primary-button)',
              color: '#000000',
               '&:hover': {
                backgroundColor: 'var(--secondary-button)',
                color: 'var(--text)',
              },
            }} variant="contained" color="primary" startIcon={<SearchIcon />}>
              Search
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Home;
