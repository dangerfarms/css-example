import React from 'react';
import {Link as ReactRouterLink} from 'react-router';

import styles from './styles.css';

export default function Link(props) {
    return <ReactRouterLink
        className={styles.link}
        {...props}>
    </ReactRouterLink>;
}
