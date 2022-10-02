import { createSlice } from "@reduxjs/toolkit";
import {itemList, yearStats} from "./budgetSliceData";

export const budgetSlice = createSlice({

    name : 'budget',

    initialState : {
        budgetAmount :0,
        items : itemList,

        selectedYear: '2010'
    },

    reducers :{
        selectYear(state,action){
            state.selectedYear = action.payload;
        }
        
    }



});

export const {selectYear} = budgetSlice.actions;
export default budgetSlice.reducer;