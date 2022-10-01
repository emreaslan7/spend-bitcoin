import { configureStore } from "@reduxjs/toolkit";
import budgetSlice from "./budgetSlice";

export const store = configureStore({
    reducer : {
        budget: budgetSlice,
    },
});