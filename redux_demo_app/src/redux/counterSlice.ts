import { createSlice } from "@reduxjs/toolkit";
const counterSlicer = createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
            state.count += 1 
        },
        decriment:(state)=>{
            state.count -= 1
        }
    }
    })
export const {increment,decriment} = counterSlicer.actions
export default counterSlicer.reducer