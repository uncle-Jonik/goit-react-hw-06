import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const inputValuePersistConfig = {
  key: 'inputValue',
  storage,
};

export const filterReducer = persistReducer(inputValuePersistConfig, filterSlice.reducer);
