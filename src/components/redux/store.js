import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlise';
import { contactsReducer } from './contactSlise';

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    contacts: contactsReducer,
  },
});

// const initialState = {
//   contacts: [
//     { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
//     { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
//     { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
//     { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filters: {
//     name: '',
//   },
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'filters/changeValue':
//       return {
//         ...state,
//         contacts: { ...state.contacts },
//         filters: { name: (state.filters.name = action.payload) },
//       };

//     default:
//       return state;
//   }
// };

// export const changeValue = value => {
//   return { type: 'filters/changeValue', payload: value };
// };

// export const store = createStore(rootReducer, devToolsEnhancer());
