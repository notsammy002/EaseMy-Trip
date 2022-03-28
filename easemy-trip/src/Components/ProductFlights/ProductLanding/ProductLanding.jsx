import React from "react";
import styles from "./productLanding.module.css";
import { RightContainer } from "./RightContainer";
export const ProductLanding = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        tempore aspernatur nisi quasi voluptatem dolore, quam similique neque
        incidunt, excepturi ex, quo natus. Nostrum, odit error ipsa totam ea
        nemo.
      </div>
      <div className={styles.rightContainer}>
       <RightContainer/>
      </div>
    </div>
  );
};
