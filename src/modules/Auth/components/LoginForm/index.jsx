import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

import AbstractForm from '../../../Common/components/AbstractForm'
import ACCOUNTS from "../../scripts/auth";
import ErrorMessage from "../../../Common/components/ErrorMessage";

const LoginForm = (props) => {
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
        }
    ];

    const [error, setError] = useState(<div/>);

    let history = useHistory();

    const handleSubmit = (state) => {
        if (!ACCOUNTS.has(state.email) || ACCOUNTS.get(state.email).password !== state.password ) {
            setError(<ErrorMessage>Wrong email or password</ErrorMessage>)
            return;
        }
        history.replace("/problemlist");
    }

    return (
        <div>
            <AbstractForm handleSubmit={handleSubmit} title="Log In" redirect_to="/problemlist" fields={fields_array}/>
            {error}
        </div>
    );
}





export default LoginForm;
