import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
    contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: (state, { payload }) => {
            state.contacts.unshift(payload);
        },
        deleteContact: (state, {payload}) => {
            state.contacts = state.contacts.filter(({id}) => id !== payload)
        },
        filterReduser: (state, {payload}) => {
          state.filter = payload;
    },
    },
});

export const { addContact, deleteContact, filterReduser } = contactsSlice.actions;
export default contactsSlice.reducer;
