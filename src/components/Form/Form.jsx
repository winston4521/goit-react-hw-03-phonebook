import React, { Component } from 'react';
import shortid from 'shortid';

import css from './Form.module.css';
const INITIAL_STATE = {
  name: '',
  number: '',
};

export class Form extends Component {
  state = { ...INITIAL_STATE };

  onValueHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onSubmitBtn = e => {
    e.preventDefault();

    const newContact = {
      id: shortid.generate(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.onAddingContacts(newContact);
    this.reset();
  };

  reset() {
    this.setState({ ...INITIAL_STATE });
  }

  render() {
    const { name, number } = this.state;
    return (
      <form className={css.form} onSubmit={this.onSubmitBtn}>
        <label className={css.form__label}>
          Name
          <input
            className={css.form__input}
            placeholder="Name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.onValueHandler}
          />
        </label>
        <label className={css.form__label}>
          Number
          <input
            className={css.form__input}
            placeholder="Phone number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.onValueHandler}
          />
        </label>
        <button className={css.form__button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
