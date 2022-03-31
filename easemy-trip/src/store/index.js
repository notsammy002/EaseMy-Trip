import { configureStore } from '@reduxjs/toolkit';
import flightDataSlice from './flightDataSlice';

const store = configureStore({
    reducer:{flightData: flightDataSlice.reducer}
})

export default store