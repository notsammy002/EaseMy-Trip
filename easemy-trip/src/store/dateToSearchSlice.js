import { createSlice } from "@reduxjs/toolkit";


const dateToSearchSlice = createSlice({
    name:"search date",
    initialState: {
        date: "17April2022",
        from_location :"Jaipur",
        to_location:"Delhi"
    },
    reducers:{
        searchObj(state,action){
            state = state.action.payload
        }
    }
})

export const dateToSearchActions = dateToSearchSlice.actions;

export default dateToSearchSlice;