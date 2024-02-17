import React from "react";
import styles from './Channels.module.css';

const Channels = () => {
    return (
        <div className={styles.channels} >
            <div className={styles.youTube}>YouTube:
                <ul>
                    <li><a href="">channel1</a></li>
                    <li><a href="">channel2</a></li>
                    <li><a href="">channel3</a></li>
                </ul>
            </div>
            <div className={styles.instagram}>Instagram:
            <ul>
                    <li><a href="">channel1</a></li>
                    <li><a href="">channel2</a></li>
                    <li><a href="">channel3</a></li>
                </ul>
            </div>
            <div className={styles.spotify}>Spotify:
            <ul>
                    <li><a href="">channel1</a></li>
                    <li><a href="">channel2</a></li>
                    <li><a href="">channel3</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Channels;