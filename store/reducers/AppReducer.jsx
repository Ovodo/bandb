import { createSlice } from "@reduxjs/toolkit";
import { pointArray } from "../../data/Days";
// import { persistor } from "../Store";

export const initialState = {
  User: "",
  Points: 0,
  Claimed: false,
  dailyClaim: 10,
  pointArray: [10, 20, 30, 40, 50, 60, 100],
  lastClaim: new Date(),
};

const AppSlice = createSlice({
  name: "App`",
  initialState,
  reducers: {
    clearState(state) {
      state = undefined;
    },
    claimPoints(state) {
      state.Points = state.Points + state.dailyClaim;
      state.dailyClaim >= 100 ? (state.dailyClaim = 10) : null;
    },
    progressClaim(state) {
      state.dailyClaim =
        state.dailyClaim < 60
          ? state.dailyClaim + 10
          : state.dailyClaim >= 60
          ? state.dailyClaim + 40
          : state.dailyClaim >= 100
          ? 10
          : null;
    },
    setClaimed(state) {
      state.lastClaim = new Date();
      state.Claimed = !state.Claimed;
      // console.log(state.lastClaim[2]);
    },
  },
});

export const { progressClaim, claimPoints, setClaimed, clearState } =
  AppSlice.actions;
export default AppSlice.reducer;

// initialState.lastClaim === undefined &&
//   persistor.pause() &
//     persistor.flush().then(() => {
//       return persistor.purge();
//     });
