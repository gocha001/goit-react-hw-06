import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <label>Find contacts by name</label>
      <input
        type="text"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
