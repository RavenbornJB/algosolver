import React, { useState } from "react";
import { useSelector } from "react-redux";

import ErrorMessage from "../../../Common/components/ErrorMessage";
import SuccessMessage from "../../../Common/components/SuccessMessage";
import {selectUser} from "../../../redux/AuthReducer";
import AbstractInputs from "../../../Common/components/AbstractInputs";

const UsernameInputs = () => {
  const user = useSelector(selectUser);

  const fields = [
    {
      field_id: "nick",
      type: "text",
      text: "New username:",
      placeholder: user.nick
    }
  ];

  let [error, setError] = useState(<div />);
  let [success, setSuccess] = useState(<div />);

  const handleSubmit = (state) => {
    if (state.nick === "") {
      setError(<ErrorMessage>Username cannot be empty</ErrorMessage>);
      setSuccess(<div />);
    } else {
      user.nick = state.nick;
      setSuccess(<SuccessMessage>Updated successfully!</SuccessMessage>);
      setError(<div />);
    }
  };

  return (
    <div>
      <AbstractInputs
        handleSubmit={handleSubmit}
        fields={fields}
      />
      {error}
      {success}
    </div>
  );
};

export default UsernameInputs;
