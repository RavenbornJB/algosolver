import React from 'react';
import RegisterForm from '../RegisterForm'
import LoginRedirect from "../LoginRedirect";


class RegisterMain extends React.Component {
    render() {
        return <main>
                    <RegisterForm/>
                    <LoginRedirect/>
              </main>;
    }
}


export default RegisterMain;
