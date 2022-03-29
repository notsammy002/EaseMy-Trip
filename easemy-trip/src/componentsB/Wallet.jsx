import React from 'react';
import styles from './css/wallet.module.css';

export const Wallet = () => {
    return (
        <div className={styles.outerDiv}>
            <div className={styles.flexAll}>
                <img src="https://flight.easemytrip.com/Content/img/walletIcon.svg" alt="" />
                <p style={{ fontWeight: '300' }}>You have to login to use your <span style={{ fontWeight: '700' }}>wallet amount</span></p>
                <button>LOG IN</button>
            </div>
        </div>
    )
}
