import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import Contact from './Contact/Contact';

export default function ContactList() {
  const contactsState = useSelector(state => state.contacts.items);
  const filterState = useSelector(state => state.filters.name);

  const visibleUsers = contactsState.filter(user =>
    user.name.toLowerCase().includes(filterState.toLowerCase())
  );

  return (
    <div className={css.contactListBox}>
      <ul className={css.contactList}>
        {visibleUsers.length !== 0 ? (
          visibleUsers.map(({ id, name, number }) => (
            <li key={id}>
              <Contact id={id} name={name} number={number} />
            </li>
          ))
        ) : (
          <h2>Nothing:(</h2>
        )}
      </ul>
    </div>
  );
}
