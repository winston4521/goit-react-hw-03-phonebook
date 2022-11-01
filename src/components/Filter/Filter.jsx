import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filteredContent, onFilterHandler }) => {
  return (
    <>
      <label className={css.filter__label}>
        Find contacts by name
        <input
          className={css.filter__input}
          type="text"
          name="search"
          value={filteredContent}
          onChange={onFilterHandler}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  filteredContent: PropTypes.string.isRequired,
  onFilterHandler: PropTypes.func.isRequired,
};
