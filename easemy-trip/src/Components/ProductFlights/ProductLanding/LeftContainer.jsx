import React from "react";
import styles from "./leftContainer.module.css";

export const LeftContainer = () => {
  return (
    <div className={styles.LeftContainerMain}>
      <div className={styles.filterTitle}>Filter</div>
      <div className={styles.popularFilters}>
        <div
          className={styles.titlePopularFilters}
        >
          Popular Filters
        </div>
        <div className={styles.filterChecks}>

        <input type="checkbox" />
        <label style={{paddingBottom:"4px"}} >Non Stop</label>
        </div>
        <div className={styles.filterChecks}>

        <input type="checkbox" />
        <label style={{paddingBottom:"4px"}} >Morning Departure</label>
        </div>
        <div className={styles.filterChecks}>

        <input type="checkbox" />
        <label style={{paddingBottom:"4px"}} >AirAsia</label>
        </div>
        <div className={styles.filterChecks}>

        <input type="checkbox" />
        <label style={{paddingBottom:"4px"}} >GO FIRST</label>
        </div>
        <div className={styles.filterChecks}>

        <input type="checkbox" />
        <label style={{paddingBottom:"4px"}} >Spicejet</label>
        </div>
        <div className={styles.filterChecks}>

        <input type="checkbox" />
        <label style={{paddingBottom:"4px"}} >Vistara</label>
        </div>
        <div className={styles.filterChecks}>

        <input type="checkbox" />
        <label style={{paddingBottom:"4px"}} >Air India</label>
        </div>
        <div className={styles.filterChecks}>

        <input type="checkbox" />
        <label style={{paddingBottom:"4px"}} >Indigo</label>
        </div>
        
      </div>
    </div>
  );
};
