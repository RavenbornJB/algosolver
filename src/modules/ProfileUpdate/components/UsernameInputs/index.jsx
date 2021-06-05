import React, { useState } from "react";
import { useSelector } from "react-redux";

import ErrorMessage from "../../../Common/components/ErrorMessage";
import SuccessMessage from "../../../Common/components/SuccessMessage";
import {selectUser} from "../../../redux/AuthReducer";
import AbstractInputs from "../../../Common/components/AbstractInputs";
import {BACKEND_URL} from "../../../constants";

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
        let formData = new FormData();
        formData.append('email', user.email);
        formData.append('password', user.password);
        formData.append('new_password', user.password);
        formData.append('nick', state.nick);
        formData.append('country', user.country);
        formData.append('birthdate', user.birthdate);

        fetch(BACKEND_URL + "/update_user", {
            body: formData,
            method: "POST",
        }).then(response => response.json()).then(json => {
            if (json.success) {
                user.nick = state.nick;
                setSuccess(<SuccessMessage>Updated successfully!</SuccessMessage>);
                setError(<div />);
            } else {
                setError(<ErrorMessage>Invalid username</ErrorMessage>);
                setSuccess(<div />);
            }
        });
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
