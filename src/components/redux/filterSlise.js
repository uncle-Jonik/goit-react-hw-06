import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: { name: '' },
  reducers: {
    changeValue: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
