import React from "react";
import styles from './../../AlbumsList.module.css';
import { NavLink } from "react-router-dom";

const A1 = () => {
    return (
        <div>
            <span>
                <img src="#" alt="album cover" />
            </span>
            <div className={styles.AlbumTitle}>2001. Fist for Fight</div>
            <ol>
                <li> <NavLink to='/album1/1'>Introdution</NavLink> </li>
                <li> <NavLink to='/album1/2'>Burn your Crosses</NavLink> </li>
                <li> <NavLink to='/album1/3'>Endless Nights</NavLink> </li>
                <li> <NavLink to='/album1/4'>Guten Nacht</NavLink> </li>
                <li> <NavLink to='/album1/5'>Hail to the King</NavLink> </li>
                <li> <NavLink to='/album1/6'>Hellrider</NavLink> </li>
                <li> <NavLink to='/album1/7'>Masters of the World</NavLink> </li>
                <li> <NavLink to='/album1/8'>Metalizer</NavLink> </li>
                <li> <NavLink to='/album1/9'>Shadows</NavLink> </li>
                <li> <NavLink to='/album1/10'>Thunderstorm</NavLink> </li>
            </ol>
        </div>
    )
}

export default A1;