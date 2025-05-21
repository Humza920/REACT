import { configureStore } from "@reduxjs/toolkit";
import dailyWorkSlice from "../Reducers/dailyworkslice";
export const myStore = configureStore({
    reducer : dailyWorkSlice
})