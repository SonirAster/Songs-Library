import React from "react";
import styles from './../../AlbumsList.module.css';
import { NavLink } from "react-router-dom";

const A3 = () => {
    return (
        <div >
            <img src='#' />
            <div className={styles.AlbumTitle}>2006. Attero Dominatus</div> 
            <ol>
                <li><NavLink to='/album3/1'>Angels Calling</NavLink></li>
                <li><NavLink to='/album3/2'>Attero Dominatus</NavLink></li>
                <li><NavLink to='/album3/3'>Back in Control</NavLink></li>
                <li><NavLink to='/album3/4'>In the Name of God</NavLink></li>
                <li><NavLink to='/album3/5'>Light in the Black</NavLink></li>
                <li><NavLink to='/album3/6'>Nuclear Attack</NavLink></li>
                <li><NavLink to='/album3/7'>Metal Crüe</NavLink></li>
                <li><NavLink to='/album3/8'>Rise of Evil</NavLink></li>
                <li><NavLink to='/album3/9'>We Burn</NavLink></li>
            </ol>
        </div>
    )
}

export default A3;
