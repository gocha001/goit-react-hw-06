import css from "./Contact.module.css";
import { RiUser3Fill } from "react-icons/ri";
import { PiPhoneFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice.js";
import { deleteContact } from "../../redux/contactsSlice.js";

const Contact = ({ id, name, number }) => {
  const filter = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  return (
    <>
      {(!filter || name.toLowerCase().includes(filter.toLowerCase())) && (
        <div className={css.container}>
          <div className={css.contact}>
            <div className={css.item}>
              <RiUser3Fill className={css.icon} size="24" />
              <p>{name}</p>
            </div>
            <div className={css.item}>
              <PiPhoneFill className={css.icon} size="24" />
              <p>{number}</p>
            </div>
          </div>
          <button
            onClick={() => dispatch(deleteContact(id))}
            className={css.btn}
          >
            Delete
          </button>
        </div>
      )}
    </>
  );
};

export default Contact;
