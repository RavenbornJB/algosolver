import React from 'react';
import LoginForm from '../LoginForm'
import RegisterRedirect from "../RegisterRedirect";


class LoginMain extends React.Component {
    render() {
        return <main>
                    <LoginForm/>
                    <RegisterRedirect/>
                </main>;

    }
}

export default LoginMain;
