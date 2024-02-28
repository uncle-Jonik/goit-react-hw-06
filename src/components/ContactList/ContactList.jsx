import { useDispatch, useSelector } from 'react-redux';
import { onRemove } from '../redux/contactSlise';

export default function ContactList() {
  const contactsState = useSelector(state => state.contacts.items);
  const filterState = useSelector(state => state.filters.name);

  const visibleUsers = contactsState.filter(user =>
    user.name.toLowerCase().includes(filterState.toLowerCase())
  );
  const dispatch = useDispatch();

  console.log(contactsState);
  return (
    <div>
      <ul>
        {visibleUsers.length !== 0 ? (
          visibleUsers.map(({ id, name, number }) => (
            <li key={id}>
              <p>{name}</p>
              <p>{number}</p>
              <button
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
          <p>Nothing:(</p>
        )}
      </ul>
    </div>
  );
}
