import React from 'react';
import './Footer.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer>
      <ul className='social'>
        <a href="mailto: laurynas.martinkus2010@gmail.com" >
          <MailOutlineIcon  fontSize="large"/>
        </a>
        <a href="https://github.com/lauris2010" >
          <GitHubIcon fontSize="large"/>
        </a>
        <a href="https://linkedin.com/in/laurynas-martinkus-65034316b" >
          <LinkedInIcon  fontSize="large" />
        </a>
      </ul>
    </footer>
  )
};

export default Footer;
