import React from "react";
import styles from './PageContent.module.css';
import RoutesList from "./RoutesList";

const PageContent = () => {
    return (
        <div className={styles.contentPage} >
           <RoutesList />       
        </div>
    )
}

export default PageContent;



