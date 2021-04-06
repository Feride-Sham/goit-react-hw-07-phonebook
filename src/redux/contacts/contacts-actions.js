import { v4 as id } from "uuid";
import { createAction } from "@reduxjs/toolkit";
// import types from "./contacts-types";
id();

//  ****after
const addContact = createAction("contacts/add", ({ name, number }) => ({
  payload: {
    id: id(),
    name,
    number,
  },
}));

const deleteContact = createAction("contacts/delete");

const changeFilter = createAction("contacts/cangeFilter");

//  ****before
// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id: id(),
//     name,
//     number,
//   },
// });

// const deleteContact = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

export default { addContact, deleteContact, changeFilter };
