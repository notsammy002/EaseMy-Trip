import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { flightDataActions } from '../../../store/flightDataSlice';
import { fetchFlightData } from '../../../store/flightDataActions';


let valueFilter = 4000
function valuetext(value) {
  valueFilter = value
}

// const date ="17April2022"

export default function PriceSlider() {

  // const flightData = useSelector((state) => state.flightData.filter);
  const dispatch = useDispatch()

  const dateObj = useSelector((state)=>(state.dateSearch.dateObj))
  
  const [prevFilter,setPrevFilter] = React.useState("")
  

  return (
    <Box sx={{ width: 200 , marginTop:"10px"}}>
      <Slider
        aria-label="Small steps"
        defaultValue={4000}
        getAriaValueText={valuetext}
        step={1000}
        marks
        min={5000}
        max={7500}
        valueLabelDisplay="bottom"
        onChange={()=>{
          if(!prevFilter){
            dispatch(flightDataActions.removeFilter(["price",prevFilter]))
          }
          dispatch(flightDataActions.filterData(["price",valueFilter]))
          setPrevFilter(valueFilter)
          dispatch(fetchFlightData(dateObj)) 

        }}
      />
    </Box>
  );
}
