import React from "react";
import Card from './Card'
import Discount from './Discount'
import style from "./home.module.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import img1 from "../Navbar/img1.PNG"
import TopFlight from "./TopFlight";
const Home = () => {
  return (
    <>
    <div className={style.container}>

      <div className={style.top}>

        <div className={style.info}>
          <span>Important Info: </span>
          To cancel/claim refund or reschedule/modify your booking.{" "}
          <span className={style.link1}>click here </span>
        </div>

        <div className={style.guide}>
          <span>Travel Guide:</span>
          <p>
            Get latest information on airlines & airports guidelines, state-wise
            quarantine rules, travel checklists, web-checkin etc.
            </p>
        </div>

      </div>

      <div className={style.bottom}>

        <div className={style.inner}>
          <span>FREE Full Refund due to Medical Reasons:</span> EaseMyTrip
          brings an extraordinary offer in these tough times! Get full refund
          for domestic ticket in case you cancel it due to medical sickness.
          Best Part - There are ZERO extra charges for this service.
          <span className={style.link}>(View Coverage)</span>{" "}
        </div>

      </div>
      <div className={style.exclusive}>
        <div className={style.headings}>
        <div> <h1>Exclusive offer</h1></div>
          <div className={style.h}>
            <h4 className={style.first}>BEST OFFERS  <hr />
            </h4>
            <h4>FLIGHT  <hr /></h4>
            <h4>HOTEL <hr /></h4>
            <h4>BUS <hr /></h4>
            <h4>HOLIDAY <hr /></h4>
          </div>
          </div>
          
       <div  className={style.button}>
        <ArrowBackIosIcon />
        <ArrowForwardIosIcon/>
        </div>
        </div>
      <Discount/>
      <TopFlight/>
      <br />
      <Card/>
    </div>
    <br />
    <br />

     <img src={img1} alt="" />
    </>
  );
};

export default Home;
