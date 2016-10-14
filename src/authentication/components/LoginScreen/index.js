import React from 'react';

import {Link} from '../../../common/components';
import styles from './styles.css';

export default function LoginScreen() {
    return <div className={styles.card}>
        <header className={styles.cardHeader}>
            <h1 className={styles.headerText}>Sign in</h1>
        </header>

        <div className={styles.cardBody}>
            <form className={styles.form}>
                <div className={styles.inputGroup}>
                    <input className={styles.formInput} type='email' />
                    <input className={styles.formInput} />
                </div>
                <div className={styles.formFooter}>
                    <p className={styles.formFooterText}>
                        Help: <Link>email</Link> or <Link>password</Link>
                    </p>
                    <button className={styles.submitButton} type='button'>Log in</button>
                </div>
            </form>
        </div>
    </div>;
}
