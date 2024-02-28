import { useDispatch, useSelector } from 'react-redux';
import { changeValue } from '../redux/filterSlise';

export default function SearchBox() {
  const filterState = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        value={filterState}
        onChange={e => {
          dispatch(changeValue(e.target.value));
        }}
      />
    </div>
  );
}
