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
            text: "Email",
            placeholder: "Your email"
        },
        {
            field_id: "password",
            type: "password",
            text: "Password",
            placeholder: "Your password"
        },
        {
            field_id: "passrep",
            type: "password",
            text: "Repeat password",
            placeholder: "Repeat your password"
        },
        {
            field_id: "country",
            type: "country",
            text: "Country",
            placeholder: "Your country"
        },
        {
            field_id: "birthdate",
            type: "date",
            text: "Birthdate"
        }

    ];

    let [error, setError] = useState(<div/>);

    let history = useHistory();

    const handleSubmit = (state) => {
        if (ACCOUNTS.has(state.email)) {
            setError(<ErrorMessage>This account already exists</ErrorMessage>)
            return;
        } else if (state.password !== state.passrep) {
            setError(<ErrorMessage>Password are not the same </ErrorMessage>)
            return;
        }
        ACCOUNTS.set(state.email, new User(state.email, state.password, state.country, state.birthdate))
        history.replace("/login");
    }


    return (
        <div>
            <AbstractForm handleSubmit={handleSubmit} title="Log In" redirect_to="/problemlist" fields={fields_array}/>
            {error}
        </div>);
}


export default RegisterForm;
