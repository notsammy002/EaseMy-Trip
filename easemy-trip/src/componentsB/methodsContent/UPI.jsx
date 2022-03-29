import React from 'react';
import styles from '../css/paymentMode.module.css'

export const UPI = () => {
    return (
        <div>
            <form action="">
                <div>
                    <label className={styles.label} htmlFor="">Enter Your UPI ID:</label>
                    <div>
                        <input className={styles.upi} type="text" placeholder="Enter your UPI ID" />
                        <span className={styles.span}>@</span>
                        <select className={styles.select}>
                            <option value="ybl">ybl</option>
                            <option value="ybl">apl</option>
                            <option value="ybl">okaxis</option>
                            <option value="ybl">okhdfc</option>
                            <option value="ybl">paytm</option>
                            <option value="ybl">kotak</option>
                            <option value="ybl">icici</option>
                            <option value="ybl">myaicici</option>
                            <option value="ybl">sbi</option>
                            <option value="ybl">oksbi</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    )
}
