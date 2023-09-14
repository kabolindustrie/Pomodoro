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
    updateChronoValues: (state, action) => {
      const choseState = state[action.payload.type]

      if(choseState.value + action.payload.value === 0) return
      if(action.payload.type === "session") {
        if(!state.isPlaying) {
          choseState.value = choseState.value + action.payload.value
          state.displayValue.value = choseState.value
        }
      }
    }
}})

export const {updateChronoValues} = chrono.actions
export default chrono.reducer
