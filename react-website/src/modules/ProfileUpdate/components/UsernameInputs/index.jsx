import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";

import {selectUser, update} from "../../../redux/AuthReducer";
import AbstractInputs from "../../../Common/components/AbstractInputs";


const UsernameInputs = () => {
    const dispatch = useDispatch();
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
        dispatch(update(1, state, setError, setSuccess));
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
