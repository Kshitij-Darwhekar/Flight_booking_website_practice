import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import '../styles/Footer.css'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer'>
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
        <p>&copy; 2023 FLight Booking App</p>
    </div>
  )
}

export default Footer