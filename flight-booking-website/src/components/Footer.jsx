import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import '../styles/Footer.css'
import { Link } from 'react-router-dom';
import { Grid, styled } from '@material-ui/core';


const footsyle = {
    gridstyle:{
        display: 'flex',
        flexgrow: 1,
    }

}



function Footer() {
  return (
    
        <div className='footer'>
        {/* <Grid container spacing={6}  >
            <Grid item xs={24} sm={5} md={3} >  */}
            <div className='socialMedia'> 
                <Link to={null}>
                    <InstagramIcon />
                </Link>
                <Link to={null}>
                    <TwitterIcon />
                </Link>
                <Link to={null}>
                    <FacebookIcon />  
                </Link>
                <Link to={null}>
                    <LinkedinIcon />
                </Link>
            </div>
            {/* </Grid>
        </Grid> */}
        <p>&copy; 2023 FLight Booking App</p>
    </div>
  )
}

export default Footer