import React, { useState } from "react";
import { useSelector } from "react-redux";

import ErrorMessage from "../../../Common/components/ErrorMessage";
import SuccessMessage from "../../../Common/components/SuccessMessage";
import {selectUser} from "../../../redux/AuthReducer";
import AbstractInputs from "../../../Common/components/AbstractInputs";

const CountryInputs = () => {
  const user = useSelector(selectUser);

  const fields = [
    {
      field_id: "country",
      type: "country",
      text: "Update country",
      placeholder: user.country
    }
  ];

  let [error, setError] = useState(<div />);
  let [success, setSuccess] = useState(<div />);

  const handleSubmit = (state) => {
    if (state.country === "") {
      setError(<ErrorMessage>Country cannot be empty</ErrorMessage>);
      setSuccess(<div />);
    } else {
      user.country = state.country;
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

export default CountryInputs;
