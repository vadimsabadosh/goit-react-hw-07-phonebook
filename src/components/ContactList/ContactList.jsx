import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem/ContactListItem';
export default function ContactList({ contacts }) {
  if (!contacts.length) return null;

  return (
    <ul>
      {contacts.map(({ id, phone, name }) => (
        <ContactListItem key={id} id={id} phone={phone} name={name} />
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
