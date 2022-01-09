import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: []
    },
    reducers: {
        addContact: (state, action) => {
            let i = 0;
            do{
                if (state.contacts.length === 0) {
                    state.contacts = [action.payload];
                    break;
                }
                if (state.contacts[i].lastName.localeCompare(action.payload.lastName, 'en') > 0) {
                    state.contacts.splice(i, 0, action.payload);
                    break;
                }
                if(i === state.contacts.length-1) {
                    state.contacts.push(action.payload);
                    break;                
                }
                i++;
            } while(i < state.contacts.length);
        },
        updateContact: (state, action) => {
            //update the contact
            state.contacts[action.payload.index] = action.payload.contact;
            
            //remove the edited contact from the list
            let updated = state.contacts.splice(action.payload.index, 1)[0];
            let i = 0;
            //insert the edited contact back in to the list in alphabetic order
            do{
                //because contact was removed, it's possible contact list is length 0 now
                if(state.contacts.length === 0) {
                    state.contacts.push(updated);
                    break;                
                }                
                if (state.contacts[i].lastName.localeCompare(updated.lastName, 'en') > 0) {
                    state.contacts.splice(i, 0, updated);
                    break;
                }
                //important to have this check after the local compare
                if(i === state.contacts.length-1) {
                    state.contacts.push(updated);
                    break;                
                } 
                i++;
            } while(i < state.contacts.length);           
        },
        searchContacts: (state, action) => {
            state.contacts.forEach(contact => {
                if (contact.firstName.toUpperCase().indexOf(action.payload.toUpperCase()) < 0 && contact.lastName.toUpperCase().indexOf(action.payload.toUpperCase()) < 0) {
                    contact.hidden = true
                } else {
                    contact.hidden = false;
                }                
            })
        },
        loadContacts: (state, action) => {
            state.contacts = action.payload;
        }
    }
});

export const { addContact, updateContact, searchContacts, loadContacts } = contactsSlice.actions;
export default contactsSlice.reducer;