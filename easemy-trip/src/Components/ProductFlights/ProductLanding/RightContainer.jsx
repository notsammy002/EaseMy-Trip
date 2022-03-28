import { Switch } from "@mui/material";
import React from "react";
import DateSlider from "./DateSlider";
import { FlightCard } from "./FlightCard";
import styles from "./rightContainer.module.css";

const data = 
   [ {
      company_name: "AirAsia",
      company_icon: "https://flight.easemytrip.com/Content/AirlineLogon/I5.png",
      departure_time: "13:00",
      arrival_time: "14:50",
      duration: "01h 50m",
      from_location: "Delhi",
      to_location: "Mumbai",
      price: "5850",
      stop: "one",
      from_location_code: "DEL",
      to_location_code: "BOM",
      day: "Sat",
      departure_date: "16April2022",
      arrival_date: "16April2022"
    }, {
      company_name: "AirAsia",
      company_icon: "https://flight.easemytrip.com/Content/AirlineLogon/I5.png",
      departure_time: "13:00",
      arrival_time: "14:50",
      duration: "01h 50m",
      from_location: "Delhi",
      to_location: "Mumbai",
      price: "5850",
      stop: "one",
      from_location_code: "DEL",
      to_location_code: "BOM",
      day: "Sat",
      departure_date: "16April2022",
      arrival_date: "16April2022"
    }, {
      company_name: "AirAsia",
      company_icon: "https://flight.easemytrip.com/Content/AirlineLogon/I5.png",
      departure_time: "13:00",
      arrival_time: "14:50",
      duration: "01h 50m",
      from_location: "Delhi",
      to_location: "Mumbai",
      price: "5850",
      stop: "one",
      from_location_code: "DEL",
      to_location_code: "BOM",
      day: "Sat",
      departure_date: "16April2022",
      arrival_date: "16April2022"
    }, {
      company_name: "AirAsia",
      company_icon: "https://flight.easemytrip.com/Content/AirlineLogon/I5.png",
      departure_time: "13:00",
      arrival_time: "14:50",
      duration: "01h 50m",
      from_location: "Delhi",
      to_location: "Mumbai",
      price: "5850",
      stop: "one",
      from_location_code: "DEL",
      to_location_code: "BOM",
      day: "Sat",
      departure_date: "16April2022",
      arrival_date: "16April2022"
    }, {
      company_name: "AirAsia",
      company_icon: "https://flight.easemytrip.com/Content/AirlineLogon/I5.png",
      departure_time: "13:00",
      arrival_time: "14:50",
      duration: "01h 50m",
      from_location: "Delhi",
      to_location: "Mumbai",
      price: "5850",
      stop: "one",
      from_location_code: "DEL",
      to_location_code: "BOM",
      day: "Sat",
      departure_date: "16April2022",
      arrival_date: "16April2022"
    }, {
      company_name: "AirAsia",
      company_icon: "https://flight.easemytrip.com/Content/AirlineLogon/I5.png",
      departure_time: "13:00",
      arrival_time: "14:50",
      duration: "01h 50m",
      from_location: "Delhi",
      to_location: "Mumbai",
      price: "5850",
      stop: "one",
      from_location_code: "DEL",
      to_location_code: "BOM",
      day: "Sat",
      departure_date: "16April2022",
      arrival_date: "16April2022"
    }, {
      company_name: "AirAsia",
      company_icon: "https://flight.easemytrip.com/Content/AirlineLogon/I5.png",
      departure_time: "13:00",
      arrival_time: "14:50",
      duration: "01h 50m",
      from_location: "Delhi",
      to_location: "Mumbai",
      price: "5850",
      stop: "one",
      from_location_code: "DEL",
      to_location_code: "BOM",
      day: "Sat",
      departure_date: "16April2022",
      arrival_date: "16April2022"
    }, {
      company_name: "AirAsia",
      company_icon: "https://flight.easemytrip.com/Content/AirlineLogon/I5.png",
      departure_time: "13:00",
      arrival_time: "14:50",
      duration: "01h 50m",
      from_location: "Delhi",
      to_location: "Mumbai",
      price: "5850",
      stop: "one",
      from_location_code: "DEL",
      to_location_code: "BOM",
      day: "Sat",
      departure_date: "16April2022",
      arrival_date: "16April2022"
    }]

export const RightContainer = () => {
  return (
    <div>
      <DateSlider />
      <div className={styles.titleBarContainer}>
        <div className={styles.titleBar}>
          <span>AIRLINES</span>
          <span>DEPART</span>
          <span>DURATION</span>
          <span>ARRIVE</span>
          <span>PRICE</span>
          <span>RECOMMENDED </span>
        </div>
        <Switch sx={{ position: "relative", top: "10px" }} />
      </div>
      {data.map((demo)=>{
        return  <FlightCard  demo={demo}/>
      })}
     
    </div>
  );
};
