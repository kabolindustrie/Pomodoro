import { createSlice } from "@reduxjs/toolkit";

const initialize = {
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
  initialize,
  reducer: {

  }
})

export default chrono.reducer
