import React from 'react';
import styles from '../css/paymentMode.module.css'

export const Credit = () => {
    return (
        <div>
            <form action="">
                <div>
                    <label className={styles.label} htmlFor="">Enter Your Card Number.</label>
                    <br />
                    <input className={styles.input} type="text" placeholder="xxxx-xxxx-xxxx" />
                </div>

                <div>
                    <label className={styles.label} htmlFor="">Enter Card Holder Name.</label>
                    <br />
                    <input className={styles.input} type="text" placeholder="Card Holder Name" />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <label className={styles.label} htmlFor="">Expiry Date.</label>
                        <br />
                        <input className={styles.input} type="text" placeholder="xx/xxxx" />
                    </div>
                    <div>
                        <label className={styles.label} htmlFor="">CVV</label>
                        <br />
                        <input className={styles.input} type="text" placeholder="xxx" />
                    </div>
                </div>
            </form >
        </div >
    )
}
