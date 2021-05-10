import React from 'react';
import styles from './styles.scss';
import AbstractForm from '../../common/AbstractForm'

class LoginForm extends React.Component {
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
        }
    ]
    render() {
        return <AbstractForm title="Log In" redirect_to="/problemlist" fields={LoginForm.fields_array}/>;
    }
}





export default LoginForm;
