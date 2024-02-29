import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: nanoid(), name: 'Rosie Simpson', number: '4591256' },
      { id: nanoid(), name: 'Hermione Kline', number: '4438912' },
      { id: nanoid(), name: 'Eden Clements', number: '6451779' },
      { id: nanoid(), name: 'Annie Copeland', number: '2279126' },
    ],
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    onRemove: (state, action) => {
      state.items = state.items.filter(user => user.id !== action.payload);
    },
  },
});

export const { addContact, onRemove } = contactsSlice.actions;

const contactsPersistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(contactsPersistConfig, contactsSlice.reducer);
