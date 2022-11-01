import React from 'react';
import PropTypes from 'prop-types';
import css from './Contacts.module.css';

export const Contacts = ({ contacts, filteredContent, handleDelete }) => {
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filteredContent.toLowerCase())
  );
  return (
    <ul className={css.delete__list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.delete__item} key={id}>
          <span className={css.delete__userName}>
            {name} : {number}
          </span>

          <>
            <button
              className={css.delete__btn}
              type="button"
              onClick={() => handleDelete(id)}
            ></button>
          </>
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  filteredContent: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
