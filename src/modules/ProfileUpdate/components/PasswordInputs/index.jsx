import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";

import {selectUser, update} from "../../../redux/AuthReducer";
import AbstractInputs from "../../../Common/components/AbstractInputs";


const PasswordInputs = () => {
    const dispatch = useDispatch();
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
        dispatch(update(0, state, setError, setSuccess));
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
