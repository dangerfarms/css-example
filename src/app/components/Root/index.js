import React from 'react';

import logo from './logo.svg';
import styles from './styles.css';

export default function Root() {
    return (
        <div className={styles.root}>
        <div className={styles.header}>
            <img src={logo} className={styles.logo} alt="logo" />
            <h2>Welcome to React</h2>
        </div>
        </div>
    );
};
