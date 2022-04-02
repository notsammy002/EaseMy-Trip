import { configureStore } from '@reduxjs/toolkit';
import dateToSearchSlice from './dateToSearchSlice';
import flightCheckoutSlice from './flightCheckoutSlice';
import flightDataSlice from './flightDataSlice';

const store = configureStore({
    reducer:{flightData: flightDataSlice.reducer,dateSearch: dateToSearchSlice.reducer,flightCheckout: flightCheckoutSlice.reducer}
})

export default store