import { createSlice, current } from "@reduxjs/toolkit";


const dateToSearchSlice = createSlice({
    name:"search date",
    initialState: { dateObj:{} },
    reducers:{
        searchObj(state,action){
        
            state.dateObj = action.payload
            
            console.log(current(state));
        }
    }
})

export const dateToSearchActions = dateToSearchSlice.actions;

export default dateToSearchSlice;