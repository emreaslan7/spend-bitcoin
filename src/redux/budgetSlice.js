import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { itemList } from "./budgetSliceData";

export const getBtcPriceAsync = createAsyncThunk('budget/getBtcPriceAsync', async () =>{
    const res = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin');
    return res.json();
})

export const budgetSlice = createSlice({

    name: 'budget',

    initialState: {
        budgetAmount: 0,
        items: itemList,
        nowBtcPrice : null,
        isLoading: false,
        error : null,
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

    },

    extraReducers : {
        [getBtcPriceAsync.pending] : (state,action) => {
            console.log(action.payload)
            state.isLoading = true;
        },
        [getBtcPriceAsync.fulfilled] : (state,action) => {
            console.log(action.payload)
            state.nowBtcPrice = action.payload;
            state.isLoading = false;
        },        
        [getBtcPriceAsync.rejected] : (state,action) => {
            state.error = action.error.message;
            state.isLoading = false;
        },
    }



});

export const { selectYear, buyAmount} = budgetSlice.actions;
export default budgetSlice.reducer;