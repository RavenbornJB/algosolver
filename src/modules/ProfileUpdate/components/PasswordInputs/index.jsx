import React, { useState } from "react";
import { useSelector } from "react-redux";

import ErrorMessage from "../../../Common/components/ErrorMessage";
import SuccessMessage from "../../../Common/components/SuccessMessage";
import {selectUser} from "../../../redux/AuthReducer";
import AbstractInputs from "../../../Common/components/AbstractInputs";
import {BACKEND_URL} from "../../../constants";

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

    // const handleSubmit = (state) => {
    //   if (state.password !== state.passrep) {
    //     setError(<ErrorMessage>Passwords don't match </ErrorMessage>);
    //     setSuccess(<div />);
    //   } else {
    //     user.password = state.password;
    //     setSuccess(<SuccessMessage>Updated successfully!</SuccessMessage>);
    //     setError (<div />);
    //   }
    // };

    const handleSubmit = (state) => {
        if (state.password !== state.passrep) {
            setError(<ErrorMessage>Passwords don't match </ErrorMessage>);
            setSuccess(<div />);
            return;
        }

        let formData = new FormData();
        formData.append('email', user.email);
        formData.append('password', user.password);
        formData.append('new_password', state.password);
        formData.append('nick', user.nick);
        formData.append('country', user.country);
        formData.append('birthdate', user.birthdate);

        fetch(BACKEND_URL + "/update_user", {
            body: formData,
            method: "POST",
        }).then(response => response.json()).then(json => {
            if (json.success) {
                user.password = state.password;
                setSuccess(<SuccessMessage>Updated successfully!</SuccessMessage>);
                setError(<div />);
            } else {
                setError(<ErrorMessage>Invalid password</ErrorMessage>);
                setSuccess(<div />);
            }
        });
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
