import React from 'react';

import {Link} from '../../../common/components';
import {urls} from '../../index'; // This is a bit confusing :( Hate relative imports!
import styles from './styles.css';

export default function NotFoundScreen() {
    return <div className={styles.root}>
        <h1 className={styles.header}>Oh no.</h1>
        <p className={styles.paragraph}>
            This page doesn't exist. Go back <Link to={urls.DASHBOARD}>home</Link>?
        </p>
    </div>;
}
