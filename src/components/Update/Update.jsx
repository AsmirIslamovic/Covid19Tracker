import React from 'react';
import styles from './Update.module.css';

const Update = ({data:{lastUpdate}}) => {
    return (
        <div className={styles.container}>
            Information accurate as of {new Date(lastUpdate).toDateString()}
        </div>
    );
}

export default Update;