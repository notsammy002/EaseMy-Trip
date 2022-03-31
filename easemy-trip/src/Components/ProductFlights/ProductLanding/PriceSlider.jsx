import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function PriceSlider() {
  return (
    <Box sx={{ width: 200 , marginTop:"10px"}}>
      <Slider
        aria-label="Small steps"
        defaultValue={4500}
        getAriaValueText={valuetext}
        step={500}
        marks
        min={4000}
        max={7500}
        valueLabelDisplay="bottom"
      />
    </Box>
  );
}
