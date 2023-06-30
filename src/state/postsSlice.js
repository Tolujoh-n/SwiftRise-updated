import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export default postsSlice.reducer