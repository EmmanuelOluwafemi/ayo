import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  seedCounts: number[];
  isPaused: boolean;
}

const initialState: CounterState = {
  seedCounts: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  isPaused: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateSeeds: (state, action: PayloadAction<number[]>) => {
      state.seedCounts = action.payload;
    },
    updatePause: (state, action: PayloadAction<boolean>) => {
      state.isPaused = action.payload;
    }
  },
});

export const { updateSeeds, updatePause } = counterSlice.actions;

export default counterSlice.reducer;