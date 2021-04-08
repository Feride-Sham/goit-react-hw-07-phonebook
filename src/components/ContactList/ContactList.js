import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsOperations from "../../redux/contacts/contacts-operations";

import s from "./ContactList.module.css";

class ContactList extends Component {
  static propTypes = {
    contactList: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contactList, onDeleteContact } = this.props;
    return (
      <ul>
        {contactList.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            <p>{name}: </p> <p>{number}</p>
            <button
              className={s.btn}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

//функция фильтрации контактов
const filterContacts = (contacts, filter) => {
  const normFilter = filter.toLowerCase();
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normFilter)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contactList: filterContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(contactsOperations.deleteContact(id)),
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
