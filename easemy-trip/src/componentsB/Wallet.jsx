import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './css/wallet.module.css';

export const Wallet = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.outerDiv}>
            <div className={styles.flexAll}>
                <img src="https://flight.easemytrip.com/Content/img/walletIcon.svg" alt="" />
                <p style={{ fontWeight: '300' }}>You have to login to use your <span style={{ fontWeight: '700' }}>wallet amount</span></p>
                <button onClick={() => navigate('../login')}>LOG IN</button>
            </div>
        </div>
    )
}
