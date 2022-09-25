import { PropTypes } from 'prop-types';
import React from 'react';
import { useDeleteItemMutation } from 'redux/phonebook';

function ContactListItem({ phone, name, id }) {
  const [deleteItem] = useDeleteItemMutation();

  return (
    <li>
      {name}: {phone} <button onClick={() => deleteItem(id)}>Delete</button>
    </li>
  );
}

export default ContactListItem;

ContactListItem.propTypes = {
  phone: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
