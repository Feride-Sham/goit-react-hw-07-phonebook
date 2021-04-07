import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as contactsActions from "../../redux/contacts/contacts-actions";
import s from "./Filter.module.css";

const Filter = ({ filterValue, onToFilter }) => {
  return (
    <form className={s.container}>
      <label>
        Find contacts by name{" "}
        <input type="text" value={filterValue} onChange={onToFilter} />
      </label>
    </form>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onToFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filterValue: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onToFilter: (ev) => dispatch(contactsActions.changeFilter(ev.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
