import  Form  from 'components/ContactsForm/ContactsForm';
import { List }  from 'components/ContactList/ContactList';
import Filter from 'components/Filter';
import css from './Contacts.module.css';

export default function Contacts() {
  return (
    <div className={css.container}>
      <Form />
      <Filter />
      <List />
    </div>
  );
}
