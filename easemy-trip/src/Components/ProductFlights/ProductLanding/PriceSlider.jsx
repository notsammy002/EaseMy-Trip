import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { flightDataActions } from '../../../store/flightDataSlice';
import { fetchFlightData } from '../../../store/flightDataActions';


let valueFilter = 5000
function valuetext(value) {
  valueFilter = value
}

// const date ="17April2022"

export default function PriceSlider() {

  // const flightData = useSelector((state) => state.flightData.filter);
  const dispatch = useDispatch()

  const dateObj = useSelector((state)=>(state.dateSearch))
  

  return (
    <Box sx={{ width: 200 , marginTop:"10px"}}>
      <Slider
        aria-label="Small steps"
        defaultValue={4500}
        getAriaValueText={valuetext}
        step={500}
        marks
        min={5000}
        max={7500}
        valueLabelDisplay="bottom"
        onChange={()=>{
          dispatch(flightDataActions.filterData(["price",valueFilter]))
          dispatch(fetchFlightData(dateObj)) 
        }}
      />
    </Box>
  );
}
