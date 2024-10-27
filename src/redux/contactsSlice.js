import { createSlice } from '@reduxjs/toolkit';
import contactData from '../../ContactsData.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: contactData },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const selectContacts = state => state.contacts.items;
