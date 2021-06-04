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
            nick: "nick",
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

    const verifyEmail = async (email) => false;

    const addAccount = async (email, nick, password, country, birthdate) => {
        ACCOUNTS.set(email, {email, nick, password, country, birthdate});
    }

    const handleSubmit = (state) => {
        if (state.password !== state.passrep) {
            setError(<ErrorMessage>Passwords are not the same </ErrorMessage>)
            return;
        }
        verifyEmail(state.email).then(async response => {
            if (response) {
                await addAccount(state.email, state.nick, state.password, state.country, state.birthdate);
                history.replace("/login");
            } else {
                setError(<ErrorMessage>Email is already registered </ErrorMessage>)
            }
        })
    }


    return (
        <div>
            <AbstractForm handleSubmit={handleSubmit} title="Register" redirect_to="/login" fields={fields_array}/>
            {error}
        </div>);
}


export default RegisterForm;
