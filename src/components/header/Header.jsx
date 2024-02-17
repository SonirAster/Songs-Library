import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
      <header className={styles.header}>
          <NavLink to='/'>logo</NavLink>
          <NavLink to='/albums'>Albums</NavLink>    
          <NavLink to='channels'>Channels</NavLink>
          <NavLink to='gallery'>Gallery</NavLink>
          <NavLink to='store'>Store</NavLink>
          <NavLink to='notes'>Notes</NavLink>      
      </header>
   
  )
}

export default Header;
