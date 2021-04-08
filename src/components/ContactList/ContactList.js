import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsOperations from "../../redux/contacts/contacts-operations";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

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
    const { contactList, onDeleteContact, isLaodingContacts } = this.props;
    return (
      <>
        {isLaodingContacts && <h1>Загружаем..</h1>}
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
      </>
    );
  }
}

const { getIsLoading, getFilteredContacts } = contactsSelectors;

const mapStateToProps = (state) => ({
  isLaodingContacts: getIsLoading(state),
  contactList: getFilteredContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(contactsOperations.deleteContact(id)),
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
