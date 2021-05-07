import React from 'react';
import styles from './styles.css';
import AbstractForm from '../AbstractForm'

class RegisterForm extends React.Component {
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
        },
        {
            field_id: "repeat_password",
            type: "password",
            text: "Repeat password:"
        },
        {
            field_id: "country",
            type: "country",
            text: "Country:"
        },
        {
            field_id: "birthdate",
            type: "date",
            text: "Birthdate:"
        }

    ]
    render() {
        return <AbstractForm redirect_to="/problemlist" fields={RegisterForm.fields_array}/>;
    }
}


export default RegisterForm;
