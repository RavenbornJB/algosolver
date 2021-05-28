import React, { useState } from "react";
import { useSelector } from "react-redux";

import ErrorMessage from "../../../Common/components/ErrorMessage";
import SuccessMessage from "../../../Common/components/SuccessMessage";
import { selectUser } from "../../../stores/LoginStore";
import AbstractInputs from "../../../Common/components/AbstractInputs";

const PasswordInputs = () => {
  const user = useSelector(selectUser);

  const fields = [
    {
      field_id: "password",
      type: "password",
      text: "New password:"
    },
    {
      field_id: "passrep",
      type: "password",
      text: "Repeat your new password:",
    }
  ];

  let [error, setError] = useState(<div />);
  let [success, setSuccess] = useState(<div />);

  const handleSubmit = (state) => {
    if (state.password !== state.passrep) {
      setError(<ErrorMessage>Passwords don't match </ErrorMessage>);
      setSuccess(<div />);
    } else {
      user.password = state.password;
      setSuccess(<SuccessMessage>Updated successfully!</SuccessMessage>);
      setError (<div />);
    }
  };

  return (
    <div>
      <AbstractInputs handleSubmit={handleSubmit} fields={fields} />
      {success}
      {error}
    </div>
  );
};

export default PasswordInputs;
