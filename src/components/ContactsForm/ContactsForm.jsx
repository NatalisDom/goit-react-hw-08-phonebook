import { useState, useEffect } from 'react';
import css from './ContactsForm.module.css';
import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
// import { addContact, fetchContacts } from 'redux/contacts/operations';
import { addContact, fetchContacts } from 'redux/contacts/contacts-operations';

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

let userSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Za-z]+$/, 'Name should not contain numbers')
    .required(),
  number: yup.number('Number should not contains letters').required(),
});

function Form() {
  const [dataForm, setDataForm] = useState({
    name: '',
    number: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(userSchema),
  });

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const nameChange = event => {
    const { name, value } = event.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const onSubmit = async event => {
    event.preventDefault();

    const isValid = await userSchema.isValid(dataForm);

    if (isValid) {
      for (const contact of contacts) {
        if (
          dataForm.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()
        ) {
          return Notify.failure(`${dataForm.name} is already in contacts.`);
        }
      }

      dispatch(addContact(dataForm));
      reset();
      Notify.success('Сontact added successfully');
    } else {
      return Notify.failure('Please enter correct data');
    }
  };

  const reset = () => {
    setDataForm({
      name: '',
      number: '',
    });
  };

  const errorMessageName =
    !!errors?.name?.message && 'Name should not contain numbers';
  const errorMessageNumber =
    !!errors?.number?.message && 'Number should not contains letters';

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
      onSubmit={e => handleSubmit(onSubmit(e))}
      className={css.form}
    >
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        required
        {...register('name')}
        value={dataForm.name}
        onChange={nameChange}
        error={!!errors?.name?.message}
        helperText={errorMessageName}
      />
      <TextField
        id="outlined-basic"
        label="Phone"
        variant="outlined"
        type="tel"
        name="number"
        required
        {...register('number')}
        value={dataForm.number}
        onChange={nameChange}
        error={!!errors?.number?.message}
        helperText={errorMessageNumber}
      />
      <button type="submit" className={css.btn}>
        Add Contact
      </button>
    </Box>
  );
}

export default Form;
