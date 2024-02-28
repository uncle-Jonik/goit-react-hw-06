import { useDispatch, useSelector } from 'react-redux';
import { onRemove } from '../../redux/contactSlise';
import css from './ContactList.module.css';

import { CiUser } from 'react-icons/ci';
import { CiPhone } from 'react-icons/ci';

export default function ContactList() {
  const contactsState = useSelector(state => state.contacts.items);
  const filterState = useSelector(state => state.filters.name);

  const visibleUsers = contactsState.filter(user =>
    user.name.toLowerCase().includes(filterState.toLowerCase())
  );
  const dispatch = useDispatch();

  return (
    <div className={css.contactListBox}>
      <ul className={css.contactList}>
        {visibleUsers.length !== 0 ? (
          visibleUsers.map(({ id, name, number }) => (
            <li key={id}>
              <div className={css.information}>
                <CiUser />
                <p>{name}</p>
              </div>
              <div className={css.information}>
                <CiPhone />
                <p>{number}</p>
              </div>

              <button
                className={css.delBtn}
                id={id}
                onClick={e => {
                  dispatch(onRemove(e.target.id));
                }}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <h2>Nothing:(</h2>
        )}
      </ul>
    </div>
  );
}
