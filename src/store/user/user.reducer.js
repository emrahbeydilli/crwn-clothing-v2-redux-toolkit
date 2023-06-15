import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user', //name of slice or action types
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) { //setCurrentUser: ()=>{} shorthand
      state.currentUser = action.payload; //instead of {..state, currrentUser:payload}
    },
  },
});

export const {setCurrentUser} = userSlice.actions;

export const userReducer = userSlice.reducer;

// these files combine 3 files: action,reducer,types