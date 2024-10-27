import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import { useSelector } from 'react-redux';
import Message from '../Message/Message';
const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (!contacts.length) return <Message title={'No contacts yet'} />;

  if (!filteredContacts.length)
    return <Message title={'Contacts are not found'} />;
  return (
    <>
      <h2 className={css.title}>Contact list</h2>
      <div className={css.contactList}>
        {filteredContacts.map(item => {
          return (
            <Contact
              key={item.id}
              id={item.id}
              name={item.name}
              number={item.number}
            />
          );
        })}
      </div>
    </>
  );
};

export default ContactList;
