import { configureStore } from "@reduxjs/toolkit";
import reviewsReducer from './reviewsSlice'


export const store = configureStore({
    reducer: {
        reviews: reviewsReducer
    }
})