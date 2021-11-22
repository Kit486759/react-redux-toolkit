import { createSlice } from "@reduxjs/toolkit";

const initCounterState = { counter: 0, showCounter: true };

// redux-toolkit slice

const counterSlice = createSlice({
  name: "counter",
  initialState: initCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    showCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions

export default counterSlice.reducer