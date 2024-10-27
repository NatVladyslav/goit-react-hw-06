import './App.css';
import { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import contactsData from '../ContactsData.json';
import { nanoid } from 'nanoid';

function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? contactsData
  );
  const [filter, setFilter] = useState('');

  const addUser = ({ name, number }) => {
    setContacts(prevContacts => [
      ...prevContacts,
      {
        id: nanoid(),
        name,
        number,
      },
    ]);
  };

  const deleteUser = userId => {
    const updatedlist = contacts.filter(item => item.id !== userId);
    setContacts(updatedlist);
  };
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="mainTitle">Phonebook</h1>
      <ContactForm addUser={addUser} />
      <SearchBox filter={filter} onFilter={setFilter} />
      <ContactList contactsList={filteredList} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
