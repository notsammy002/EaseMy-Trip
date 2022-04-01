import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlightData } from "../../../store/flightDataActions";
import { flightDataActions } from "../../../store/flightDataSlice";
import styles from "./leftContainer.module.css";
import PriceSlider from "./PriceSlider";

export const LeftContainer = () => {
  const dispatch = useDispatch();

  const dateObj = useSelector((state)=>(state.dateSearch))
  return (
    <div className={styles.LeftContainerMain}>
      <div className={styles.filterTitle}>Filter</div>
      <div className={styles.popularFilters}>
        <div className={styles.titlePopularFilters}>Popular Filters</div>
        <div className={styles.filterChecks}>
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                dispatch(flightDataActions.filterData(["stop", "non"]));
                dispatch(fetchFlightData(dateObj));
              } else {
                dispatch(flightDataActions.removeFilter(["stop", "non"]));
                dispatch(fetchFlightData(dateObj));
              }
            }}
          />
          <label style={{ paddingBottom: "4px" }}>Non Stop</label>
        </div>
        <div className={styles.filterChecks}>
          <input type="checkbox" />
          <label style={{ paddingBottom: "4px" }}>Morning Departure</label>
        </div>
        <div className={styles.filterChecks}>
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                dispatch(flightDataActions.filterData(["company_name", "AirAsia"]));
                dispatch(fetchFlightData(dateObj));
              } else {
                dispatch(flightDataActions.removeFilter(["company_name", "AirAsia"]));
                dispatch(fetchFlightData(dateObj));
              }
            }}
          />
          <label style={{ paddingBottom: "4px" }}>AirAsia</label>
        </div>
        <div className={styles.filterChecks}>
          <input type="checkbox"   onChange={(e) => {
              if (e.target.checked) {
                dispatch(flightDataActions.filterData(["company_name", "GO FIRST"]));
                dispatch(fetchFlightData(dateObj));
              } else {
                dispatch(flightDataActions.removeFilter(["company_name", "GO FIRST"]));
                dispatch(fetchFlightData(dateObj));
              }
            }}/>
          <label style={{ paddingBottom: "4px" }}>GO FIRST</label>
        </div>
        <div className={styles.filterChecks}>
          <input type="checkbox"  onChange={(e) => {
              if (e.target.checked) {
                dispatch(flightDataActions.filterData(["company_name", "Spicejet"]));
                dispatch(fetchFlightData(dateObj));
              } else {
                dispatch(flightDataActions.removeFilter(["company_name", "Spicejet"]));
                dispatch(fetchFlightData(dateObj));
              }
            }} />
          <label style={{ paddingBottom: "4px" }}>Spicejet</label>
        </div>
        <div className={styles.filterChecks}>
          <input type="checkbox"  onChange={(e) => {
              if (e.target.checked) {
                dispatch(flightDataActions.filterData(["company_name", "Vistara"]));
                dispatch(fetchFlightData(dateObj));
              } else {
                dispatch(flightDataActions.removeFilter(["company_name", "Vistara"]));
                dispatch(fetchFlightData(dateObj));
              }
            }} />
          <label style={{ paddingBottom: "4px" }}>Vistara</label>
        </div>
        <div className={styles.filterChecks}>
          <input type="checkbox"  onChange={(e) => {
              if (e.target.checked) {
                dispatch(flightDataActions.filterData(["company_name", "Air India"]));
                dispatch(fetchFlightData(dateObj));
              } else {
                dispatch(flightDataActions.removeFilter(["company_name", "Air India"]));
                dispatch(fetchFlightData(dateObj));
              }
            }}/>
          <label style={{ paddingBottom: "4px" }}>Air India</label>
        </div>
        <div className={styles.filterChecks}>
          <input type="checkbox"  onChange={(e) => {
              if (e.target.checked) {
                dispatch(flightDataActions.filterData(["company_name", "Indigo"]));
                dispatch(fetchFlightData(dateObj));
              } else {
                dispatch(flightDataActions.removeFilter(["company_name", "Indigo"]));
                dispatch(fetchFlightData(dateObj));
              }
            }} />
          <label style={{ paddingBottom: "4px" }}>Indigo</label>
        </div>
      </div>
      <div className={styles.priceRangeBox}>
        <div className={styles.titlePopularFilters}>Price Range</div>
        <PriceSlider />
      </div>

      <div className={styles.stopsBox}>
        <div
          style={{ paddingLeft: "15px" }}
          className={styles.titlePopularFilters}
        >
          Stops
        </div>

        <div className={styles.stopFilters}>
          <button   onClick={() => {
                dispatch(flightDataActions.filterData(["stop", "non"]));
                dispatch(fetchFlightData(dateObj));
              
            }}>
            0 <br /> Non-Stop{" "}
          </button>
          <button  onClick={() => {
                dispatch(flightDataActions.filterData(["stop", "one"]));
                dispatch(fetchFlightData(dateObj));
              
            }}>
            1 <br /> Stop{" "}
          </button>
          <button onClick={() => {
                dispatch(flightDataActions.filterData(["stop", "two"]));
                dispatch(fetchFlightData(dateObj));
              
            }}>
            2+ <br /> Stop{" "}
          </button>
        </div>
      </div>

      <div className={styles.popularFilters}>
        <div className={styles.titlePopularFilters}>Airlines</div>
        <div className={styles.airlineChecks}>
          <div>
            <input type="checkbox" onChange={(e) => {
              if (e.target.checked) {
                dispatch(flightDataActions.filterData(["company_name", "AirAsia"]));
                dispatch(fetchFlightData(dateObj));
              } else {
                dispatch(flightDataActions.removeFilter(["company_name", "AirAsia"]));
                dispatch(fetchFlightData(dateObj));
              }
            }} />
            <img
              src="https://flight.easemytrip.com/Content/AirlineLogon/I5.png"
              alt=""
            />
            <label>AirAsia</label>
          </div>

          <span> ₹ 5850</span>
        </div>
        <div className={styles.airlineChecks}>
          <div>
            <input type="checkbox" onChange={(e) => {
              if (e.target.checked) {
                dispatch(flightDataActions.filterData(["company_name", "GO FIRST"]));
                dispatch(fetchFlightData(dateObj));
              } else {
                dispatch(flightDataActions.removeFilter(["company_name", "GO FIRST"]));
                dispatch(fetchFlightData(dateObj));
              }
            }} />
            <img
              src="https://flight.easemytrip.com/Content/AirlineLogon/G8.png"
              alt=""
            />
            <label>GO FIRST</label>
          </div>

          <span> ₹ 5850</span>
        </div>
        <div className={styles.airlineChecks}>
          <div>
            <input type="checkbox" onChange={(e) => {
              if (e.target.checked) {
                dispatch(flightDataActions.filterData(["company_name", "Spicejet"]));
                dispatch(fetchFlightData(dateObj));
              } else {
                dispatch(flightDataActions.removeFilter(["company_name", "Spicejet"]));
                dispatch(fetchFlightData(dateObj));
              }
            }}/>
            <img
              src="https://flight.easemytrip.com/Content/AirlineLogon/SG.png"
              alt=""
            />
            <label>Spicejet</label>
          </div>

          <span> ₹ 5850</span>
        </div>
        <div className={styles.airlineChecks}>
          <div>
            <input type="checkbox" onChange={(e) => {
              if (e.target.checked) {
                dispatch(flightDataActions.filterData(["company_name", "Vistara"]));
                dispatch(fetchFlightData(dateObj));
              } else {
                dispatch(flightDataActions.removeFilter(["company_name", "Vistara"]));
                dispatch(fetchFlightData(dateObj));
              }
            }} />
            <img
              src="https://flight.easemytrip.com/Content/AirlineLogon/UK.png"
              alt=""
            />
            <label> Vistara</label>
          </div>
          <span> ₹ 5850</span>
        </div>
        <div className={styles.airlineChecks}>
          <div>
            <input type="checkbox"  onChange={(e) => {
              if (e.target.checked) {
                dispatch(flightDataActions.filterData(["company_name", "Air India"]));
                dispatch(fetchFlightData(dateObj));
              } else {
                dispatch(flightDataActions.removeFilter(["company_name", "Air India"]));
                dispatch(fetchFlightData(dateObj));
              }
            }}/>
            <img
              src="https://flight.easemytrip.com/Content/AirlineLogon/AI.png"
              alt=""
            />
            <label>Air India</label>
          </div>

          <span> ₹ 5850</span>
        </div>
      </div>
    </div>
  );
};
