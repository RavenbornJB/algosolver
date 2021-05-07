import React from 'react';
import styles from './styles.css';
import AbstractForm from '../AbstractForm'

class LoginForm extends React.Component {
    static fields_array = [
        {
            field_id: "email",
            type: "email",
            text: "Email:"
        },
        {
            field_id: "password",
            type: "password",
            text: "Password:"
        }
    ]
    render() {
        return <AbstractForm redirect_to="/problemlist" fields={LoginForm.fields_array}/>;
    }
}


export default LoginForm;
