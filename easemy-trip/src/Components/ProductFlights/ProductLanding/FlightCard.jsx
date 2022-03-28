import React, { useState } from "react";
import styles from "./flightCard.module.css";

// const demo = 
//     {
//       company_name: "AirAsia",
//       company_icon: "https://flight.easemytrip.com/Content/AirlineLogon/I5.png",
//       departure_time: "13:00",
//       arrival_time: "14:50",
//       duration: "01h 50m",
//       from_location: "Delhi",
//       to_location: "Mumbai",
//       price: "5850",
//       stop: "one",
//       from_location_code: "DEL",
//       to_location_code: "BOM",
//       day: "Sat",
//       departure_date: "16April2022",
//       arrival_date: "16April2022"
//     }
  

export const FlightCard = ({demo}) => {

    const [showAccordian1,setShowAccordian1] = useState(true)
  return (
    <div className={styles.flightCardContainer}>
      <div className={styles.detailContainer} >
        {" "}
        <div className={styles.icon} > <img src={demo.company_icon} alt="/" /> <div className={styles.companyName} > <div>{demo.company_name}</div> <div className={styles.flightCode} >I5-753</div> </div> </div>
        
        <div className={styles.startingTime} >  <div>{demo.departure_time}</div> <div className={styles.from_location} >{demo.from_location}</div> </div>
        <div className={styles.duration} > <div className={styles.durationExact}> {demo.duration}</div>  <div className={styles.arrow} > </div>  <div className={styles.stop} >{demo.stop}-stop</div> </div>
        <div className={styles.arrivalTime}>  <div>{demo.arrival_time}</div> <div className={styles.to_location} >{demo.to_location}</div> </div>
        <div className={styles.priceContainer}> <div className={styles.price}>₹ {demo.price}</div> <button onClick={()=>{setShowAccordian1((prev)=>(!prev))}} >+ More Fare</button></div>
        <div className={styles.bookNowButton} ><button >BOOK NOW</button></div> 
        
      </div>
      <div className={showAccordian1 ? styles.showAccordian1 : styles.dontShowAccordian1 }>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
        accusantium autem, unde qui atque, eveniet minima necessitatibus
        consequatur corrupti officia quidem possimus. Alias dignissimos natus
        eius doloremque magnam fugit non?
      </div>
    </div>
  );
};
