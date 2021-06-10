import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";

import {selectUser, update} from "../../../redux/AuthReducer";
import AbstractInputs from "../../../Common/components/AbstractInputs";



const CountryInputs = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const fields = [
    {
      field_id: "country",
      type: "country",
      text: "New country:",
      placeholder: user.country
    }
  ];

  let [error, setError] = useState(<div />);
  let [success, setSuccess] = useState(<div />);

    const handleSubmit = (state) => {
        dispatch(update(2, state, setError, setSuccess));
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
