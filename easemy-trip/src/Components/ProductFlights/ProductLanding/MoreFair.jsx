import React, { useState } from "react";
import styles from "./moreFair.module.css";

export const MoreFair = ({demo,stateShow,setStateShow}) => {

    

  return (
    <div className={styles.mainContainer}>
      <div className={styles.firstTwoContainer} >
        <div className={styles.lowFare}>
          <div className={styles.titleBar}>Low Fare</div>
          <div className={styles.PriceCheck}>
            {" "}
            <input type="radio" name="price" onClick={()=>{setStateShow(demo.price)}} />{" "}
            <span className={styles.extraPrice}>₹ {demo.price}</span>
          </div>
          <div>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <img
                  src="https://cdn-icons.flaticon.com/png/128/4315/premium/4315445.png?token=exp=1648549100~hmac=9913a119b3661e5db51311f68f1ef606"
                  alt=""
                />
                Cabin baggage included{" "}
              </li>
              <li>
                <img
                  src="https://cdn-icons.flaticon.com/png/128/4315/premium/4315445.png?token=exp=1648549100~hmac=9913a119b3661e5db51311f68f1ef606"
                  alt=""
                />
                Check-in baggage included{" "}
              </li>
              <li>
                <img
                  src="https://cdn-icons.flaticon.com/png/128/4315/premium/4315445.png?token=exp=1648549100~hmac=9913a119b3661e5db51311f68f1ef606"
                  alt=""
                />
                Cancellation fees apply
              </li>
              <li>
                <img
                  src="https://cdn-icons.flaticon.com/png/128/4315/premium/4315445.png?token=exp=1648549100~hmac=9913a119b3661e5db51311f68f1ef606"
                  alt=""
                />
                Date change chargeable
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.lowFare}>
          <div className={styles.titleBar}>Premium Flex</div>
          <div className={styles.PriceCheck}>
            {" "}
            <input type="radio" name="price" onClick={()=>{setStateShow(6218)}} />{" "}
            <span className={styles.extraPrice}>₹ 6218</span>
          </div>
          <div>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <img
                  src="https://cdn-icons.flaticon.com/png/128/4315/premium/4315445.png?token=exp=1648549100~hmac=9913a119b3661e5db51311f68f1ef606"
                  alt=""
                />
                Cabin baggage included{" "}
              </li>
              <li>
                <img
                  src="https://cdn-icons.flaticon.com/png/128/4315/premium/4315445.png?token=exp=1648549100~hmac=9913a119b3661e5db51311f68f1ef606"
                  alt=""
                />
                Check-in baggage included{" "}
              </li>
              <li>
                <img
                  src="https://cdn-icons.flaticon.com/png/128/4315/premium/4315445.png?token=exp=1648549100~hmac=9913a119b3661e5db51311f68f1ef606"
                  alt=""
                />
                Cancellation fees apply
              </li>
              <li>
                <img
                  src="https://cdn-icons.flaticon.com/png/128/4315/premium/4315445.png?token=exp=1648549100~hmac=9913a119b3661e5db51311f68f1ef606"
                  alt=""
                />
                Free date change allowed
              </li>
              <li>
                <img
                  src="https://cdn-icons.flaticon.com/png/128/4315/premium/4315445.png?token=exp=1648549100~hmac=9913a119b3661e5db51311f68f1ef606"
                  alt=""
                />
                Free seats available
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.lowFare}>
        <div className={styles.titleBar}>Easy Refund</div>
        <div className={styles.PriceCheck}>
          {" "}
          <input type="radio" name="price" onClick={()=>{setStateShow(6432)}} />{" "}
          <span className={styles.extraPrice}>₹ 6432</span>
        </div>
        <div>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <img
                src="https://cdn-icons.flaticon.com/png/128/4315/premium/4315445.png?token=exp=1648549100~hmac=9913a119b3661e5db51311f68f1ef606"
                alt=""
              />
              Cabin baggage included{" "}
            </li>
            <li>
              <img
                src="https://cdn-icons.flaticon.com/png/128/4315/premium/4315445.png?token=exp=1648549100~hmac=9913a119b3661e5db51311f68f1ef606"
                alt=""
              />
              Check-in baggage included{" "}
            </li>
            <li>
              <img
                src="https://cdn-icons.flaticon.com/png/128/4315/premium/4315445.png?token=exp=1648549100~hmac=9913a119b3661e5db51311f68f1ef606"
                alt=""
              />
              Cancellation fees apply
            </li>
            <li>
                <img
                  src="https://cdn-icons.flaticon.com/png/128/4315/premium/4315445.png?token=exp=1648549100~hmac=9913a119b3661e5db51311f68f1ef606"
                  alt=""
                />
                Free date change allowed
              </li>
              <li>
                <img
                  src="https://cdn-icons.flaticon.com/png/128/4315/premium/4315445.png?token=exp=1648549100~hmac=9913a119b3661e5db51311f68f1ef606"
                  alt=""
                />
                Free seats available
              </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
