import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

import AbstractForm from '../../common/AbstractForm'
import ACCOUNTS from "../../../scripts/users/auth";
import ErrorMessage from "../../common/ErrorMessage";

const LoginForm = (props) => {
    const fields_array = {
        "email": {
            field_id: "email",
            type: "email",
            text: "Email",
            placeholder: "Your email"
        },
        "password": {
            field_id: "password",
            type: "password",
            text: "Password",
            placeholder: "Your password"
        }
    }

    const [error, setError] = useState(<div/>);

    let history = useHistory();

    const handleSubmit = (state) => {
        if (!ACCOUNTS.has(state.email) || ACCOUNTS.get(state.email).password !== state.password ) {
            setError(<ErrorMessage>Wrong email or password</ErrorMessage>)
            return;
        }
        history.push("/problemlist");
        return true;
    }

    return (
        <div>
            <AbstractForm handleSubmit={handleSubmit} title="Log In" redirect_to="/problemlist" fields={fields_array}/>
            {error}
        </div>
    );
}





export default LoginForm;
