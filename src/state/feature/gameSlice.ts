import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  seedCounts: number[];
}

const initialState: CounterState = {
  seedCounts: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateSeeds: (state, action: PayloadAction<number[]>) => {
      state.seedCounts = action.payload;
    }
  },
});

export const { updateSeeds } = counterSlice.actions;

export default counterSlice.reducer;