import React, { useState } from "react";
import { useSelector } from "react-redux";

import ACCOUNTS, {User} from "../../../Auth/scripts/auth";
import ErrorMessage from "../../../Common/components/ErrorMessage";
import SuccessMessage from "../../../Common/components/SuccessMessage";
import {selectUser} from "../../../redux/AuthReducer";
import AbstractInputs from "../../../Common/components/AbstractInputs";

const EmailInputs = () => {
  const user = useSelector(selectUser);

  const fields = [
    {
      field_id: "email",
      type: "email",
      text: "New email:",
      placeholder: user.email,
    },
  ];

  let [error, setError] = useState(<div />);
  let [success, setSuccess] = useState(<div />);

  const handleSubmit = (state) => {
    if (state.email === "") {
      setError(<ErrorMessage>Email cannot be empty</ErrorMessage>);
      setSuccess(<div />);
    } else {
      ACCOUNTS.delete(user.email);
      ACCOUNTS.set(
        state.email,
        new User(state.email, user.nick, user.password, user.country, user.birthdate)
      );
      user.email = state.email;
      setSuccess(<SuccessMessage>Updated successfully!</SuccessMessage>);
      setError(<div />);
    }
  };

  return (
    <div>
      <AbstractInputs handleSubmit={handleSubmit} fields={fields} />
      {error}
      {success}
    </div>
  );
};

export default EmailInputs;
