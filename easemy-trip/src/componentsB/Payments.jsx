import React from 'react'
import { BookingDetails } from './BookingDetails'
import styles from './css/payments.module.css';
import { PaymentMode } from './PaymentMode';
import { PriceSummary } from "./PriceSummary"
import { TravellerDetail } from './TravellerDetail';
import { Wallet } from './Wallet';

export const Payments = () => {

    const [isLogin, setIsLogin] = React.useState(true)

    return (
        <div className={styles.mainDiv}>
            <div className={styles.payments}>
                <div>
                    <BookingDetails />
                    <TravellerDetail />
                    {
                        isLogin ? <Wallet /> : null
                    }
                    <PaymentMode />
                </div>
                <div>
                    <PriceSummary />
                </div>
            </div>
        </div>
    )
}
