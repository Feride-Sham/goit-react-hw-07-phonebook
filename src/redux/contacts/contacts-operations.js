import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
} from "./contacts-actions";

axios.defaults.baseURL = "http://localhost:4040";

const addContact = ({ name, number }) => (dispatch) => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());
  console.log(contact);
  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => {
      console.log(error);
      dispatch(addContactError(error));
    });
};

export default { addContact };
