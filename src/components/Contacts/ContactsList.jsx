import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './Contacts.module.css';
import { deleteContactsThunk, getContactsThunk } from '../../redux/thunk';

export const Contactslist = () => {
  const isLoading = useSelector(state => state.contacts.isLoading);
  const contacts = useSelector(state => state.contacts.items);
  console.log(contacts);
  const filter1 = useSelector(state => state.filter);
  console.log(filter1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const dellContact = id => {
    dispatch(deleteContactsThunk(id));
  };

  const getFilterContact = (contacts, filter1) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter1.filter)
    );
  };

  const filterContact = getFilterContact(contacts, filter1);
  return (
    <ul className={css.list}>
      {isLoading && <p>Loading...</p>}
      {filterContact.map(contact => (
        <li className={css.item} key={contact.id}>
          <p className={css.text}>
            {contact.name}: {contact.number}
          </p>
          <button
            className={css.btnDell}
            type="button"
            onClick={() => dellContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
