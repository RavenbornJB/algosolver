import React from 'react';
import {useHistory} from "react-router-dom";

import {useDispatch, useSelector} from 'react-redux'


import AbstractForm from '../../../Common/components/AbstractForm'
import ErrorMessage from "../../../Common/components/ErrorMessage";

import {login, selectError} from "../../../redux/AuthReducer";

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

    const dispatch = useDispatch();

    const history = useHistory();

    const error = useSelector(selectError);

    const handleSubmit = (state) => dispatch(login(state.email, state.password, history));


    return (
        <div>
            <AbstractForm handleSubmit={handleSubmit} title="Log In" redirect_to="/problemlist" fields={fields_array}/>
            {error !== null? <ErrorMessage>{error}</ErrorMessage>: <div/>}
        </div>
    );
}





export default LoginForm;
