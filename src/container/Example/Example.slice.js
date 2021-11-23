import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    count: 0
}

const exampleSlice = createSlice({
    name: 'example',
    initialState: INITIAL_STATE,
    reducers: {
        incrementCount(state, action) {
            state.count++;
        },
        decrementCount(state, action) {
            state.count--;
        }
    }
});

export const exampleAction = exampleSlice.actions;

export default exampleSlice.reducer;
