import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = () => {
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));

  const getContactList = state => {
    const { filter, items } = state.contacts;
    const normalizedFilter = filter.toLowerCase();

    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  const contacts = useSelector(getContactList);

  return (
    <table className={s.table}>
      <tbody>
        {contacts.map(({ name, number, id }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{number}</td>
            <td>
              <button type="button" onClick={() => onDeleteContact(id)}>
                del
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
export default ContactList;
