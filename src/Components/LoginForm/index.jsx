import React from 'react';
import styles from './styles.css';
import FormField from '../FormField'

class LoginForm extends React.Component {
    render() {
        return <div>
                    <FormField field_id="email" type="email" >Email</FormField>
                </div>;
    }
}


export default LoginForm;
