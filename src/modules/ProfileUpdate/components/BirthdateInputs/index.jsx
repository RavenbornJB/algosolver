import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";

import {selectUser, update} from "../../../redux/AuthReducer";
import AbstractInputs from "../../../Common/components/AbstractInputs";


const BirthdateInputs = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const fields = [
    {
      field_id: "birthdate",
      type: "date",
      text: "New date of birth:",
    }
  ];

  let [error, setError] = useState(<div />);
  let [success, setSuccess] = useState(<div />);

    const handleSubmit = (state) => {
        dispatch(update(3, state, setError, setSuccess));
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
