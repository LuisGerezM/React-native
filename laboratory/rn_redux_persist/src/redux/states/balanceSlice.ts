import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const balanceSlice = createSlice({
  name: 'balance', 
  initialState: initialState,
  reducers: {
    deposit: (state, action) => {
      state.value += action.payload;
    },
    withdraw: (state, action) => {
      state.value === 0 ? state.value : (state.value -= action.payload);
    },
    reset: (state, action) => {
      state.value = initialState.value;
    },
  },
});

export const {deposit, withdraw, reset} = balanceSlice.actions;

export default balanceSlice.reducer;
