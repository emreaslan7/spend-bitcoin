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
        total: 0,
        isLoading: false,
        error : null,
        selectedYear: '2010'
    },

    reducers: {
        selectYear: (state, action) => {
            state.selectedYear = action.payload;
            state.items.forEach(item =>{
                item.amount = 0;
            })
            console.log(current(state))
        },
        buyAmount: (state, action) => {
            const {itemId, itemAmount} = action.payload;
            if(!(itemId === null)){
                const product =state.items.find(item => item.id === itemId);
                product.amount = itemAmount;
            }
        },
        createBudget : (state ,action) =>{
            const {choosedBtcPrice} = action.payload;
            state.budgetAmount = choosedBtcPrice;
        },
        setTotal : (state,action) => {
            state.total = action.payload;
        }
    },

    extraReducers : {
        [getBtcPriceAsync.pending] : (state,action) => {
            state.isLoading = true;
        },
        [getBtcPriceAsync.fulfilled] : (state,action) => {
            state.nowBtcPrice = action.payload;
            state.isLoading = false;
        },        
        [getBtcPriceAsync.rejected] : (state,action) => {
            state.error = action.error.message;
            state.isLoading = false;
        },
    }



});

export const { selectYear, buyAmount, createBudget, setTotal} = budgetSlice.actions;
export default budgetSlice.reducer;