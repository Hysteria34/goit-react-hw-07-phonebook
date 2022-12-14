import { useSelector } from 'react-redux';
import { useDeleteContactMutation } from '../../services/contactsAPI.js';
import { useFetchContactsQuery } from '../../services/contactsAPI.js';
import propTypes from 'prop-types';

import s from './ContactList.module.css';

export default function ContactsList(){
  const filterValue = useSelector(state => state.filter);

  const [deleteContact] = useDeleteContactMutation();

    const { data: contacts} = useFetchContactsQuery();
  return (
    <ul className={s.list}>
      {contacts &&
        contacts
          .filter(({ name }) => name.toLowerCase().includes(filterValue))
          .map(contact => (
            <li key={contact.id} className={s.item}>
              {contact.name}: {contact.phone}
              <button
                className={s.button}
                onClick={() => deleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
    </ul>
  );
}

ContactsList.propTypes = {
  contacts: propTypes.arrayOf(propTypes.objectOf(propTypes.string)),
};
