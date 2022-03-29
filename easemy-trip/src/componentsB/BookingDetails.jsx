import React from 'react';
import styles from './css/bookingDetails.module.css';
import { FaPlaneDeparture } from 'react-icons/fa';
import { BaggageList } from './BaggageList'


export const BookingDetails = () => {

    const [baggageActive, setBaggageActive] = React.useState(false);
    return (
        <div className={styles.outerDiv}>
            <div className={styles.firstPara}>
                <div className={styles.edt}></div>
                <p style={{ fontWeight: '500', paddingTop: '10px' }}>Booking Details</p>
            </div>
            <div className={styles.flightsContainer}>
                <div className={styles.place}>
                    <div style={{ fontSize: "1.8rem" }}>
                        <FaPlaneDeparture />
                    </div>

                    <p style={{ fontSize: "18px", fontWeight: "420" }}>Delhi-Mumbai <span className={styles.span1}> |Tue-12Apr2022</span></p>

                </div>
                <div className={styles.details}>
                    <div className={styles.flightName}>
                        <div style={{ display: 'flex', placeItems: "center", gap: "1em" }}>
                            <img className={styles.logoCompany} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AirAsia_New_Logo.svg/1200px-AirAsia_New_Logo.svg.png" alt="" />
                            <div className={styles.nameNumber}>
                                <p className={styles.name}>AirAsia</p>
                                <p className={styles.number}>I5-753
                                </p>
                            </div>
                        </div>
                        <div className={styles.lowFare}>
                            Low Fare
                        </div>
                    </div>
                    <div className={styles.flightTime}>
                        <div className={styles.board}>
                            <strong>13:00</strong>
                            <p>Delhi (DEL)</p>
                            <p>Tue-12Apr2022</p>
                            <p>Terminal - 3</p>
                        </div>
                        <div className={styles.beforeAfter}>
                            <p className={styles.duration}>01h 50m</p>
                            <hr className={styles.hrDetails} />
                            {/* <FaPlaneDeparture style={{ zIndex: "1", marginRight: "45px" }} /> */}
                            <p className={styles.refund}>REFUNDABLE</p>
                        </div>
                        <div className={styles.board}>
                            <strong>13:00</strong>
                            <p>Delhi (DEL)</p>
                            <p>Tue-12Apr2022</p>
                            <p>Terminal - 3</p>
                        </div>
                    </div>

                </div>
                <div style={{ marginLeft: '1.5em' }}>
                    <p className={baggageActive ? styles.baggage_active : styles.baggage} onClick={() => setBaggageActive(!baggageActive)}>Baggage</p>

                    {
                        baggageActive ? <BaggageList /> : null
                    }
                </div>
            </div>
        </div >
    )
}
