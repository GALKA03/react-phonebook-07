import {
  fetchContacts,
  deleteContact,
  addContact,
} from './contacts-operations';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const contactsSlise = createSlice({
  name: 'contacts',
  initialState: { contacts: [], isLoading: false, error: null },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(({ id }) => id !== payload);
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts = [...state.contacts, payload];
      })
  .addMatcher(
      isAnyOf(fetchContacts.pending,
          deleteContact.pending,
          addContact.pending),
    state => {
      state.isLoading = true;
    }
      )
            .addMatcher(
    isAnyOf(
      fetchContacts.fulfilled,
      deleteContact.fulfilled,
      addContact.fulfilled
    ),
    state => {
      state.isLoading = false;
      state.error = null;
    }
  )
  .addMatcher(
    isAnyOf(
      fetchContacts.rejected,
      deleteContact.rejected,
      addContact.rejected
    ),
    (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    }
  )
});
//export const { addContacts, deleteContacts } = contactsSlice.actions;
export default contactsSlise.reducer;