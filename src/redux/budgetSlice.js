import { createSlice, current } from "@reduxjs/toolkit";
import { itemList } from "./budgetSliceData";

export const budgetSlice = createSlice({

    name: 'budget',

    initialState: {
        budgetAmount: 0,
        items: itemList,
        

        selectedYear: '2010'
    },

    reducers: {
        selectYear: (state, action) => {
            state.selectedYear = action.payload;
        },
        buyAmount: (state, action) => {
            const {itemId, itemAmount} = action.payload;
            if(!(itemId === null)){
                const product =state.items.find(item => item.id === itemId);
                product.amount = itemAmount;
            }
            console.log(current(state.items))
        },

    }



});

export const { selectYear, buyAmount} = budgetSlice.actions;
export default budgetSlice.reducer;