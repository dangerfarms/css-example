import React from 'react';

import styles from './styles.css';

export default function MainContentContainer({children}) {
    return <main className={styles.root}>{children}</main>;
}
