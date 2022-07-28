import { useFetchContactsQuery } from './services/contactsAPI';

import Container from './components/Container'
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList/';
import Filter from './components/Filter';
import Loader from './components/Loader';

import s from './App.module.css'

export default function App() {
  const { data: contacts, isFetching} = useFetchContactsQuery();

  return (
    <Container><h1 className={s.title}>Phonebook</h1>
    <ContactForm contacts={contacts} />

    <h2 className={s.title}>Contacts</h2>
    <Filter />
    {isFetching && <Loader />}
    <ContactList contacts={contacts} /></Container>
  );
}
