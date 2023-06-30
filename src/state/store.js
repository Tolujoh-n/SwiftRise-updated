import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../state/postsSlice'


export const store = configureStore({
    reducer: {
        posts: postsReducer
    }
})