import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import { FaRegCalendarAlt } from "react-icons/fa";
import styles from "./dateSlide.module.css";
import { useSelector } from "react-redux";

const dateArr = [
  "Apr 16",
  "Apr 17",
  "Apr 18",
  "Apr 19",
  "Apr 20",
  "Apr 21",
  "Apr 22",
  "Apr 23",
  "Apr 24",
  "Apr 25",
  "Apr 26",
  "Apr 27",
  "Apr 28",
  "Apr 29",
  "Apr 30",
  "Apr 31",
  "May 01",
  "May 02",
  "May 03",
  "May 04",
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
