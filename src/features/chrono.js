import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  session: {
    value: 1500,
    runningValue: 1500
  },
  pause: {
    value: 300,
    runningValue: 300
  },
  isPlaying: false,
  intervalID: undefined,
  cycle: 0,
  displayedValue: {
    value:1500,
    heading:"Work"
  }
}

export const chrono = createSlice({
  name: "chrono",
  initialState,
  reducer: {
}})

export default chrono.reducer
