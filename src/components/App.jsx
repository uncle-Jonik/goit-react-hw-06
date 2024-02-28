import { useDispatch, useSelector } from 'react-redux';
import { changeValue } from './redux/filterSlise';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';

export const App = () => {
  const contactsState = useSelector(state => state.contacts);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
};
