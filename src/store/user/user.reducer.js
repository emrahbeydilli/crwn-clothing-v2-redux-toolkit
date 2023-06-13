import { createSlice } from '@reduxjs/toolkit';

// import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = createSlice({
  name: 'user', //name of slice or action types
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) { //setCurrentUser: ()=>{} shorthand
      state.currentUser = action.payload; //instead of {..state, currrentUser:payload}
    },
  },
});

export const userReducerOld = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};
