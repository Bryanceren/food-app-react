import { createSlice, createStore, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: false };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--
        },
        increase(state, payload) {
            state += payload
        },
        toggleCounter() { },
    }
});

//configure store merges reducers from slices
const store = configureStore({
    reducer: { counter: counterSlice.reducer, counter2: counterSlice.reducer }
});
export default store;