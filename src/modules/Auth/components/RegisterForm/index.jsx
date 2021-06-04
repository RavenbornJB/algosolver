import React, {useState} from 'react';
import AbstractForm from '../../../Common/components/AbstractForm'
import {useHistory} from "react-router-dom";

import ACCOUNTS, {User} from "../../scripts/auth";
import ErrorMessage from "../../../Common/components/ErrorMessage";

const RegisterForm = () => {
    const fields_array = [
        {
            field_id: "email",
            type: "email",
            text: "Email:",
            placeholder: "Your email"
        },
        {
            field_id: "nick",
            type: "text",
            text: "Username:",
            placeholder: "Your username"
        },
        {
            field_id: "password",
            type: "password",
            text: "Password:",
            placeholder: "Your password"
        },
        {
            field_id: "passrep",
            type: "password",
            text: "Repeat password:",
            placeholder: "Repeat your password"
        },
        {
            field_id: "country",
            type: "country",
            text: "Country:",
            placeholder: "Your country"
        },
        {
            field_id: "birthdate",
            type: "date",
            text: "Birthdate:"
        }

    ];

    let [error, setError] = useState(<div/>);

    let history = useHistory();


    const handleSubmit = (state) => {
        if (state.password !== state.passrep) {
            setError(<ErrorMessage>Passwords are not the same </ErrorMessage>)
            return;
        }

        if (state.password.length < 4) {
            setError(<ErrorMessage>Password length must be at least 4 </ErrorMessage>)
            return;
        }

        let formData = new FormData();
        formData.append('email', state.email);
        formData.append('password', state.password);
        formData.append('nick', state.nick);
        formData.append('country', state.country);
        formData.append('birthdate', state.birthdate);

        fetch("http://127.0.0.1:5000/register", {
            body: formData,
            method: "POST",
        }).then(response => response.json()).then(json => {
            if (json.success) {
                history.push("/login");
            }
            else {
                setError(<ErrorMessage>User with given email already exists </ErrorMessage>)
            }
        });

    }



    return (
        <div>
            <AbstractForm handleSubmit={handleSubmit} title="Register" redirect_to="/login" fields={fields_array}/>
            {error}
        </div>);
}


export default RegisterForm;
