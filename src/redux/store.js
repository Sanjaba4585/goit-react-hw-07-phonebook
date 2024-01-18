import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './FilterSlice';
import { contactsReducer } from './ContactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
