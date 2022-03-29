import React from 'react';
import styles from '../css/paymentMode.module.css'

export const GiftCard = () => {
    return (
        <div>
            <form action="">
                <div>
                    <label className={styles.label} htmlFor="">Enter Your GiftCard:</label>
                    <div>
                        <input className={styles.upi} type="text" placeholder="Enter your GiftCard" />
                        <button className={styles.giftButton}>Check Balance</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
