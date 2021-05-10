import React from 'react';
import AbstractForm from '../../common/AbstractForm'

class RegisterForm extends React.Component {
    static fields_array = [
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
            field_id: "repeat_password",
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

    ]
    render() {
        return <AbstractForm title="Register" redirect_to="/problemlist" fields={RegisterForm.fields_array}/>;
    }
}


export default RegisterForm;
