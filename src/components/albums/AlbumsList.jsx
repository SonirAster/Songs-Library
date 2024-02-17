import React from "react";
import styles from './AlbumsList.module.css';
import A1 from "./albumsList/album1/A1";
import A3 from "./albumsList/album3/A3";


const AlbumsList = () => {
    return (
        <div className={styles.AlbumsList}>
            <div className={styles.AlbumsDescription}>Sabaton Albums</div>
            <A1/>
            <A3/>
        </div>
    )
}

export default AlbumsList;
