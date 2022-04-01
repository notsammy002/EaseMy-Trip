import React from 'react';
import { HiOutlineCurrencyRupee } from 'react-icons/hi';
import styles from './css/paymentMode.module.css';
import { BsCreditCard2Back, BsMouse, BsWallet2 } from "react-icons/bs"
import { MdOutlineDoubleArrow, MdOutlineCardGiftcard } from "react-icons/md"
import { Credit } from './methodsContent/Credit';
import { UPI } from './methodsContent/UPI';
import { GiftCard } from './methodsContent/GiftCard';
import { Wallets } from './methodsContent/Wallets';
import { useSelector } from 'react-redux';


export const PaymentMode = () => {

    const [displayContent, setDisplayContent] = React.useState('Credit/Debit/ATM Cards')

    const data = useSelector(state=>state.flightCheckout.ticket)

    const methods = [{
        name: 'Credit/Debit/ATM Cards',
        imgs: <BsCreditCard2Back />,
        content: <Credit />
    }, { name: 'Gift Card', imgs: <MdOutlineCardGiftcard />, content: <GiftCard /> },
    { name: 'UPI', imgs: <MdOutlineDoubleArrow />, content: <UPI /> },
    { name: 'Wallets', imgs: <BsWallet2 />, content: <Wallets /> }]

    return (
        <div className={styles.outerDiv}>
            <div className={styles.heading}>
                <div style={{ display: 'flex', placeItems: 'center', gap: '1em' }}>
                    <HiOutlineCurrencyRupee className={styles.icon} /> <span style={{ fontWeight: '350' }}> Payment Mode</span>
                </div>
            </div>
            <div className={styles.methodsAll}>
                <div>
                    {
                        methods.map(method => (
                            <div key={method.name} className={method.name === displayContent ? styles.indiMethodActive : styles.indiMethod} onClick={() => { setDisplayContent(method.name) }}>
                                {method.imgs}
                                {method.name}
                            </div>
                        ))
                    }
                </div>
                <div style={{ padding: '3% 4%' }}>
                    {
                        methods.map(method => method.name === displayContent ? method.content : null)
                    }
                    <div className={styles.lastFlex}>
                        <p className={styles.totalFare}>Total Fare :  ₹ <span>{Number(data.price) + 675}</span></p>
                        <button>Make Payment</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
