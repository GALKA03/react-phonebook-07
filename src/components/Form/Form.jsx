import { useState } from 'react';
import { FormStyled, InputStyle, Btn } from './Form.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelector';
import { addContact } from 'redux/contacts/contacts-operations';
import Notiflix from 'notiflix';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handelChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const contactsObj = (name, number) => {
    return { name, number, id: nanoid() };
  };

  const hendleFormSubmit = e => {
    e.preventDefault();
    const findContact = contacts.find(contact =>
      contact.name.toLowerCase().includes(contactsObj.name.toLowerCase())
    );
    if (!contactsObj) {
      Notiflix.Notify.warning('Please enter all fields!');
      return 
    }
    if (contacts.find(contact => contact.name === name)) {
    Notiflix.Notify.failure(`${name} is already in contacts`);
      return;
    }
    else {
      dispatch(addContact({ name, number }));
    }
    console.log('findContact', findContact);
    // findContact
    //   ? Notiflix.Notify.failure(`${contactsObj.name} is already in contact`)
    //   : dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <FormStyled onSubmit={hendleFormSubmit}>
      <label>
        Name
        <InputStyle
          value={name}
          onChange={handelChange}
          type="text"
          name="name"
          placeholder="Name Surname"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <InputStyle
          placeholder="+39000000000"
          value={number}
          onChange={handelChange}
          type="number"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Btn type="submit">Add to contact</Btn>
    </FormStyled>
  );
}
