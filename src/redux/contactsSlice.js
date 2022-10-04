import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://633c22e374afaef16402b157.mockapi.io/api/v1/',
  }),
  tagTypes: ['contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    createContact: builder.mutation({
      query: contact => ({
        url: '/contacts',
        method: 'POST',
            body: contact
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = contactsApi;


// import { createSlice } from '@reduxjs/toolkit';

// const contactsInitialState = {
//   items: [  
//             { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//             { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//             { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//             { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
//         ],
//     isLoading: false,
//     error: null,
  
//   filter: ""
// };
//     // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    


// const contactsSlice = createSlice({
//     name: 'contacts',
//     initialState: contactsInitialState,
//     reducers: {
//         addContact: (state, { payload }) => {
//             state.items.unshift(payload);
//         },
//         deleteContact: (state, {payload}) => {
//             state.items = state.items.filter(({id}) => id !== payload)
//         },
//         filterReduser: (state, {payload}) => {
//           state.filter = payload;
//     },
//     },
// });

// export const { addContact, deleteContact, filterReduser } = contactsSlice.actions;
// export default contactsSlice.reducer;
