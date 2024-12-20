import { createSlice } from "@reduxjs/toolkit";
//import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    signInSuccess(state, action) {
      state.currentUser = action.payload;
    },
    signOutSuccess(state) {
      state.currentUser = null;
    },
    signOutFailed(state, action) {
      state.error = action.payload;
    },
    signInFailed(state, action) {
      state.error = action.payload;
    },
    signUpFailed(state, action) {
      state.error = action.payload;
    },
  },
});

export const {
  signInSuccess,
  signOutSuccess,
  signOutFailed,
  signInFailed,
  signUpFailed,
} = userSlice.actions;

export const userReducer = userSlice.reducer;

// export const userReducer = (state = INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
//       return {
//         ...state,
//         currentUser: payload,
//       };
//     case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
//       return { ...state, currentUser: null };
//     case USER_ACTION_TYPES.SIGN_OUT_FAILED:
//     case USER_ACTION_TYPES.SIGN_IN_FAILED:
//     case USER_ACTION_TYPES.SIGN_UP_FAILED:
//       return { ...state, error: payload };
//     default:
//       return state;
//   }
// };
