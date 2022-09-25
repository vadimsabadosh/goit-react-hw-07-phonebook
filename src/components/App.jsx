import { useState } from 'react';
import { useGetAllContactsQuery } from 'redux/phonebook';
import ContactForm from './ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter';
import Loader from './Loader';

export default function App() {
  const { data, isFetching } = useGetAllContactsQuery();
  const [filter, setFilter] = useState('');

  function onFilterInput(e) {
    setFilter(e.target.value);
  }

  function filterContacts() {
    return data.filter(item => item.name.toLowerCase().includes(filter));
  }

  if (isFetching) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={data} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={onFilterInput} />
      {data && <ContactList contacts={filterContacts()} />}
    </div>
  );
}
