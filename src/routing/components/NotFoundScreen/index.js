import React from 'react';
import {Link} from 'react-router';
import {urls} from '../../';

import styles from './styles.css';

export default function NotFoundScreen() {
    return <div className={styles.root}>
        <h1 className={styles.header}>Oh no.</h1>
        <p className={styles.paragraph}>
            This page doesn't exist. Go back <Link to={urls.DASHBOARD}>home</Link>?
        </p>
    </div>;
}
