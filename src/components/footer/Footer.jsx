import React from 'react';
import styles from './Footer.module.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return(
      <footer className={styles.footer}>       
          <NavLink to='/'>logo</NavLink>
          <NavLink to='/albums'>Albums</NavLink>    
          <NavLink to='channels'>Channels</NavLink>
          <NavLink to='gallery'>Gallery</NavLink>
          <NavLink to='store'>Store</NavLink>
          <NavLink to='notes'>Notes</NavLink>       
      </footer>
    )
}

export default Footer;
