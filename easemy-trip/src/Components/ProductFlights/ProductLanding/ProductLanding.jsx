import React from "react";
import { LeftContainer } from "./LeftContainer";
import styles from "./productLanding.module.css";
import { RightContainer } from "./RightContainer";
export const ProductLanding = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
       <LeftContainer/>
      </div>
      <div className={styles.rightContainer}>
       <RightContainer/>
      </div>
    </div>
  );
};
