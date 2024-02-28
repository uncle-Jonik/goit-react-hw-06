import { useDispatch, useSelector } from 'react-redux';
import { changeValue } from '../../redux/filterSlise';
import { useId } from 'react';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const filterState = useSelector(state => state.filters.name);
  const lableFilter = useId();
  const dispatch = useDispatch();

  return (
    <div className={css.filterBox}>
      <label htmlFor={lableFilter}>Find contacts by name</label>
      <input
        id={lableFilter}
        value={filterState}
        onChange={e => {
          dispatch(changeValue(e.target.value));
        }}
      />
    </div>
  );
}
