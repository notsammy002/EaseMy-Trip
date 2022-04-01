import { createSlice } from "@reduxjs/toolkit";

const flightCheckoutSlice = createSlice({
    name:"flightToCheckout",
    initialState:{
        ticket: {_id: "6242f02601cb895822d50abb",
            company_name: "Vistara",
            company_icon: "https://flight.easemytrip.com/Content/AirlineLogon/SG.png",
            departure_time: "0700",
            arrival_time: "1000",
            duration: 3,
            from_location: "Banglore",
            to_location: "Jaipur",
            price: 5000,
            from_location_code: "BAN",
            to_location_code: "JAI",
            day: "Sunday",
            departure_date: "17April2022",
            arrival_date: "17April2022",
            stop: "non"
        },
         quantity:1      
    },
    reducers:{
        checkOut(state,action){
            state.ticket = action.payload
        },
        IncreaseQuantity(state,action){
            state.quantity += 1
        },
        DecreaseQuantity(state,action){
            state.quantity -= 1
            if(state.quantity===0){
                state.ticket = {}
            }
        }
    }
})

export const flightCheckoutActions = flightCheckoutSlice.actions;

export default flightCheckoutSlice;