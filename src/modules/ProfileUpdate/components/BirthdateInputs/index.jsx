import React, { useState } from "react";
import { useSelector } from "react-redux";

import ErrorMessage from "../../../Common/components/ErrorMessage";
import SuccessMessage from "../../../Common/components/SuccessMessage";
import { selectUser } from "../../../stores/LoginStore";
import AbstractInputs from "../../../Common/components/AbstractInputs";

const BirthdateInputs = () => {
  const user = useSelector(selectUser);

  const fields = [
    {
      field_id: "birthdate",
      type: "date",
      text: "Update date of birth:",
    }
  ];

  let [error, setError] = useState(<div />);
  let [success, setSuccess] = useState(<div />);

  const handleSubmit = (state) => {
    if (state.birthdate === "") {
      setError(<ErrorMessage>Birthdate cannot be empty</ErrorMessage>);
      setSuccess(<div />);
    } else {
      user.birthdate = state.birthdate;
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

export default BirthdateInputs;
