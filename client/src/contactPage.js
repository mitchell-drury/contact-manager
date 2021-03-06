import './App.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadContacts } from './contactsSlice';
import NewContact from './newContact.js';
import ContactList from './contactList.js';
import SearchContacts from './SearchContacts';

function ContactPage() {
  const dispatch = useDispatch();
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch('/api/contacts/', {
      method: 'GET'
    })
    .then((res) => res.json())
    .then((data) => { dispatch(loadContacts(data)); console.log('contacts fetched: ', data)})
  });

  return (
    <div className="contactPage">
      <section id='searchAddGroup'>
        <div id='addContact'>
          <h1>Add New Contact</h1>
          <NewContact contacts={contacts} setContacts={setContacts}/>
        </div>
        <div id='searchContact'>
          <h1>Search Contacts</h1>
          <SearchContacts contacts={contacts} setContacts={setContacts}/>
        </div>
      </section>
      <section>
        <h1>Contact List</h1>
        <ContactList contacts={contacts}/>
      </section>
    </div>
  );
}

export default ContactPage;
