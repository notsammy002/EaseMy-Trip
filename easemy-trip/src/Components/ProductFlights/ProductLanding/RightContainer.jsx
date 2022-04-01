import { Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DateSlider from "./DateSlider";
import { FlightCard } from "./FlightCard";
import styles from "./rightContainer.module.css";

import { useDispatch } from "react-redux";
import { fetchFlightData } from "../../../store/flightDataActions";
import { flightDataActions } from "../../../store/flightDataSlice";

// const date = "17April2022";

export const RightContainer = () => {
  const dispatch = useDispatch();
  const flightData = useSelector((state) => state.flightData.data);

  const dateObj = useSelector((state)=>(state.dateSearch.dateObj))

  console.log(dateObj);
  useEffect(() => {
    dispatch(fetchFlightData(dateObj));
  }, [dispatch]);

  return (
    <div>
      <DateSlider />
      <div className={styles.titleBarContainer}>
        <div className={styles.titleBar}>
          <span style={{cursor:"pointer"}}>AIRLINES</span>
          <span
          style={{cursor:"pointer"}}
            onClick={() =>
              dispatch(flightDataActions.sortHighToLow("departure_time"))
            }
          >
            DEPART
          </span>
          <span
          style={{cursor:"pointer"}}
            onClick={() =>
              dispatch(flightDataActions.sortHighToLow("duration"))
            }
          >
            DURATION
          </span>
          <span style={{cursor:"pointer"}}>ARRIVE</span>
          <span
          style={{cursor:"pointer"}}
            onClick={() => dispatch(flightDataActions.sortHighToLow("price"))}
          >
            PRICE
          </span>
          <span >RECOMMENDED </span>
        </div>
        <Switch sx={{ position: "relative", top: "10px" }} />
      </div>
      {/* Optional chaining */}
      {(flightData.data || []).map((demo) => {
        return <FlightCard key={demo._id} demo={demo} />;
      })}
    </div>
  );
};
