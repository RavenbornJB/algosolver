import React, { useState } from "react";
import { useSelector } from "react-redux";

import ErrorMessage from "../../../Common/components/ErrorMessage";
import SuccessMessage from "../../../Common/components/SuccessMessage";
import {selectUser} from "../../../redux/AuthReducer";
import AbstractInputs from "../../../Common/components/AbstractInputs";

import flags from "../../../constants/flags";
import {BACKEND_URL} from "../../../constants";

const CountryInputs = () => {
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
        if (!(state.country in flags)) {
            setError(<ErrorMessage>Country is not supported</ErrorMessage>);
            setSuccess(<div />);
            return;
        }

        let formData = new FormData();
        formData.append('email', user.email);
        formData.append('password', user.password);
        formData.append('new_password', user.password);
        formData.append('nick', user.nick);
        formData.append('country', state.country);
        formData.append('birthdate', user.birthdate);

        fetch(BACKEND_URL + "/update_user", {
            body: formData,
            method: "POST",
        }).then(response => response.json()).then(json => {
            if (json.success) {
                user.country = state.country;
                setSuccess(<SuccessMessage>Updated successfully!</SuccessMessage>);
                setError(<div />);
            } else {
                setError(<ErrorMessage>Invalid country</ErrorMessage>);
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

export default CountryInputs;
