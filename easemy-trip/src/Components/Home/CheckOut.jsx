import React from 'react';
import checkoutstyles from './checkoutstyles.module.css';

const CheckOut = () => {
    return (
        <div className={checkoutstyles.body}>
            <h1>CheckOut</h1>
            <div className={checkoutstyles.body2}>
                <div className={checkoutstyles.detail}>
                    <div className={checkoutstyles.detail_inner}>
                        <div className={checkoutstyles.flightdetail}>

                            <div className={checkoutstyles.flightdetail_title}>

                                <span>Flight Detail</span>
                            </div>
                            <div className={checkoutstyles.flightdetail_body1}>
                                <div className={checkoutstyles.flightdetail_body2}>
                                    <div className={checkoutstyles.flightdetail_body_tag} >DEPART</div>

                                    <div className={checkoutstyles.flightdetail_body_info}>
                                        <div className={checkoutstyles.flightdetail_clr}></div>

                                        <div className={checkoutstyles.flightdetail_body_info_des}>
                                            <span className={checkoutstyles.flightdetail_body_info_des_name}>Delhi-Mumbai |</span>
                                            <span className={checkoutstyles.flightdetail_body_info_des_date}>  Wed-27Apr2022</span>
                                        </div>

                                        <div className={checkoutstyles.flightdetail_fligt_detail1}>
                                        <div className={checkoutstyles.flightdetail_fligt_detail_img}>
                                        <div className={checkoutstyles.flightdetail_fligt_detail_img_logo}>
                                        <img alt="Flight" width="28" src="https://flight.easemytrip.com/Content/AirlineLogon/I5.png" />
                                        </div>

                                        <div className={checkoutstyles.flightdetail_fligt_detail_img_logo_info}>
                                            <span className={checkoutstyles.flightdetail_fligt_detail_img_logo_info1}>AirAsia</span>
                                            <span className={checkoutstyles.flightdetail_fligt_detail_img_logo_info2}>I5-755</span>
                                        </div>

                                        </div>
                                        </div>

                                        <div className={checkoutstyles.flightdetail_fligt_detail2}>


                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CheckOut