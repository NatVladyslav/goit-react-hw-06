import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(selectNameFilter);

  const onChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };
  return (
    <div className={css.searchBoxDiv}>
      <label htmlFor="searchBox">Find contacts by name</label>
      <input
        className={css.searchInput}
        value={filterName}
        onChange={onChange}
        type="text"
        id="searchBox"
      />
    </div>
  );
};

export default SearchBox;
