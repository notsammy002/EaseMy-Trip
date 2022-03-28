import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { FaRegCalendarAlt } from "react-icons/fa";
import styles from "./dateSlide.module.css";

const dateArr = [
  "Apr 01",
  "Apr 01",
  "Apr 01",
  "Apr 01",
  "Apr 01",
  "Apr 01",
  "Apr 01",
  "Apr 01",
  "Apr 01",
  "Apr 01",
  "Apr 01",
  "Apr 01",
  "Apr 01",
  "Apr 01",
  "Apr 01",
  "Apr 01",
  "Apr 01",
  "Apr 01",
  "Apr 01",
  "Apr 01",
];
export default function DateSlider() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ display: "flex" }}>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          width: "80%",
          paddingRight: "10px",
          height: "55px",
          cursor:"pointer"
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="visible arrows tabs example"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
        >

        {dateArr.map((date)=>{
          return <div className={styles.dateSection}>
            <div className={styles.date}> {date}</div>
            <div className={styles.price}>
              <span>₹ 7319</span>{" "}
            </div>
          </div>
        })}
          

         
        </Tabs>
      </Box>
      <div
        className={styles.calenderIcon}
      >
        <FaRegCalendarAlt size={40} />
      </div>
    </div>
  );
}
