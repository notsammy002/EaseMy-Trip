import React from 'react'
import style from "./discount.module.css"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Discount = () => {
  return (
    <div className={style.container}>
         
         <div className={style.card}>
      <div > <img src="https://www.easemytrip.com/images/offer-img/EMTFirst_hp.png" alt="" className={style.img}/></div>
      <div className={style.offer} >
          <h4 className={style.h4}>New User Offer</h4>
          <p className={style.text}>Register and Get Discount on Booking First flight with us
          </p>
          <div className={style.code}>
             <h5> ENTFIRST</h5> 
           <ContentCopyIcon className={style.icon} />
          </div>
      </div>
      </div>

        <div className={style.card}>
      <div > <img src="https://www.easemytrip.com/images/offer-img/iifa-hp.png" alt="" className={style.img}/></div>
      <div className={style.offer} >
          <h4 className={style.h4}>New User Offer</h4>
          <p className={style.text}>Register and Get Discount on Booking First flight with us
          </p>
          <div className={style.code}>
             <h5> EMTIIFA</h5> 
           <ContentCopyIcon className={style.icon} />
          </div>
      </div>
      
      </div>
      
        <div className={style.card}>
      <div > <img src="https://www.easemytrip.com/images/offer-img/digibank-hp.png" alt="" className={style.img}/></div>
      <div className={style.offer} >
          <h4 className={style.h4}>Save huge using digibank</h4>
          <p className={style.text}>apply for digibank saving account and save huge on travel
          </p>
          <div className={style.code}>
             <h5> DBSEMT</h5> 
           <ContentCopyIcon className={style.icon} />
          </div>
      </div>
      </div>
      
    </div>
  )
}

export default Discount
