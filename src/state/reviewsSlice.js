import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [
    {
      id: 1,
      name: 'James Bond',
      rating: '4',
      comment: 'Que sera sera',
    },
    {
      id: 2,
      name: 'James Quil',
      rating: '3',
      comment: 'Que sera sera what will be will be',
    },
  ],
};

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        reviewAdded(state, action) {
            state.reviews.push(action.payload)
        }
    }
})

export const selectAllReviews = (state) => state.reviews;

export const { reviewAdded } = reviewsSlice.actions

export default reviewsSlice.reducer