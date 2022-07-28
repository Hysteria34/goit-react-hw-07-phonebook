import Container from './components/Container'
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList/';
import Filter from './components/Filter';
import Loader from './components/Loader';

import s from './App.module.css'

export default function App() {

  return (
    <Container><h1 className={s.title}>Phonebook</h1>
    <ContactForm/>

    <h2 className={s.title}>Contacts</h2>
    <Filter />
    <Loader />
    <ContactList/></Container>
  );
}
