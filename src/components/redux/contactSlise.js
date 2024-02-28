import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    onAdd: (state, action) => {
      state.items.push(action.payload);
    },
    onRemove: (state, action) => {
      return state.items.filter(user => user.id !== action.payload);
    },
  },
});

export const { onAdd, onRemove } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
